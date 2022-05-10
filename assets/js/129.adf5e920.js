(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{732:function(e,o,t){"use strict";t.r(o);var n=t(0),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"transport-authentication-and-ordering-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transport-authentication-and-ordering-layer"}},[e._v("#")]),e._v(" Transport, Authentication, and Ordering Layer")]),e._v(" "),t("p",[e._v("Now that you covered the introduction and have a better understanding of how different Inter-Blockchain Communication (IBC) Protocol components and Interchain Standards (ICS) relate to each other, take a deep dive into IBC/TAO (transport, authentication, and ordering) and the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC module"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),t("p",[e._v("If you want to connect two blockchains with IBC, you will need to establish an IBC "),t("strong",[e._v("connection")]),e._v(". Connections, established by a four-way handshake, are responsible for: 1) establishing the identity of the counterparty chain, and 2) preventing a malicious entity from forging incorrect information by pretending to be the counter party chain. IBC connections are established by on-chain ledger code and therefore do not require interaction with off-chain (trusted) third-party processes.")]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("The connection semantics are described in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-003-connection-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Standard (ICS) 3"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("In the IBC stack, connections are built on top of clients, so technically there could be multiple connections for each client if the client is interacting with multiple versions of the IBC protocol. For now, the setup should connote one connection for each client.")]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[t("strong",[e._v("Version Negotiation")])]),e._v(" "),t("p",[e._v("Note that versioning here refers to the IBC protocol spec and not the ibc-go module. A backwards incompatible update is currently not planned.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVyc2lvbiBkZWZpbmVzIHRoZSB2ZXJzaW9uaW5nIHNjaGVtZSB1c2VkIHRvIG5lZ290aWF0ZSB0aGUgSUJDIHZlcmlzb24gaW4KLy8gdGhlIGNvbm5lY3Rpb24gaGFuZHNoYWtlLgp0eXBlIFZlcnNpb24gc3RydWN0IHsKCS8vIHVuaXF1ZSB2ZXJzaW9uIGlkZW50aWZpZXIKCUlkZW50aWZpZXIgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPWlkZW50aWZpZXIscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7aWRlbnRpZmllcixvbWl0ZW1wdHkmcXVvdDtgCgkvLyBsaXN0IG9mIGZlYXR1cmVzIGNvbXBhdGlibGUgd2l0aCB0aGUgc3BlY2lmaWVkIGlkZW50aWZpZXIKCUZlYXR1cmVzIFtdc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLHJlcCxuYW1lPWZlYXR1cmVzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2ZlYXR1cmVzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),e._v(" "),t("p",[e._v("Protocol versioning is important to establish, as different protocol versions may not be compatible due to, for example, proofs being stored on a different path. There are three types of protocol version negotiation:")]),e._v(" "),t("ol",[t("li",[t("p",[t("em",[e._v("Default, no selection")]),e._v(" only one protocol version is supported, this is the default one to propose.")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("With selection")]),e._v(" two protocol versions can be proposed, such that the chain initiating "),t("code",[e._v("OpenInit")]),e._v(" or "),t("code",[e._v("OpenTry")]),e._v(" has a choice of which version to go with.")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("Impossible communication")]),e._v(" backwards incompatible IBC protocol version -- ie: if IBC module changes where it stores its proofs (proof paths), errors out. So far, there are no plans to upgrade to a backwards incompatible IBC protocol version.")])])])],1),e._v(" "),t("p",[e._v("As discussed above, the opening handshake protocol allows each chain to verify the identifier used to reference the connection on the other chain, enabling modules on each chain to reason about the reference of the other chain.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/ibc/images/connectionstate.png"}})],1),e._v(" "),t("p",[e._v("With regards to the connection on the other side, the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/connection/v1/connection.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("connection protobufs"),t("OutboundLink")],1),e._v(" contain the "),t("code",[e._v("Counterparty")]),e._v(" definition:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Ly8gQ291bnRlcnBhcnR5IGRlZmluZXMgdGhlIGNvdW50ZXJwYXJ0eSBjaGFpbiBhc3NvY2lhdGVkIHdpdGggYSBjb25uZWN0aW9uIGVuZC4KbWVzc2FnZSBDb3VudGVycGFydHkgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgLy8gaWRlbnRpZmllcyB0aGUgY2xpZW50IG9uIHRoZSBjb3VudGVycGFydHkgY2hhaW4gYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4KICAvLyBjb25uZWN0aW9uLgogIHN0cmluZyBjbGllbnRfaWQgPSAxIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2NsaWVudF9pZFwmcXVvdDsmcXVvdDtdOwogIC8vIGlkZW50aWZpZXMgdGhlIGNvbm5lY3Rpb24gZW5kIG9uIHRoZSBjb3VudGVycGFydHkgY2hhaW4gYXNzb2NpYXRlZCB3aXRoIGEKICAvLyBnaXZlbiBjb25uZWN0aW9uLgogIHN0cmluZyBjb25uZWN0aW9uX2lkID0gMiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjb25uZWN0aW9uX2lkXCZxdW90OyZxdW90O107CiAgLy8gY29tbWl0bWVudCBtZXJrbGUgcHJlZml4IG9mIHRoZSBjb3VudGVycGFydHkgY2hhaW4uCiAgaWJjLmNvcmUuY29tbWl0bWVudC52MS5NZXJrbGVQcmVmaXggcHJlZml4ID0gMyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0K"}}),e._v(" "),t("p",[e._v("In this definition, "),t("code",[e._v("connection-id")]),e._v(" is used to as a key to map and retrieve connections associated with a certain client from the store.")]),e._v(" "),t("p",[t("code",[e._v("prefix")]),e._v(" is being used by the clients to construct merkle prefix paths which are then used to verify proofs.")]),e._v(" "),t("p",[t("strong",[e._v("Connection Handshakes and States")])]),e._v(" "),t("p",[e._v("Establishing an IBC connection between example chain A and chain B requires four handshakes. A high level overview of a successful four-way handshake:")]),e._v(" "),t("p",[t("strong",[e._v("OpenInit")])]),e._v(" "),t("p",[e._v("The first handshake is "),t("code",[e._v("OpenInit")]),e._v(", which takes care of initialising any connection which may occur, while still necessitating agreement from both sides. You can think about it as a sort of identifying announcement from the IBC module on chain A which is submitted by a relayer. The relayer should also submit an "),t("code",[e._v("UpdateClient")]),e._v(" with chain A as the source chain before this handshake. "),t("code",[e._v("UpdateClient")]),e._v(" will update the client on the initialising chain A with the latest consensus state of chain B.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/ibc/images/open_init.png"}})],1),e._v(" "),t("p",[e._v("The initiation of this handshake from chain A will lead a connection state update to "),t("code",[e._v("INIT")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("OpenInit")]),e._v(" proposes a protocol version to be used for the IBC connection. A relayer-submitted "),t("code",[e._v("OpenInit")]),e._v(" which contains a protocol version that is not supported by chain A will be expected to fail.")]),e._v(" "),t("insert",{attrs:{image:"",here:""}},[t("p",[e._v("In the code, you can find the reference implementation for the connection handshake in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection/keeper/handshake.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC module repository"),t("OutboundLink")],1),e._v(". In it take a look at "),t("code",[e._v("ConnOpenInit")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIENvbm5PcGVuSW5pdCgKICBjdHggc2RrLkNvbnRleHQsCiAgY2xpZW50SUQgc3RyaW5nLAogIGNvdW50ZXJwYXJ0eSB0eXBlcy5Db3VudGVycGFydHksIC8vIGNvdW50ZXJwYXJ0eVByZWZpeCwgY291bnRlcnBhcnR5Q2xpZW50SWRlbnRpZmllcgogIHZlcnNpb24gKnR5cGVzLlZlcnNpb24sCiAgZGVsYXlQZXJpb2QgdWludDY0LAopIChzdHJpbmcsIGVycm9yKSB7CiAgCiAgLi4uCgogIC8vIGNvbm5lY3Rpb24gZGVmaW5lcyBjaGFpbiBBJ3MgQ29ubmVjdGlvbkVuZAogIGNvbm5lY3Rpb25JRCA6PSBrLkdlbmVyYXRlQ29ubmVjdGlvbklkZW50aWZpZXIoY3R4KQogIGNvbm5lY3Rpb24gOj0gdHlwZXMuTmV3Q29ubmVjdGlvbkVuZCh0eXBlcy5JTklULCBjbGllbnRJRCwgY291bnRlcnBhcnR5LCB0eXBlcy5FeHBvcnRlZFZlcnNpb25zVG9Qcm90byh2ZXJzaW9ucyksIGRlbGF5UGVyaW9kKQogIGsuU2V0Q29ubmVjdGlvbihjdHgsIGNvbm5lY3Rpb25JRCwgY29ubmVjdGlvbikKCiAgaWYgZXJyIDo9IGsuYWRkQ29ubmVjdGlvblRvQ2xpZW50KGN0eCwgY2xpZW50SUQsIGNvbm5lY3Rpb25JRCk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgfQoKICBrLkxvZ2dlcihjdHgpLkluZm8oJnF1b3Q7Y29ubmVjdGlvbiBzdGF0ZSB1cGRhdGVkJnF1b3Q7LCAmcXVvdDtjb25uZWN0aW9uLWlkJnF1b3Q7LCBjb25uZWN0aW9uSUQsICZxdW90O3ByZXZpb3VzLXN0YXRlJnF1b3Q7LCAmcXVvdDtOT05FJnF1b3Q7LCAmcXVvdDtuZXctc3RhdGUmcXVvdDssICZxdW90O0lOSVQmcXVvdDspCgogIGRlZmVyIGZ1bmMoKSB7CiAgICB0ZWxlbWV0cnkuSW5jckNvdW50ZXIoMSwgJnF1b3Q7aWJjJnF1b3Q7LCAmcXVvdDtjb25uZWN0aW9uJnF1b3Q7LCAmcXVvdDtvcGVuLWluaXQmcXVvdDspCiAgfSgpCgogIEVtaXRDb25uZWN0aW9uT3BlbkluaXRFdmVudChjdHgsIGNvbm5lY3Rpb25JRCwgY2xpZW50SUQsIGNvdW50ZXJwYXJ0eSkKCiAgcmV0dXJuIGNvbm5lY3Rpb25JRCwgbmlsCn0KCg=="}}),e._v(" "),t("p",[e._v("This function creates an unique "),t("code",[e._v("connectionID")]),e._v(". You can see that it adds the connection to a list, which represents the connections associated with a specific client.")]),e._v(" "),t("p",[e._v("Also you can see how it creates a new "),t("code",[e._v("ConnectionEnd")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CiBjb25uZWN0aW9uIDo9IHR5cGVzLk5ld0Nvbm5lY3Rpb25FbmQodHlwZXMuSU5JVCwgY2xpZW50SUQsIGNvdW50ZXJwYXJ0eSwgdHlwZXMuRXhwb3J0ZWRWZXJzaW9uc1RvUHJvdG8odmVyc2lvbnMpLCBkZWxheVBlcmlvZCkKICBrLlNldENvbm5lY3Rpb24oY3R4LCBjb25uZWN0aW9uSUQsIGNvbm5lY3Rpb24pCiAgCi8vIENvbm5lY3Rpb25FbmQgZGVmaW5lcyBhIHN0YXRlZnVsIG9iamVjdCBvbiBhIGNoYWluIGNvbm5lY3RlZCB0byBhbm90aGVyIHNlcGFyYXRlIG9uZS4KLy8gTk9URTogdGhlcmUgbXVzdCBvbmx5IGJlIDIgZGVmaW5lZCBDb25uZWN0aW9uRW5kcyB0byBlc3RhYmxpc2gKLy8gYSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIGNoYWlucywgc28gdGhlIGNvbm5lY3Rpb25zIGFyZSBtYXBwZWQgYW5kIHN0b3JlZCBhcyBgQ29ubmVjdGlvbkVuZGAgb24gdGhlIHJlc3BlY3RpdmUgY2hhaW5zLgptZXNzYWdlIENvbm5lY3Rpb25FbmQgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKICAvLyBjbGllbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29ubmVjdGlvbi4KICBzdHJpbmcgY2xpZW50X2lkID0gMSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjbGllbnRfaWRcJnF1b3Q7JnF1b3Q7XTsKICAvLyBJQkMgdmVyc2lvbiB3aGljaCBjYW4gYmUgdXRpbGlzZWQgdG8gZGV0ZXJtaW5lIGVuY29kaW5ncyBvciBwcm90b2NvbHMgZm9yCiAgLy8gY2hhbm5lbHMgb3IgcGFja2V0cyB1dGlsaXNpbmcgdGhpcyBjb25uZWN0aW9uLgogIHJlcGVhdGVkIFZlcnNpb24gdmVyc2lvbnMgPSAyOwogIC8vIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbm5lY3Rpb24gZW5kLgogIFN0YXRlIHN0YXRlID0gMzsKICAvLyBjb3VudGVycGFydHkgY2hhaW4gYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29ubmVjdGlvbi4KICBDb3VudGVycGFydHkgY291bnRlcnBhcnR5ID0gNCBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CiAgLy8gZGVsYXkgcGVyaW9kIHRoYXQgbXVzdCBwYXNzIGJlZm9yZSBhIGNvbnNlbnN1cyBzdGF0ZSBjYW4gYmUgdXNlZCBmb3IKICAvLyBwYWNrZXQtdmVyaWZpY2F0aW9uIE5PVEU6IGRlbGF5IHBlcmlvZCBsb2dpYyBpcyBvbmx5IGltcGxlbWVudGVkIGJ5IHNvbWUKICAvLyBjbGllbnRzLgogIHVpbnQ2NCBkZWxheV9wZXJpb2QgPSA1IFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2RlbGF5X3BlcmlvZFwmcXVvdDsmcXVvdDtdOwp9Cg=="}}),e._v(" "),t("p",[t("code",[e._v("ConnOpenInit")]),e._v(" is triggered by the "),t("strong",[e._v("relayer")]),e._v(", which constructs the message and hands it over to the SDK that uses the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/keeper/msg_server.go",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("msg_server.go")]),t("OutboundLink")],1),e._v(" you saw before to call "),t("code",[e._v("ConnOpenInit")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ci8vIENvbm5lY3Rpb25PcGVuSW5pdCBkZWZpbmVzIGEgcnBjIGhhbmRsZXIgbWV0aG9kIGZvciBNc2dDb25uZWN0aW9uT3BlbkluaXQuCmZ1bmMgKGsgS2VlcGVyKSBDb25uZWN0aW9uT3BlbkluaXQoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKmNvbm5lY3Rpb250eXBlcy5Nc2dDb25uZWN0aW9uT3BlbkluaXQpICgqY29ubmVjdGlvbnR5cGVzLk1zZ0Nvbm5lY3Rpb25PcGVuSW5pdFJlc3BvbnNlLCBlcnJvcikgewogIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkKCiAgaWYgXywgZXJyIDo9IGsuQ29ubmVjdGlvbktlZXBlci5Db25uT3BlbkluaXQoY3R4LCBtc2cuQ2xpZW50SWQsIG1zZy5Db3VudGVycGFydHksIG1zZy5WZXJzaW9uLCBtc2cuRGVsYXlQZXJpb2QpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKGVyciwgJnF1b3Q7Y29ubmVjdGlvbiBoYW5kc2hha2Ugb3BlbiBpbml0IGZhaWxlZCZxdW90OykKICB9CgogIHJldHVybiAmYW1wO2Nvbm5lY3Rpb250eXBlcy5Nc2dDb25uZWN0aW9uT3BlbkluaXRSZXNwb25zZXt9LCBuaWwKfQo="}}),e._v(" "),t("p",[t("strong",[e._v("OpenTry")])]),e._v(" "),t("p",[e._v("This "),t("code",[e._v("OpenInit")]),e._v(" will be followed by an "),t("code",[e._v("OpenTry")]),e._v(" response. in which chain B will verify the identity of chain A according to information that chain B has about chain A in its light client (the algorithm and the last snapshot of the consensus state containing the root hash of the latest height as well as the next validator set), as well as respond to some of the information about its own identity in the "),t("code",[e._v("OpenInit")]),e._v(" announcement from chain A.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/ibc/images/open_try.png"}})],1),e._v(" "),t("p",[e._v("The purpose of this step of the handshake is double verification: not only for chain B to verify that the counterparty chain A is indeed the expected counterparty identity, but also to verify that the counterparty has the accurate information about chain B's identity. The relayer will also submit two "),t("code",[e._v("UpdateClient")]),e._v("s with chain A and chain B as source chains before this handshake. These "),t("code",[e._v("UpdateClient")]),e._v(" will update both chain A and chain B light clients, in order to make sure that the state verifications in this step are successful.")]),e._v(" "),t("p",[e._v("The initiation of this handshake from chain B will lead a chain B connection state update to "),t("code",[e._v("TRY")]),e._v(".")]),e._v(" "),t("p",[e._v("With regards to IBC protocol versioning, "),t("code",[e._v("OpenTry")]),e._v(" either accepts the protocol version which has been proposed in "),t("code",[e._v("OpenInit")]),e._v(", or proposes another protocol version from chain A's avaiable versions to be used for the IBC connection. A relayer-submitted "),t("code",[e._v("OpenTry")]),e._v(" which contains an unsupported protocol version will be expected to fail.")]),e._v(" "),t("insert",{attrs:{image:""}},[t("p",[e._v("The implementation of OpenTry looks like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29ubk9wZW5UcnkgcmVsYXlzIG5vdGljZSBvZiBhIGNvbm5lY3Rpb24gYXR0ZW1wdCBvbiBjaGFpbiBBIHRvIGNoYWluIEIgKHRoaXMKLy8gY29kZSBpcyBleGVjdXRlZCBvbiBjaGFpbiBCKS4KLy8KLy8gTk9URToKLy8gIC0gSGVyZSBjaGFpbiBBIGFjdHMgYXMgdGhlIGNvdW50ZXJwYXJ0eQovLyAgLSBJZGVudGlmaWVycyBhcmUgY2hlY2tlZCBvbiBtc2cgdmFsaWRhdGlvbgpmdW5jIChrIEtlZXBlcikgQ29ubk9wZW5UcnkoCiAgY3R4IHNkay5Db250ZXh0LAogIHByZXZpb3VzQ29ubmVjdGlvbklEIHN0cmluZywgLy8gcHJldmlvdXNJZGVudGlmaWVyCiAgY291bnRlcnBhcnR5IHR5cGVzLkNvdW50ZXJwYXJ0eSwgLy8gY291bnRlcnBhcnR5Q29ubmVjdGlvbklkZW50aWZpZXIsIGNvdW50ZXJwYXJ0eVByZWZpeCBhbmQgY291bnRlcnBhcnR5Q2xpZW50SWRlbnRpZmllcgogIGRlbGF5UGVyaW9kIHVpbnQ2NCwKICBjbGllbnRJRCBzdHJpbmcsIC8vIGNsaWVudElEIG9mIGNoYWluQQogIGNsaWVudFN0YXRlIGV4cG9ydGVkLkNsaWVudFN0YXRlLCAvLyBjbGllbnRTdGF0ZSB0aGF0IGNoYWluQSBoYXMgZm9yIGNoYWluQgogIGNvdW50ZXJwYXJ0eVZlcnNpb25zIFtdZXhwb3J0ZWQuVmVyc2lvbiwgLy8gc3VwcG9ydGVkIHZlcnNpb25zIG9mIGNoYWluIEEKICBwcm9vZkluaXQgW11ieXRlLCAvLyBwcm9vZiB0aGF0IGNoYWluQSBzdG9yZWQgY29ubmVjdGlvbkVuZCBpbiBzdGF0ZSAob24gQ29ubk9wZW5Jbml0KQogIHByb29mQ2xpZW50IFtdYnl0ZSwgLy8gcHJvb2YgdGhhdCBjaGFpbkEgc3RvcmVkIGEgbGlnaHQgY2xpZW50IG9mIGNoYWluQgogIHByb29mQ29uc2Vuc3VzIFtdYnl0ZSwgLy8gcHJvb2YgdGhhdCBjaGFpbkEgc3RvcmVkIGNoYWluQidzIGNvbnNlbnN1cyBzdGF0ZSBhdCBjb25zZW5zdXMgaGVpZ2h0CiAgcHJvb2ZIZWlnaHQgZXhwb3J0ZWQuSGVpZ2h0LCAvLyBoZWlnaHQgYXQgd2hpY2ggcmVsYXllciBjb25zdHJ1Y3RzIHByb29mIG9mIEEgc3RvcmluZyBjb25uZWN0aW9uRW5kIGluIHN0YXRlCiAgY29uc2Vuc3VzSGVpZ2h0IGV4cG9ydGVkLkhlaWdodCwgLy8gbGF0ZXN0IGhlaWdodCBvZiBjaGFpbiBCIHdoaWNoIGNoYWluIEEgaGFzIHN0b3JlZCBpbiBpdHMgY2hhaW4gQiBjbGllbnQKKSAuLi4K"}}),e._v(" "),t("p",[t("strong",[e._v("OpenAck")])]),e._v(" "),t("p",[t("code",[e._v("OpenAck")]),e._v(" is the third handshake in establishing a connection, and is very similar to the functionality of "),t("code",[e._v("OpenInit")]),e._v(" except that the information verification is occurring from chain A. As in "),t("code",[e._v("OpenTry")]),e._v(", the relayer will also submit two "),t("code",[e._v("UpdateClient")]),e._v("s with chain A and chain B as source chains before this handshake. These "),t("code",[e._v("UpdateClient")]),e._v(" will update both chain A and chain B light clients, in order to make sure that the state verifications in this step are successful.")]),e._v(" "),t("p",[t("a",{attrs:{href:"/academy/ibc/images/open_ack.png"}},[e._v("OpenAck")])]),e._v(" "),t("p",[e._v("The initiation of this handshake from chain A will lead a chain A connection state update to "),t("code",[e._v("OPEN")]),e._v(". It is important to note that for this connection state update, the counterparty chain "),t("em",[e._v("MUST")]),e._v(" have a "),t("code",[e._v("TRY")]),e._v(" connection state in order for the handshake and update to be successful.")]),e._v(" "),t("p",[e._v("With regards to version negotiation, "),t("code",[e._v("OpenAck")]),e._v(" must confirm the protocol version which has been proposed in "),t("code",[e._v("OpenTry")]),e._v(", or end the connection handshake process if the version is unwanted or unsupported.")]),e._v(" "),t("insert",{attrs:{image:""}},[t("p",[e._v("Note that the code for "),t("code",[e._v("OpenAck")]),e._v(" looks very similar to "),t("code",[e._v("OpenTry")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIENvbm5PcGVuQWNrKAogIGN0eCBzZGsuQ29udGV4dCwKICBjb25uZWN0aW9uSUQgc3RyaW5nLAogIGNsaWVudFN0YXRlIGV4cG9ydGVkLkNsaWVudFN0YXRlLCAvLyBjbGllbnQgc3RhdGUgZm9yIGNoYWluQSBvbiBjaGFpbkIKICB2ZXJzaW9uICp0eXBlcy5WZXJzaW9uLCAvLyB2ZXJzaW9uIHRoYXQgQ2hhaW5CIGNob3NlIGluIENvbm5PcGVuVHJ5CiAgY291bnRlcnBhcnR5Q29ubmVjdGlvbklEIHN0cmluZywKICBwcm9vZlRyeSBbXWJ5dGUsIC8vIHByb29mIHRoYXQgY29ubmVjdGlvbkVuZCB3YXMgYWRkZWQgdG8gQ2hhaW5CIHN0YXRlIGluIENvbm5PcGVuVHJ5CiAgcHJvb2ZDbGllbnQgW11ieXRlLCAvLyBwcm9vZiBvZiBjbGllbnQgc3RhdGUgb24gY2hhaW5CIGZvciBjaGFpbkEKICBwcm9vZkNvbnNlbnN1cyBbXWJ5dGUsIC8vIHByb29mIHRoYXQgY2hhaW5CIGhhcyBzdG9yZWQgQ29uc2Vuc3VzU3RhdGUgb2YgY2hhaW5BIG9uIGl0cyBjbGllbnQKICBwcm9vZkhlaWdodCBleHBvcnRlZC5IZWlnaHQsIC8vIGhlaWdodCB0aGF0IHJlbGF5ZXIgY29uc3RydWN0ZWQgcHJvb2ZUcnkKICBjb25zZW5zdXNIZWlnaHQgZXhwb3J0ZWQuSGVpZ2h0LCAvLyBsYXRlc3QgaGVpZ2h0IG9mIGNoYWluQSB0aGF0IGNoYWluQiBoYXMgc3RvcmVkIG9uIGl0cyBjaGFpbkEgY2xpZW50CikgLi4uCg=="}}),e._v(" "),t("p",[e._v("Both functions will do the same checks, except that "),t("code",[e._v("OpenTry")]),e._v(" will take "),t("code",[e._v("proofInit")]),e._v(" as a parameter, and "),t("code",[e._v("OpenAck")]),e._v(" takes "),t("code",[e._v("proofTry")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CiAgLy8gVGhpcyBmdW5jdGlvbiB2ZXJpZmllcyB0aGF0IHRoZSBzbmFwc2hvdCB3ZSBoYXZlIG9mIHRoZSBjb3VudGVyLXBhcnR5IGNoYWluIGxvb2tzIGxpa2UgdGhlIGNvdW50ZXItcGFydHkgY2hhaW4sIHZlcmlmaWVzIHRoZSBsaWdodCBjbGllbnQgd2UgaGF2ZSBvZiB0aGUgY291bnRlci1wYXJ0eSBjaGFpbgogIC8vIENoZWNrIHRoYXQgQ2hhaW5BIGNvbW1pdHRlZCBleHBlY3RlZENvbm5lY3Rpb25FbmQgdG8gaXRzIHN0YXRlCiAgaWYgZXJyIDo9IGsuVmVyaWZ5Q29ubmVjdGlvblN0YXRlKAogICAgY3R4LCBjb25uZWN0aW9uLCBwcm9vZkhlaWdodCwgcHJvb2ZUcnksIGNvdW50ZXJwYXJ0eS5Db25uZWN0aW9uSWQsCiAgICBleHBlY3RlZENvbm5lY3Rpb24sCiAgKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gJnF1b3Q7JnF1b3Q7LCBlcnIKICB9CgogIC8vIFRoaXMgZnVuY3Rpb24gdmVyaWZpZXMgdGhhdCB0aGUgc25hcHNob3QgdGhlIGNvdW50ZXItcGFydHkgY2hhaW4gaGFzIG9mIHVzIGxvb2tzIGxpa2UgdXMsIHZlcmlmaWVzIG91ciBsaWdodCBjbGllbnQgb24gdGhlIGNvdW50ZXItcGFydHkgY2hhaW4KICAvLyBDaGVjayB0aGF0IENoYWluQSBzdG9yZWQgdGhlIGNsaWVudFN0YXRlIHByb3ZpZGVkIGluIHRoZSBtc2cKICBpZiBlcnIgOj0gay5WZXJpZnlDbGllbnRTdGF0ZShjdHgsIGNvbm5lY3Rpb24sIHByb29mSGVpZ2h0LCBwcm9vZkNsaWVudCwgY2xpZW50U3RhdGUpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgogIH0KCiAgLy8gVGhpcyBmdW5jdGlvbiB2ZXJpZmllcyB0aGF0IHRoZSBzbmFwc2hvdCB0aGUgY291bnRlci1wYXJ0eSBjaGFpbiBoYXMgb2YgdXMgbG9va3MgbGlrZSB1cywgdmVyaWZpZXMgb3VyIGxpZ2h0IGNsaWVudCBvbiB0aGUgY291bnRlci1wYXJ0eSBjaGFpbgogIC8vIENoZWNrIHRoYXQgQ2hhaW5BIHN0b3JlZCB0aGUgY29ycmVjdCBDb25zZW5zdXNTdGF0ZSBvZiBjaGFpbkIgYXQgdGhlIGdpdmVuIGNvbnNlbnN1c0hlaWdodAogIGlmIGVyciA6PSBrLlZlcmlmeUNsaWVudENvbnNlbnN1c1N0YXRlKAogICAgY3R4LCBjb25uZWN0aW9uLCBwcm9vZkhlaWdodCwgY29uc2Vuc3VzSGVpZ2h0LCBwcm9vZkNvbnNlbnN1cywgZXhwZWN0ZWRDb25zZW5zdXNTdGF0ZSwKICApOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgogIH0K"}}),e._v(" "),t("p",[e._v("so both will verify the "),t("code",[e._v("ConnectionState")]),e._v(", the "),t("code",[e._v("ClientState")]),e._v(" and the "),t("code",[e._v("ConsensusState")]),e._v(" of the other chain. Note again that after this step, the connection state on chain A will update from "),t("code",[e._v("INIT")]),e._v(" to "),t("code",[e._v("OPEN")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("OpenConfirm")])]),e._v(" "),t("p",[t("code",[e._v("OpenConfirm")]),e._v(" is the fourth and final handshake, in which chain B confirms that both self-identification and counterparty identification were successful.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/ibc/images/open_confirm.png"}})],1),e._v(" "),t("p",[e._v("The conclusion of this handshake results in the successful establishing of an IBC connection:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIENvbm5PcGVuQ29uZmlybSgKCWN0eCBzZGsuQ29udGV4dCwKCWNvbm5lY3Rpb25JRCBzdHJpbmcsCglwcm9vZkFjayBbXWJ5dGUsIC8vIHByb29mIHRoYXQgY29ubmVjdGlvbiBvcGVuZWQgb24gQ2hhaW5BIGR1cmluZyBDb25uT3BlbkFjawoJcHJvb2ZIZWlnaHQgZXhwb3J0ZWQuSGVpZ2h0LCAvLyBoZWlnaHQgdGhhdCByZWxheWVyIGNvbnN0cnVjdGVkIHByb29mQWNrCikK"}}),e._v(" "),t("p",[e._v("The initiation of this handshake from chain B will lead a chain B connection state update from "),t("code",[e._v("TRY")]),e._v(" to "),t("code",[e._v("OPEN")]),e._v(". For this connection state update, the counterparty chain "),t("em",[e._v("MUST")]),e._v(" have an "),t("code",[e._v("OPEN")]),e._v(" connection state in order for the handshake and update to be successful.")]),e._v(" "),t("insert",{attrs:{image:""}},[t("p",[t("strong",[e._v("Crossing Hellos")])]),e._v(" "),t("p",[e._v('"Crossing Hellos" refers to a situation when both chains attempt the same handshake step at the same time.')]),e._v(" "),t("p",[e._v("If both chains submit "),t("code",[e._v("OpenInit")]),e._v(" then "),t("code",[e._v("OpenTry")]),e._v(" at same time, there should be no error. In this case, both sides will need to confirm with an "),t("code",[e._v("OpenAck")]),e._v(", and then no "),t("code",[e._v("OpenConfirm")]),e._v(" is required because both ConnectionEnds will be in state OPEN after the successful "),t("code",[e._v("OpenAck")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("An Imposter")])]),e._v(" "),t("p",[e._v("An attempted "),t("code",[e._v("OpenInit")]),e._v(" from an imposter will fail on "),t("code",[e._v("OpenTry")]),e._v(" because it will not contain valid proofs of Client/Connection/ConsensusState.")])])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=a.exports}}]);