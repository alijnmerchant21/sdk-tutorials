(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{791:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"play-with-cross-chain-tokens"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#play-with-cross-chain-tokens"}},[e._v("#")]),e._v(" Play With Cross-Chain Tokens")]),e._v(" "),o("HighlightBox",{attrs:{type:"prerequisite"}},[o("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),o("ul",[o("li",[e._v("You understand the concepts of "),o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("messages")]),e._v(", "),o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(", and "),o("RouterLink",{attrs:{to:"/academy/3-ibc/1-what-is-ibc.html"}},[e._v("IBC")]),e._v(".")],1),e._v(" "),o("li",[e._v("Go is installed.")]),e._v(" "),o("li",[e._v("You have the checkers blockchain codebase up to the "),o("em",[e._v("can play")]),e._v(" query. If not, follow some "),o("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/7-can-play.html"}},[e._v("previous steps")]),e._v(" or check out the "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/can-play-move-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),o("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("In this section, you will:")]),e._v(" "),o("ul",[o("li",[e._v("Discover the Inter-Blockchain Communication Protocol.")]),e._v(" "),o("li",[e._v("Accept wagers with tokens from other chains.")]),e._v(" "),o("li",[e._v("Refactor integration tests.")])])]),e._v(" "),o("p",[e._v("When you "),o("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/5-game-wager.html"}},[e._v("introduced a wager")]),e._v(" you enabled players to play a game and bet on the outcome using the base staking token of your blockchain. What if your players want to play with "),o("em",[e._v("other")]),e._v(" currencies? Your blockchain can represent a token from any other connected blockchain by using the Inter-Blockchain Communication Protocol (IBC).")],1),e._v(" "),o("p",[e._v("Thus, you could expand the pool of your potential players by extending the pool of possible wager denominations via the use of IBC. How can you do this?")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Your checkers application will be agnostic regarding tokens and relayers. Your only task is to enable the use of "),o("em",[e._v("foreign")]),e._v(" tokens.")])]),e._v(" "),o("h2",{attrs:{id:"some-initial-thoughts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),o("p",[e._v("Before diving into the exercise, ask yourself:")]),e._v(" "),o("ul",[o("li",[e._v("What new information do you need?")]),e._v(" "),o("li",[e._v("How do you sanitize the inputs?")]),e._v(" "),o("li",[e._v("Are there new errors to report back?")]),e._v(" "),o("li",[e._v("What event should you emit?")])]),e._v(" "),o("h2",{attrs:{id:"code-needs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),o("p",[e._v("When it comes to the code itself:")]),e._v(" "),o("ul",[o("li",[e._v("What Ignite CLI commands, if any, assist you?")]),e._v(" "),o("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),o("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),o("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),o("h2",{attrs:{id:"new-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),o("p",[e._v("Instead of defaulting to "),o("code",[e._v('"stake"')]),e._v(", let players decide what string represents their token:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Update the stored game:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIGRlbm9tID0gMTI7Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/proto/checkers/stored_game.proto#L18"}})],1),e._v(" "),o("li",[o("p",[e._v("Update the message to create a game:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dDcmVhdGVHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIGRlbm9tID0gNTsKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/proto/checkers/tx.proto#L21"}})],1),e._v(" "),o("li",[o("p",[e._v("Instruct the Ignite CLI and Protobuf to recompile both files:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC12ICQocHdkKTovY2hlY2tlcnMgXAogICAgLXcgL2NoZWNrZXJzIFwKICAgIGNoZWNrZXJzX2kgXAogICAgaWduaXRlIGdlbmVyYXRlIHByb3RvLWdvCg=="}})],1)],1)],1),e._v(" "),o("li",[o("p",[e._v("It is recommended to also update the "),o("code",[e._v("MsgCreateGame")]),e._v(" constructor:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdNc2dDcmVhdGVHYW1lKGNyZWF0b3Igc3RyaW5nLCBibGFjayBzdHJpbmcsIHJlZCBzdHJpbmcsIHdhZ2VyIHVpbnQ2NCwgZGVub20gc3RyaW5nKSAqTXNnQ3JlYXRlR2FtZSB7CiAgICByZXR1cm4gJmFtcDtNc2dDcmVhdGVHYW1lewogICAgICAgIC4uLgogICAgICAgIERlbm9tOiBkZW5vbSwKICAgIH0KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/types/message_create_game.go#L12-L18"}})],1),e._v(" "),o("li",[o("p",[e._v("Not to forget the CLI client:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKICAgIFVzZTogICAmcXVvdDtjcmVhdGUtZ2FtZSBbYmxhY2tdIFtyZWRdIFt3YWdlcl0gW2Rlbm9tXSZxdW90OywKICAgIFNob3J0OiAmcXVvdDtCcm9hZGNhc3QgbWVzc2FnZSBjcmVhdGVHYW1lJnF1b3Q7LAogICAgQXJnczogIGNvYnJhLkV4YWN0QXJncyg0KSwKICAgIFJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSAoZXJyIGVycm9yKSB7CiAgICAgICAgLi4uCiAgICAgICAgYXJnRGVub20gOj0gYXJnc1szXQogICAgICAgIC4uLgoKICAgICAgICBtc2cgOj0gdHlwZXMuTmV3TXNnQ3JlYXRlR2FtZSgKICAgICAgICAgICAgLi4uCiAgICAgICAgICAgIGFyZ0Rlbm9tLAogICAgICAgICkKICAgICAgICAuLi4KICAgIH0sCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/client/cli/tx_create_game.go#L17-L39"}})],1),e._v(" "),o("li",[o("p",[e._v("This new field will be emitted during game creation, so add a new event key as a constant:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgR2FtZUNyZWF0ZWRFdmVudERlbm9tID0gJnF1b3Q7ZGVub20mcXVvdDsKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/types/keys.go#L37"}})],1)]),e._v(" "),o("h2",{attrs:{id:"additional-handling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additional-handling"}},[e._v("#")]),e._v(" Additional handling")]),e._v(" "),o("p",[e._v("The token denomination has been integrated into the relevant data structures. Now the proper denomination values need to be inserted in the right instances at the right locations:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the helper function to create the "),o("code",[e._v("Coin")]),e._v(" in "),o("code",[e._v("full_game.go")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0V2FnZXJDb2luKCkgKHdhZ2VyIHNkay5Db2luKSB7CiAgICByZXR1cm4gc2RrLk5ld0NvaW4oc3RvcmVkR2FtZS5EZW5vbSwgc2RrLk5ld0ludChpbnQ2NChzdG9yZWRHYW1lLldhZ2VyKSkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/types/full_game.go#L68-L70"}})],1),e._v(" "),o("li",[o("p",[e._v("In the handler that instantiates a game:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSA6PSB0eXBlcy5TdG9yZWRHYW1lewogICAgLi4uCiAgICBEZW5vbTogICAgICAgbXNnLkRlbm9tLAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game.go#L34"}}),e._v(" "),o("p",[e._v("Also where it emits an event:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICAuLi4KICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkdhbWVDcmVhdGVkRXZlbnREZW5vbSwgbXNnLkRlbm9tKSwKICAgICkKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game.go#L56"}})],1)]),e._v(" "),o("h2",{attrs:{id:"unit-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),o("p",[e._v("The point of the tests is to make sure that the token denomination is correctly used. So you ought to add a denomination "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game_test.go#L34",target:"_blank",rel:"noopener noreferrer"}},[e._v("when creating a game"),o("OutboundLink")],1),e._v(" and add it to "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game_test.go#L101",target:"_blank",rel:"noopener noreferrer"}},[e._v("all the stored games"),o("OutboundLink")],1),e._v(" you check and all the "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game_test.go#L127",target:"_blank",rel:"noopener noreferrer"}},[e._v("emitted events"),o("OutboundLink")],1),e._v(" you check. Choose a "),o("code",[e._v('"stake"')]),e._v(" for all first games and something else for additional games, for instance "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game_test.go#L191",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v('"coin"')]),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/msg_server_create_game_test.go#L232",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v('"gold"')]),o("OutboundLink")],1),e._v(" respectively.")]),e._v(" "),o("p",[e._v("Adjust your test helpers too:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The coins factory now needs to care about the denomination too:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBjb2luc09mKGFtb3VudCB1aW50NjQsIGRlbm9tIHN0cmluZykgc2RrLkNvaW5zIHsKICAgIHJldHVybiBzZGsuQ29pbnN7CiAgICAgICAgc2RrLkNvaW57CiAgICAgICAgICAgIERlbm9tOiAgZGVub20sCiAgICAgICAgICAgIEFtb3VudDogc2RrLk5ld0ludChpbnQ2NChhbW91bnQpKSwKICAgICAgICB9LAogICAgfQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/testutil/bank_escrow_helpers.go#L16-L23"}})],1),e._v(" "),o("li",[o("p",[e._v("To minimize the amount of work to redo, add an "),o("code",[e._v("ExpectPayWithDenom")]),e._v(" helper, and have the earlier "),o("code",[e._v("ExpectPay")]),e._v(" use it with the "),o("code",[e._v('"stake"')]),e._v(" denomination:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZXNjcm93ICpNb2NrQmFua0VzY3Jvd0tlZXBlcikgRXhwZWN0UGF5KGNvbnRleHQgY29udGV4dC5Db250ZXh0LCB3aG8gc3RyaW5nLCBhbW91bnQgdWludDY0KSAqZ29tb2NrLkNhbGwgewogICAgcmV0dXJuIGVzY3Jvdy5FeHBlY3RQYXlXaXRoRGVub20oY29udGV4dCwgd2hvLCBhbW91bnQsICZxdW90O3N0YWtlJnF1b3Q7KQp9CgpmdW5jIChlc2Nyb3cgKk1vY2tCYW5rRXNjcm93S2VlcGVyKSBFeHBlY3RQYXlXaXRoRGVub20oY29udGV4dCBjb250ZXh0LkNvbnRleHQsIHdobyBzdHJpbmcsIGFtb3VudCB1aW50NjQsIGRlbm9tIHN0cmluZykgKmdvbW9jay5DYWxsIHsKICAgIHdob0FkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIod2hvKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQogICAgcmV0dXJuIGVzY3Jvdy5FWFBFQ1QoKS5TZW5kQ29pbnNGcm9tQWNjb3VudFRvTW9kdWxlKHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpLCB3aG9BZGRyLCB0eXBlcy5Nb2R1bGVOYW1lLCBjb2luc09mKGFtb3VudCwgZGVub20pKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/testutil/bank_escrow_helpers.go#L25-L35"}}),e._v(" "),o("p",[e._v("Do the same with "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/testutil/bank_escrow_helpers.go#L37-L47",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ExpectRefund")]),o("OutboundLink")],1),e._v(".")])],1)]),e._v(" "),o("p",[e._v("With the new helpers in, you can pepper call expectations with "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/x/checkers/keeper/end_block_server_game_test.go#L239",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v('"coin"')]),o("OutboundLink")],1),e._v(" or "),o("code",[e._v('"gold"')]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"integration-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integration-tests"}},[e._v("#")]),e._v(" Integration tests")]),e._v(" "),o("p",[e._v("You have fixed your unit tests. You need to do the same for your integration tests.")]),e._v(" "),o("h3",{attrs:{id:"adjustments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adjustments"}},[e._v("#")]),e._v(" Adjustments")]),e._v(" "),o("p",[e._v("Take this opportunity to expand the genesis state so that it includes a different coin.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Make sure your helper to make a balance cares about the denomination:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtYWtlQmFsYW5jZShhZGRyZXNzIHN0cmluZywgYmFsYW5jZSBpbnQ2NCwgZGVub20gc3RyaW5nKSBiYW5rdHlwZXMuQmFsYW5jZSB7CiAgICByZXR1cm4gYmFua3R5cGVzLkJhbGFuY2V7CiAgICAgICAgQWRkcmVzczogYWRkcmVzcywKICAgICAgICBDb2luczogc2RrLkNvaW5zewogICAgICAgICAgICBzZGsuQ29pbnsKICAgICAgICAgICAgICAgIERlbm9tOiAgZGVub20sCiAgICAgICAgICAgICAgICBBbW91bnQ6IHNkay5OZXdJbnQoYmFsYW5jZSksCiAgICAgICAgICAgIH0sCiAgICAgICAgfSwKICAgIH0KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L65-L75"}})],1),e._v(" "),o("li",[o("p",[e._v("Since you want to add more coins, make a specific function to sum balances per denomination:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBhZGRBbGwoYmFsYW5jZXMgW11iYW5rdHlwZXMuQmFsYW5jZSkgc2RrLkNvaW5zIHsKICAgIHRvdGFsIDo9IHNkay5OZXdDb2lucygpCiAgICBmb3IgXywgYmFsYW5jZSA6PSByYW5nZSBiYWxhbmNlcyB7CiAgICAgICAgdG90YWwgPSB0b3RhbC5BZGQoYmFsYW5jZS5Db2lucy4uLikKICAgIH0KICAgIHJldHVybiB0b3RhbAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L77-L83"}})],1),e._v(" "),o("li",[o("p",[e._v("In the bank genesis creation, add new balances:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBnZXRCYW5rR2VuZXNpcygpICpiYW5rdHlwZXMuR2VuZXNpc1N0YXRlIHsKICAgIGNvaW5zIDo9IFtdYmFua3R5cGVzLkJhbGFuY2V7CiAgICAgICAgbWFrZUJhbGFuY2UoYWxpY2UsIGJhbEFsaWNlLCAmcXVvdDtzdGFrZSZxdW90OyksCiAgICAgICAgbWFrZUJhbGFuY2UoYm9iLCBiYWxCb2IsICZxdW90O3N0YWtlJnF1b3Q7KSwKICAgICAgICBtYWtlQmFsYW5jZShib2IsIGJhbEJvYiwgJnF1b3Q7Y29pbiZxdW90OyksCiAgICAgICAgbWFrZUJhbGFuY2UoY2Fyb2wsIGJhbENhcm9sLCAmcXVvdDtzdGFrZSZxdW90OyksCiAgICAgICAgbWFrZUJhbGFuY2UoY2Fyb2wsIGJhbENhcm9sLCAmcXVvdDtjb2luJnF1b3Q7KSwKICAgIH0KICAgIHN1cHBseSA6PSBiYW5rdHlwZXMuU3VwcGx5ewogICAgICAgIFRvdGFsOiBhZGRBbGwoY29pbnMpLAogICAgfQogICAgLi4uCn0gICAgCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L85-L95"}})],1),e._v(" "),o("li",[o("p",[e._v("Also adjust the helper that checks bank balances. Add a function to reduce the amount of refactoring:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBSZXF1aXJlQmFua0JhbGFuY2UoZXhwZWN0ZWQgaW50LCBhdEFkZHJlc3Mgc3RyaW5nKSB7CiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VXaXRoRGVub20oZXhwZWN0ZWQsICZxdW90O3N0YWtlJnF1b3Q7LCBhdEFkZHJlc3MpCn0KCmZ1bmMgKHN1aXRlICpJbnRlZ3JhdGlvblRlc3RTdWl0ZSkgUmVxdWlyZUJhbmtCYWxhbmNlV2l0aERlbm9tKGV4cGVjdGVkIGludCwgZGVub20gc3RyaW5nLCBhdEFkZHJlc3Mgc3RyaW5nKSB7CiAgICBzZGtBZGQsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoYXRBZGRyZXNzKQogICAgc3VpdGUuUmVxdWlyZSgpLk5pbChlcnIsICZxdW90O0ZhaWxlZCB0byBwYXJzZSBhZGRyZXNzOiAlcyZxdW90OywgYXRBZGRyZXNzKQogICAgc3VpdGUuUmVxdWlyZSgpLkVxdWFsKAogICAgICAgIGludDY0KGV4cGVjdGVkKSwKICAgICAgICBzdWl0ZS5hcHAuQmFua0tlZXBlci5HZXRCYWxhbmNlKHN1aXRlLmN0eCwgc2RrQWRkLCBkZW5vbSkuQW1vdW50LkludDY0KCkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L110-L120"}})],1)]),e._v(" "),o("h3",{attrs:{id:"additional-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additional-test"}},[e._v("#")]),e._v(" Additional test")]),e._v(" "),o("p",[e._v("With the helpers in place, you can add a test with three players playing two games with different tokens:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBUZXN0UGxheU1vdmVUb1dpbm5lckJhbmtQYWlkRGlmZmVyZW50VG9rZW5zKCkgewogICAgc3VpdGUuc2V0dXBTdWl0ZVdpdGhPbmVHYW1lRm9yUGxheU1vdmUoKQogICAgZ29DdHggOj0gc2RrLldyYXBTREtDb250ZXh0KHN1aXRlLmN0eCkKICAgIHN1aXRlLm1zZ1NlcnZlci5DcmVhdGVHYW1lKGdvQ3R4LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgQmxhY2s6ICAgYm9iLAogICAgICAgIFJlZDogICAgIGNhcm9sLAogICAgICAgIFdhZ2VyOiAgIDQ2LAogICAgICAgIERlbm9tOiAgICZxdW90O2NvaW4mcXVvdDssCiAgICB9KQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKGJhbEFsaWNlLCBhbGljZSkKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZVdpdGhEZW5vbSgwLCAmcXVvdDtjb2luJnF1b3Q7LCBhbGljZSkKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZShiYWxCb2IsIGJvYikKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZVdpdGhEZW5vbShiYWxCb2IsICZxdW90O2NvaW4mcXVvdDssIGJvYikKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZShiYWxDYXJvbCwgY2Fyb2wpCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VXaXRoRGVub20oYmFsQ2Fyb2wsICZxdW90O2NvaW4mcXVvdDssIGNhcm9sKQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKDAsIGNoZWNrZXJzTW9kdWxlQWRkcmVzcykKICAgIHBsYXlBbGxNb3ZlcyhzdWl0ZS5UKCksIHN1aXRlLm1zZ1NlcnZlciwgc2RrLldyYXBTREtDb250ZXh0KHN1aXRlLmN0eCksICZxdW90OzEmcXVvdDssIGdhbWUxTW92ZXMpCiAgICBwbGF5QWxsTW92ZXMoc3VpdGUuVCgpLCBzdWl0ZS5tc2dTZXJ2ZXIsIHNkay5XcmFwU0RLQ29udGV4dChzdWl0ZS5jdHgpLCAmcXVvdDsyJnF1b3Q7LCBnYW1lMU1vdmVzKQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKGJhbEFsaWNlLCBhbGljZSkKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZVdpdGhEZW5vbSgwLCAmcXVvdDtjb2luJnF1b3Q7LCBhbGljZSkKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZShiYWxCb2IrNDUsIGJvYikKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZVdpdGhEZW5vbShiYWxCb2IrNDYsICZxdW90O2NvaW4mcXVvdDssIGJvYikKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZShiYWxDYXJvbC00NSwgY2Fyb2wpCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VXaXRoRGVub20oYmFsQ2Fyb2wtNDYsICZxdW90O2NvaW4mcXVvdDssIGNhcm9sKQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKDAsIGNoZWNrZXJzTW9kdWxlQWRkcmVzcykKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZVdpdGhEZW5vbSgwLCAmcXVvdDtjb2luJnF1b3Q7LCBjaGVja2Vyc01vZHVsZUFkZHJlc3MpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/tests/integration/checkers/keeper/msg_server_play_move_test.go#L323-L350"}}),e._v(" "),o("p",[e._v("All your tests should now pass.")]),e._v(" "),o("h2",{attrs:{id:"interact-via-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),o("p",[e._v("Restart Ignite with "),o("code",[e._v("chain serve")]),e._v(". If you recall, Alice's and Bob's balances have two token denominations. Query:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyAkYWxpY2UK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgJGFsaWNlCg=="}})],1)],1),e._v(" "),o("p",[e._v("This returns what you would expect from the "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/wager-denomination/config.yml#L2-L5",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("config.yml")]),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzIwMDAwJnF1b3Q7CiAgZGVub206IHRva2VuCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),e._v(" "),o("p",[e._v("You can make use of this other "),o("code",[e._v("token")]),e._v(" to create a new game that costs "),o("code",[e._v("1 token")]),e._v(":")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMSB0b2tlbiAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIDEgdG9rZW4gLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),o("p",[e._v("Which mentions:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCi0ga2V5OiB3YWdlcgogIHZhbHVlOiAmcXVvdDsxJnF1b3Q7Ci0ga2V5OiBkZW5vbQogIHZhbHVlOiB0b2tlbgouLi4K"}}),e._v(" "),o("p",[e._v("Have Alice play once:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMSAyIDIgMyAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDEgMiAyIDMgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),o("p",[e._v("Which mentions:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"LSBhdHRyaWJ1dGVzOgogIC0ga2V5OiByZWNpcGllbnQKICAgIHZhbHVlOiBjb3Ntb3MxNnh4MGU0NTdobThteXdkaHh0bXJhcjl0MDl6MG1xdDl4N3NybTMKICAtIGtleTogc2VuZGVyCiAgICB2YWx1ZTogY29zbW9zMTgwZzBrYXh6enJlOTVmOWd3dzkzdDhjcWhzaGp5ZGF6dTdnMzVuCiAgLSBrZXk6IGFtb3VudAogICAgdmFsdWU6IDF0b2tlbgogIHR5cGU6IHRyYW5zZmVyCg=="}}),e._v(" "),o("p",[e._v("This seems to indicate that Alice has been charged the wager. As a side node, "),o("code",[e._v("cosmos16xx0e457hm8mywdhxtmrar9t09z0mqt9x7srm3")]),e._v(" is the checkers module's address. Confirm it:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyAkYWxpY2UK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgJGFsaWNlCg=="}})],1)],1),e._v(" "),o("p",[e._v("This returns:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzE5OTk5JnF1b3Q7CiAgZGVub206IHRva2VuCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),e._v(" "),o("p",[e._v("Correct. You made it possible to wager any token. That includes IBC tokens.")]),e._v(" "),o("p",[e._v("Now check the checkers module's balance:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyBjb3Ntb3MxNnh4MGU0NTdobThteXdkaHh0bXJhcjl0MDl6MG1xdDl4N3NybTMK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgY29zbW9zMTZ4eDBlNDU3aG04bXl3ZGh4dG1yYXI5dDA5ejBtcXQ5eDdzcm0zCg=="}})],1)],1),e._v(" "),o("p",[e._v("This prints:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxJnF1b3Q7CiAgZGVub206IHRva2VuCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),e._v(" "),o("p",[e._v("That is correct.")]),e._v(" "),o("h2",{attrs:{id:"live-testing-with-a-relayer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#live-testing-with-a-relayer"}},[e._v("#")]),e._v(" Live testing with a relayer")]),e._v(" "),o("p",[e._v("With the checkers application ready to accommodate IBC-foreign tokens, you should run some tests locally with another blockchain's tokens without running a large-scale operation. Conveniently, Ignite CLI has the "),o("a",{attrs:{href:"https://docs.ignite.com/kb/relayer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript relayer"),o("OutboundLink")],1),e._v(" built in. If you look at the GUI Ignite CLI created in your checkers blockchain, you will see a "),o("em",[e._v("Relayers")]),e._v(" section on the left.")]),e._v(" "),o("p",[e._v("A relayer is a process that transfers IBC packets between two blockchains. Here this process is "),o("strong",[e._v("running in your browser")]),e._v(" using the account you configured in your browser. The account is the same one you would use to play a game of checkers. Dub it "),o("code",[e._v("alice123@checkers")]),e._v(".")]),e._v(" "),o("ol",[o("li",[e._v("On the checkers end, the relayer is already configured to connect to your running checkers blockchain and to use the tokens of whichever account you have configured in your browser (here "),o("code",[e._v("alice123@checkers")]),e._v("). Therefore, it gets the same privileges to access your tokens that you have granted to the checkers browser application.")]),e._v(" "),o("li",[e._v("You need to configure it to connect to the other blockchain which hosts the foreign tokens you want to transfer. This can be the Cosmos Hub, or a "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet"),o("OutboundLink")],1),e._v(" that you or someone else runs.")]),e._v(" "),o("li",[e._v("You also need to fund the relayer's account on the remote chain so that it can operate. The account is generated from the same private key as "),o("code",[e._v("alice123@checkers")]),e._v(", so call it "),o("code",[e._v("alice465@remote")]),e._v(". The relayer shows you in the browser which account this is.")])]),e._v(" "),o("p",[e._v("Your test follows a few steps:")]),e._v(" "),o("ol",[o("li",[e._v("Configure the relayer. This is a matter of entering the necessary parameters, clicking a button, and waiting for the setup to be done. In effect, the relayer opens a transfer channel (likely numbered "),o("code",[e._v("0")]),e._v(") on the checkers chain, opens another transfer channel on the remote chain, and links the two.")]),e._v(" "),o("li",[e._v("Send the desired foreign tokens to "),o("code",[e._v("alice465@remote")]),e._v(" using any regular method of sending tokens, independent of whether the tokens come from a faucet or another account.")]),e._v(" "),o("li",[e._v("Use the relayer to send these foreign tokens to "),o("code",[e._v("alice123@checkers")]),e._v(".")]),e._v(" "),o("li",[e._v("Check the balance of "),o("code",[e._v("alice123@checkers")]),e._v(" in the checkers blockchain when it is done. You should see a new entry whose "),o("code",[e._v("denom")]),e._v(" field looks like a long hex value ("),o("code",[e._v("ibc/1873CA...")]),e._v("). Save this string to use with your test.")]),e._v(" "),o("li",[e._v("Repeat the transfer process through the relayer, this time for the benefit of another player (for example "),o("code",[e._v("bob224@checkers")]),e._v("). For your test, Alice can send some tokens to Bob so they can start a game.")]),e._v(" "),o("li",[e._v("Have Alice and Bob start a game with "),o("code",[e._v("token: ibc/1873CA...")]),e._v(".")]),e._v(" "),o("li",[e._v("After the outcome of a game, the players can retransfer these foreign tokens via the same relayer to the remote chain.")])]),e._v(" "),o("p",[e._v("This is how the TypeScript relayer built in by Ignite CLI lets you experiment with foreign tokens.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("As soon as you close the browser window the channels on both ends are no longer monitored, and therefore no token transfers will take place. Also depending on the development state of Ignite CLI, after you close it the relayer may not be able to reuse a channel it created earlier. "),o("strong",[e._v("Do not use this for production")]),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How to enable the use of cross-chain tokens to make wagers on checkers games as well as your blockchain's base staking token, by making use of the Inter-Blockchain Communication Protocol (IBC).")]),e._v(" "),o("li",[e._v("How to update the stored game and the game creation message to allow players to decide what string represents their token.")]),e._v(" "),o("li",[e._v("Where to insert the necessary values to allow recognition of token denominations.")]),e._v(" "),o("li",[e._v("How to fix your existing tests due to the introduction of a new field and a new event, and how to add a new test when a player makes their first move.")]),e._v(" "),o("li",[e._v("How to interact via the CLI to confirm the presence of the new token denomination in a player's balance and that using these tokens to make a wager functions as required.")]),e._v(" "),o("li",[e._v("How to demonstrate that your application will accept IBC-foreign tokens from another blockchain, using Ignite CLI's built-in TypeScript relayer as a convenient small-scale local testing tool.")])])]),e._v(" "),o("p",[e._v("Alternatively, you can learn how to create the "),o("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/1-cosmjs-objects.html"}},[e._v("TypeScript client elements")]),e._v(" for your blockchain.")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);