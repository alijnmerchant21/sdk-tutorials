(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{711:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"message-handler-create-and-save-a-game-properly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-handler-create-and-save-a-game-properly"}},[e._v("#")]),e._v(" Message Handler - Create and Save a Game Properly")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You have Go installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with "),a("code",[e._v("MsgCreateGame")]),e._v(" created by Ignite CLI. If not, follow the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/create-message.html"}},[e._v("previous steps")]),e._v(" and check out "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/v1-create-game-msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Add application rules - the rules of checkers.")]),e._v(" "),a("li",[e._v("Add a Message Handler to create a game and return its ID.")])])]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/create-message.html"}},[e._v("previous section")]),e._v(", you added the message to create a game along with its serialization and dedicated gRPC function with the help of Ignite CLI.")],1),e._v(" "),a("p",[e._v("However, it does not create a game yet because you have not implemented the message handling. How would you do this?")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("Dwell on the following questions to guide you in the exercise:")]),e._v(" "),a("ul",[a("li",[e._v("How do you sanitize your inputs?")]),e._v(" "),a("li",[e._v("How do you avoid conflicts with past and future games?")]),e._v(" "),a("li",[e._v("How do you use your files that implement the Checkers rules?")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("ul",[a("li",[e._v("No Ignite CLI is involved here, it is just Go.")]),e._v(" "),a("li",[e._v("Of course, you need to know where to put your code - look for "),a("code",[e._v("TODO")]),e._v(".")]),e._v(" "),a("li",[e._v("How would you unit-test this message handling?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("p",[e._v("For now, do not bother with niceties like gas metering or event emission.")]),e._v(" "),a("p",[e._v("You must add code that:")]),e._v(" "),a("ul",[a("li",[e._v("Creates a brand new game.")]),e._v(" "),a("li",[e._v("Saves it in storage.")]),e._v(" "),a("li",[e._v("Returns the ID of the new game.")])]),e._v(" "),a("p",[e._v("Ignite CLI isolated this concern into a separate file, "),a("code",[e._v("x/checkers/keeper/msg_server_create_game.go")]),e._v(", for you to edit:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIENyZWF0ZUdhbWUoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ0NyZWF0ZUdhbWUpICgqdHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKICAgIC8vIFRPRE86IEhhbmRsaW5nIHRoZSBtZXNzYWdlCiAgICBfID0gY3R4CgogICAgcmV0dXJuICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNle30sIG5pbAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e78cba34926ba0adee23febb1ce44774e2c466b3/x/checkers/keeper/msg_server_create_game.go#L10-L17"}}),e._v(" "),a("p",[e._v("Ignite CLI has conveniently created all the message processing code for you. You are only required to code the key features.")]),e._v(" "),a("h2",{attrs:{id:"coding-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-steps"}},[e._v("#")]),e._v(" Coding steps")]),e._v(" "),a("p",[e._v("Given that you have already done a lot of preparatory work, what coding is involved? How do you replace "),a("code",[e._v("// TODO: Handling the message")]),e._v("?")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("First, "),a("code",[e._v("rules")]),e._v(" represents the ready-made file with the imported rules of the game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgIHJ1bGVzICZxdW90O2dpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9ydWxlcyZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L8"}})],1)]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Get the new game's ID with the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/next_game.go#L17",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.GetNextGame")]),a("OutboundLink")],1),e._v(" function created by the "),a("code",[e._v("ignite scaffold single nextGame...")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bmV4dEdhbWUsIGZvdW5kIDo9IGsuS2VlcGVyLkdldE5leHRHYW1lKGN0eCkKaWYgIWZvdW5kIHsKICAgIHBhbmljKCZxdW90O05leHRHYW1lIG5vdCBmb3VuZCZxdW90OykKfQpuZXdJbmRleCA6PSBzdHJjb252LkZvcm1hdFVpbnQobmV4dEdhbWUuSWRWYWx1ZSwgMTApCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L15-L19"}})],1),e._v(" "),a("li",[a("p",[e._v("Create the object to be stored:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bmV3R2FtZSA6PSBydWxlcy5OZXcoKQpzdG9yZWRHYW1lIDo9IHR5cGVzLlN0b3JlZEdhbWV7CiAgICBDcmVhdG9yOiBtc2cuQ3JlYXRvciwKICAgIEluZGV4OiAgIG5ld0luZGV4LAogICAgR2FtZTogICAgbmV3R2FtZS5TdHJpbmcoKSwKICAgIFR1cm46ICAgIHJ1bGVzLlBpZWNlU3RyaW5nc1tuZXdHYW1lLlR1cm5dLAogICAgUmVkOiAgICAgbXNnLlJlZCwKICAgIEJsYWNrOiAgIG1zZy5CbGFjaywKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L20-L28"}}),e._v(" "),a("p",[e._v("Note the use of:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/rules/checkers.go#L122",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("rules.New()")]),a("OutboundLink")],1),e._v(" command, which is part of the Checkers rules file you imported earlier.")]),e._v(" "),a("li",[e._v("The string content of the "),a("code",[e._v("msg *types.MsgCreateGame")]),e._v(", namely "),a("code",[e._v(".Creator")]),e._v(", "),a("code",[e._v(".Red")]),e._v(", and "),a("code",[e._v(".Black")]),e._v(".")])])],1),e._v(" "),a("li",[a("p",[e._v("Confirm that the values in the object are correct by checking the validity of the players' addresses:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXJyIDo9IHN0b3JlZEdhbWUuVmFsaWRhdGUoKQppZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBuaWwsIGVycgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L29-L32"}}),e._v(" "),a("p",[a("code",[e._v(".Creator")]),e._v(", "),a("code",[e._v(".Red")]),e._v(", and "),a("code",[e._v(".Black")]),e._v(" need to be checked because they were copied as "),a("strong",[e._v("strings")]),e._v(". The check on "),a("code",[e._v(".Creator")]),e._v(" is redundant because at this stage the message's signatures have been verified, and the creator is the signer.")])],1),e._v(" "),a("li",[a("p",[e._v("Save the "),a("code",[e._v("StoredGame")]),e._v(" object using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/stored_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetStoredGame")]),a("OutboundLink")],1),e._v(" function created by the "),a("code",[e._v("ignite scaffold map storedGame...")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ay5LZWVwZXIuU2V0U3RvcmVkR2FtZShjdHgsIHN0b3JlZEdhbWUpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L33"}})],1),e._v(" "),a("li",[a("p",[e._v("Prepare the ground for the next game using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/next_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetNextGame")]),a("OutboundLink")],1),e._v(" function created by Ignite CLI:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bmV4dEdhbWUuSWRWYWx1ZSsrCmsuS2VlcGVyLlNldE5leHRHYW1lKGN0eCwgbmV4dEdhbWUpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L35-L36"}})],1),e._v(" "),a("li",[a("p",[e._v("Return the newly created ID for reference:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmV0dXJuICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlewogICAgSWRWYWx1ZTogbmV3SW5kZXgsCn0sIG5pbAo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game.go#L38-L40"}})],1)]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("Try the unit test you prepared in the previous section again:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}}),e._v(" "),a("p",[e._v("This should fail with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"cGFuaWM6IE5leHRHYW1lIG5vdCBmb3VuZCBbcmVjb3ZlcmVkXQogICAgICAgIHBhbmljOiBOZXh0R2FtZSBub3QgZm91bmQKLi4uCg=="}}),e._v(" "),a("p",[e._v("Your keeper was initialized with an empty genesis. You must fix that one way or another.")]),e._v(" "),a("p",[e._v("You can fix this by always initializing the keeper with the default genesis. However such a default initialization may not always be desirable. So it is better to keep this default initialization closest to the tests. Copy the "),a("code",[e._v("setupMsgServer")]),e._v(" from "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_test.go#L12-L15",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("msg_server_test.go")]),a("OutboundLink")],1),e._v(" into your "),a("code",[e._v("msg_server_create_game_test.go")]),e._v(". Modify it to also return the keeper:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBzZXR1cE1zZ1NlcnZlckNyZWF0ZUdhbWUodCB0ZXN0aW5nLlRCKSAodHlwZXMuTXNnU2VydmVyLCBrZWVwZXIuS2VlcGVyLCBjb250ZXh0LkNvbnRleHQpIHsKICAgIGssIGN0eCA6PSBzZXR1cEtlZXBlcih0KQogICAgY2hlY2tlcnMuSW5pdEdlbmVzaXMoY3R4LCAqaywgKnR5cGVzLkRlZmF1bHRHZW5lc2lzKCkpCiAgICByZXR1cm4ga2VlcGVyLk5ld01zZ1NlcnZlckltcGwoKmspLCAqaywgc2RrLldyYXBTREtDb250ZXh0KGN0eCkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L20-L24"}}),e._v(" "),a("p",[e._v("Note the new import:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2dpdGh1Yi5jb20veGF2aWVybGVwcmV0cmUvY2hlY2tlcnMveC9jaGVja2VycyZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L9"}}),e._v(" "),a("p",[e._v("Unfortunately, this created an import cycle. To fix that, use the better practice of suffixing "),a("code",[e._v("_test")]),e._v(" to the package of your test files:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXJfdGVzdAo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L1"}}),e._v(" "),a("p",[e._v("You should fix the package in all "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/grpc_query_next_game_test.go#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("the"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/grpc_query_stored_game_test.go#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("other"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/keeper_test.go#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("test"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_test.go#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("files"),a("OutboundLink")],1),e._v(" in your keeper folder. Afterward, run the tests again with the same command as before:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}}),e._v(" "),a("p",[e._v("The error has changed, and you need to adjust the expected value as per the default genesis:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmVxdWlyZS5FcXVhbFZhbHVlcyh0LCB0eXBlcy5Nc2dDcmVhdGVHYW1lUmVzcG9uc2V7CiAgICBJZFZhbHVlOiAmcXVvdDsxJnF1b3Q7LAp9LCAqY3JlYXRlUmVzcG9uc2UpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L34-L36"}}),e._v(" "),a("p",[e._v("One unit test is good, but you can add more, in particular testing whether the values in storage are as expected when you create a single game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0Q3JlYXRlMUdhbWVIYXNTYXZlZCh0ICp0ZXN0aW5nLlQpIHsKICAgIG1zZ1NydnIsIGtlZXBlciwgY29udGV4dCA6PSBzZXR1cE1zZ1NlcnZlckNyZWF0ZUdhbWUodCkKICAgIG1zZ1NydnIuQ3JlYXRlR2FtZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgUmVkOiAgICAgYm9iLAogICAgICAgIEJsYWNrOiAgIGNhcm9sLAogICAgfSkKICAgIG5leHRHYW1lLCBmb3VuZCA6PSBrZWVwZXIuR2V0TmV4dEdhbWUoc2RrLlVud3JhcFNES0NvbnRleHQoY29udGV4dCkpCiAgICByZXF1aXJlLlRydWUodCwgZm91bmQpCiAgICByZXF1aXJlLkVxdWFsVmFsdWVzKHQsIHR5cGVzLk5leHRHYW1lewogICAgICAgIENyZWF0b3I6ICZxdW90OyZxdW90OywKICAgICAgICBJZFZhbHVlOiAyLAogICAgfSwgbmV4dEdhbWUpCiAgICBnYW1lMSwgZm91bmQxIDo9IGtlZXBlci5HZXRTdG9yZWRHYW1lKHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpLCAmcXVvdDsxJnF1b3Q7KQogICAgcmVxdWlyZS5UcnVlKHQsIGZvdW5kMSkKICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgdHlwZXMuU3RvcmVkR2FtZXsKICAgICAgICBDcmVhdG9yOiBhbGljZSwKICAgICAgICBJbmRleDogICAmcXVvdDsxJnF1b3Q7LAogICAgICAgIEdhbWU6ICAgICZxdW90OypiKmIqYipifGIqYipiKmIqfCpiKmIqYipifCoqKioqKioqfCoqKioqKioqfHIqcipyKnIqfCpyKnIqcipyfHIqcipyKnIqJnF1b3Q7LAogICAgICAgIFR1cm46ICAgICZxdW90O2ImcXVvdDssCiAgICAgICAgUmVkOiAgICAgYm9iLAogICAgICAgIEJsYWNrOiAgIGNhcm9sLAogICAgfSwgZ2FtZTEpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L39-L62"}}),e._v(" "),a("p",[e._v("Or when you "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L109-L134",target:"_blank",rel:"noopener noreferrer"}},[e._v("create 3"),a("OutboundLink")],1),e._v(" games. Other tests could include whether the "),a("em",[e._v("get all")]),e._v(" functionality works as expected after you have created "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L64-L81",target:"_blank",rel:"noopener noreferrer"}},[e._v("1 game"),a("OutboundLink")],1),e._v(", or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L191-L234",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", or if you create a game in a hypothetical "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L236-L267",target:"_blank",rel:"noopener noreferrer"}},[e._v("far future"),a("OutboundLink")],1),e._v(". Also add games with "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L83-L94",target:"_blank",rel:"noopener noreferrer"}},[e._v("badly formatted"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b79a43c/x/checkers/keeper/msg_server_create_game_test.go#L96-L107",target:"_blank",rel:"noopener noreferrer"}},[e._v("missing input"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("Now you must confirm that the transaction creates a game. Start with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gc2VydmUK"}}),e._v(" "),a("p",[e._v("Send your transaction as you did in the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/create-message.html"}},[e._v("previous section")]),e._v(":")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZSAtLWdhcyBhdXRvCg=="}}),e._v(" "),a("p",[e._v("A good sign is that the output "),a("code",[e._v("gas_used")]),e._v(" is slightly higher than it was before ("),a("code",[e._v('gas_used: "50671"')]),e._v("). Confirm the current state:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Show next game",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1uZXh0LWdhbWUK"}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"TmV4dEdhbWU6CiAgY3JlYXRvcjogJnF1b3Q7JnF1b3Q7CiAgaWRWYWx1ZTogJnF1b3Q7MiZxdW90Owo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"List stored games"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgbGlzdC1zdG9yZWQtZ2FtZQo="}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"U3RvcmVkR2FtZToKLSBibGFjazogY29zbW9zMTRuNHFreGNwcjZ5Y2N0NzV6enAycjd2NnJtOTZ4aGtlZ3U1MjA1CiAgY3JlYXRvcjogY29zbW9zMXI4MG5zODQ5NmVoZTczZGQ3MHIzcm5yMDd0azIzbWh1MndtdzY2CiAgZ2FtZTogJypiKmIqYipifGIqYipiKmIqfCpiKmIqYipifCoqKioqKioqfCoqKioqKioqfHIqcipyKnIqfCpyKnIqcipyfHIqcipyKnIqJwogIGluZGV4OiAmcXVvdDsxJnF1b3Q7CiAgcmVkOiBjb3Ntb3MxcjgwbnM4NDk2ZWhlNzNkZDcwcjNybnIwN3RrMjNtaHUyd213NjYKICB0dXJuOiBibGFjawpwYWdpbmF0aW9uOgogIG5leHRfa2V5OiBudWxsCiAgdG90YWw6ICZxdW90OzAmcXVvdDsK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Show stored game"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"U3RvcmVkR2FtZToKICBibGFjazogY29zbW9zMTRuNHFreGNwcjZ5Y2N0NzV6enAycjd2NnJtOTZ4aGtlZ3U1MjA1CiAgY3JlYXRvcjogY29zbW9zMXI4MG5zODQ5NmVoZTczZGQ3MHIzcm5yMDd0azIzbWh1MndtdzY2CiAgZ2FtZTogJypiKmIqYipifGIqYipiKmIqfCpiKmIqYipifCoqKioqKioqfCoqKioqKioqfHIqcipyKnIqfCpyKnIqcipyfHIqcipyKnIqJwogIGluZGV4OiAmcXVvdDsxJnF1b3Q7CiAgcmVkOiBjb3Ntb3MxcjgwbnM4NDk2ZWhlNzNkZDcwcjNybnIwN3RrMjNtaHUyd213NjYKICB0dXJuOiBibGFjawo="}})],1)],1),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Now your game is in the blockchain's storage. Notice how "),a("code",[e._v("bob")]),e._v(" was given the black pieces and it is already his turn to play. As a note for the next sections, this is how to understand the board:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"KmIqYipiKmJ8YipiKmIqYip8KmIqYipiKmJ8KioqKioqKip8KioqKioqKip8cipyKnIqcip8KnIqcipyKnJ8cipyKnIqcioKICAgICAgICAgICAgICAgICAgIF5YOjEsWToyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlg6MyxZOjYK"}}),e._v(" "),a("p",[e._v("Or if placed in a square:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"WCAwMTIzNDU2NwogICpiKmIqYipiIDAKICBiKmIqYipiKiAxCiAgKmIqYipiKmIgMgogICoqKioqKioqIDMKICAqKioqKioqKiA0CiAgcipyKnIqciogNQogICpyKnIqcipyIDYKICByKnIqcipyKiA3CiAgICAgICAgICAgWQo="}}),e._v(" "),a("p",[e._v("You can also get this in a one-liner:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"On Linux",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuU3RvcmVkR2FtZS5nYW1lJnF1b3Q7IHwgc2VkICdzLyZxdW90Oy8vZycgfCBzZWQgJ3MvfC9cbi9nJwo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"On Mac"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuU3RvcmVkR2FtZS5nYW1lJnF1b3Q7IHwgc2VkICdzLyZxdW90Oy8vZycgfCBzZWQgJ3MvfC9cJyQnXG4vZycK"}})],1)],1),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("You will modify this handling in the next sections by:")]),e._v(" "),a("ul",[a("li",[e._v("Adding "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-fifo.html"}},[e._v("new fields")]),e._v(" to the stored information.")],1),e._v(" "),a("li",[e._v("Adding "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/events.html"}},[e._v("an event")]),e._v(".")],1),e._v(" "),a("li",[e._v("Consuming "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/gas-meter.html"}},[e._v("some gas")]),e._v(".")],1),e._v(" "),a("li",[e._v("Facilitating the eventual "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-forfeit.html"}},[e._v("deadline enforcement")]),e._v(".")],1),e._v(" "),a("li",[e._v("Adding "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-wager.html"}},[a("em",[e._v("money")])]),e._v(" handling, including "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/wager-denom.html"}},[e._v("foreign tokens")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Now that a game is created, it is time to play it by adding moves. That is the subject of the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/play-game.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);