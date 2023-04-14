---
title: "Add a Leaderboard Module After Production"
order: 4
description: A leaderboard for your in-production blockchain via state migration
tags: 
  - guided-coding
  - cosmos-sdk
  - cosm-js
---

# Add a Leaderboard Module After Production

<HighlightBox type="prerequisite">

Make sure you have all you need before proceeding:

* You understand the concepts of [Protobuf](/academy/2-cosmos-concepts/6-protobuf.md), [modules](/academy/2-cosmos-concepts/5-modules.md), and [migrations](/academy/2-cosmos-concepts/13-migrations.md).
* Go is installed.
* You have the checkers blockchain codebase up to the _Tally Player Info After Production_. If not, follow the [previous steps](/hands-on-exercise/4-run-in-prod/2-migration-info.md) or check out the [relevant version](https://github.com/cosmos/b9-checkers-academy-draft/tree/player-info-migration).

</HighlightBox>

<HighlightBox type="learning">

In this section, you will:

* Add a new module.
* Add a leaderboard storage type.
* Further upgrade your blockchain in production.
* Deal with data migrations and logic upgrades.

</HighlightBox>

In the previous section you added a player info structure that tallies wins and losses per player. On its own, this information could be collected outside of the blockchain via a [dedicated server](/hands-on-exercise/3-cosmjs-adv/5-server-side.md).

It was in fact done on-chain so as to make this new step more relevant. If you want an on-chain leaderboard that is provably correct, then you need its information to come from the chain too. You now have the necessary information on-chain in the form of `PlayerInfo`.

## High level considerations

Your blockchain is now at _v1.1_. In this section, you will introduce _v2_ of your blockchain with leaderboard support. A good leaderboard fulfills these conditions:

* Any player who has **ever** played should have a tally of games won, lost, and forfeited. You already have that.
* The leaderboard should list the players with the most wins up to a pre-determined number of players. For example, the leaderboard could only include the top 100 scores.
* To avoid squatting and increase engagement, when equal in value the most recent score takes precedence over an _older_ one, so the player with the **more recent score** is listed higher on the leaderboard.

When you introduce the leaderboard through a migration, you also have to decide what to do with your existing players and their scores from your v1.1 checkers blockchain.

Here the decision is to start your v2's leaderboard as if all played past games had been counted for the leaderboard. You _only_ need to go through all player information and add a leaderboard including the information. Migration is a good method to tackle the initial leaderboard.

For the avoidance of doubt, **v1.1 and v2 refer to the overall versions of the application**, and not to the _consensus versions_ of individual modules, which may change or not.

The leaderboard is not strictly the concern of the game of checkers. It is a side concern. The concept of a leaderboard is also very generic. You could easily imagine it being used for other games. Therefore, it makes sense to introduce it as a **separate module**, next to the checkers module.

The checkers and leaderboard modules will exchange information. More specifically, the leaderboard needs to know when a player's total wins change as this may warrant entering the leaderboard. If you have the checkers module call the leaderboard module, just as it does call the bank when handling wagers, it means that the checkers module needs to know the details of the leaderboard module. It is best to avoid such tight coupling. Fortunately, you can reuse a **_hooks_ pattern** already used in the Cosmos SDK. With this future addition, the leaderboard module adds a listener to the hook interface of the checkers module. Then the checkers module informs the listeners, whether there is none, one, or many changes.

The leaderboard module will work by listening to results from the checkers module. It will not have messages of it own.

Thinking about early performance optimization, you have to decide what operations the module does when it receives one candidate from the checkers module. The first idea is to:

1. Read the leaderboard from storage, which includes all 100 members.
2. Conditionally add the candidate to the leaderboard.
3. If added, sort and clip the list.
4. Put the leaderboard back in storage.

These are a lot of expensive operations for a single candidate. There is a better way. The leaderboard needs to be computed and saved when the block is prepared, but it does not need to be up to date after each (checkers) transaction. You can imagine keeping the leaderboard, or something approximating it in memory for the whole length of the block. In the section about [expiring games](../2-ignite-cli-adv/4-game-forfeit.md), you learned about `EndBlock`. There is also a `BeginBlock` callback. It is conceivable to prepare the leaderboard in `BeginBlock` and keep **it in the context or a memory or transient storage**. The it would be recalled with each candidate, and finally, in `EndBlock`, and only there, it would be sorted and clipped before being saved in storage proper.

## What you will do

Several things need to be addressed before you can focus all your attention on the migration:

1. Prepare your v2 blockchain:
    1. Add the leaderboard module.
    2. Define your new data types.
    3. Add helper functions to encapsulate clearly defined actions, like leaderboard sorting.
    4. Prepare keys to store candidates in a transient store.
    5. Adjust the existing code to make use of and update the new data types.
    6. Add the hooks pattern elements.
2. Prepare for your v1.1-to-v2 migration:
    1. Add helper functions to process large amounts of data from the latest chain state of type v1.1.
    2. Add a function to migrate your state from v1.1 to v2.
    3. Make sure you can handle large amounts of data.
    4. Put callbacks if necessary.
    5. Consider a possible migration from v1 to v2.

_Why do you need to make sure you can handle large amounts of data?_ The full state at the point of migration may well have millions of players. You do not want your process to grind to a halt because of a lack of memory or I/O capacity.

## New v2 module

As discussed, you introduce a new leaderboard module. This is conveniently done with Ignite CLI. 

Ignite also offers the possibilty to add new `Params` to the module. These are module-wide parameters:

1. Whose original value is defined in the genesis.
2. That can be modified via governance proposal.

It could be interesting to have the length of the leaderboard be defined like that.

<CodeGroup>

<CodeGroupItem title="Local">

```sh
$ ignite scaffold module leaderboard \
    --params length:uint
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker run --rm -it \
    -v $(pwd):/checkers \
    -w /checkers \
    checkers_i \
    ignite scaffold module leaderboard \
    --params length:uint
```

</CodeGroupItem>

</CodeGroup>

With that, Ignite has created a new [`x/leaderboard`](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-module/x/leaderboard) folder next to `x/checkers`. It has also put a `length` field inside `Params`:

```protobuf [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-module/proto/leaderboard/params.proto#L12]
message Params {
    ...
    uint64 length = 1 [(gogoproto.moretags) = "yaml:\"length\""];
}
```

The genesis defines a [starting value](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-module/x/leaderboard/types/genesis.go#L14) of `0` for this length. You ought to change it now to something adequate:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/params.go#L14]
-  // TODO: Determine the default value
-  DefaultLength uint64 = 0
+  DefaultLength uint64 = 100
```

## New v2 information

It is time to take a closer look at the new data structures being introduced with the version upgrade.

<HighlightBox type="tip">

If you feel unsure about creating new data structures with Ignite CLI, look at the [previous sections](/hands-on-exercise/1-ignite-cli/4-create-message.md) of the exercise again.

</HighlightBox>

To give the new v2 information a data structure, you need the following:

1. Add a structure for **the leaderboard**: you want a single stored leaderboard for the whole module. Let Ignite CLI help you implement a structure:

    <CodeGroup>

    <CodeGroupItem title="Local" active>

    ```sh
    $ ignite scaffold single leaderboard winners \
        --module leaderboard --no-message
    ```

    </CodeGroupItem>

    <CodeGroupItem title="Docker">

    ```sh
    $ docker run --rm -it \
        -v $(pwd):/checkers \
        -w /checkers \
        checkers_i \
        ignite scaffold single leaderboard winners \
        --module leaderboard --no-message
    ```

    </CodeGroupItem>

    </CodeGroup>

2. This creates a Protobuf file with `string winners`. This is not very useful. So you declare by hand another Protobuf message in `leaderboard.proto` for use as a leaderboard rung:

    ```diff-protobuf [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-object/proto/leaderboard/leaderboard.proto#L11-L15]
        message Leaderboard {
            string winners = 1;
        }

    +  message Winner {
    +      string address = 1;
    +      uint64 wonCount = 2;
    +      uint64 addedAt = 3;
    +  }
    ```

    <HighlightBox type="note">

    Where:

    * `address` indicates the player. It will be the same address as the one that comes in `PlayerInfo.index`.
    * `wonCount` determines the ranking on the leaderboard - the higher the count, the closer to the `0` index in the array. This should exactly match the value found in the corresponding player stats. This duplication of data is a lesser evil because if `wonCount` was missing you would have to access the player stats to sort the leaderboard.
    * `addedAt` is a timestamp that indicates when the player's `wonCount` was last updated and determines the ranking when there is a tie in `wonCount` - the more recent, the closer to the `0` index in the array.

    </HighlightBox>

3. You make the `Leaderboard` message use it as an array. Add that each element in the map is not nullable. This will compile each `WinningPlayer` to a Go object instead of a pointer:

    ```diff-protobuf [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/proto/leaderboard/leaderboard.proto#L5-L8]
    +  import "gogoproto/gogo.proto";

        message Leaderboard {
    -      string winners = 1;
    +      repeated WinningPlayer winners = 1 [(gogoproto.nullable) = false];
        }
    ```

4. The v2 genesis was also updated with the leaderboard. Tell it that the leaderboard should always be there (even if empty):

    ```diff-protobuf [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/proto/leaderboard/genesis.proto#L14]
        message GenesisState {
            ...
    -      Leaderboard leaderboard = 2;
    +      Leaderboard leaderboard = 2 [(gogoproto.nullable) = false];
        }
    ```

    At this point, you should run `ignite generate proto-go` so that the corresponding Go objects are re-created.

5. Remember to make sure the initial value stored for the leaderboard is not `nil` but instead is an empty list. In `genesis.go` adjust:

    ```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/genesis.go#L13-L15]
        func DefaultGenesis() *GenesisState {
            return &GenesisState{
    -          Leaderboard: nil,
    +          Leaderboard: Leaderboard{
    +              Winners: []Winner{},
    +          },
                ...
            }
        }
    ```

    This function returns a default genesis. This step is important if you start fresh. In your case, you do not begin with an "empty" genesis but with one resulting from the upcoming genesis migration in this exercise.

    In particular, add a test on the initial genesis:

    ```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/genesis_test.go#L61-L72]
    func TestDefaultGenesisState_ExpectedInitial(t *testing.T) {
        require.EqualValues(t,
            &types.GenesisState{
                Leaderboard: types.Leaderboard{
                    Winners:  []types.Winner{},
                },
                Params: types.Params{
                    Length: 100,
                },
            },
            types.DefaultGenesis())
    }
    ```

    Fix the compilation error in the same file:

    ```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/genesis_test.go#L25-L27]
    -  Leaderboard: &types.Leaderboard{
    -      Winners: "49",
    +  Leaderboard: types.Leaderboard{
    +      Winners: []types.Winner{},
        },
    ```

    And add a test case that catches a duplicated winner address:

    ```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/genesis_test.go#L32-L47]
    {
        desc: "duplicated winnerPlayer",
        genState: &types.GenesisState{
            Leaderboard: types.Leaderboard{
                Winners: []types.Winner{
                    {
                        Address: "cosmos123",
                    },
                    {
                        Address: "cosmos123",
                    },
                },
            },
        },
        valid: false,
    },
    ```

6. Also adjust other compilation errors:

    On `genesis.go`:

    ```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/genesis.go#L12]
    -  // Set if defined
    -  if genState.Leaderboard != nil {
    -      k.SetLeaderboard(ctx, *genState.Leaderboard)
    -  }
    +  k.SetLeaderboard(ctx, genState.Leaderboard)
    ```

    And:

    ```diff-go  [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/genesis.go#L25]
        if found {
    -      genesis.Leaderboard = &leaderboard
    +      genesis.Leaderboard = leaderboard
        }
    ```

    On `genesis_test.go`:

    ```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/genesis_test.go#L36-L45]
        ...
    -  Leaderboard: &types.Leaderboard{
    -      Winners: "94",
    +  Leaderboard: types.Leaderboard{
    +      Winners: []types.Winner{
    +          {
    +              Address: "cosmos123",
    +          },
    +          {
    +              Address: "cosmos456",
    +          },
    +      },
        },
        ...
    ```

    On `client/cli/query_leaderboard_test.go`:

    ```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/client/cli/query_leaderboard_test.go#L24-L30]
    -  leaderboard := &types.Leaderboard{}
    +  leaderboard := types.Leaderboard{}
        nullify.Fill(&leaderboard)
        state.Leaderboard = leaderboard
        buf, err := cfg.Codec.MarshalJSON(&state)
        require.NoError(t, err)
        cfg.GenesisState[types.ModuleName] = buf
    -  return network.New(t, cfg), *state.Leaderboard
    +  return network.New(t, cfg), state.Leaderboard
    ```

7. The test case you added will fail, unless you update the `Validate()` method of the genesis to not allow duplicate player addresses. This is inspired by `types/genesis.go` and best kept in a separate and new `types/leaderboard.go`:

    ```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/leaderboard.go#]
    func (leaderboard Leaderboard) Validate() error {
        // Check for duplicated player address in winners
        winnerInfoIndexMap := make(map[string]struct{})

        for index, elem := range leaderboard.Winners {
            if _, ok := winnerInfoIndexMap[elem.Address]; ok {
                return fmt.Errorf("duplicated address %s at index %d", elem.Address, index)
            }
            winnerInfoIndexMap[elem.Address] = struct{}{}
        }
        return nil
    }
    ```

    After this, you can adjust the `types/genesis.go` file:

    ```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/checkers/types/genesis.go#L24-L27]
        func (gs GenesisState) Validate() error {
    +      // Validate Leaderboard
    +      if err := gs.Leaderboard.Validate(); err != nil {
    +          return err
    +      }
            // this line is used by starport scaffolding # genesis/types/validate
            ...
        }
    ```

You can confirm that the existing unit tests pass.

## Transient object

You will use objects when storing candidates in a transient KVStore between `BeginBlock` and `EndBlock`. You want them to be small.

In `leaderboard.proto`, add:

```diff-protobuf [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-object/proto/leaderboard/leaderboard.proto#L17-L20]
    message Winner {
        ...
    }

+  message Candidate {
+      bytes address = 1;
+      uint64 wonCount = 2;
+  }
```

Where `bytes address` is the player's undecoded address. Remember that `sdk.AccAddress`'s underlying type is `byte[]`.

After another round of Go compilation, you can add a helper function to get a `Candidate`'s address as a Bech32 string:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/leaderboard.go]
func (candidate Candidate) GetAccAddress() string {
    return sdk.AccAddress(candidate.Address).String()
}
```

Where `sdk.AccAddress(candidate.Address)` is casting the `byte[]` into `sdk.AccAddress`. Also add a function to convert it into a leaderboard rung at a given time:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/leaderboard.go]
func (candidate Candidate) GetWinnerAtTime(now time.Time) Winner {
    return Winner{
        Address:  candidate.GetAccAddress(),
        WonCount: candidate.WonCount,
        AddedAt:  uint64(now.Unix()),
    }
}
```

With the structure set up, it is time to add the code using these new elements in normal (non-migration) operations.

## Leaderboard helpers

Continue working on your v2 before tackling the migration. In both the migration and regular operations, the leaderboard helpers have to:

1. Add a number of new candidates to your array of winners.
2. Sort the array according to the rules.
3. Clip the array to the chosen length and save the result.

You can reuse your `types/leaderboard.go` to encapsulate all your leaderboard helpers:

1. Add functions to sort a slice of winners in place:

    ```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/types/leaderboard.go#L36-L50]
    func SortWinners(winners []Winner) {
        sort.SliceStable(winners[:], func(i, j int) bool {
            if winners[i].WonCount > winners[j].WonCount {
                return true
            }
            if winners[i].WonCount < winners[j].WonCount {
                return false
            }
            return winners[i].AddedAt > winners[j].AddedAt
        })
    }

    func (leaderboard Leaderboard) SortWinners() {
        SortWinners(leaderboard.Winners)
    }
    ```

    It tests in descending order, first for scores and then for the timestamps.

    <HighlightBox type="tip">

    It is possible to write a one-liner inside this function but at the expense of readability.

    </HighlightBox>

2. When it comes to adding or updating candidates to the array of winners, your goal is to make these operations as efficiently as possible. To avoid having to find duplicate player addresses in an array, it is better to use a map. Add a function to convert an array of winners into a map:

    ```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/types/leaderboard.go#L52-L63]
    func MapWinners(winners []Winner, length int) map[string]Winner {
        mapped := make(map[string]Winner, length)
        for _, winner := range winners {
            already, found := mapped[winner.Address]
            if !found {
                mapped[winner.Address] = winner
            } else if already.WonCount < winner.WonCount {
                mapped[winner.Address] = winner
            }
        }
        return mapped
    }
    ```

3. The timestamp used when a winner is added to the leaderboard will be the block's time. In other words, it will be the same time for all candidates added in `EndBlock`. Prepare a function to do that:

    ```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/types/leaderboard.go#L112-L155]
    func AddCandidatesAtNow(winners []Winner, now time.Time, candidates []Candidate) (updated []Winner) {
        mapped := MapWinners(winners, len(winners)+len(candidates))
        for _, candidate := range candidates {
            if candidate.WonCount < 1 {
                continue
            }
            candidateWinner := candidate.GetWinnerAtTime(now)
            already, found := mapped[candidateWinner.Address]
            if !found {
                mapped[candidateWinner.Address] = candidateWinner
            } else if already.WonCount < candidateWinner.WonCount {
                mapped[candidateWinner.Address] = candidateWinner
            }
        }
        updated = make([]Winner, 0, len(mapped))
        for _, winner := range mapped {
            updated = append(updated, winner)
        }
        SortWinners(updated)
        return updated
    }
    ```

    Note how, when creating the map, it initializes with a capacity equal to the sum of both winners and candidates' lengths. This is an approximative way of increasing memory performance.

## Candidate Lifecycle

You have prepared helper functions that will update a list of winners with a list of candidates. The candidates will come from the transient store. Transient in the sense that it will be discarded after `EndBlock`. This is good for this usage as you do not want to carry candidates from one block to the next.

Your leaderboard module does not have access to a transient store by default, so you will have to prepare that first.

Additionally, you want to reduce the number of marshalling / unmarshalling taking place repeatedly. It would not make sense to unmarshall a whole array of candidates every time you want to add a single candidate to the array. Instead, it makes sense to keep each candidate as a single entry in the store, and separately keep the information on how many `n` are being stored. Later, you can retrieve them with `[k]` where `0 <= k < n`.

You will:

1. Prepare access to a transient store to your leaderboard module.
2. Define keys of the candidates transient store.
3. Add a function to prepare the candidates transient store in `BeginBlock`.
4. Add a function to add a single candidate to the store.
5. Add a function to retrieve all the candidates from the transient store.

### Prepare transient store

By default, Ignite CLI does not prepare your module to have access to a transient like it prepares it to have access to the proper store. The preparation works the same way as a normal store.

Add a transient store key in your keeper:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/keeper.go#L19]
    type (
        Keeper struct {
            ...
            memKey     sdk.StoreKey
+          tKey       sdk.StoreKey
            paramstore paramtypes.Subspace
        }
    )
```

Update the constructor accordingly:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/keeper.go#L24-L45]
    func NewKeeper(
        ...
        memKey sdk.StoreKey,
+      tKey sdk.StoreKey,
        ps paramtypes.Subspace,

    ) *Keeper {
        ...
        return &Keeper{
            ...
            memKey:     memKey,
+          tKey:       tKey,
            paramstore: ps,
        }
    }
```

This key will be identified by a new string in `app.go`'s list of transient store keys. Add a distinct such key:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/types/keys.go#L19-L20]
    MemStoreKey = "mem_leaderboard"
+  
+  // TStoreKey defines the transient store key
+  TStoreKey = "transient_leaderboard"
```

Adjust `app.go` so that it gives the keeper a valid key. And take this opportunity to fix an Ignite bug on `memKeys`:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/app/app.go#L419-L420]
    app.LeaderboardKeeper = *leaderboardmodulekeeper.NewKeeper(
        ...
-      keys[leaderboardmoduletypes.MemStoreKey],
+      memKeys[leaderboardmoduletypes.MemStoreKey],
+      tkeys[leaderboardmoduletypes.TStoreKey],
        app.GetSubspace(leaderboardmoduletypes.ModuleName),
    )
```

Not to forget to ensure that there is indeed a store key at the string(s) you asked:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/app/app.go#L303-L304]
-  tkeys := sdk.NewTransientStoreKeys(paramstypes.TStoreKey)
-  memKeys := sdk.NewMemoryStoreKeys(capabilitytypes.MemStoreKey)
+  tkeys := sdk.NewTransientStoreKeys(paramstypes.TStoreKey, leaderboardmoduletypes.TStoreKey)
+  memKeys := sdk.NewMemoryStoreKeys(capabilitytypes.MemStoreKey, leaderboardmoduletypes.MemStoreKey)
```

### Prepare candidate store keys

Your keeper has access to a transient store. Define the keys by which elements will be accessed in it. Taking inspiration from checkers' stored games use of prefixes and their use in the `GetAllStoredGame` function, you prepare prefix keys for the values in a new `types/key_candidate.go` file:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/types/key_candidate.go#L9-L23]
const (
	CandidateKeyPrefix = "Candidate/value/"
)

// CandidateKey returns the store key to retrieve a Candidate from the index field
// It is not used but is here to remind where values are stored
func CandidateKey(address []byte) []byte {
    var key []byte

    prefixBytes := []byte(CandidateKeyPrefix)
    key = append(key, prefixBytes...)
    key = append(key, address...)

    return key
}
```

### Use the candidate store

Now you can add the functions that will use the transient store at each update and on `EndBlock`. Add a new `keeper/candidate.go` file with:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/candidate.go#L9-L13]
func (k Keeper) SetCandidate(ctx sdk.Context, candidate types.Candidate) {
    candidateStore := prefix.NewStore(ctx.TransientStore(k.tKey), []byte(types.CandidateKeyPrefix))
    candidateBytes := k.cdc.MustMarshal(&candidate)
    candidateStore.Set(candidate.Address, candidateBytes)
}
```

This function saves the candidate at its address. Already having `[]byte Address` in the `Candidate` object proves useful. This also means that if there are two updates in one block for a single player, only the second update is recorded. In the case of a game that has only increasing scores, this is ok.

Next, taking inspiration from `StoredGame` again, add a function to get all candidates with an iterator:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/candidate.go#L15-L28]
func (k Keeper) GetAllCandidates(ctx sdk.Context) (candidates []types.Candidate) {
    candidateStore := prefix.NewStore(ctx.TransientStore(k.tKey), []byte(types.CandidateKeyPrefix))
    iterator := sdk.KVStorePrefixIterator(candidateStore, []byte{})

    defer iterator.Close()

    for ; iterator.Valid(); iterator.Next() {
        var candidate types.Candidate
        k.cdc.MustUnmarshal(iterator.Value(), &candidate)
        candidates = append(candidates, candidate)
    }

    return
}
```

It gets all candidates. There may be many, but not so many that it grinds the application. After all, it only gets all that was put during the block itself.

## Leaderboard handling

You have created the leaderboard helper functions and the function to get all candidates. You can now update the leaderboard. This takes place in `EndBlock`.

First, in a separate file, add one function to the keeper:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/end_block_leaderboard_handler.go#L10-L21]
func (k Keeper) CollectSortAndClipLeaderboard(ctx sdk.Context) {
    leaderboard, found := k.GetLeaderboard(ctx)
    if !found {
        panic("Leaderboard not found")
    }
    updated := types.AddCandidatesAtNow(leaderboard.Winners, ctx.BlockTime(), k.GetAllCandidates(ctx))
    params := k.GetParams(ctx)
    if params.Length < uint64(len(updated)) {
        updated = updated[:params.Length]
    }
    leaderboard.Winners = updated
    k.SetLeaderboard(ctx, leaderboard)
}
```

This function gets the candidates from the transient store and the leaderboard from the regular store, adds the candidates, clips the array to the maximum length found in `Params`, and saves the updated leaderboard back in storage.

This means that the leaderboard will be unmarshalled and marshalled only once per block.

Next, make sure it is called from `EndBlock`. In `module.go`:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/module.go#L173-L174]
-  func (am AppModule) EndBlock(_ sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {
+  func (am AppModule) EndBlock(ctx sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {
+      am.keeper.CollectSortAndClipLeaderboard(ctx)
        return []abci.ValidatorUpdate{}
    }
```

If Ignite did it right, `app.go` has [already set up](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/app/app.go#L523) the leaderboard module to be called on `EndBlock`.

Your leaderboard will now be updated and saved on an on-going basis as part of your v2 blockchain. However, so far, you have put **nothing** in the transient store.

## Hook infrastructure for candidates

To populate candidate winners in your transient store, you are going to _listen_ to `PlayerInfo` updates emitted from the checkers module:

* This will avoid tight coupling between the modules.
* The checkers module will not care whether there is a listener or not.
* It will be the duty of `app.go` to hook the leaderboard's listener to the checkers' emitter.
* To reduce the dependency of the leaderboard module to elements of the checkers module, you are going to restrict to a single file.

With Cosmos SDK, hooks are a design pattern so you have to code them.

### On the checkers module

Add the hooks interface to the checkers module. First as an expected interface:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/types/expected_keepers.go#L25-L27]
type CheckersHooks interface {
    AfterPlayerInfoChanged(ctx sdk.Context, playerInfo PlayerInfo)
}
```

Here you can imagine you could add functions for all sorts of updates coming from checkers. But for the sake of the exercise, keep it simple.

then, taking inspiration from the [governance module's hooks](https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/x/gov/types/hooks.go#L7-L20), you define a convenience multi hook that can accommodate multiple listeners:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/types/hooks.go#L7-L19]
var _ CheckersHooks = MultiCheckersHooks{}

type MultiCheckersHooks []CheckersHooks

func NewMultiCheckersHooks(hooks ...CheckersHooks) MultiCheckersHooks {
	return hooks
}

func (h MultiCheckersHooks) AfterPlayerInfoChanged(ctx sdk.Context, playerInfo PlayerInfo) {
	for i := range h {
		h[i].AfterPlayerInfoChanged(ctx, playerInfo)
	}
}
```

Expose this hooks interface via the checkers keeper:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/keeper.go#L17]
    type (
        Keeper struct {
            bank       types.BankEscrowKeeper
+          hooks      types.CheckersHooks
            cdc        codec.BinaryCodec
            ...
        }
    )
```

And a function to set it:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/keeper.go#L47-L55]
func (keeper *Keeper) SetHooks(hooks types.CheckersHooks) *Keeper {
    if keeper.hooks != nil {
        panic("cannot set checkers hooks twice")
    }

    keeper.hooks = hooks

    return keeper
}
```

Having a function to set the hooks is advised as that allows you to collect the listeners you need without worrying about the order of creation of other keepers. All `app.go` has to do is calling `setHooks` after all keepers have been created:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/app/app.go#L427-L431]
    leaderboardModule := leaderboardmodule.NewAppModule(appCodec, app.LeaderboardKeeper, app.AccountKeeper, app.BankKeeper)

    // this line is used by starport scaffolding # stargate/app/keeperDefinition

+  app.CheckersKeeper = *app.CheckersKeeper.SetHooks(
+      checkersmoduletypes.NewMultiCheckersHooks(
+      // TODO register the leaderboard listener
+      ),
+  )
```

With the hooks structure in place, there remains to have your checkers code call it. The best place for that is precisely where it is updated and saved:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/player_info_handler.go#L32-L34]
    func mustAddDeltaGameResultToPlayer(
        ...
    ) (playerInfo types.PlayerInfo) {
        ...
        k.SetPlayerInfo(ctx, playerInfo)
+      if k.hooks != nil {
+          k.hooks.AfterPlayerInfoChanged(ctx, playerInfo)
+      }
        return playerInfo
    }
```

<HighlightBox type="note">

Remember that the hook is named `AfterPlayerInfoChanged`, not _for use by the leaderboard_. Therefore you should also emit when there is a change that you know is going to be discarded by the leaderboard.
<br/><br/>
It verifies `!= nil` to make sure it does not panic if there are no listeners, which is a legitimate situation.

</HighlightBox>

The checkers module is now ready with hooks.

### On the leaderboard module

In your keeper, you define a generic checkers hook listener. In a new `keeper/hooks.go` file, put a simple:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/hooks.go#L3-L7]
type Hooks struct {
    k Keeper
}

func (k Keeper) Hooks() Hooks { return Hooks{k} }
```

Then, so as to keep the dependency on checkers' types to a single file, you add in a new `keeper/hooks_checkers.go` file:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/hooks_checkers.go#L11-L25]
var _ checkerstypes.CheckersHooks = Hooks{}

func (h Hooks) AfterPlayerInfoChanged(ctx sdk.Context, playerInfo checkerstypes.PlayerInfo) {
    if playerInfo.WonCount < 1 {
        return
    }
    address, err := sdk.AccAddressFromBech32(playerInfo.Index)
    if err != nil {
        panic(fmt.Sprintf("Could not parse address from playerInfo %s", playerInfo.Index))
    }
    h.k.SetCandidate(ctx, types.Candidate{
        Address:  address,
        WonCount: playerInfo.WonCount,
    })
}
```

As you can see, it takes the new information and puts it into the transient store; only if it is worth it.

<HighlightBox type="best-practice">

If your leaderboard hooks listener was set to listen from more than one module, you would add a new `hooks_othermodule.go` file that only concerns itself with that other module.

</HighlightBox>

With the hooks listener defined, you can go back to `app.go` and insert it:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/app/app.go#L429]
    app.CheckersKeeper = *app.CheckersKeeper.SetHooks(
        checkersmoduletypes.NewMultiCheckersHooks(
-      // TODO register the leaderboard listener
+      app.LeaderboardKeeper.Hooks(),
        ),
    )
```

The leaderboard handling is now complete.

## Unit tests

After all these changes, it is worthwhile adding tests.

Just like you did for the checkers module, you can add valid addresses to be reused elsewhere in a new file:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/testutil/constants.go#L3-L7]
const (
	Alice = "cosmos1jmjfq0tplp9tmx4v9uemw72y4d2wa5nr3xn9d3"
	Bob   = "cosmos1xyxs3skf3f4jfqeuv89yyaqvjc6lffavxqhc8g"
	Carol = "cosmos1e0w5t53nrq7p66fye6c8p0ynyhf6y24l4yuxd7"
)
```

### Candidate unit tests

You added a new `Candidate` type and helper functions on it. You can test that they work as expected. Add a new `leaderboard_test.go` file. No need to overdo it:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-objects/x/leaderboard/types/leaderboard_test.go#L13-L32]
const (
	alice = testutil.Alice
)

func TestCandidateGetWinnerAtTime(t *testing.T) {
    now := time.Now()
    timestamp := now.Unix()
    aliceAddress, err := sdk.AccAddressFromBech32(alice)
    require.Nil(t, err)
    candidate := types.Candidate{
        Address:  aliceAddress,
        WonCount: 23,
    }
    winner := candidate.GetWinnerAtTime(now)
    require.EqualValues(t, types.Winner{
        Address:  alice,
        WonCount: 23,
        AddedAt:  uint64(timestamp),
    }, winner)
}
```

### Leaderboard helper unit tests

Start by adding tests that confirm that the sorting of the leaderboard's winners works as expected. Here an array of test cases is a good choice:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/types/leaderboard_test.go#L35-L156]
func TestSortWinners(t *testing.T) {
    tests := []struct {
        name     string
        unsorted []types.Winner
        sorted   []types.Winner
    }{
        {
            name:     "sort empty",
            unsorted: []types.Winner{},
            sorted:   []types.Winner{},
        },
        {
            name: "sort unique",
            unsorted: []types.Winner{
                {
                    Address:  alice,
                    WonCount: 2,
                    AddedAt:  1000,
                },
            },
            sorted: []types.Winner{
                {
                    Address:  alice,
                    WonCount: 2,
                    AddedAt:  1000,
                },
            },
        },
        ... // More test cases
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            leaderboard := types.Leaderboard{
                Winners: tt.unsorted,
            }
            leaderboard.SortWinners()
            sorted := leaderboard.Winners
            require.Equal(t, len(tt.sorted), len(sorted))
            require.EqualValues(t, tt.sorted, sorted)
        })
    }
}
```

With that done, you can confirm that the updating or addition of new player info to the leaderboard works as expected, again with an array of test cases:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/types/leaderboard_test.go#L158-L433]
func TestAddCandidatesAtNow(t *testing.T) {
    aliceAdd, err := sdk.AccAddressFromBech32(alice)
    require.Nil(t, err)
    bobAdd, err := sdk.AccAddressFromBech32(bob)
    require.Nil(t, err)
    tests := []struct {
        name       string
        sorted     []types.Winner
        candidates []types.Candidate
        now        int64
        expected   []types.Winner
    }{
        {
            name:   "add to empty",
            sorted: []types.Winner{},
            candidates: []types.Candidate{{
                Address:  aliceAdd,
                WonCount: 2,
            }},
            now: 1000,
            expected: []types.Winner{
                {
                    Address:  alice,
                    WonCount: 2,
                    AddedAt:  1000,
                },
            },
        },
        ... // More test cases
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            actual := types.AddCandidatesAtNow(tt.sorted, time.Unix(tt.now, 0), tt.candidates)
            require.Equal(t, len(tt.expected), len(actual))
            require.EqualValues(t, tt.expected, actual)
            require.NoError(t, types.Leaderboard{Winners: actual}.Validate())
        })
    }
}
```

### Candidate lifecycle unit tests

You added functions to set and get candidates from the transient store. You ought to add unit tests to confirm it works as expected.

First, you need to make sure that your test keeper has a valid transient store:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/testutil/keeper/leaderboard.go#L23-L45]
    func LeaderboardKeeper(t testing.TB) (*keeper.Keeper, sdk.Context) {
        storeKey := sdk.NewKVStoreKey(types.StoreKey)
        memStoreKey := storetypes.NewMemoryStoreKey(types.MemStoreKey)
+      tStoreKey := storetypes.NewTransientStoreKey(types.TStoreKey)

        ...
        stateStore.MountStoreWithDB(memStoreKey, sdk.StoreTypeMemory, nil)
+      stateStore.MountStoreWithDB(tStoreKey, sdk.StoreTypeTransient, nil)
        require.NoError(t, stateStore.LoadLatestVersion())

        ...
        k := keeper.NewKeeper(
            cdc,
            storeKey,
            memStoreKey,
+          tStoreKey,
            paramsSubspace,
        )
        ...
    }
```

With this preparation, you can add simple tests. That you can get back [one candidate](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/candidate_test.go#L20-L39) when there is one, or three when there are three:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/candidate_test.go#L41-L76]
func TestSetAndGetThreeCandidates(t *testing.T) {
    keeper, ctx := keepertest.LeaderboardKeeper(t)
    aliceAddress, err := sdk.AccAddressFromBech32(alice)
    require.Nil(t, err)
    bobAddress, err := sdk.AccAddressFromBech32(bob)
    require.Nil(t, err)
    carolAddress, err := sdk.AccAddressFromBech32(carol)
    require.Nil(t, err)

    keeper.SetCandidate(ctx, types.Candidate{
        Address:  aliceAddress,
        WonCount: 12,
    })
    keeper.SetCandidate(ctx, types.Candidate{
        Address:  bobAddress,
        WonCount: 34,
    })
    keeper.SetCandidate(ctx, types.Candidate{
        Address:  carolAddress,
        WonCount: 56,
    })

    candidates := keeper.GetAllCandidates(ctx)
    require.Len(t, candidates, 3)
    sort.SliceStable(candidates[:], func(i, j int) bool {
        return candidates[i].WonCount < candidates[j].WonCount
    })
    require.Equal(t,
        []types.Candidate{
            {Address: aliceAddress, WonCount: 12},
            {Address: bobAddress, WonCount: 34},
            {Address: carolAddress, WonCount: 56},
        },
        candidates,
    )
}
```

<HighlightBox type="note">

Note the small hack where the received candidates are sorted by `WonCount`. The `GetAllCandidates` function does not ensure an order, so to be able to easily use `require.Equal`, an ordering was used.

</HighlightBox>

### Leaderboard handling unit tests

You can verify that the leaderboard is updated when the `keeper.CollectSortAndClipLeaderboard` function is called.

To change the context time, you can use the SDK context's `WithBlockTime` function. For instance, test when a single candidate is [added between two](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/end_block_leaderboard_handler_test.go#L13-L42) existing winners. Or when one candidate replaces its lower score and another enters the leaderboard for the first time:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/end_block_leaderboard_handler_test.go#L44-L78]
func TestOnePlayerAddedAndOneUpdatedToLeaderboard(t *testing.T) {
    keeper, ctx := keepertest.LeaderboardKeeper(t)
    keeper.SetLeaderboard(ctx, types.Leaderboard{
        Winners: []types.Winner{
            {Address: alice, WonCount: 12, AddedAt: 999},
            {Address: bob, WonCount: 10, AddedAt: 999},
        },
    })
    bobAddress, err := sdk.AccAddressFromBech32(bob)
    require.Nil(t, err)
    carolAddress, err := sdk.AccAddressFromBech32(carol)
    require.Nil(t, err)
    keeper.SetCandidate(ctx, types.Candidate{
        Address:  bobAddress,
        WonCount: 13,
    })
    keeper.SetCandidate(ctx, types.Candidate{
        Address:  carolAddress,
        WonCount: 12,
    })

    bobTime := time.Unix(1000, 0)
    keeper.CollectSortAndClipLeaderboard(ctx.WithBlockTime(bobTime))

    leaderboard, found := keeper.GetLeaderboard(ctx)
    require.True(t, found)
    require.Len(t, leaderboard.Winners, 3)
    require.Equal(t,
        []types.Winner{
            {Address: bob, WonCount: 13, AddedAt: 1000},
            {Address: carol, WonCount: 12, AddedAt: 1000},
            {Address: alice, WonCount: 12, AddedAt: 999},
        },
        leaderboard.Winners,
    )
}
```

Where:

* You put a leaderboard in storage.
* Put candidates in the transient storage.
* Call the collection of candidates.
* Confirm the new leaderboard order and values.

You can also add a test that confirms the leaderboard is clipped at the maximum length:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/end_block_leaderboard_handler_test.go#L80-L110]
func TestOnePlayerKicksPlayerOutOfLeaderboard(t *testing.T) {
    keeper, ctx := keepertest.LeaderboardKeeper(t)
    keeper.SetLeaderboard(ctx, types.Leaderboard{
        Winners: []types.Winner{
            {Address: alice, WonCount: 12, AddedAt: 999},
            {Address: bob, WonCount: 10, AddedAt: 999},
        },
    })
    params := keeper.GetParams(ctx)
    params.Length = 2
    keeper.SetParams(ctx, params)
    carolAddress, err := sdk.AccAddressFromBech32(carol)
    require.Nil(t, err)
    keeper.SetCandidate(ctx, types.Candidate{
        Address:  carolAddress,
        WonCount: 11,
    })
    carolTime := time.Unix(1000, 0)
    keeper.CollectSortAndClipLeaderboard(ctx.WithBlockTime(carolTime))

    leaderboard, found := keeper.GetLeaderboard(ctx)
    require.True(t, found)
    require.Len(t, leaderboard.Winners, 2)
    require.Equal(t,
        []types.Winner{
            {Address: alice, WonCount: 12, AddedAt: 999},
            {Address: carol, WonCount: 11, AddedAt: 1000},
        },
        leaderboard.Winners,
    )
}
```

Where `carol` kicked `bob` out of the leaderboard since its length was enforced at `2`:

### Hook unit tests on leaderboard

Moving to the hooks _on the leaderboard module's side_, you want to confirm that candidates are added to the transient store when the keeper receives a new update:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/hooks_checkers_test.go#L14-L31]
func TestOneCandidateAdded(t *testing.T) {
    keeper, ctx := keepertest.LeaderboardKeeper(t)
    keeper.Hooks().AfterPlayerInfoChanged(ctx, checkerstypes.PlayerInfo{
        Index:          alice,
        WonCount:       12,
        LostCount:      13,
        ForfeitedCount: 14,
    })

    aliceAddress, err := sdk.AccAddressFromBech32(alice)
    require.Nil(t, err)
    candidates := keeper.GetAllCandidates(ctx)
    require.Len(t, candidates, 1)
    require.Equal(t,
        types.Candidate{Address: aliceAddress, WonCount: 12},
        candidates[0],
    )
}
```

Also that it overwrites when it receives [an update for the same address](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/hooks_checkers_test.go#L33-L56), or adds a second candidate [alongside an existing one](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/leaderboard/keeper/hooks_checkers_test.go#L58-L84).

### Hook unit tests on checkers

You introduced a new type, the `MultiHook`. You should test that it indeed distributes calls to the elements of the list. That calls for a mock of the `CheckersHooks` expected interface.

Run again your existing script that rebuilds all the mocks.

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ make mock-expected-keepers
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker run --rm -it \
    -v $(pwd):/checkers \
    -w /checkers \
    checkers_i \
    make mock-expected-keepers
```

</CodeGroupItem>

</CodeGroup>

With that, you can add a test that confirms a multihook with two hooks calls both in order:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/types/hooks_test.go#L13-L38]
func TestMultiHookCallsThem(t *testing.T) {
    ctrl := gomock.NewController(t)
    defer ctrl.Finish()
    hook1 := testutil.NewMockCheckersHooks(ctrl)
    hook2 := testutil.NewMockCheckersHooks(ctrl)
    call1 := hook1.EXPECT().AfterPlayerInfoChanged(gomock.Any(), types.PlayerInfo{
        Index:          "alice",
        WonCount:       1,
        LostCount:      2,
        ForfeitedCount: 3,
    }).Times(1)
    hook2.EXPECT().AfterPlayerInfoChanged(gomock.Any(), types.PlayerInfo{
        Index:          "alice",
        WonCount:       1,
        LostCount:      2,
        ForfeitedCount: 3,
    }).Times(1).After(call1)

    multi := types.NewMultiCheckersHooks(hook1, hook2)
    multi.AfterPlayerInfoChanged(sdk.NewContext(nil, tmproto.Header{}, false, nil), types.PlayerInfo{
        Index:          "alice",
        WonCount:       1,
        LostCount:      2,
        ForfeitedCount: 3,
    })
}
```

Your existing checkers keeper tests should still be passing.

<HighlightBox type="note">

There is a small difficulty that would not surface immediately. When you set the hooks after the `msgServer` has been created, because it takes a keeper instance, and not a pointer, the `msgServer` is created with the _old_ keeper, the one before the hooks were set.

</HighlightBox>

So add a setup function that encapsulates the knowledge to circumvent this difficulty:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/msg_server_play_move_test.go#L35-L42]
func setupMsgServerWithOneGameForPlayMoveAndHooks(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context,
    *gomock.Controller, *testutil.MockBankEscrowKeeper, *testutil.MockCheckersHooks) {
    msgServer, k, context, ctrl, escrow := setupMsgServerWithOneGameForPlayMove(t)
    hookMock := testutil.NewMockCheckersHooks(ctrl)
    k.SetHooks(hookMock)
    msgServer = keeper.NewMsgServerImpl(k)
    return msgServer, k, context, ctrl, escrow, hookMock
}
```

You can now add a test that confirms that a game just played does not trigger a call to the hooks.

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/msg_server_play_move_test.go#L607-L626]
func TestPlayerInfoNoHookOnNoWinner(t *testing.T) {
	msgServer, keeper, context, ctrl, escrow, _ := setupMsgServerWithOneGameForPlayMoveAndHooks(t)
    ctx := sdk.UnwrapSDKContext(context)
    defer ctrl.Finish()
    escrow.ExpectAny(context)
    keeper.SetPlayerInfo(ctx, types.PlayerInfo{
        Index: bob,
    })
    keeper.SetPlayerInfo(ctx, types.PlayerInfo{
        Index: carol,
    })
    msgServer.PlayMove(context, &types.MsgPlayMove{
        Creator:   bob,
        GameIndex: "1",
        FromX:     1,
        FromY:     2,
        ToX:       2,
        ToY:       3,
    })
}
```

A more interesting addition is the confirmation that a listener is being called when a game is [forfeited](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/end_block_server_game_test.go#L684-L737) or won:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/x/checkers/keeper/msg_server_play_move_winner_test.go#L133-L165]
func TestCompleteGameCallsHook(t *testing.T) {
	msgServer, keeper, context, ctrl, escrow, hookMock := setupMsgServerWithOneGameForPlayMoveAndHooks(t)
	ctx := sdk.UnwrapSDKContext(context)
    defer ctrl.Finish()
    escrow.ExpectAny(context)
    bobCall := hookMock.EXPECT().AfterPlayerInfoChanged(ctx, types.PlayerInfo{
        Index:          bob,
        WonCount:       2,
        LostCount:      2,
        ForfeitedCount: 3,
    }).Times(1)
    hookMock.EXPECT().AfterPlayerInfoChanged(ctx, types.PlayerInfo{
        Index:          carol,
        WonCount:       4,
        LostCount:      6,
        ForfeitedCount: 6,
    }).Times(1).After(bobCall)

    keeper.SetPlayerInfo(ctx, types.PlayerInfo{
        Index:          bob,
        WonCount:       1,
        LostCount:      2,
        ForfeitedCount: 3,
    })
    keeper.SetPlayerInfo(ctx, types.PlayerInfo{
        Index:          carol,
        WonCount:       4,
        LostCount:      5,
        ForfeitedCount: 6,
    })

    testutil.PlayAllMoves(t, msgServer, context, "1", bob, carol, testutil.Game1Moves)
}
```

### Integration tests

To further confirm that your code is working right, you can add integration tests. Since it starts an app, the hooks are already set up. You can confirm it works on [forfeit](https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/tests/integration/checkers/keeper/end_block_server_game_test.go#L376-L424) and when a game is won:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/leaderboard-handling/tests/integration/checkers/keeper/msg_server_play_move_test.go#L352-L377]
func (suite *IntegrationTestSuite) TestPlayMoveToWinnerAddedToLeaderboard() {
    suite.setupSuiteWithOneGameForPlayMove()
    suite.app.CheckersKeeper.SetPlayerInfo(suite.ctx, types.PlayerInfo{
        Index: alice, WonCount: 10,
    })
    suite.app.CheckersKeeper.SetPlayerInfo(suite.ctx, types.PlayerInfo{
        Index: bob, WonCount: 10,
    })
    suite.app.LeaderboardKeeper.SetLeaderboard(suite.ctx, leaderboardtypes.Leaderboard{
        Winners: []leaderboardtypes.Winner{
            {Address: alice, WonCount: 10, AddedAt: 1000},
            {Address: bob, WonCount: 10, AddedAt: 999},
        },
    })
    testutil.PlayAllMoves(suite.T(), suite.msgServer, sdk.WrapSDKContext(suite.ctx), "1", bob, carol, testutil.Game1Moves)
    suite.app.LeaderboardKeeper.CollectSortAndClipLeaderboard(suite.ctx)
    leaderboard, found := suite.app.LeaderboardKeeper.GetLeaderboard(suite.ctx)
    suite.Require().True(found)
    suite.Require().EqualValues(
        []leaderboardtypes.Winner{
            {Address: bob, WonCount: 11, AddedAt: uint64(suite.ctx.BlockTime().Unix())},
            {Address: alice, WonCount: 10, AddedAt: 1000},
        },
        leaderboard.Winners)
}
```

Note how you have to call the _end blocker_ because there are actually no blocks being produced. This recalls what you did previously when integration-testing the game forfeit.

This completes your checkers v2 chain. If you were to start it anew as is, it would work. However, you already have the v1.1 of checkers running, so you need to migrate everything.

## v1.1 to v2 player information migration helper

With your v2 blockchain now fully operational on its own, it is time to work on the issue of stored data migration.

First, tackle the creation of player information. You will build the player information by extracting it from all the existing stored games. In the [map/reduce](https://en.wikipedia.org/wiki/MapReduce) parlance, you will _reduce_ this information from the stored games.

### Problem description

If performance was not an issue, an easy way to do it would be the following:

1. Call [`keeper.GetAllStoredGame()`](https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/keeper/stored_game.go#L50) to get an array with all the games.
2. Keep only the games that have a winner.
3. Then for each game:
    1. Call `keeper.GetPlayerInfo` or, if that is not found, create player info, both for the black player and the red player.
    2. Do `+1` on `.WonCount` or `.LostCount` according to the `game.Winner` field.
    3. Call `keeper.SetPlayerInfo` for both black and red players.

Of course, given inevitable resource limitations, you would run into the following problems:

1. Getting all the games in a single array may not be possible, because your node's RAM may not be able to keep a million of them in memory. Or maybe it fails at 100,000 of them.
2. Calling `.GetPlayerInfo` and `.SetPlayerInfo` twice per game just to do `+1` adds up quickly. Remember that both of these calls are database calls. You could be confronted with a 12-hour job, during which your chain is offline.
3. Doing it all in a sequential manner would take even more time, as each blocking call blocks the whole process.

### Proposed solution

Fortunately, there exist ways to mitigate these limitations:

1. You do not need to get all the games at once. The [`keeper.StoredGameAll`](https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/keeper/grpc_query_stored_game.go#L14) function offers pagination. With this, you can limit the impact on the RAM requirement, at the expense of multiple queries.
2. Within each subset of games, you can compute in memory the player list and how many wins and losses each player has. With this _mapping_ done, you can add the (in-memory) intermediary `WonCount` and `LostCount` sums to each player's stored sums. With this, a `+1` is potentially replaced by a `+k`, at once reducing the number of calls to `.GetPlayerInfo` and `.SetPlayerInfo`.
3. You can separate the different calls and computations into [Go routines](https://gobyexample.com/goroutines) so that a blocking call does not prevent other computations from taking place in the meantime.

The routines will use **channels** to communicate between themselves and the main function:

1. A _stored-game_ channel, that will pass along chunks of games in the `[]types.StoredGame` format.
2. A _player-info_ channel, that will pass along intermediate computations of player information in the simple `types.PlayerInfo` format.
3. A _done_ channel, whose only purpose is to flag to the main function when all has been processed.

The processing **routines** will be divided as per the following:

1. The **game processing** routine will:
    
    * Receive separate arrays of games from the _stored-game_ channel.
    * Compute the aggregate player info records from them. I.e. **_map_**.
    * Send the results on the _player-info_ channel.

    Also, if it detects that no more games are coming, it will close the _player-info_ channel.

2. The **player info processing** routine will:

    * Receive individual player info records from the _player-info_ channel.
    * Fetch the existing (or not) corresponding player info from the store.
    * Update the won and lost counts, i.e. **_reduce_**. Remember, here it is doing `+= k`, not `+= 1`.
    * Save it back to the store.

    Also, if it detects that no more player info records are coming, it will flag it on the _done_ channel.

3. The **main function** will:

    * Launch the above 2 routines.
    * Fetch all games in paginated arrays.
    * Send the separate arrays on the _stored-game_ channel.
    * Close the _stored-game_ channel after the last array.
    * Wait for the flag on the _done_ channel.
    * Exit.

### Implementation

The player info processing will handle an in-memory map of player addresses to their information: `map[string]*types.PlayerInfo`. Create a new file to encapsulate this whole processing. Start by creating a helper that automatically populates it with empty values when information is missing:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_player_info.go#L11-L23]
func getOrNewPlayerInfoInMap(infoSoFar *map[string]*types.PlayerInfo, playerIndex string) (playerInfo *types.PlayerInfo) {
    playerInfo, found := (*infoSoFar)[playerIndex]
    if !found {
        playerInfo = &types.PlayerInfo{
            Index:          playerIndex,
            WonCount:       0,
            LostCount:      0,
            ForfeitedCount: 0,
        }
        (*infoSoFar)[playerIndex] = playerInfo
    }
    return playerInfo
}
```

Next, create the routine function to process the games:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_player_info.go#L25-L51]
func handleStoredGameChannel(ctx sdk.Context,
    k keeper.Keeper,
    gamesChannel <-chan []types.StoredGame,
    playerInfoChannel chan<- *types.PlayerInfo) {
    for games := range gamesChannel {
        playerInfos := make(map[string]*types.PlayerInfo, len(games))
        for _, game := range games {
            var winner string
            var loser string
            if game.Winner == rules.PieceStrings[rules.BLACK_PLAYER] {
                winner = game.Black
                loser = game.Red
            } else if game.Winner == rules.PieceStrings[rules.RED_PLAYER] {
                winner = game.Red
                loser = game.Black
            } else {
                continue
            }
            getOrNewPlayerInfoInMap(&playerInfos, winner).WonCount++
            getOrNewPlayerInfoInMap(&playerInfos, loser).LostCount++
        }
        for _, playerInfo := range playerInfos {
            playerInfoChannel <- playerInfo
        }
    }
    close(playerInfoChannel)
}
```

<HighlightBox type="note">

This function can handle the edge case where black and red both refer to the same player.

</HighlightBox>

Create the routine function to process the player info:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_player_info.go#L53-L70]
func handlePlayerInfoChannel(ctx sdk.Context, k keeper.Keeper,
    playerInfoChannel <-chan *types.PlayerInfo,
    done chan<- bool) {
    for receivedInfo := range playerInfoChannel {
        if receivedInfo != nil {
            existingInfo, found := k.GetPlayerInfo(ctx, receivedInfo.Index)
            if found {
                existingInfo.WonCount += receivedInfo.WonCount
                existingInfo.LostCount += receivedInfo.LostCount
                existingInfo.ForfeitedCount += receivedInfo.ForfeitedCount
            } else {
                existingInfo = *receivedInfo
            }
            k.SetPlayerInfo(ctx, existingInfo)
        }
    }
    done <- true
}
```

Now you can create the main function:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_player_info.go#L72-L106]
func MapStoredGamesReduceToPlayerInfo(ctx sdk.Context, k keeper.Keeper, chunk uint64) error {
    context := sdk.WrapSDKContext(ctx)
    response, err := k.StoredGameAll(context, &types.QueryAllStoredGameRequest{
        Pagination: &query.PageRequest{
            Limit: chunk,
        },
    })
    if err != nil {
        return err
    }
    gamesChannel := make(chan []types.StoredGame)
    playerInfoChannel := make(chan *types.PlayerInfo)
    done := make(chan bool)

    go handleStoredGameChannel(ctx, k, gamesChannel, playerInfoChannel)
    go handlePlayerInfoChannel(ctx, k, playerInfoChannel, done)
    gamesChannel <- response.StoredGame

    for response.Pagination.NextKey != nil {
        response, err = k.StoredGameAll(context, &types.QueryAllStoredGameRequest{
            Pagination: &query.PageRequest{
                Key:   response.Pagination.NextKey,
                Limit: chunk,
            },
        })
        if err != nil {
            return err
        }
        gamesChannel <- response.StoredGame
    }
    close(gamesChannel)

    <-done
    return nil
}
```

Not to forget a suggested chunk size when fetching stored games:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/constants.go#L6]
const (
    StoredGameChunkSize = 1_000
)
```

To find the ideal value, you would have to test with the real state and try different values.

## v1.1 to v2 leaderboard migration helper

You could decide to build the leaderboard as the player stats list is being built, mimicking the regular operation of your v2 checkers blockchain. Unfortunately, that would entail a lot of array sorting for what are just intermediate player stats. Instead, it is better to build the v2 leaderboard only after all player stats have been gathered.

In the process, there are two time-consuming parts:

1. Fetching the stored player info records in a paginated way, consuming mostly database resources.
2. Sorting each intermediate leaderboard, consuming mostly computation resources.

It looks beneficial to use a Go routine in this case too, and a _player info_ channel to pass along arrays of player info records.

In practice, repeatedly building the intermediate leaderboard means adding _k_ new `winningPlayerParsed` to the sorted array, sorting it, clipping it to `LeaderboardWinnerLength`, and repeating. What constitutes a good _k_ value should be dictated by testing and performance measurements. However, you can start with your best guess in a new file created for this purpose:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/constants.go#L7]
    const (
        StoredGameChunkSize = 1_000
+      PlayerInfoChunkSize = types.LeaderboardWinnerLength * 2
    )
```

### Implementation

Start by adding small helpers into a new file, so that you can easily append and sort player info records:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_leaderboard.go#L12-L37]
func addParsedCandidatesAndSort(parsedWinners []types.WinningPlayerParsed, candidates []types.WinningPlayerParsed) []types.WinningPlayerParsed {
    updated := append(parsedWinners, candidates...)
    types.SortWinners(updated)
    if types.LeaderboardWinnerLength < uint64(len(updated)) {
        updated = updated[:types.LeaderboardWinnerLength]
    }
    return updated
}

func AddCandidatesAndSortAtNow(parsedWinners []types.WinningPlayerParsed, now time.Time, playerInfos []types.PlayerInfo) []types.WinningPlayerParsed {
    parsedPlayers := make([]types.WinningPlayerParsed, 0, len(playerInfos))
    for _, playerInfo := range playerInfos {
        if playerInfo.WonCount > 0 {
            parsedPlayers = append(parsedPlayers, types.WinningPlayerParsed{
                PlayerAddress: playerInfo.Index,
                WonCount:      playerInfo.WonCount,
                DateAdded:     now,
            })
        }
    }
    return addParsedCandidatesAndSort(parsedWinners, parsedPlayers)
}

func AddCandidatesAndSort(parsedWinners []types.WinningPlayerParsed, ctx sdk.Context, playerInfos []types.PlayerInfo) []types.WinningPlayerParsed {
    return AddCandidatesAndSortAtNow(parsedWinners, types.GetDateAdded(ctx), playerInfos)
}
```

<HighlightBox type="note">

`addParsedCandidatesAndSort` is not exported because it already assumes that the `candidates` do not contain any with `WinCount == 0`. This is an assumption that is not enforced.

</HighlightBox>

With this, you can create the routine function that builds the leaderboard in memory and saves it to storage once at the end:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_leaderboard.go#L39-L51]
func handlePlayerInfosChannel(ctx sdk.Context, k keeper.Keeper,
    playerInfosChannel <-chan []types.PlayerInfo,
    done chan<- bool,
    chunk uint64) {
    winners := make([]types.WinningPlayerParsed, 0, types.LeaderboardWinnerLength+chunk)
    for receivedInfo := range playerInfosChannel {
        if receivedInfo != nil {
            winners = AddCandidatesAndSort(winners, ctx, receivedInfo)
        }
    }
    k.SetLeaderboard(ctx, types.CreateLeaderboardFromParsedWinners(winners))
    done <- true
}
```

<HighlightBox type="note">

The winners are initialized at a `0` size but with a capacity of `types.LeaderboardWinnerLength+chunk`, which is the expected maximum intermediate size it will reach. This initialization should ensure that the slice does not need to have its capacity increased mid-process.

</HighlightBox>

Declare the main function:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration_leaderboard.go#L53-L85]
func MapPlayerInfosReduceToLeaderboard(ctx sdk.Context, k keeper.Keeper, chunk uint64) error {
    context := sdk.WrapSDKContext(ctx)
    response, err := k.PlayerInfoAll(context, &types.QueryAllPlayerInfoRequest{
        Pagination: &query.PageRequest{
            Limit: PlayerInfoChunkSize,
        },
    })
    if err != nil {
        return err
    }
    playerInfosChannel := make(chan []types.PlayerInfo)
    done := make(chan bool)

    go handlePlayerInfosChannel(ctx, k, playerInfosChannel, done, chunk)
    playerInfosChannel <- response.PlayerInfo

    for response.Pagination.NextKey != nil {
        response, err = k.PlayerInfoAll(context, &types.QueryAllPlayerInfoRequest{
            Pagination: &query.PageRequest{
                Key:   response.Pagination.NextKey,
                Limit: PlayerInfoChunkSize,
            },
        })
        if err != nil {
            return err
        }
        playerInfosChannel <- response.PlayerInfo
    }
    close(playerInfosChannel)

    <-done
    return nil
}
```

## v1.1 to v2 migration proper

The migration proper needs to execute the previous functions in a specific order. You can encapsulate this knowledge in a function:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1tov2/migration.go#L8-L22]
func PerformMigration(ctx sdk.Context, k keeper.Keeper, storedGameChunk uint64, playerInfoChunk uint64) error {
    ctx.Logger().Info("Start to compute checkers games to player info calculation...")
    err := MapStoredGamesReduceToPlayerInfo(ctx, k, storedGameChunk)
    if err != nil {
        return err
    }
    ctx.Logger().Info("Checkers games to player info computation done")
    ctx.Logger().Info("Start to compute checkers player info to leaderboard calculation...")
    err = MapPlayerInfosReduceToLeaderboard(ctx, k, playerInfoChunk)
    if err != nil {
        return err
    }
    ctx.Logger().Info("Checkers player info to leaderboard computation done")
    return nil
}
```

<HighlightBox type="note">

This does not panic in case of an error. To avoid carrying on a faulty state, the caller of this function will have to handle the panic.

</HighlightBox>

You have in place the functions that will handle the store migration. Now you have to set up the chain of command for these functions to be called by the node at the right point in time.

### Consensus version and name

The `upgrade` module keeps in its store the [different module versions](https://docs.cosmos.network/main/core/upgrade.html#tracking-module-versions) that are currently running. To signal an upgrade, your module needs to return a different value when queried by the `upgrade` module. Change it from `2` to `3`, or whichever number works for you. First, keep both these values in their respective locations:

<CodeGroup>

<CodeGroupItem title="v1">

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v1/constants.go#L4]
const TargetConsensusVersion = 2
```

</CodeGroupItem>

<CodeGroupItem title="v2">

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/migrations/v2/constants.go#L4]
const TargetConsensusVersion = 3
```

</CodeGroupItem>

</CodeGroup>

<HighlightBox type="note">

The consensus version number bears no resemblance to v1 or v2. The consensus version number is for the module, whereas v1 or v2 is for the whole application.

</HighlightBox>

Now that you are in v2, have the module return it when asked:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/module.go#L175]
-  func (AppModule) ConsensusVersion() uint64 { return 2 }
+  func (AppModule) ConsensusVersion() uint64 { return v2.TargetConsensusVersion }
```

You also have to pick a name for the upgrade you have prepared. This name will identify your specific upgrade when it is mentioned in a `Plan`, i.e. an upgrade governance proposal. This is a name relevant at the application level:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/app/upgrades/v1tov2/constants.go#L4]
const UpgradeName = "v1tov2"
```

You have to inform your app about:

1. The mapping between the consensus version(s) and the migration process(es).
2. The mapping between this name and the module(s) consensus versions.

Prepare these in turn.

### Callback in checkers module

Indicate that the checkers module needs to perform some upgrade steps when it is coming out of the old consensus version by calling `RegisterMigration`:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/x/checkers/module.go#L146-L150]
    func (am AppModule) RegisterServices(cfg module.Configurator) {
        types.RegisterQueryServer(cfg.QueryServer(), am.keeper)

+      if err := cfg.RegisterMigration(types.ModuleName, v1.TargetConsensusVersion, func(ctx sdk.Context) error {
+          return v1tov2.PerformMigration(ctx, am.keeper, v1tov2.StoredGameChunkSize, v1tov2.PlayerInfoChunkSize)
+      }); err != nil {
+          panic(fmt.Errorf("failed to register migration of %s to v2: %w", types.ModuleName, err))
+      }
    }
```

Note it decides on the chunk sizes to use.

### Callback in `app`

The command that you are going to write needs a `Configurator`. This is already created as part of your `app` preparation but is not kept. Instead of recreating one, adjust your code to make it easily available. Add this field to your `app`:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/app/app.go#L246]
    type App struct {
        ...
        sm *module.SimulationManager
+      configurator module.Configurator
    }
```

Now adjust the place where the configurator is created:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/app/app.go#L560-L561]
-  app.mm.RegisterServices(module.NewConfigurator(app.appCodec, app.MsgServiceRouter(), app.GRPCQueryRouter()))
+  app.configurator = module.NewConfigurator(app.appCodec, app.MsgServiceRouter(), app.GRPCQueryRouter())
+  app.mm.RegisterServices(app.configurator)
```

Create a function that encapsulates knowledge about all possible upgrades, although there is a single one here. Since it includes _empty code_ for future use, avoid cluttering the already long `NewApp` function:

```go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/app/app.go#L753-L785]
func (app *App) setupUpgradeHandlers() {
    // v1 to v2 upgrade handler
    app.UpgradeKeeper.SetUpgradeHandler(
        v1tov2.UpgradeName,
        func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {
            return app.mm.RunMigrations(ctx, app.configurator, vm)
        },
    )

    // When a planned update height is reached, the old binary will panic
    // writing on disk the height and name of the update that triggered it
    // This will read that value, and execute the preparations for the upgrade.
    upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()
    if err != nil {
        panic(fmt.Errorf("failed to read upgrade info from disk: %w", err))
    }

    if app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {
        return
    }

    var storeUpgrades *storetypes.StoreUpgrades

    switch upgradeInfo.Name {
    case v1tov2.UpgradeName:
    }

    if storeUpgrades != nil {
        // configure store loader that checks if version == upgradeHeight and applies store upgrades
        app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, storeUpgrades))
    }
}
```

Now you are ready to inform the app proper. You do this towards the end, after the call to `app.SetEndBlocker` and before `if loadLatest`. At the correct location:

```diff-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/migration/app/app.go#L610]
    ...
    app.SetEndBlocker(app.EndBlocker)

+  app.setupUpgradeHandlers()

    if loadLatest {
        ...
    }
```

### What about straight v1 to v2



Be aware that the `monitoring` module added by Ignite causes difficulty when experimenting below with the CLI. To make it simple, you should remove [all references to `monitoring`](https://github.com/cosmos/b9-checkers-academy-draft/compare/leaderboard-handling..migration#diff-0f1d2976054440336a576d47a44a37b80cdf6701dd9113012bce0e3c425819b7L159) from `app.go`.

When done right, adding the callbacks is a short and easy solution.

## Interact via the CLI

You can already execute a live upgrade from the command line. The following upgrade process takes inspiration from [this one](https://hub.cosmos.network/main/hub-tutorials/live-upgrade-tutorial.html) based on Gaia. You will:

* Check out the checkers v1 code.
* Build the v1 checkers executable.
* Initialize a local blockchain and network.
* Run v1 checkers.
* Add one or more incomplete games.
* Add one or more complete games with the help of a CosmJS integration test.
* Create a governance proposal to upgrade with the right plan name at an appropriate block height.
* Make the proposal pass.
* Wait for v1 checkers to halt on its own at the upgrade height.
* Check out the checkers v2 code.
* Build the v2 checkers executable.
* Run v2 checkers.
* Confirm that you now have a correct leaderboard.

Start your engines.

### Launch v1

In a shell, checkout v1 of checkers with the content of the CosmJS client work:

```sh
$ git checkout cosmjs-elements
$ git submodule update --init
```

Build the v1 executable for your platform:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ go build -o release/v1/checkersd cmd/checkersd/main.go
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker run --rm -it \
    -v $(pwd):/checkers \
    -w /checkers \
    checkers_i \
    go build -o release/v1/checkersd cmd/checkersd/main.go
```

</CodeGroupItem>

</CodeGroup>

With the `release/v1/checkersd` executable ready, you can initialize the network.

<HighlightBox type="warn">

Because this is an exercise, to avoid messing with your keyring you must always specify `--keyring-backend test`.

</HighlightBox>

Add two players:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd keys add alice --keyring-backend test
$ ./release/v1/checkersd keys add bob --keyring-backend test
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker create --name checkers -it \
    -v $(pwd):/checkers -w /checkers \
    -p 1317:1317 -p 4500:4500 -p 5000:5000 -p 26657:26657 \
    checkers_i
$ docker start checkers
$ docker exec -it checkers \
    ./release/v1/checkersd keys add alice --keyring-backend test
$ docker exec -it checkers \
    ./release/v1/checkersd keys add bob --keyring-backend test
```

<HighlightBox type="note">

You should not use `docker run --rm` here because, when `checkersd` stops, you do not want to remove the container and thereby destroy the saved keys, and future genesis too. Instead, you reuse them all in the next calls.

</HighlightBox>

</CodeGroupItem>

</CodeGroup>

Create a new genesis:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd init checkers
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd init checkers
```

</CodeGroupItem>

</CodeGroup>

Give your players the same token amounts that were added by Ignite, as found in `config.yml`:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd add-genesis-account \
    alice 200000000stake,20000token --keyring-backend test
$ ./release/v1/checkersd add-genesis-account \
    bob 100000000stake,10000token --keyring-backend test
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd add-genesis-account \
    alice 200000000stake,20000token --keyring-backend test
$ docker exec -it checkers \
    ./release/v1/checkersd add-genesis-account \
    bob 100000000stake,10000token --keyring-backend test
```

</CodeGroupItem>

</CodeGroup>

To be able to run a quick test, you need to change the voting period of a proposal. This is found in the genesis:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ jq '.app_state.gov.voting_params.voting_period' ~/.checkers/config/genesis.json
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    jq '.app_state.gov.voting_params.voting_period' /root/.checkers/config/genesis.json
```

</CodeGroupItem>

</CodeGroup>

This returns something like:

```json
"172800s"
```

That is two days, which is too long to wait for CLI tests. Choose another value, perhaps 10 minutes, i.e. `"600s"`. Update it in place in the genesis:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ cat <<< $(jq '.app_state.gov.voting_params.voting_period = "600s"' ~/.checkers/config/genesis.json) \
    > ~/.checkers/config/genesis.json
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    bash -c "cat <<< \$(jq '.app_state.gov.voting_params.voting_period = \"600s\"' /root/.checkers/config/genesis.json) \
    > /root/.checkers/config/genesis.json"
```

</CodeGroupItem>

</CodeGroup>

You can confirm that the value is in using the earlier command.

Make Alice the chain's validator too by creating a genesis transaction modeled on that done by Ignite, as found in `config.yml`:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd gentx alice 100000000stake \
    --keyring-backend test --chain-id checkers
$ ./release/v1/checkersd collect-gentxs
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd gentx alice 100000000stake \
    --keyring-backend test --chain-id checkers
$ docker exec -it checkers \
    ./release/v1/checkersd collect-gentxs
```

</CodeGroupItem>

</CodeGroup>

Now you can start the chain proper:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd start
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd start \
    --rpc.laddr "tcp://0.0.0.0:26657"
```

Note that you need to force the node to listen on all IP addresses, not just `127.0.0.1` as it would do by default.

</CodeGroupItem>

</CodeGroup>

From another shell, create a few un-played games with:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ export alice=$(./release/v1/checkersd keys show alice -a)
$ export bob=$(./release/v1/checkersd keys show bob -a)
$ ./release/v1/checkersd tx checkers create-game \
    $alice $bob 10 stake \
    --from $alice --keyring-backend test --yes \
    --broadcast-mode block
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ export alice=$(docker exec checkers ./release/v1/checkersd keys show alice -a --keyring-backend test)
$ export bob=$(docker exec checkers ./release/v1/checkersd keys show bob -a --keyring-backend test)
$ docker exec -it checkers \
    ./release/v1/checkersd tx checkers create-game \
    $alice $bob 10 stake \
    --from $alice --keyring-backend test --yes \
    --broadcast-mode block
```

</CodeGroupItem>

</CodeGroup>

<HighlightBox type="note">

The `--broadcast-mode block` flag means that you can fire up many such games by just copying the command without facing any sequence errors.

</HighlightBox>

To get a few complete games, you are going to run the [integration tests](https://github.com/cosmos/academy-checkers-ui/blob/server-indexing/test/integration/stored-game-action.ts) against it. These tests were built to run against a running chain started by Ignite. What is different here is that:

1. Blocks come slower, likely every five seconds instead of every one.
2. There are no longer any faucets.

Therefore, to be able to run these tests you need to attend to the above problems, respectively:

1. Adjust the timeout of each `before` and `it`. Make it `5*(the number of expected blocks + 1)`. 
   For instance, if you send 2 transactions that each go in a block, adjust [the timeout](https://github.com/cosmos/academy-checkers-ui/blob/server-indexing/test/integration/stored-game-action.ts#L84) to `15`: `this.timeout(15_000)`.
2. Adjust the `"credit test accounts"` `before`. Just `return` before the [first `await askFaucet`](https://github.com/cosmos/academy-checkers-ui/blob/server-indexing/test/integration/stored-game-action.ts#L65).

Now that you cannot call the faucet, you have to credit your test accounts with standard `bank send` transactions. You can use the same values as found in the `before`:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd tx bank \
    send $alice cosmos1fx6qlxwteeqxgxwsw83wkf4s9fcnnwk8z86sql 300stake \
    --from $alice --keyring-backend test \
    --broadcast-mode block --yes
$ ./release/v1/checkersd tx bank \
    send $alice cosmos1fx6qlxwteeqxgxwsw83wkf4s9fcnnwk8z86sql 10token \
    --from $alice --keyring-backend test \
    --broadcast-mode block --yes
$ ./release/v1/checkersd tx bank \
    send $bob cosmos1mql9aaux3453tdghk6rzkmk43stxvnvha4nv22 300stake \
    --from $bob --keyring-backend test \
    --broadcast-mode block --yes
$ ./release/v1/checkersd tx bank \
    send $bob cosmos1mql9aaux3453tdghk6rzkmk43stxvnvha4nv22 10token \
    --from $bob --keyring-backend test \
    --broadcast-mode block --yes
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd tx bank \
    send $alice cosmos1fx6qlxwteeqxgxwsw83wkf4s9fcnnwk8z86sql 300stake \
    --from $alice --keyring-backend test \
    --broadcast-mode block --yes
$ docker exec -it checkers \
    ./release/v1/checkersd tx bank \
    send $alice cosmos1fx6qlxwteeqxgxwsw83wkf4s9fcnnwk8z86sql 10token \
    --from $alice --keyring-backend test \
    --broadcast-mode block --yes
$ docker exec -it checkers \
    ./release/v1/checkersd tx bank \
    send $bob cosmos1mql9aaux3453tdghk6rzkmk43stxvnvha4nv22 300stake \
    --from $bob --keyring-backend test \
    --broadcast-mode block --yes
$ docker exec -it checkers \
    ./release/v1/checkersd tx bank \
    send $bob cosmos1mql9aaux3453tdghk6rzkmk43stxvnvha4nv22 10token \
    --from $bob --keyring-backend test \
    --broadcast-mode block --yes
```

</CodeGroupItem>

</CodeGroup>

With the test accounts sufficiently credited, you can now run the integration tests. Run them three times in a row to create three complete games:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ pushd client && npm test && popd
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker run --rm -it \
    -v $(pwd)/client:/client \
    -w /client \
    node:18.7 \
    npm test
```

<HighlightBox type="note">

Do not forget to first adjust your `client/.env` file's `RPC_URL` address to be that of your computer, so that it can access across to the `checkers` container.

</HighlightBox>

</CodeGroupItem>

</CodeGroup>

You can confirm that you have a mix of complete and incomplete games:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd query checkers \
    list-stored-game --output json \
    | jq '.storedGame[] | { "index":.index, "winner":.winner }'
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    bash -c "./release/v1/checkersd query checkers \
        list-stored-game --output json \
        | jq '.storedGame[] | { \"index\":.index, \"winner\":.winner }'"
```

</CodeGroupItem>

</CodeGroup>

With enough games in the system, you can move to the software upgrade governance proposal.

### Governance proposal

For the software upgrade governance proposal, you want to make sure that it stops the chain not too far in the future but still after the voting period. With a voting period of 10 minutes, take 15 minutes. How many seconds does a block take?

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ jq -r ".app_state.mint.params.blocks_per_year" \
    ~/.checkers/config/genesis.json
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    bash -c 'jq -r ".app_state.mint.params.blocks_per_year" /root/.checkers/config/genesis.json'
```

</CodeGroupItem>

</CodeGroup>

This returns something like:

```txt
6311520
```

That many `blocks_per_year` computes down to 5 seconds per block. At this rate, 15 minutes mean 180 blocks.

What is the current block height? Check:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd status \
    | jq -r ".SyncInfo.latest_block_height"
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    bash -c './release/v1/checkersd status \
        | jq -r ".SyncInfo.latest_block_height"'
```

</CodeGroupItem>

</CodeGroup>

This returns something like:

```json
1000
```

That means you will use:

```txt
--upgrade-height 1180
```

What is the minimum deposit for a proposal? Check:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ jq ".app_state.gov.deposit_params.min_deposit" \
    ~/.checkers/config/genesis.json
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    bash -c 'jq ".app_state.gov.deposit_params.min_deposit" \
        /root/.checkers/config/genesis.json' 
```

</CodeGroupItem>

</CodeGroup>

This returns something like:

```json
[
    {
        "denom": "stake",
        "amount": "10000000"
    }
]
```

This is the minimum amount that Alice has to deposit when submitting the proposal. This will do:

```txt
--deposit 10000000stake
```

Submit your governance proposal upgrade:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd tx gov submit-proposal software-upgrade v1tov2 \
    --title "v1tov2" \
    --description "Increase engagement via the use of a leaderboard" \
    --from $alice --keyring-backend test --yes \
    --broadcast-mode block \
    --upgrade-height 1180 \
    --deposit 10000000stake
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd tx gov submit-proposal software-upgrade v1tov2 \
    --title "v1tov2" \
    --description "Increase engagement via the use of a leaderboard" \
    --from $alice --keyring-backend test --yes \
    --broadcast-mode block \
    --upgrade-height 1180 \
    --deposit 10000000stake
```

</CodeGroupItem>

</CodeGroup>

This returns something with:

```yaml
  ...
  type: proposal_deposit
- attributes:
  - key: proposal_id
    value: "1"
  - key: proposal_type
    value: SoftwareUpgrade
  - key: voting_period_start
    value: "1"
  ...
 ```

Where `1` is the proposal ID you reuse. Have Alice and Bob vote yes on it:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd tx gov vote 1 yes \
    --from $alice --keyring-backend test --yes
$ ./release/v1/checkersd tx gov vote 1 yes \
    --from $bob --keyring-backend test --yes
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd tx gov vote 1 yes \
    --from $alice --keyring-backend test --yes
$ docker exec -it checkers \
    ./release/v1/checkersd tx gov vote 1 yes \
    --from $bob --keyring-backend test --yes
```

</CodeGroupItem>

</CodeGroup>

Confirm that it has collected the votes:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd query gov votes 1
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd query gov votes 1
```

</CodeGroupItem>

</CodeGroup>

It should print:

```yaml
votes:
- option: VOTE_OPTION_YES
  options:
  - option: VOTE_OPTION_YES
    weight: "1.000000000000000000"
  proposal_id: "1"
  voter: cosmos1hzftnstmlzqfaj0rz39hn5pe2vppz0phy4x9ct
- option: VOTE_OPTION_YES
  options:
  - option: VOTE_OPTION_YES
    weight: "1.000000000000000000"
  proposal_id: "1"
  voter: cosmos1hj2x82j49fv90tgtdxrdw5fz3w2vqeqqjhrxle
```

See how long you have to wait for the chain to reach the end of the voting period:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd query gov proposal 1
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v1/checkersd query gov proposal 1
```

</CodeGroupItem>

</CodeGroup>

In the end this prints:

```txt
...
status: PROPOSAL_STATUS_VOTING_PERIOD
...
voting_end_time: "2022-08-25T10:38:22.240766103Z"
...
```

Wait for this period. Afterward, with the same command you should see:

```txt
...
status: PROPOSAL_STATUS_PASSED
...
```

Now, wait for the chain to reach the desired block height, which should take five more minutes, as per your parameters. When it has reached that height, the shell with the running `checkersd` should show something like:

```txt
...
6:29PM INF finalizing commit of block hash=E6CB6F1E8CF4699543950F756F3E15AE447701ABAC498CDBA86633AC93A73EE7 height=1180 module=consensus num_txs=0 root=21E51E52AA3F06BE59C78CE11D3171E6F7240D297E4BCEAB07FC5A87957B3BE2
6:29PM ERR UPGRADE "v1tov2" NEEDED at height: 1180: 
6:29PM ERR CONSENSUS FAILURE!!! err="UPGRADE \"v1tov2\" NEEDED at height: 1180: " module=consensus stack="goroutine 62 [running]:\nruntime/debug.Stack
...
6:29PM INF Stopping baseWAL service impl={"Logger":{}} module=consensus wal=/root/.checkers/data/cs.wal/wal
6:29PM INF Stopping Group service impl={"Dir":"/root/.checkers/data/cs.wal","Head":{"ID":"ZsAlN7DEZAbV:/root/.checkers/data/cs.wal/wal","Path":"/root/.checkers/data/cs.wal/wal"},"ID":"group:ZsAlN7DEZAbV:/root/.checkers/data/cs.wal/wal","Logger":{}} module=consensus wal=/root/.checkers/data/cs.wal/wal
...
```

At this point, run in another shell:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v1/checkersd status \
    | jq -r ".SyncInfo.latest_block_height"
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    bash -c './release/v1/checkersd status \
        | jq -r ".SyncInfo.latest_block_height"'
```

</CodeGroupItem>

</CodeGroup>

You should always get the same value, no matter how many times you try. That is because the chain has stopped. For instance:

```txt
1180
```

Stop `checkersd` with <kbd>CTRL-C</kbd>. It has saved a new file:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ cat ~/.checkers/data/upgrade-info.json
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    cat /root/.checkers/data/upgrade-info.json
```

</CodeGroupItem>

</CodeGroup>

This prints:

```json
{"name":"v1tov2","height":1180}
```

With your node (and therefore your whole blockchain) down, you are ready to move to v2.

### Launch v2

With v1 stopped and its state saved, it is time to move to v2. Checkout v2 of checkers:

```sh
$ git checkout migration
```

Back in the first shell, build the v2 executable:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ go build -o ./release/v2/checkersd ./cmd/checkersd/main.go
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker run --rm -it \
    -v $(pwd):/checkers \
    -w /checkers \
    checkers_i \
    go build -o ./release/v2/checkersd ./cmd/checkersd/main.go
```

</CodeGroupItem>

</CodeGroup>

Launch it:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v2/checkersd start
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v2/checkersd start \
    --rpc.laddr "tcp://0.0.0.0:26657"
```

</CodeGroupItem>

</CodeGroup>

It should start and display something like:

```txt
...
7:06PM INF applying upgrade "v1tov2" at height: 342
7:06PM INF migrating module checkers from version 2 to version 3
7:06PM INF Start to compute checkers games to player info calculation...
7:06PM INF Checkers games to player info computation done
7:06PM INF Start to compute checkers player info to leaderboard calculation...
7:06PM INF Checkers player info to leaderboard computation done
...
```

After it has started, you can confirm in another shell that you have the expected leaderboard with:

<CodeGroup>

<CodeGroupItem title="Local" active>

```sh
$ ./release/v2/checkersd query checkers show-leaderboard
```

</CodeGroupItem>

<CodeGroupItem title="Docker">

```sh
$ docker exec -it checkers \
    ./release/v2/checkersd query checkers show-leaderboard
```

</CodeGroupItem>

</CodeGroup>

This should print something like:

```yaml
Leaderboard:
  winners:
  - dateAdded: 2022-09-06 18:29:44.020323682 +0000 UTC
    playerAddress: cosmos1fx6qlxwteeqxgxwsw83wkf4s9fcnnwk8z86sql
    wonCount: "3"
```

Note how it took the time of the block when v1 stopped.

You can similarly confirm that the player info records are correctly saved. Congratulations, you have upgraded your blockchain almost as if in production.

Your checkers blockchain is done! It has a leaderboard, which was introduced later in production thanks to migrations.

You no doubt have many ideas about how to improve it. In particular, you could implement the missing _draw_ mechanism, which in effect has to be accepted by both players.

<HighlightBox type="synopsis">

To summarize, this section has explored:

* How to add a leaderboard to an existing blockchain, and the characteristics that a good leaderboard should boast.
* How to upgrade a blockchain in production, by migrating from v1 of the blockchain to v2, and the new data structures that will be introduced by the upgrade.
* How to handle the data migrations and logic upgrades implicit during migration, such as with the use of private helper functions.
* Worthwhile unit tests with regard to player info and leaderboard handling.
* A complete procedure for how to conduct the update via the CLI.

</HighlightBox>

<!--

## Next up

It is time to move away from the checkers blockchain learning exercise, and explore another helpful tool for working with the Cosmos SDK: CosmWasm.

-->
