(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{765:function(e,t,a){"use strict";a.r(t);var o=a(0),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"message-and-handler-add-a-way-to-make-a-move"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-and-handler-add-a-way-to-make-a-move"}},[e._v("#")]),e._v(" Message and Handler - Add a Way to Make a Move")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/transactions.html"}},[e._v("transactions")]),e._v(", "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("messages")]),e._v(", and "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with "),a("code",[e._v("MsgCreateGame")]),e._v(" and its handling. If not, follow the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/create-handling.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/create-game-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)]),e._v(" "),a("p",[e._v("In this section:")]),e._v(" "),a("ul",[a("li",[e._v("Extend message handling - play the game")]),e._v(" "),a("li",[e._v("Handle moves and update the game state")]),e._v(" "),a("li",[e._v("Validate input")]),e._v(" "),a("li",[e._v("Extend unit tests")])])]),e._v(" "),a("p",[e._v("To play a game a player only needs to specify:")]),e._v(" "),a("ul",[a("li",[e._v("The ID of the game the player wants to join. Call the field "),a("code",[e._v("idValue")]),e._v(".")]),e._v(" "),a("li",[e._v("The initial positions of the pawn. Call the fields "),a("code",[e._v("fromX")]),e._v(" and "),a("code",[e._v("fromY")]),e._v(" and make them "),a("code",[e._v("uint")]),e._v(".")]),e._v(" "),a("li",[e._v("The final position of the pawn after a player's move. Call the fields "),a("code",[e._v("toX")]),e._v(" and "),a("code",[e._v("toY")]),e._v(" to be "),a("code",[e._v("uint")]),e._v(" too.")])]),e._v(" "),a("p",[e._v("The player does not need to be explicitly added as a field in the message because the player "),a("strong",[e._v("is")]),e._v(" implicitly the signer of the message. Name the object "),a("code",[e._v("PlayMove")]),e._v(".")]),e._v(" "),a("p",[e._v("Unlike when creating the game, you want to return:")]),e._v(" "),a("ul",[a("li",[e._v("The game ID again. Call this field "),a("code",[e._v("idValue")]),e._v(".")]),e._v(" "),a("li",[e._v("The captured piece, if any. Call the fields "),a("code",[e._v("capturedX")]),e._v(" and "),a("code",[e._v("capturedY")]),e._v(".")]),e._v(" "),a("li",[e._v("The winner in the field "),a("code",[e._v("winner")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"with-ignite-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-ignite-cli"}},[e._v("#")]),e._v(" With Ignite CLI")]),e._v(" "),a("p",[e._v("Ignite CLI only creates a response object with a single field. You can update the object after Ignite CLI has run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSBwbGF5TW92ZSBpZFZhbHVlIGZyb21YOnVpbnQgZnJvbVk6dWludCB0b1g6dWludCB0b1k6dWludCAtLW1vZHVsZSBjaGVja2VycyAtLXJlc3BvbnNlIGlkVmFsdWUK"}}),e._v(" "),a("p",[e._v("Ignite CLI once more creates all the necessary Protobuf files and the boilerplate for you. All you have to do is:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Add the missing fields to the response in "),a("code",[e._v("proto/checkers/tx.proto")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dQbGF5TW92ZVJlc3BvbnNlIHsKICAgIHN0cmluZyBpZFZhbHVlID0gMTsKICAgIGludDY0IGNhcHR1cmVkWCA9IDI7CiAgICBpbnQ2NCBjYXB0dXJlZFkgPSAzOwogICAgc3RyaW5nIHdpbm5lciA9IDQ7Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/proto/checkers/tx.proto#L25-L30"}}),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("int64")]),e._v(" here so that you can enter "),a("code",[e._v("-1")]),e._v(" when no pawns have been captured.")])],1),e._v(" "),a("li",[a("p",[e._v("Fill in the needed part in "),a("code",[e._v("x/checkers/keeper/msg_server_play_move.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIFBsYXlNb3ZlKGdvQ3R4IGNvbnRleHQuQ29udGV4dCwgbXNnICp0eXBlcy5Nc2dQbGF5TW92ZSkgKCp0eXBlcy5Nc2dQbGF5TW92ZVJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKICAgIC8vIFRPRE86IEhhbmRsaW5nIHRoZSBtZXNzYWdlCiAgICBfID0gY3R4CgogICAgcmV0dXJuICZhbXA7dHlwZXMuTXNnUGxheU1vdmVSZXNwb25zZXt9LCBuaWwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/f52a673/x/checkers/keeper/msg_server_play_move.go#L10-L17"}}),e._v(" "),a("p",[e._v("Where the "),a("code",[e._v("TODO")]),e._v(" is replaced as per the following.")])],1)]),e._v(" "),a("h2",{attrs:{id:"the-move-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-move-handling"}},[e._v("#")]),e._v(" The move handling")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("rules")]),e._v(" represent the ready-made file containing the rules of the game you imported earlier. Declare them in "),a("code",[e._v("x/checkers/types/errors.go")]),e._v(", given your code has to handle new error situations:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"RXJyR2FtZU5vdFBhcnNlYWJsZSA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMTAzLCAmcXVvdDtnYW1lIGNhbm5vdCBiZSBwYXJzZWQmcXVvdDspCkVyckdhbWVOb3RGb3VuZCAgICAgPSBzZGtlcnJvcnMuUmVnaXN0ZXIoTW9kdWxlTmFtZSwgMTEwNCwgJnF1b3Q7Z2FtZSBieSBpZCBub3QgZm91bmQ6ICVzJnF1b3Q7KQpFcnJDcmVhdG9yTm90UGxheWVyID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMDUsICZxdW90O21lc3NhZ2UgY3JlYXRvciBpcyBub3QgYSBwbGF5ZXI6ICVzJnF1b3Q7KQpFcnJOb3RQbGF5ZXJUdXJuICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMDYsICZxdW90O3BsYXllciB0cmllZCB0byBwbGF5IG91dCBvZiB0dXJuOiAlcyZxdW90OykKRXJyV3JvbmdNb3ZlICAgICAgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMTA3LCAmcXVvdDt3cm9uZyBtb3ZlJnF1b3Q7KQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/types/errors.go#L14-L18"}}),e._v(" "),a("p",[e._v("Take the following steps to replace the "),a("code",[e._v("TODO")]),e._v(":")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Fetch the stored game information using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/stored_game.go#L17",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.GetStoredGame")]),a("OutboundLink")],1),e._v(" function created by Ignite CLI:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSwgZm91bmQgOj0gay5LZWVwZXIuR2V0U3RvcmVkR2FtZShjdHgsIG1zZy5JZFZhbHVlKQppZiAhZm91bmQgewogICAgcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXBmKHR5cGVzLkVyckdhbWVOb3RGb3VuZCwgJnF1b3Q7Z2FtZSBub3QgZm91bmQgJXMmcXVvdDssIG1zZy5JZFZhbHVlKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L16-L19"}})],1),e._v(" "),a("li",[a("p",[e._v("Is the player legitimate? Check with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aXNSZWQgOj0gc3RyaW5ncy5Db21wYXJlKHN0b3JlZEdhbWUuUmVkLCBtc2cuQ3JlYXRvcikgPT0gMAppc0JsYWNrIDo9IHN0cmluZ3MuQ29tcGFyZShzdG9yZWRHYW1lLkJsYWNrLCBtc2cuQ3JlYXRvcikgPT0gMAp2YXIgcGxheWVyIHJ1bGVzLlBsYXllcgppZiAhaXNSZWQgJmFtcDsmYW1wOyAhaXNCbGFjayB7CiAgICByZXR1cm4gbmlsLCB0eXBlcy5FcnJDcmVhdG9yTm90UGxheWVyCn0gZWxzZSBpZiBpc1JlZCAmYW1wOyZhbXA7IGlzQmxhY2sgewogICAgcGxheWVyID0gcnVsZXMuU3RyaW5nUGllY2VzW3N0b3JlZEdhbWUuVHVybl0uUGxheWVyCn0gZWxzZSBpZiBpc1JlZCB7CiAgICBwbGF5ZXIgPSBydWxlcy5SRURfUExBWUVSCn0gZWxzZSB7CiAgICBwbGF5ZXIgPSBydWxlcy5CTEFDS19QTEFZRVIKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L22-L33"}}),e._v(" "),a("p",[e._v("This uses the certainty that the "),a("code",[e._v("MsgPlayMove.Creator")]),e._v(" has been verified "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/types/message_play_move.go#L29-L35",target:"_blank",rel:"noopener noreferrer"}},[e._v("by its signature"),a("OutboundLink")],1),e._v(".")])],1),e._v(" "),a("li",[a("p",[e._v("Instantiate the board in order to implement the rules:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2FtZSwgZXJyIDo9IHN0b3JlZEdhbWUuUGFyc2VHYW1lKCkKaWYgZXJyICE9IG5pbCB7CiAgICBwYW5pYyhlcnIuRXJyb3IoKSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L36-L39"}}),e._v(" "),a("p",[e._v("Fortunately you previously created "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/types/full_game.go#L27-L37",target:"_blank",rel:"noopener noreferrer"}},[e._v("this helper"),a("OutboundLink")],1),e._v(".")])],1),e._v(" "),a("li",[a("p",[e._v("Is it the player's turn? Check using the rules file's own "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/175f467/x/checkers/rules/checkers.go#L145-L147",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("TurnIs")]),a("OutboundLink")],1),e._v(" function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgIWdhbWUuVHVybklzKHBsYXllcikgewogICAgcmV0dXJuIG5pbCwgdHlwZXMuRXJyTm90UGxheWVyVHVybgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L40-L42"}})],1),e._v(" "),a("li",[a("p",[e._v("Properly conduct the move, using the rules' "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/rules/checkers.go#L274-L301",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Move")]),a("OutboundLink")],1),e._v(" function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y2FwdHVyZWQsIG1vdmVFcnIgOj0gZ2FtZS5Nb3ZlKAogICAgcnVsZXMuUG9zewogICAgICAgIFg6IGludChtc2cuRnJvbVgpLAogICAgICAgIFk6IGludChtc2cuRnJvbVkpLAogICAgfSwKICAgIHJ1bGVzLlBvc3sKICAgICAgICBYOiBpbnQobXNnLlRvWCksCiAgICAgICAgWTogaW50KG1zZy5Ub1kpLAogICAgfSwKKQppZiBtb3ZlRXJyICE9IG5pbCB7CiAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYodHlwZXMuRXJyV3JvbmdNb3ZlLCBtb3ZlRXJyLkVycm9yKCkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L45-L57"}})],1),e._v(" "),a("li",[a("p",[e._v("Prepare the updated board to be stored and store the information:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZS5HYW1lID0gZ2FtZS5TdHJpbmcoKQpzdG9yZWRHYW1lLlR1cm4gPSBydWxlcy5QaWVjZVN0cmluZ3NbZ2FtZS5UdXJuXQprLktlZXBlci5TZXRTdG9yZWRHYW1lKGN0eCwgc3RvcmVkR2FtZSkK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L60-L62"}}),e._v(" "),a("p",[e._v("This updates the fields that were modified using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/stored_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetStoredGame")]),a("OutboundLink")],1),e._v(" function, as when you created and saved the game.")])],1),e._v(" "),a("li",[a("p",[e._v("Return relevant information regarding the move's result:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmV0dXJuICZhbXA7dHlwZXMuTXNnUGxheU1vdmVSZXNwb25zZXsKICAgIElkVmFsdWU6ICAgbXNnLklkVmFsdWUsCiAgICBDYXB0dXJlZFg6IGludDY0KGNhcHR1cmVkLlgpLAogICAgQ2FwdHVyZWRZOiBpbnQ2NChjYXB0dXJlZC5ZKSwKICAgIFdpbm5lcjogICAgZ2FtZS5XaW5uZXIoKS5Db2xvciwKfSwgbmlsCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move.go#L65-L70"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Captured")]),e._v(" and "),a("code",[e._v("Winner")]),e._v(" information would be lost if you do not do this. More accurately, one would have to replay the transaction to discover the values. Better to be a good citizen and make this information easily accessible.")])],1)]),e._v(" "),a("p",[e._v("This completes the move process, facilitated by good preparation and the use of Ignite CLI.")]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("Adding unit tests for this play message is very similar to what you did for the previous message: create a new "),a("code",[e._v("msg_server_play_move_test.go")]),e._v(" file and add to it. Start with a function that sets up the keeper as you prefer. In this case, already having a game saved can reduce several lines of code in each test:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBzZXR1cE1zZ1NlcnZlcldpdGhPbmVHYW1lRm9yUGxheU1vdmUodCB0ZXN0aW5nLlRCKSAodHlwZXMuTXNnU2VydmVyLCBrZWVwZXIuS2VlcGVyLCBjb250ZXh0LkNvbnRleHQpIHsKICAgIGssIGN0eCA6PSBzZXR1cEtlZXBlcih0KQogICAgY2hlY2tlcnMuSW5pdEdlbmVzaXMoY3R4LCAqaywgKnR5cGVzLkRlZmF1bHRHZW5lc2lzKCkpCiAgICBzZXJ2ZXIgOj0ga2VlcGVyLk5ld01zZ1NlcnZlckltcGwoKmspCiAgICBjb250ZXh0IDo9IHNkay5XcmFwU0RLQ29udGV4dChjdHgpCiAgICBzZXJ2ZXIuQ3JlYXRlR2FtZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgUmVkOiAgICAgYm9iLAogICAgICAgIEJsYWNrOiAgIGNhcm9sLAogICAgfSkKICAgIHJldHVybiBzZXJ2ZXIsICprLCBjb250ZXh0Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L15-L26"}}),e._v(" "),a("p",[e._v("Now test the result of a move:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UGxheU1vdmUodCAqdGVzdGluZy5UKSB7CiAgICBtc2dTZXJ2ZXIsIF8sIGNvbnRleHQgOj0gc2V0dXBNc2dTZXJ2ZXJXaXRoT25lR2FtZUZvclBsYXlNb3ZlKHQpCiAgICBwbGF5TW92ZVJlc3BvbnNlLCBlcnIgOj0gbXNnU2VydmVyLlBsYXlNb3ZlKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnUGxheU1vdmV7CiAgICAgICAgQ3JlYXRvcjogY2Fyb2wsCiAgICAgICAgSWRWYWx1ZTogJnF1b3Q7MSZxdW90OywKICAgICAgICBGcm9tWDogICAxLAogICAgICAgIEZyb21ZOiAgIDIsCiAgICAgICAgVG9YOiAgICAgMiwKICAgICAgICBUb1k6ICAgICAzLAogICAgfSkKICAgIHJlcXVpcmUuTmlsKHQsIGVycikKICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgdHlwZXMuTXNnUGxheU1vdmVSZXNwb25zZXsKICAgICAgICBJZFZhbHVlOiAgICZxdW90OzEmcXVvdDssCiAgICAgICAgQ2FwdHVyZWRYOiAtMSwKICAgICAgICBDYXB0dXJlZFk6IC0xLAogICAgICAgIFdpbm5lcjogICAgcnVsZXMuTk9fUExBWUVSLkNvbG9yLAogICAgfSwgKnBsYXlNb3ZlUmVzcG9uc2UpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L28-L45"}}),e._v(" "),a("p",[e._v("Also test whether the game was "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L71-L97",target:"_blank",rel:"noopener noreferrer"}},[e._v("saved correctly"),a("OutboundLink")],1),e._v(". Check what happens when players try to "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L99-L111",target:"_blank",rel:"noopener noreferrer"}},[e._v("play out of turn"),a("OutboundLink")],1),e._v(", or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L113-L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("make a wrong move"),a("OutboundLink")],1),e._v(". Check after "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L127-L188",target:"_blank",rel:"noopener noreferrer"}},[e._v("two"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/362ca660/x/checkers/keeper/msg_server_play_move_test.go#L190-L267",target:"_blank",rel:"noopener noreferrer"}},[e._v("three turns with a capture"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("With one game in storage and the game waiting for Bob's move, can Alice make a move? Look at the "),a("code",[e._v("play-move")]),e._v(" message and which parameters it accepts:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIC0taGVscAo="}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"QnJvYWRjYXN0IG1lc3NhZ2UgcGxheU1vdmUKClVzYWdlOgogIGNoZWNrZXJzZCB0eCBjaGVja2VycyBwbGF5LW1vdmUgW2lkVmFsdWVdIFtmcm9tWF0gW2Zyb21ZXSBbdG9YXSBbdG9ZXSBbZmxhZ3NdCi4uLgo="}}),e._v(" "),a("p",[e._v("So "),a("code",[e._v("Alice")]),e._v(" tries:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDAgMCA1IDEgNCAtLWZyb20gJGFsaWNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeIF4gXiBeIF4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgfCB8IHwgVG8gWQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB8IHwgVG8gWAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB8IEZyb20gWQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBGcm9tIFgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUgaWQK"}}),e._v(" "),a("p",[e._v("This includes:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiBwbGF5ZXIgdHJpZWQgdG8gcGxheSBvdXQgb2YKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybicKLi4uCnR4aGFzaDogRDEwQkI4QTcwNjg3MEY2NUYxOUU0REY0OEZCODcwRTRCN0Q1NUFGNDIzMkFFMEY2ODk3QzIzNDY2RkY3ODcxQgo="}}),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("If you did not get this "),a("code",[e._v("raw_log")]),e._v(", your transaction may have been sent asynchronously. You can always query a transaction by using the "),a("code",[e._v("txhash")]),e._v(" with the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgdHggRDEwQkI4QTcwNjg3MEY2NUYxOUU0REY0OEZCODcwRTRCN0Q1NUFGNDIzMkFFMEY2ODk3QzIzNDY2RkY3ODcxQgo="}}),e._v(" "),a("p",[e._v("And you are back on track:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiBwbGF5ZXIgdHJpZWQgdG8gcGxheSBvdXQgb2YKICB0dXJuJwo="}})],1),e._v(" "),a("p",[e._v("Can Bob, who plays "),a("em",[e._v("black")]),e._v(", make a move? Can he make a wrong move? For instance, a move from "),a("code",[e._v("0-1")]),e._v(" to "),a("code",[e._v("1-0")]),e._v(", which is occupied by one of his pieces.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDAgMSAwIDAgMSAtLWZyb20gJGJvYgo="}}),e._v(" "),a("p",[e._v("The computer says no:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiBBbHJlYWR5IHBpZWNlIGF0IGRlc3RpbmF0aW9uCiAgcG9zaXRpb246IHsxIDB9OiB3cm9uZyBtb3ZlJwo="}}),e._v(" "),a("p",[e._v("So far all seems to be working.")]),e._v(" "),a("p",[e._v("Time for Bob to make a correct move:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDAgMSAyIDIgMyAtLWZyb20gJGJvYgo="}}),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtQbGF5TW92ZSZxdW90O31dfV19XScK"}}),e._v(" "),a("p",[e._v("Confirm the move went through with your one-line formatter from the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/create-handling.html"}},[e._v("previous section")]),e._v(":")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAwIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuU3RvcmVkR2FtZS5nYW1lJnF1b3Q7IHwgc2VkICdzLyZxdW90Oy8vZycgfCBzZWQgJ3MvfC9cbi9nJwo="}}),e._v(" "),a("p",[e._v("This shows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"KmIqYipiKmIKYipiKmIqYioKKioqYipiKmIKKipiKioqKioKKioqKioqKioKcipyKnIqcioKKnIqcipyKnIKcipyKnIqcioK"}}),e._v(" "),a("p",[e._v("Bob's piece moved down and right.")]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("Before you add a third message to let a player "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/reject-game.html"}},[e._v("reject a game")]),e._v(", add events to the existing message handlers for relevant information. This is the object of the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/events.html"}},[e._v("next section")]),e._v(".")],1),e._v(" "),a("p",[e._v("If you want to skip ahead and see how you can assist a player in not submitting a transaction that would result in a failed move, you can "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/can-play.html"}},[e._v("create a query to test a move")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);