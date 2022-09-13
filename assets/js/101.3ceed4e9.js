(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{711:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"message-handler-create-and-save-a-game-properly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-handler-create-and-save-a-game-properly"}},[e._v("#")]),e._v(" Message Handler - Create and Save a Game Properly")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You have Go installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with "),a("code",[e._v("MsgCreateGame")]),e._v(" created by Ignite CLI. If not, follow the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/create-message.html"}},[e._v("previous steps")]),e._v(" and check out "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/create-game-msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Make use of the rules of checkers.")]),e._v(" "),a("li",[e._v("Update the message handler to create a game and return its ID.")])])]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/create-message.html"}},[e._v("previous section")]),e._v(", you added the message to create a game along with its serialization and dedicated gRPC function with the help of Ignite CLI.")],1),e._v(" "),a("p",[e._v("However, it does not create a game yet because you have not implemented the message handling. How would you do this?")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("Dwell on the following questions to guide you in the exercise:")]),e._v(" "),a("ul",[a("li",[e._v("How do you sanitize your inputs?")]),e._v(" "),a("li",[e._v("How do you avoid conflicts with past and future games?")]),e._v(" "),a("li",[e._v("How do you use your files that implement the Checkers rules?")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("ul",[a("li",[e._v("No Ignite CLI is involved here, it is just Go.")]),e._v(" "),a("li",[e._v("Of course, you need to know where to put your code - look for "),a("code",[e._v("TODO")]),e._v(".")]),e._v(" "),a("li",[e._v("How would you unit-test this message handling?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("p",[e._v("For now, do not bother with niceties like gas metering or event emission.")]),e._v(" "),a("p",[e._v("You must add code that:")]),e._v(" "),a("ul",[a("li",[e._v("Creates a brand new game.")]),e._v(" "),a("li",[e._v("Saves it in storage.")]),e._v(" "),a("li",[e._v("Returns the ID of the new game.")])]),e._v(" "),a("p",[e._v("Ignite CLI isolated this concern into a separate file, "),a("code",[e._v("x/checkers/keeper/msg_server_create_game.go")]),e._v(", for you to edit:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIENyZWF0ZUdhbWUoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ0NyZWF0ZUdhbWUpICgqdHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQogICAgLy8gVE9ETzogSGFuZGxpbmcgdGhlIG1lc3NhZ2UKICAgIF8gPSBjdHgKICAgIHJldHVybiAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWVSZXNwb25zZXt9LCBuaWwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/keeper/msg_server_create_game.go#L10-L17"}}),e._v(" "),a("p",[e._v("Ignite CLI has conveniently created all the message processing code for you. You are only required to code the key features.")]),e._v(" "),a("h2",{attrs:{id:"coding-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-steps"}},[e._v("#")]),e._v(" Coding steps")]),e._v(" "),a("p",[e._v("Given that you have already done a lot of preparatory work, what coding is involved? How do you replace "),a("code",[e._v("// TODO: Handling the message")]),e._v("?")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("First, "),a("code",[e._v("rules")]),e._v(" represents the ready-made file with the imported rules of the game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2dpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9ydWxlcyZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L7"}})],1),e._v(" "),a("li",[a("p",[e._v("Get the new game's ID with the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/system_info.go#L17",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.GetSystemInfo")]),a("OutboundLink")],1),e._v(" function created by the "),a("code",[e._v("ignite scaffold single systemInfo...")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3lzdGVtSW5mbywgZm91bmQgOj0gay5LZWVwZXIuR2V0U3lzdGVtSW5mbyhjdHgpCmlmICFmb3VuZCB7CiAgICBwYW5pYygmcXVvdDtTeXN0ZW1JbmZvIG5vdCBmb3VuZCZxdW90OykKfQpuZXdJbmRleCA6PSBzdHJjb252LkZvcm1hdFVpbnQoc3lzdGVtSW5mby5OZXh0SWQsIDEwKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L15-L19"}}),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("You panic if you cannot find the "),a("code",[e._v("SystemInfo")]),e._v(" object because there is no way to continue if it is not there. It is not like a user error, which would warrant returning an error.")])])],1),e._v(" "),a("li",[a("p",[e._v("Create the object to be stored:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bmV3R2FtZSA6PSBydWxlcy5OZXcoKQpzdG9yZWRHYW1lIDo9IHR5cGVzLlN0b3JlZEdhbWV7CiAgICBJbmRleDogbmV3SW5kZXgsCiAgICBCb2FyZDogbmV3R2FtZS5TdHJpbmcoKSwKICAgIFR1cm46ICBydWxlcy5QaWVjZVN0cmluZ3NbbmV3R2FtZS5UdXJuXSwKICAgIEJsYWNrOiBtc2cuQmxhY2ssCiAgICBSZWQ6ICAgbXNnLlJlZCwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L21-L28"}}),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Note the use of:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/rules/checkers.go#L122",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("rules.New()")]),a("OutboundLink")],1),e._v(" command, which is part of the Checkers rules file you imported earlier.")]),e._v(" "),a("li",[e._v("The string content of the "),a("code",[e._v("msg *types.MsgCreateGame")]),e._v(", namely "),a("code",[e._v(".Black")]),e._v(" and "),a("code",[e._v(".Red")]),e._v(".")])]),e._v(" "),a("p",[e._v("Also note that you lose the information about the creator. If your design is different, you may want to keep this information.")])])],1),e._v(" "),a("li",[a("p",[e._v("Confirm that the values in the object are correct by checking the validity of the players' addresses:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXJyIDo9IHN0b3JlZEdhbWUuVmFsaWRhdGUoKQppZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBuaWwsIGVycgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L30-L33"}}),e._v(" "),a("p",[a("code",[e._v(".Red")]),e._v(", and "),a("code",[e._v(".Black")]),e._v(" need to be checked because they were copied as "),a("strong",[e._v("strings")]),e._v(". You do not need to check "),a("code",[e._v(".Creator")]),e._v(" because at this stage the message's signatures have been verified, and the creator is the signer.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Note that by returning an error, instead of calling "),a("code",[e._v("panic")]),e._v(", players cannot stall your blockchain. They can still spam but at a cost, because they will still pay the gas fee up to this point.")])])],1),e._v(" "),a("li",[a("p",[e._v("Save the "),a("code",[e._v("StoredGame")]),e._v(" object using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/stored_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetStoredGame")]),a("OutboundLink")],1),e._v(" function created by the "),a("code",[e._v("ignite scaffold map storedGame...")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ay5LZWVwZXIuU2V0U3RvcmVkR2FtZShjdHgsIHN0b3JlZEdhbWUpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L35"}})],1),e._v(" "),a("li",[a("p",[e._v("Prepare the ground for the next game using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/system_info.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetSystemInfo")]),a("OutboundLink")],1),e._v(" function created by Ignite CLI:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3lzdGVtSW5mby5OZXh0SWQrKwprLktlZXBlci5TZXRTeXN0ZW1JbmZvKGN0eCwgc3lzdGVtSW5mbykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L36-L37"}})],1),e._v(" "),a("li",[a("p",[e._v("Return the newly created ID for reference:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmV0dXJuICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlewogICAgR2FtZUluZGV4OiBuZXdJbmRleCwKfSwgbmlsCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game.go#L39-L41"}})],1)]),e._v(" "),a("p",[e._v("You just handled the "),a("em",[e._v("create game")]),e._v(" message by actually creating the game.")]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("Try the unit test you prepared in the previous section again:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3gvY2hlY2tlcnMva2VlcGVyCg=="}})],1)],1),e._v(" "),a("p",[e._v("This should fail with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"cGFuaWM6IFN5c3RlbUluZm8gbm90IGZvdW5kIFtyZWNvdmVyZWRdCiAgICAgICAgcGFuaWM6IFN5c3RlbUluZm8gbm90IGZvdW5kCi4uLgo="}}),e._v(" "),a("p",[e._v("Your keeper was initialized with an empty genesis. You must fix that one way or another.")]),e._v(" "),a("p",[e._v("You can fix this by always initializing the keeper with the default genesis. However such a default initialization may not always be desirable. So it is better to keep this default initialization closest to the tests. Copy the "),a("code",[e._v("setupMsgServer")]),e._v(" from "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_test.go#L13-L16",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("msg_server_test.go")]),a("OutboundLink")],1),e._v(" into your "),a("code",[e._v("msg_server_create_game_test.go")]),e._v(". Modify it to also return the keeper:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBzZXR1cE1zZ1NlcnZlckNyZWF0ZUdhbWUodCB0ZXN0aW5nLlRCKSAodHlwZXMuTXNnU2VydmVyLCBrZWVwZXIuS2VlcGVyLCBjb250ZXh0LkNvbnRleHQpIHsKICAgIGssIGN0eCA6PSBrZWVwZXJ0ZXN0LkNoZWNrZXJzS2VlcGVyKHQpCiAgICBjaGVja2Vycy5Jbml0R2VuZXNpcyhjdHgsICprLCAqdHlwZXMuRGVmYXVsdEdlbmVzaXMoKSkKICAgIHJldHVybiBrZWVwZXIuTmV3TXNnU2VydmVySW1wbCgqayksICprLCBzZGsuV3JhcFNES0NvbnRleHQoY3R4KQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L21-L25"}}),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Note the new import:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2dpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2VycyZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L8"}})],1),e._v(" "),a("p",[e._v("Run the tests again with the same command as before:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3gvY2hlY2tlcnMva2VlcGVyCg=="}})],1)],1),e._v(" "),a("p",[e._v("The error has changed to "),a("code",[e._v("Not equal")]),e._v(", and you need to adjust the expected value as per the default genesis:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmVxdWlyZS5FcXVhbFZhbHVlcyh0LCB0eXBlcy5Nc2dDcmVhdGVHYW1lUmVzcG9uc2V7CiAgICBHYW1lSW5kZXg6ICZxdW90OzEmcXVvdDssCn0sICpjcmVhdGVSZXNwb25zZSkK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L35-L37"}}),e._v(" "),a("p",[e._v("One unit test is good, but you can add more, in particular testing whether the values in storage are as expected when you create a single game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0Q3JlYXRlMUdhbWVIYXNTYXZlZCh0ICp0ZXN0aW5nLlQpIHsKICAgIG1zZ1NydnIsIGtlZXBlciwgY29udGV4dCA6PSBzZXR1cE1zZ1NlcnZlckNyZWF0ZUdhbWUodCkKICAgIG1zZ1NydnIuQ3JlYXRlR2FtZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgQmxhY2s6ICAgYm9iLAogICAgICAgIFJlZDogICAgIGNhcm9sLAogICAgfSkKICAgIHN5c3RlbUluZm8sIGZvdW5kIDo9IGtlZXBlci5HZXRTeXN0ZW1JbmZvKHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpKQogICAgcmVxdWlyZS5UcnVlKHQsIGZvdW5kKQogICAgcmVxdWlyZS5FcXVhbFZhbHVlcyh0LCB0eXBlcy5TeXN0ZW1JbmZvewogICAgICAgIE5leHRJZDogMiwKICAgIH0sIHN5c3RlbUluZm8pCiAgICBnYW1lMSwgZm91bmQxIDo9IGtlZXBlci5HZXRTdG9yZWRHYW1lKHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpLCAmcXVvdDsxJnF1b3Q7KQogICAgcmVxdWlyZS5UcnVlKHQsIGZvdW5kMSkKICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgdHlwZXMuU3RvcmVkR2FtZXsKICAgICAgICBJbmRleDogJnF1b3Q7MSZxdW90OywKICAgICAgICBCb2FyZDogJnF1b3Q7KmIqYipiKmJ8YipiKmIqYip8KmIqYipiKmJ8KioqKioqKip8KioqKioqKip8cipyKnIqcip8KnIqcipyKnJ8cipyKnIqciomcXVvdDssCiAgICAgICAgVHVybjogICZxdW90O2ImcXVvdDssCiAgICAgICAgQmxhY2s6IGJvYiwKICAgICAgICBSZWQ6ICAgY2Fyb2wsCiAgICB9LCBnYW1lMSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L40-L62"}}),e._v(" "),a("p",[e._v("Or when you "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L108-L133",target:"_blank",rel:"noopener noreferrer"}},[e._v("create 3"),a("OutboundLink")],1),e._v(" games. Other tests could include whether the "),a("em",[e._v("get all")]),e._v(" functionality works as expected after you have created "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L64-L80",target:"_blank",rel:"noopener noreferrer"}},[e._v("1 game"),a("OutboundLink")],1),e._v(", or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L187-L227",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", or if you create a game in a hypothetical "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L229-L258",target:"_blank",rel:"noopener noreferrer"}},[e._v("far future"),a("OutboundLink")],1),e._v(". Also add games with "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L82-L93",target:"_blank",rel:"noopener noreferrer"}},[e._v("badly formatted"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L95-L106",target:"_blank",rel:"noopener noreferrer"}},[e._v("missing input"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("Now you can also confirm that the transaction creates a game via the CLI. Start with:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gc2VydmUK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC0tbmFtZSBjaGVja2VycyAtdiAkKHB3ZCk6L2NoZWNrZXJzIC13IC9jaGVja2VycyBjaGVja2Vyc19pIGlnbml0ZSBjaGFpbiBzZXJ2ZQo="}})],1)],1),e._v(" "),a("p",[e._v("Send your transaction as you did in the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/create-message.html#interact-via-the-cli"}},[e._v("previous section")]),e._v(":")],1),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZSAtLWdhcyBhdXRvCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UgLS1nYXMgYXV0bwo="}})],1)],1),e._v(" "),a("p",[e._v("A first good sign is that the output "),a("code",[e._v("gas_used")]),e._v(" is slightly higher than it was before ("),a("code",[e._v('gas_used: "52498"')]),e._v("). After the transaction has been validated, confirm the current state.")]),e._v(" "),a("p",[e._v("Show the system info:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zeXN0ZW0taW5mbwo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3lzdGVtLWluZm8K"}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"U3lzdGVtSW5mbzoKICBuZXh0SWQ6ICZxdW90OzImcXVvdDsK"}}),e._v(" "),a("p",[e._v("List all stored games:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgbGlzdC1zdG9yZWQtZ2FtZQo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIGxpc3Qtc3RvcmVkLWdhbWUK"}})],1)],1),e._v(" "),a("p",[e._v("This returns a game at index "),a("code",[e._v("1")]),e._v(" as expected:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"cGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDswJnF1b3Q7CnN0b3JlZEdhbWU6Ci0gYmxhY2s6IGNvc21vczE2OW1jOHFxZDZ0bHVlZDAwejIzZnM3NXR5ZWNmY2F6cHV3YXBjNAogIGJvYXJkOiAnKmIqYipiKmJ8YipiKmIqYip8KmIqYipiKmJ8KioqKioqKip8KioqKioqKip8cipyKnIqcip8KnIqcipyKnJ8cipyKnIqcionCiAgaW5kZXg6ICZxdW90OzEmcXVvdDsKICByZWQ6IGNvc21vczEwbXF5dmo1NWhtNHd1bnNkNjJ3cHJ3ZnY5ZWhjZXJrZmdoY2pmbAogIHR1cm46IGIK"}}),e._v(" "),a("p",[e._v("Show the new game alone:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"c3RvcmVkR2FtZToKICBibGFjazogY29zbW9zMTY5bWM4cXFkNnRsdWVkMDB6MjNmczc1dHllY2ZjYXpwdXdhcGM0CiAgYm9hcmQ6ICcqYipiKmIqYnxiKmIqYipiKnwqYipiKmIqYnwqKioqKioqKnwqKioqKioqKnxyKnIqcipyKnwqcipyKnIqcnxyKnIqcipyKicKICBpbmRleDogJnF1b3Q7MSZxdW90OwogIHJlZDogY29zbW9zMTBtcXl2ajU1aG00d3Vuc2Q2MndwcndmdjllaGNlcmtmZ2hjamZsCiAgdHVybjogYgo="}}),e._v(" "),a("p",[e._v("Now your game is in the blockchain's storage. Notice how "),a("code",[e._v("alice")]),e._v(" was given the black pieces and it is already her turn to play. As a note for the next sections, this is how to understand the board:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"KmIqYipiKmJ8YipiKmIqYip8KmIqYipiKmJ8KioqKioqKip8KioqKioqKip8cipyKnIqcip8KnIqcipyKnJ8cipyKnIqcioKICAgICAgICAgICAgICAgICAgIF5YOjEsWToyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlg6MyxZOjYK"}}),e._v(" "),a("p",[e._v("Or if placed in a square:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"WCAwMTIzNDU2NwogICpiKmIqYipiIDAKICBiKmIqYipiKiAxCiAgKmIqYipiKmIgMgogICoqKioqKioqIDMKICAqKioqKioqKiA0CiAgcipyKnIqciogNQogICpyKnIqcipyIDYKICByKnIqcipyKiA3CiAgICAgICAgICAgWQo="}}),e._v(" "),a("p",[e._v("You can also get this in a one-liner:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Linux",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuc3RvcmVkR2FtZS5ib2FyZCZxdW90OyB8IHNlZCAncy8mcXVvdDsvL2cnIHwgc2VkICdzL3wvXG4vZycK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSBcJnF1b3Q7LnN0b3JlZEdhbWUuYm9hcmRcJnF1b3Q7IHwgc2VkICdzL1wmcXVvdDsvL2cnIHwgc2VkICdzL3wvXG4vZycmcXVvdDsK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Mac"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuc3RvcmVkR2FtZS5ib2FyZCZxdW90OyB8IHNlZCAncy8mcXVvdDsvL2cnIHwgc2VkICdzL3wvXCckJ1xuL2cnCg=="}})],1)],1),e._v(" "),a("p",[e._v("When you are done with this exercise you can stop Ignite's "),a("code",[e._v("chain serve.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How to implement a Message Handler that will create a new game, save it in storage, and return its ID on receiving the appropriate prompt message.")]),e._v(" "),a("li",[e._v("How to create unit tests to demonstrate the validity of your code.")]),e._v(" "),a("li",[e._v("How to interact via the CLI to confirm that sending the appropriate transaction will successfully create a game.")])])]),e._v(" "),a("h2",{attrs:{id:"overview-of-upcoming-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-upcoming-content"}},[e._v("#")]),e._v(" Overview of upcoming content")]),e._v(" "),a("p",[e._v("You will learn how to modify this handling in later sections by:")]),e._v(" "),a("ul",[a("li",[e._v("Adding "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-fifo.html"}},[e._v("new fields")]),e._v(" to the stored information.")],1),e._v(" "),a("li",[e._v("Adding "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/events.html"}},[e._v("an event")]),e._v(".")],1),e._v(" "),a("li",[e._v("Consuming "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/gas-meter.html"}},[e._v("some gas")]),e._v(".")],1),e._v(" "),a("li",[e._v("Facilitating the eventual "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-forfeit.html"}},[e._v("deadline enforcement")]),e._v(".")],1),e._v(" "),a("li",[e._v("Adding "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-wager.html"}},[a("em",[e._v("money")])]),e._v(" handling, including "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/wager-denom.html"}},[e._v("foreign tokens")]),e._v(".")],1)])],1)}),[],!1,null,null,null);t.default=c.exports}}]);