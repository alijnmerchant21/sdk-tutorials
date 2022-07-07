(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{713:function(e,t,g){"use strict";g.r(t);var d=g(1),c=Object(d.a)({},(function(){var e=this,t=e.$createElement,g=e._self._c||t;return g("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[g("h1",{attrs:{id:"events-emitting-game-information"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#events-emitting-game-information"}},[e._v("#")]),e._v(" Events - Emitting Game Information")]),e._v(" "),g("HighlightBox",{attrs:{type:"prerequisite"}},[g("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),g("ul",[g("li",[e._v("You understand the concepts of "),g("RouterLink",{attrs:{to:"/academy/2-main-concepts/events.html"}},[e._v("events")]),e._v(".")],1),e._v(" "),g("li",[e._v("Go is installed.")]),e._v(" "),g("li",[e._v("You have the checkers blockchain codebase with "),g("code",[e._v("MsgPlayMove")]),e._v(" and its handling. If not, follow the "),g("RouterLink",{attrs:{to:"/academy/3-my-own-chain/play-game.html"}},[e._v("previous steps")]),e._v(" or check out "),g("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/v1-play-move-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),g("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),g("HighlightBox",{attrs:{type:"learning"}},[g("p",[e._v("In this section, you will:")]),e._v(" "),g("ul",[g("li",[e._v("Define event types.")]),e._v(" "),g("li",[e._v("Emit events.")]),e._v(" "),g("li",[e._v("Extend unit tests.")])])]),e._v(" "),g("p",[e._v("Now that you have "),g("RouterLink",{attrs:{to:"/academy/3-my-own-chain/play-game.html"}},[e._v("added the possible actions")]),e._v(", including their return values, use events to notify players. Your blockchain can now create and play games. However, it does not inform the outside world about this in a convenient way. That is where events come in - but what do you need to emit them?")],1),e._v(" "),g("p",[e._v("Imagine a potential or current player waiting for their turn. It is not practical to look at all the transactions and search for the ones signifying the player's turn. It is better to listen to known events that let clients determine which player's turn it is.")]),e._v(" "),g("p",[e._v("Adding events to your application is as simple as:")]),e._v(" "),g("ol",[g("li",[e._v("Defining the events you want to use.")]),e._v(" "),g("li",[e._v("Emitting corresponding events as actions unfold.")])]),e._v(" "),g("h2",{attrs:{id:"some-initial-thoughts"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),g("p",[e._v("Before you dive into the specifics of the exercise, ask yourself:")]),e._v(" "),g("ul",[g("li",[e._v("Why do actions warrant a detailed event?")]),e._v(" "),g("li",[e._v("What level of detail goes into each event?")]),e._v(" "),g("li",[e._v("How do you make it easy for external parties to understand your events?")]),e._v(" "),g("li",[e._v("At what stage do you emit events?")])]),e._v(" "),g("h2",{attrs:{id:"code-needs"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),g("p",[e._v("Now start by thinking about the following:")]),e._v(" "),g("ul",[g("li",[e._v("How do you adjust your code to do all this?")]),e._v(" "),g("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),g("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),g("p",[e._v("Only focus on the narrow issue of event emission.")]),e._v(" "),g("h2",{attrs:{id:"game-created-event"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#game-created-event"}},[e._v("#")]),e._v(" Game-created event")]),e._v(" "),g("p",[e._v("Start with the event that announces the creation of a new game. The goal is to:")]),e._v(" "),g("ul",[g("li",[e._v("Inform the players about the game.")]),e._v(" "),g("li",[e._v("Make it easy for the players to find the relevant game.")])]),e._v(" "),g("p",[e._v("Define new keys in "),g("code",[e._v("x/checkers/types/keys.go")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgU3RvcmVkR2FtZUV2ZW50S2V5ICAgICA9ICZxdW90O05ld0dhbWVDcmVhdGVkJnF1b3Q7IC8vIEluZGljYXRlcyB3aGF0IGtleSB0byBsaXN0ZW4gdG8KICAgIFN0b3JlZEdhbWVFdmVudENyZWF0b3IgPSAmcXVvdDtDcmVhdG9yJnF1b3Q7CiAgICBTdG9yZWRHYW1lRXZlbnRJbmRleCAgID0gJnF1b3Q7SW5kZXgmcXVvdDsgLy8gV2hhdCBnYW1lIGlzIHJlbGV2YW50CiAgICBTdG9yZWRHYW1lRXZlbnRSZWQgICAgID0gJnF1b3Q7UmVkJnF1b3Q7IC8vIElzIGl0IHJlbGV2YW50IHRvIG1lPwogICAgU3RvcmVkR2FtZUV2ZW50QmxhY2sgICA9ICZxdW90O0JsYWNrJnF1b3Q7IC8vIElzIGl0IHJlbGV2YW50IHRvIG1lPwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/6c16e72d/x/checkers/types/keys.go#L34-L38"}}),e._v(" "),g("p",[e._v("Emit the event in your handler file "),g("code",[e._v("x/checkers/keeper/msg_server_create_game.go")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlNb2R1bGUsICZxdW90O2NoZWNrZXJzJnF1b3Q7KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlBY3Rpb24sIHR5cGVzLlN0b3JlZEdhbWVFdmVudEtleSksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5TdG9yZWRHYW1lRXZlbnRDcmVhdG9yLCBtc2cuQ3JlYXRvciksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5TdG9yZWRHYW1lRXZlbnRJbmRleCwgbmV3SW5kZXgpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuU3RvcmVkR2FtZUV2ZW50UmVkLCBtc2cuUmVkKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlN0b3JlZEdhbWVFdmVudEJsYWNrLCBtc2cuQmxhY2spLAogICAgKSwKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/6c16e72d/x/checkers/keeper/msg_server_create_game.go#L39-L48"}}),e._v(" "),g("p",[e._v("Now you must implement this correspondingly in the GUI, or include a server to listen for such events.")]),e._v(" "),g("h2",{attrs:{id:"player-moved-event"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#player-moved-event"}},[e._v("#")]),e._v(" Player-moved event")]),e._v(" "),g("p",[e._v("The created transaction to play a move informs the opponent about:")]),e._v(" "),g("ul",[g("li",[e._v("Which player is relevant.")]),e._v(" "),g("li",[e._v("Which game the move relates to.")]),e._v(" "),g("li",[e._v("When the move happened.")]),e._v(" "),g("li",[e._v("The move's outcome.")]),e._v(" "),g("li",[e._v("Whether the game was won.")])]),e._v(" "),g("HighlightBox",{attrs:{type:"info"}},[g("p",[e._v("Contrary to the "),g("em",[e._v("create game")]),e._v(" event, which alerted the players about a new game, the players now know which game IDs to watch for. There is no need to repeat the players' addresses, the game ID is information enough.")])]),e._v(" "),g("p",[e._v("You define new keys in "),g("code",[e._v("x/checkers/types/keys.go")]),e._v(" similarly:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgUGxheU1vdmVFdmVudEtleSAgICAgICA9ICZxdW90O01vdmVQbGF5ZWQmcXVvdDsKICAgIFBsYXlNb3ZlRXZlbnRDcmVhdG9yICAgPSAmcXVvdDtDcmVhdG9yJnF1b3Q7CiAgICBQbGF5TW92ZUV2ZW50SWRWYWx1ZSAgID0gJnF1b3Q7SWRWYWx1ZSZxdW90OwogICAgUGxheU1vdmVFdmVudENhcHR1cmVkWCA9ICZxdW90O0NhcHR1cmVkWCZxdW90OwogICAgUGxheU1vdmVFdmVudENhcHR1cmVkWSA9ICZxdW90O0NhcHR1cmVkWSZxdW90OwogICAgUGxheU1vdmVFdmVudFdpbm5lciAgICA9ICZxdW90O1dpbm5lciZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/6c16e72d/x/checkers/types/keys.go#L41-L48"}}),e._v(" "),g("p",[e._v("Emit the event in your file "),g("code",[e._v("x/checkers/keeper/msg_server_play_move.go")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgICBzZGsuTmV3RXZlbnQoc2RrLkV2ZW50VHlwZU1lc3NhZ2UsCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZShzZGsuQXR0cmlidXRlS2V5TW9kdWxlLCAmcXVvdDtjaGVja2VycyZxdW90OyksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZShzZGsuQXR0cmlidXRlS2V5QWN0aW9uLCB0eXBlcy5QbGF5TW92ZUV2ZW50S2V5KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlBsYXlNb3ZlRXZlbnRDcmVhdG9yLCBtc2cuQ3JlYXRvciksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5QbGF5TW92ZUV2ZW50SWRWYWx1ZSwgbXNnLklkVmFsdWUpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuUGxheU1vdmVFdmVudENhcHR1cmVkWCwgc3RyY29udi5Gb3JtYXRJbnQoaW50NjQoY2FwdHVyZWQuWCksIDEwKSksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5QbGF5TW92ZUV2ZW50Q2FwdHVyZWRZLCBzdHJjb252LkZvcm1hdEludChpbnQ2NChjYXB0dXJlZC5ZKSwgMTApKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlBsYXlNb3ZlRXZlbnRXaW5uZXIsIHJ1bGVzLlBpZWNlU3RyaW5nc1tnYW1lLldpbm5lcigpXSksCiAgICApLAopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/6c16e72d/x/checkers/keeper/msg_server_play_move.go#L66-L76"}}),e._v(" "),g("h2",{attrs:{id:"unit-tests"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),g("p",[e._v("The unit tests you have created so far still pass. However you also want to confirm that the events have been emitted in both situations. The events are recorded in the context, so the test is a little bit different. In "),g("code",[e._v("msg_server_create_game_test.go")]),e._v(", add this test:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0Q3JlYXRlMUdhbWVFbWl0dGVkKHQgKnRlc3RpbmcuVCkgewogICAgbXNnU3J2ciwgXywgY29udGV4dCA6PSBzZXR1cE1zZ1NlcnZlckNyZWF0ZUdhbWUodCkKICAgIG1zZ1NydnIuQ3JlYXRlR2FtZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgUmVkOiAgICAgYm9iLAogICAgICAgIEJsYWNrOiAgIGNhcm9sLAogICAgfSkKICAgIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjb250ZXh0KQogICAgcmVxdWlyZS5Ob3ROaWwodCwgY3R4KQogICAgZXZlbnRzIDo9IHNkay5TdHJpbmdpZnlFdmVudHMoY3R4LkV2ZW50TWFuYWdlcigpLkFCQ0lFdmVudHMoKSkKICAgIHJlcXVpcmUuTGVuKHQsIGV2ZW50cywgMSkKICAgIGV2ZW50IDo9IGV2ZW50c1swXQogICAgcmVxdWlyZS5FcXVhbFZhbHVlcyh0LCBzZGsuU3RyaW5nRXZlbnR7CiAgICAgICAgVHlwZTogJnF1b3Q7bWVzc2FnZSZxdW90OywKICAgICAgICBBdHRyaWJ1dGVzOiBbXXNkay5BdHRyaWJ1dGV7CiAgICAgICAgICAgIHtLZXk6ICZxdW90O21vZHVsZSZxdW90OywgVmFsdWU6ICZxdW90O2NoZWNrZXJzJnF1b3Q7fSwKICAgICAgICAgICAge0tleTogJnF1b3Q7YWN0aW9uJnF1b3Q7LCBWYWx1ZTogJnF1b3Q7TmV3R2FtZUNyZWF0ZWQmcXVvdDt9LAogICAgICAgICAgICB7S2V5OiAmcXVvdDtDcmVhdG9yJnF1b3Q7LCBWYWx1ZTogYWxpY2V9LAogICAgICAgICAgICB7S2V5OiAmcXVvdDtJbmRleCZxdW90OywgVmFsdWU6ICZxdW90OzEmcXVvdDt9LAogICAgICAgICAgICB7S2V5OiAmcXVvdDtSZWQmcXVvdDssIFZhbHVlOiBib2J9LAogICAgICAgICAgICB7S2V5OiAmcXVvdDtCbGFjayZxdW90OywgVmFsdWU6IGNhcm9sfSwKICAgICAgICB9LAogICAgfSwgZXZlbnQpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/6c16e72d/x/checkers/keeper/msg_server_create_game_test.go#L83-L106"}}),e._v(" "),g("p",[e._v("How can you "),g("em",[e._v("guess")]),e._v(" the order of elements? Easily, as you created them in this order. Alternatively, you can "),g("em",[e._v("peek")]),e._v(" by using Visual Studio Code:")]),e._v(" "),g("ol",[g("li",[e._v("Put a breakpoint after "),g("code",[e._v("event := events[0]")]),e._v(".")]),e._v(" "),g("li",[e._v("Run this test in "),g("strong",[e._v("debug mode")]),e._v(": right-click the green arrow next to the test name.")]),e._v(" "),g("li",[e._v("Observe the live values on the left.")])]),e._v(" "),g("p",[g("tm-image",{attrs:{src:"/academy/3-my-own-chain/images/go_test_debug_event_attributes.png"}})],1),e._v(" "),g("p",[e._v("The event emitted during a move may seem unexpected. In a "),g("em",[e._v("move")]),e._v(" unit test, two actions occur: a "),g("em",[e._v("create")]),e._v(", and a "),g("em",[e._v("move")]),e._v(". However, in the setup of this test you do not create blocks but "),g("em",[e._v("only")]),e._v(" hit your keeper. Therefore the context collects events but does not flush them. This is why you need to test only for the latter attributes, and verify an array slice that discards events that originate from the "),g("em",[e._v("create")]),e._v(" action: "),g("code",[e._v("event.Attributes[6:]")]),e._v(". This gives the following test:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UGxheU1vdmVFbWl0dGVkKHQgKnRlc3RpbmcuVCkgewogICAgbXNnU2VydmVyLCBfLCBjb250ZXh0IDo9IHNldHVwTXNnU2VydmVyV2l0aE9uZUdhbWVGb3JQbGF5TW92ZSh0KQogICAgbXNnU2VydmVyLlBsYXlNb3ZlKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnUGxheU1vdmV7CiAgICAgICAgQ3JlYXRvcjogY2Fyb2wsCiAgICAgICAgSWRWYWx1ZTogJnF1b3Q7MSZxdW90OywKICAgICAgICBGcm9tWDogICAxLAogICAgICAgIEZyb21ZOiAgIDIsCiAgICAgICAgVG9YOiAgICAgMiwKICAgICAgICBUb1k6ICAgICAzLAogICAgfSkKICAgIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjb250ZXh0KQogICAgcmVxdWlyZS5Ob3ROaWwodCwgY3R4KQogICAgZXZlbnRzIDo9IHNkay5TdHJpbmdpZnlFdmVudHMoY3R4LkV2ZW50TWFuYWdlcigpLkFCQ0lFdmVudHMoKSkKICAgIHJlcXVpcmUuTGVuKHQsIGV2ZW50cywgMSkKICAgIGV2ZW50IDo9IGV2ZW50c1swXQogICAgcmVxdWlyZS5FcXVhbCh0LCBldmVudC5UeXBlLCAmcXVvdDttZXNzYWdlJnF1b3Q7KQogICAgcmVxdWlyZS5FcXVhbFZhbHVlcyh0LCBbXXNkay5BdHRyaWJ1dGV7CiAgICAgICAge0tleTogJnF1b3Q7bW9kdWxlJnF1b3Q7LCBWYWx1ZTogJnF1b3Q7Y2hlY2tlcnMmcXVvdDt9LAogICAgICAgIHtLZXk6ICZxdW90O2FjdGlvbiZxdW90OywgVmFsdWU6ICZxdW90O01vdmVQbGF5ZWQmcXVvdDt9LAogICAgICAgIHtLZXk6ICZxdW90O0NyZWF0b3ImcXVvdDssIFZhbHVlOiBjYXJvbH0sCiAgICAgICAge0tleTogJnF1b3Q7SWRWYWx1ZSZxdW90OywgVmFsdWU6ICZxdW90OzEmcXVvdDt9LAogICAgICAgIHtLZXk6ICZxdW90O0NhcHR1cmVkWCZxdW90OywgVmFsdWU6ICZxdW90Oy0xJnF1b3Q7fSwKICAgICAgICB7S2V5OiAmcXVvdDtDYXB0dXJlZFkmcXVvdDssIFZhbHVlOiAmcXVvdDstMSZxdW90O30sCiAgICAgICAge0tleTogJnF1b3Q7V2lubmVyJnF1b3Q7LCBWYWx1ZTogJnF1b3Q7KiZxdW90O30sCiAgICB9LCBldmVudC5BdHRyaWJ1dGVzWzY6XSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/6c16e72d/x/checkers/keeper/msg_server_play_move_test.go#L127-L152"}}),e._v(" "),g("h2",{attrs:{id:"interact-with-the-cli"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-the-cli"}},[e._v("#")]),e._v(" Interact with the CLI")]),e._v(" "),g("p",[e._v("Bob made a move. Will Alice's move emit an event?")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMCA1IDEgNCAtLWZyb20gJGFsaWNlCg=="}}),e._v(" "),g("p",[e._v("The log is longer and not very readable, but the expected elements are present:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtQbGF5TW92ZSZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDttb2R1bGUmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y2hlY2tlcnMmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7YWN0aW9uJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O01vdmVQbGF5ZWQmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7Q3JlYXRvciZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtjb3Ntb3MxZ21sMDVudmxocjBrMjd1bmFzOG1qODI3ejZtNzdsaGZwenpyM2wmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7SWRWYWx1ZSZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDswJnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O0NhcHR1cmVkWCZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDstMSZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDtDYXB0dXJlZFkmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7LTEmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7V2lubmVyJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90OyomcXVvdDt9XX1dfV0nCg=="}}),e._v(" "),g("p",[e._v("To parse the events and display them in a more user-friendly way, take the "),g("code",[e._v("txhash")]),e._v(" again:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgdHggNTMxRTU3MDhBMUVGQkUwOEQxNEFCRjk0N0ZCQzg4OEJGQzY5Q0Q2RjA0QTU4OUQ0NzgyMDRCRjNCQTg5MUFCNyAtLW91dHB1dCBqc29uIHwganEgJnF1b3Q7LnJhd19sb2cgfCBmcm9tanNvbiZxdW90Owo="}}),e._v(" "),g("p",[e._v("This returns something like:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"WwogIHsKICAgICZxdW90O2V2ZW50cyZxdW90OzogWwogICAgICB7CiAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7bWVzc2FnZSZxdW90OywKICAgICAgICAmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7YWN0aW9uJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7UGxheU1vdmUmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7bW9kdWxlJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Y2hlY2tlcnMmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7YWN0aW9uJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7TW92ZVBsYXllZCZxdW90OwogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtDcmVhdG9yJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Y29zbW9zMXI4MG5zODQ5NmVoZTczZGQ3MHIzcm5yMDd0azIzbWh1MndtdzY2JnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0lkVmFsdWUmcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0NhcHR1cmVkWCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90Oy0xJnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0NhcHR1cmVkWSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90Oy0xJnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O1dpbm5lciZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90OyomcXVvdDsKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIF0KICB9Cl0K"}}),e._v(" "),g("p",[e._v("As you can see, no pieces were captured. However, it turns out that Alice placed her piece ready to be captured by Bob:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuU3RvcmVkR2FtZS5nYW1lJnF1b3Q7IHwgc2VkICdzLyZxdW90Oy8vZycgfCBzZWQgJ3MvfC9cJyQnXG4vZycK"}}),e._v(" "),g("p",[e._v("Which prints:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"KmIqYipiKmIKYipiKmIqYioKKioqYipiKmIKKipiKioqKioKKnIqKioqKioKKipyKnIqcioKKnIqcipyKnIKcipyKnIqcioK"}}),e._v(" "),g("p",[e._v("The rules of the game included in this project mandate that the player captures a piece when possible. So Bob captures the piece:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMiAzIDAgNSAtLWZyb20gJGJvYgo="}}),e._v(" "),g("p",[e._v("This returns:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtQbGF5TW92ZSZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDttb2R1bGUmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y2hlY2tlcnMmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7YWN0aW9uJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O01vdmVQbGF5ZWQmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7Q3JlYXRvciZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtjb3Ntb3MxdzB1dW1sajA0ZXl2ZXZoZmF3YXNtMmR0amMyNG5leHh5Z3I4cXgmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7SWRWYWx1ZSZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDswJnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O0NhcHR1cmVkWCZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDsxJnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O0NhcHR1cmVkWSZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDs0JnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O1dpbm5lciZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDsqJnF1b3Q7fV19XX1dJwo="}}),e._v(" "),g("p",[e._v("When formatted for clarity, you see the following::")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"WwogIHsKICAgICZxdW90O2V2ZW50cyZxdW90OzogWwogICAgICB7CiAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7bWVzc2FnZSZxdW90OywKICAgICAgICAmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7YWN0aW9uJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7UGxheU1vdmUmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7bW9kdWxlJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Y2hlY2tlcnMmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7YWN0aW9uJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7TW92ZVBsYXllZCZxdW90OwogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtDcmVhdG9yJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Y29zbW9zMXcwdXVtbGowNGV5dmV2aGZhd2FzbTJkdGpjMjRuZXh4eWdyOHF4JnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0lkVmFsdWUmcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0NhcHR1cmVkWCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7Q2FwdHVyZWRZJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7NCZxdW90OwogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtXaW5uZXImcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDsqJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXQogICAgICB9CiAgICBdCiAgfQpdCg=="}}),e._v(" "),g("p",[e._v("Correct: Bob captured a piece and the board now looks like this:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"KmIqYipiKmIKYipiKmIqYioKKioqYipiKmIKKioqKioqKioKKioqKioqKioKYipyKnIqcioKKnIqcipyKnIKcipyKnIqcioK"}}),e._v(" "),g("p",[e._v("This confirms that the "),g("em",[e._v("play")]),e._v(" event is emitted as expected. You can do the same for the "),g("em",[e._v("game created")]),e._v(" event.")]),e._v(" "),g("h2",{attrs:{id:"next-up"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),g("p",[e._v("Time to add a third message to make it possible for a player to "),g("RouterLink",{attrs:{to:"/academy/3-my-own-chain/reject-game.html"}},[e._v("reject a game")]),e._v(" and to make your checkers blockchain more resistant to spam.")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);