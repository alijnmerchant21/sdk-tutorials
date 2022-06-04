(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{788:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ibc-token-play-with-cross-chain-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-token-play-with-cross-chain-tokens"}},[e._v("#")]),e._v(" IBC Token - Play With Cross-Chain Tokens")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("messages")]),e._v(", "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")]),e._v(", and "),a("RouterLink",{attrs:{to:"/academy/4-ibc/what-is-ibc.html"}},[e._v("IBC")]),e._v(".")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase up to the "),a("em",[e._v("can play")]),e._v(" query. If not, follow the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/can-play.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/can-play-move-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Discover the Inter-Blockchain Communication Protocol.")]),e._v(" "),a("li",[e._v("Accept wagers with tokens from other chains.")]),e._v(" "),a("li",[e._v("Refactor integration tests.")])])]),e._v(" "),a("p",[e._v("When you "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-wager.html"}},[e._v("introduced a wager")]),e._v(" you enabled players to play a game and bet on the outcome using the base staking token of your blockchain. What if your players want to play with "),a("em",[e._v("other")]),e._v(" currencies? Your blockchain can represent a token from any other connected blockchain by using the Inter-Blockchain Communication Protocol (IBC).")],1),e._v(" "),a("p",[e._v("Thus, you could expand the pool of your potential players by extending the pool of possible wager denominations via the use of IBC. How can you do this?")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("Your checkers application will be agnostic regarding tokens and relayers. Your only task is to enable the use of "),a("em",[e._v("foreign")]),e._v(" tokens.")])]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("Before diving into the exercise, ask yourself:")]),e._v(" "),a("ul",[a("li",[e._v("What new information do you need?")]),e._v(" "),a("li",[e._v("How do you sanitize the inputs?")]),e._v(" "),a("li",[e._v("Are there new errors to report back?")]),e._v(" "),a("li",[e._v("What event should you emit?")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("p",[e._v("When it comes to the code itself:")]),e._v(" "),a("ul",[a("li",[e._v("What Ignite CLI commands, if any, assist you?")]),e._v(" "),a("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),a("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("h2",{attrs:{id:"new-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),a("p",[e._v("Instead of defaulting to "),a("code",[e._v('"stake"')]),e._v(", let players decide what string represents their token:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Update the stored game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIHRva2VuID0gMTM7IC8vIERlbm9taW5hdGlvbiBvZiB0aGUgd2FnZXIuCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/proto/checkers/stored_game.proto#L19"}})],1),e._v(" "),a("li",[a("p",[e._v("Update the message to create a game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dDcmVhdGVHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIHRva2VuID0gNTsgLy8gRGVub21pbmF0aW9uIG9mIHRoZSB3YWdlci4KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/proto/checkers/tx.proto#L46"}})],1),e._v(" "),a("li",[a("p",[e._v("Instruct the Ignite CLI and Protobuf to recompile both files:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}})],1),e._v(" "),a("li",[a("p",[e._v("It is recommended to also update the "),a("code",[e._v("MsgCreateGame")]),e._v(" constructor:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdNc2dDcmVhdGVHYW1lKGNyZWF0b3Igc3RyaW5nLCByZWQgc3RyaW5nLCBibGFjayBzdHJpbmcsIHdhZ2VyIHVpbnQ2NCwgdG9rZW4gc3RyaW5nKSAqTXNnQ3JlYXRlR2FtZSB7CiAgICByZXR1cm4gJmFtcDtNc2dDcmVhdGVHYW1lewogICAgICAgIC4uLgogICAgICAgIFRva2VuOiB0b2tlbiwKICAgIH0KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/types/message_create_game.go#L16"}})],1),e._v(" "),a("li",[a("p",[e._v("This data will be emitted during game creation, so add a new event key as a constant:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgU3RvcmVkR2FtZUV2ZW50VG9rZW4gPSAmcXVvdDtUb2tlbiZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/types/keys.go#L56"}})],1)]),e._v(" "),a("h2",{attrs:{id:"additional-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-handling"}},[e._v("#")]),e._v(" Additional handling")]),e._v(" "),a("p",[e._v("The token denomination has been integrated into the relevant data structures. Now the proper values need to be inserted in the right locations:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the helper function to create the "),a("code",[e._v("Coin")]),e._v(" in "),a("code",[e._v("full_game.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0V2FnZXJDb2luKCkgKHdhZ2VyIHNkay5Db2luKSB7CiAgICByZXR1cm4gc2RrLk5ld0NvaW4oc3RvcmVkR2FtZS5Ub2tlbiwgc2RrLk5ld0ludChpbnQ2NChzdG9yZWRHYW1lLldhZ2VyKSkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/types/full_game.go#L74-L76"}})],1),e._v(" "),a("li",[a("p",[e._v("In the handler that instantiates a game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSA6PSB0eXBlcy5TdG9yZWRHYW1lewogICAgLi4uCiAgICBUb2tlbjogICAgIG1zZy5Ub2tlbiwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_create_game.go#L34"}}),e._v(" "),a("p",[e._v("Also where it emits an event:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICAuLi4KICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlN0b3JlZEdhbWVFdmVudFRva2VuLCBtc2cuVG9rZW4pLAogICAgKQopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_create_game.go#L58"}})],1)]),e._v(" "),a("h2",{attrs:{id:"integration-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-tests"}},[e._v("#")]),e._v(" Integration tests")]),e._v(" "),a("h3",{attrs:{id:"fixing-existing-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixing-existing-tests"}},[e._v("#")]),e._v(" Fixing existing tests")]),e._v(" "),a("p",[e._v("You have introduced a new field and a new event. Therefore you have to fix your existing tests:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_create_game_test.go#L16",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add "),a("code",[e._v("Token: sdk.DefaultBondDenom,")]),a("OutboundLink")],1),e._v(" when creating a game.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_create_game_test.go#L78",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add "),a("code",[e._v('Token: "stake",')]),a("OutboundLink")],1),e._v(" when verifying a stored game.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_create_game_test.go#L135",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add "),a("code",[e._v('{Key: "Token", Value: "stake"},')]),a("OutboundLink")],1),e._v(" when verifying the attributes of the creation event.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/keeper_integration_test.go#L19",target:"_blank",rel:"noopener noreferrer"}},[e._v("Change "),a("code",[e._v("createEventCount = 8")]),a("OutboundLink")],1),e._v(" to account for the new attribute of the creation event.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_create_game_test.go#L152",target:"_blank",rel:"noopener noreferrer"}},[e._v("Change the expected gas"),a("OutboundLink")],1),e._v(" used where you measured it. Having to do this change by looking at the error message may indicate that these gas tests are unwelcome.")])]),e._v(" "),a("h3",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("p",[e._v("With this out of the way, you will add a test whereby players wager and play with two different tokens. Start by preparing your setup to accommodate different tokens:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Although not essential, you can define a reusable foreign denomination and Alice, Bob, and Carol's initial balances in them. Make them "),a("strong",[e._v("sufficiently different")]),e._v(" in value from those of "),a("code",[e._v('"stake"')]),e._v(" so that one cannot be confused with the other:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QoCiAgICBmb3JlaWduVG9rZW4gID0gJnF1b3Q7Zm9yZWlnblRva2VuJnF1b3Q7CiAgICBiYWxUb2tlbkFsaWNlID0gNQogICAgYmFsVG9rZW5Cb2IgICA9IDIKICAgIGJhbFRva2VuQ2Fyb2wgPSAxCikK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/keeper_integration_test.go#L32-L35"}})],1),e._v(" "),a("li",[a("p",[e._v("Update your bank genesis helper "),a("code",[e._v("makeBalance")]),e._v(" to take an extra initial balance:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtYWtlQmFsYW5jZShhZGRyZXNzIHN0cmluZywgYmFsYW5jZSBpbnQ2NCwgYmFsYW5jZVRva2VuIGludDY0KSBiYW5rdHlwZXMuQmFsYW5jZSB7CiAgICAuLi4KICAgIENvaW5zOiBzZGsuQ29pbnN7CiAgICAgICAgLi4uCiAgICAgICAgc2RrLkNvaW57CiAgICAgICAgICAgIERlbm9tOiAgZm9yZWlnblRva2VuLAogICAgICAgICAgICBBbW91bnQ6IHNkay5OZXdJbnQoYmFsYW5jZVRva2VuKSwKICAgICAgICB9LAogICAgfQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/keeper_integration_test.go#L81-L84"}})],1),e._v(" "),a("li",[a("p",[e._v("Use it from the bank test genesis:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBnZXRCYW5rR2VuZXNpcygpICpiYW5rdHlwZXMuR2VuZXNpc1N0YXRlIHsKICAgIGNvaW5zIDo9IFtdYmFua3R5cGVzLkJhbGFuY2V7CiAgICAgICAgbWFrZUJhbGFuY2UoYWxpY2UsIGJhbEFsaWNlLCBiYWxUb2tlbkFsaWNlKSwKICAgICAgICBtYWtlQmFsYW5jZShib2IsIGJhbEJvYiwgYmFsVG9rZW5Cb2IpLAogICAgICAgIG1ha2VCYWxhbmNlKGNhcm9sLCBiYWxDYXJvbCwgYmFsVG9rZW5DYXJvbCksCiAgICB9CiAgICAuLi4KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/keeper_integration_test.go#L91-L93"}})],1),e._v(" "),a("li",[a("p",[e._v("Also add a verification helper function to make it easier later on:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBSZXF1aXJlQmFua0JhbGFuY2UoZXhwZWN0ZWQgaW50LCBhdEFkZHJlc3Mgc3RyaW5nKSB7CiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VJbihleHBlY3RlZCwgYXRBZGRyZXNzLCBzZGsuRGVmYXVsdEJvbmREZW5vbSkKfQoKZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBSZXF1aXJlQmFua0JhbGFuY2VJbihleHBlY3RlZCBpbnQsIGF0QWRkcmVzcyBzdHJpbmcsIGRlbm9tIHN0cmluZykgewogICAgc2RrQWRkLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKGF0QWRkcmVzcykKICAgIHN1aXRlLlJlcXVpcmUoKS5OaWwoZXJyLCAmcXVvdDtBZGRyZXNzICVzIGZhaWxlZCB0byBwYXJzZSZxdW90OykKICAgIHN1aXRlLlJlcXVpcmUoKS5FcXVhbCgKICAgICAgICBpbnQ2NChleHBlY3RlZCksCiAgICAgICAgc3VpdGUuYXBwLkJhbmtLZWVwZXIuR2V0QmFsYW5jZShzdWl0ZS5jdHgsIHNka0FkZCwgZGVub20pLkFtb3VudC5JbnQ2NCgpKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/keeper_integration_test.go#L110-L120"}})],1)]),e._v(" "),a("h3",{attrs:{id:"testing-proper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-proper"}},[e._v("#")]),e._v(" Testing proper")]),e._v(" "),a("p",[e._v("With the preparation done, add a test when the player makes their first move. For the test to be meaningful, remember to check all token denominations:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBUZXN0UGxheU1vdmVQbGF5ZXJQYWlkRm9yZWlnblRva2VuKCkgewogICAgc3VpdGUuc2V0dXBTdWl0ZVdpdGhPbmVHYW1lRm9yUGxheU1vdmUoKQogICAgZ29DdHggOj0gc2RrLldyYXBTREtDb250ZXh0KHN1aXRlLmN0eCkKICAgIHN1aXRlLm1zZ1NlcnZlci5DcmVhdGVHYW1lKGdvQ3R4LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgUmVkOiAgICAgYm9iLAogICAgICAgIEJsYWNrOiAgIGNhcm9sLAogICAgICAgIFdhZ2VyOiAgIDEsCiAgICAgICAgVG9rZW46ICAgZm9yZWlnblRva2VuLAogICAgfSkKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZShiYWxBbGljZSwgYWxpY2UpCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoYmFsQm9iLCBib2IpCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoYmFsQ2Fyb2wsIGNhcm9sKQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKDAsIGNoZWNrZXJzTW9kdWxlQWRkcmVzcykKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZUluKGJhbFRva2VuQWxpY2UsIGFsaWNlLCBmb3JlaWduVG9rZW4pCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VJbihiYWxUb2tlbkJvYiwgYm9iLCBmb3JlaWduVG9rZW4pCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VJbihiYWxUb2tlbkNhcm9sLCBjYXJvbCwgZm9yZWlnblRva2VuKQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlSW4oMCwgY2hlY2tlcnNNb2R1bGVBZGRyZXNzLCBmb3JlaWduVG9rZW4pCiAgICBzdWl0ZS5tc2dTZXJ2ZXIuUGxheU1vdmUoZ29DdHgsICZhbXA7dHlwZXMuTXNnUGxheU1vdmV7CiAgICAgICAgQ3JlYXRvcjogY2Fyb2wsCiAgICAgICAgSWRWYWx1ZTogJnF1b3Q7MiZxdW90OywKICAgICAgICBGcm9tWDogICAxLAogICAgICAgIEZyb21ZOiAgIDIsCiAgICAgICAgVG9YOiAgICAgMiwKICAgICAgICBUb1k6ICAgICAzLAogICAgfSkKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZShiYWxBbGljZSwgYWxpY2UpCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoYmFsQm9iLCBib2IpCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoYmFsQ2Fyb2wsIGNhcm9sKQogICAgc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKDAsIGNoZWNrZXJzTW9kdWxlQWRkcmVzcykKICAgIHN1aXRlLlJlcXVpcmVCYW5rQmFsYW5jZUluKGJhbFRva2VuQWxpY2UsIGFsaWNlLCBmb3JlaWduVG9rZW4pCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VJbihiYWxUb2tlbkJvYiwgYm9iLCBmb3JlaWduVG9rZW4pCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VJbihiYWxUb2tlbkNhcm9sLTEsIGNhcm9sLCBmb3JlaWduVG9rZW4pCiAgICBzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2VJbigxLCBjaGVja2Vyc01vZHVsZUFkZHJlc3MsIGZvcmVpZ25Ub2tlbikKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_play_move_test.go#L88-L122"}}),e._v(" "),a("p",[e._v("There is no need to further test the event emitted by the bank, which is not your code, other than for curiosity.")]),e._v(" "),a("p",[e._v("Do not forget to add similar tests for when the money goes the other way (i.e. when "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_reject_game_test.go#L213-L251",target:"_blank",rel:"noopener noreferrer"}},[e._v("rejecting"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/msg_server_play_move_winner_test.go#L149-L189",target:"_blank",rel:"noopener noreferrer"}},[e._v("winning"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9a22cd21/x/checkers/keeper/end_block_server_game_test.go#L496-L546",target:"_blank",rel:"noopener noreferrer"}},[e._v("forfeiting"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("If you recall, Alice's and Bob's balances have two token denominations. Query:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyAkYm9iCg=="}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzEwMDAwJnF1b3Q7CiAgZGVub206IHRva2VuCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),e._v(" "),a("p",[e._v("You can make use of this other "),a("code",[e._v("token")]),e._v(" to create a new game that costs "),a("code",[e._v("1 token")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMSB0b2tlbiAtLWZyb20gJGFsaWNlCg=="}}),e._v(" "),a("p",[e._v("Which mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCi0ga2V5OiBXYWdlcgogIHZhbHVlOiAmcXVvdDsxJnF1b3Q7Ci0ga2V5OiBUb2tlbgogIHZhbHVlOiB0b2tlbgouLi4K"}}),e._v(" "),a("p",[e._v("Have Bob play once:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMSAyIDIgMyAtLWZyb20gJGJvYgo="}}),e._v(" "),a("p",[e._v("Has Bob been charged the wager?")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyAkYm9iCg=="}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90Ozk5OTkmcXVvdDsKICBkZW5vbTogdG9rZW4KcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDswJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("Correct. You made it possible to wager any token. That includes IBC tokens.")]),e._v(" "),a("h2",{attrs:{id:"live-testing-with-a-relayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#live-testing-with-a-relayer"}},[e._v("#")]),e._v(" Live testing with a relayer")]),e._v(" "),a("p",[e._v("With the checkers application ready to accommodate IBC-foreign tokens, you should run some tests locally with another blockchain's tokens without running a large-scale operation. Conveniently, Ignite CLI has the "),a("a",{attrs:{href:"https://docs.ignite.com/kb/relayer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript relayer"),a("OutboundLink")],1),e._v(" built in. If you look at the GUI Ignite CLI created in your checkers blockchain, you will see a "),a("em",[e._v("Relayers")]),e._v(" section on the left.")]),e._v(" "),a("p",[e._v("A relayer is a process that transfers IBC packets between two blockchains. Here this process is "),a("strong",[e._v("running in your browser")]),e._v(" using the account you configured in your browser. The account is the same one you would use to play a game of checkers. Dub it "),a("code",[e._v("alice123@checkers")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("On the checkers end, the relayer is already configured to connect to your running checkers blockchain and to use the tokens of whichever account you have configured in your browser (here "),a("code",[e._v("alice123@checkers")]),e._v("). Therefore, it gets the same privileges to access your tokens that you have granted to the checkers browser application.")]),e._v(" "),a("li",[e._v("You need to configure it to connect to the other blockchain which hosts the foreign tokens you want to transfer. This can be the Cosmos Hub, or a "),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet"),a("OutboundLink")],1),e._v(" that you or someone else runs.")]),e._v(" "),a("li",[e._v("You also need to fund the relayer's account on the remote chain so that it can operate. The account is generated from the same private key as "),a("code",[e._v("alice123@checkers")]),e._v(", so call it "),a("code",[e._v("alice465@remote")]),e._v(". The relayer shows you in the browser which account this is.")])]),e._v(" "),a("p",[e._v("Your test follows a few steps:")]),e._v(" "),a("ol",[a("li",[e._v("Configure the relayer. This is a matter of entering the necessary parameters, clicking a button, and waiting for the setup to be done. In effect, the relayer opens a transfer channel (likely numbered "),a("code",[e._v("0")]),e._v(") on the checkers chain, opens another transfer channel on the remote chain, and links the two.")]),e._v(" "),a("li",[e._v("Send the desired foreign tokens to "),a("code",[e._v("alice465@remote")]),e._v(" using any regular method of sending tokens, independent of whether the tokens come from a faucet or another account.")]),e._v(" "),a("li",[e._v("Use the relayer to send these foreign tokens to "),a("code",[e._v("alice123@checkers")]),e._v(".")]),e._v(" "),a("li",[e._v("Check the balance of "),a("code",[e._v("alice123@checkers")]),e._v(" in the checkers blockchain when it is done. You should see a new entry whose "),a("code",[e._v("denom")]),e._v(" field looks like a long hex value ("),a("code",[e._v("ibc/1873CA...")]),e._v("). Save this string to use with your test.")]),e._v(" "),a("li",[e._v("Repeat the transfer process through the relayer, this time for the benefit of another player (for example "),a("code",[e._v("bob224@checkers")]),e._v("). For your test, Alice can send some tokens to Bob so they can start a game.")]),e._v(" "),a("li",[e._v("Have Alice and Bob start a game with "),a("code",[e._v("token: ibc/1873CA...")]),e._v(".")]),e._v(" "),a("li",[e._v("After the outcome of a game, the players can retransfer these foreign tokens via the same relayer to the remote chain.")])]),e._v(" "),a("p",[e._v("This is how the Typescript relayer built in by Ignite CLI lets you experiment with foreign tokens.")]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("As soon as you close the browser window the channels on both ends are no longer monitored, and therefore no token transfers will take place. Also depending on the development state of Ignite CLI, after you close it the relayer may not be able to reuse a channel it created earlier. "),a("strong",[e._v("Do not use this for production")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/migration.html"}},[e._v("next section")]),e._v(", you will learn how to conduct chain upgrades through migrations.")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);