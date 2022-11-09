(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{751:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hermes-relayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hermes-relayer"}},[e._v("#")]),e._v(" Hermes Relayer")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Before you dive into Go relayers, make sure to:")]),e._v(" "),a("ul",[a("li",[e._v("Install Go.")]),e._v(" "),a("li",[e._v("Install Docker.")]),e._v(" "),a("li",[e._v("Install Rust.")])]),e._v(" "),a("p",[e._v("For all installations, please see the "),a("RouterLink",{attrs:{to:"/tutorials/2-setup/"}},[e._v("setup page")]),e._v(".")],1)]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will learn:")]),e._v(" "),a("ul",[a("li",[e._v("How to get started with the Hermes relayer.")]),e._v(" "),a("li",[e._v("Basic Hermes relayer commands.")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://hermes.informal.systems/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes"),a("OutboundLink")],1),e._v(" is an open-source Rust implementation of a relayer for the Inter-Blockchain Communication Protocol (IBC). Hermes is most widely used in production by relayer operators. It offers great logging and debugging options, but compared to the Go relayer may require some more detailed knowledge of IBC to use properly.")]),e._v(" "),a("HighlightBox",{attrs:{type:"docs"}},[a("p",[e._v("Installation instructions can be found "),a("a",{attrs:{href:"https://hermes.informal.systems/installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the Hermes documentation from Informal Systems"),a("OutboundLink")],1),e._v(". Check the CLI commands with "),a("code",[e._v("hermes -h")]),e._v(". Alternatively, check out the "),a("a",{attrs:{href:"https://hermes.informal.systems/commands/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("commands reference"),a("OutboundLink")],1),e._v(" on the Hermes website.\n"),a("br"),a("br"),e._v("\nRecently the Hermes relayer upgraded the major version to v1. This is the first stable release and contains loads of improvements which you can check out in the "),a("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/blob/master/CHANGELOG.md#v100",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),a("OutboundLink")],1),e._v(". It is recommended to use v1 or higher from this point forward, and the commands below assume you are using v1.x.y.")])]),e._v(" "),a("p",[e._v("If you type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgaGVscAo="}}),e._v(" "),a("p",[e._v("You get:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"aGVybWVzICZsdDt2ZXJzaW9uJmd0OwpJbmZvcm1hbCBTeXN0ZW1zICZsdDtoZWxsb0BpbmZvcm1hbC5zeXN0ZW1zJmd0OwogIEhlcm1lcyBpcyBhbiBJQkMgUmVsYXllciB3cml0dGVuIGluIFJ1c3QKClVTQUdFOgogICAgaGVybWVzIFtPUFRJT05TXSBbU1VCQ09NTUFORF0KCk9QVElPTlM6CiAgICAtYywgLS1jb25maWcgJmx0O0NPTkZJRyZndDsgICAgcGF0aCB0byBjb25maWd1cmF0aW9uIGZpbGUKICAgIC1oLCAtLWhlbHAgICAgICAgICAgICAgICBQcmludCBoZWxwIGluZm9ybWF0aW9uCiAgICAtaiwgLS1qc29uICAgICAgICAgICAgICAgZW5hYmxlIEpTT04gb3V0cHV0CiAgICAtViwgLS12ZXJzaW9uICAgICAgICAgICAgUHJpbnQgdmVyc2lvbiBpbmZvcm1hdGlvbgoKU1VCQ09NTUFORFM6CiAgICBjbGVhciAgICAgICAgICAgQ2xlYXIgb2JqZWN0cywgc3VjaCBhcyBvdXRzdGFuZGluZyBwYWNrZXRzIG9uIGEgY2hhbm5lbAogICAgY29uZmlnICAgICAgICAgIFZhbGlkYXRlIEhlcm1lcyBjb25maWd1cmF0aW9uIGZpbGUKICAgIGNyZWF0ZSAgICAgICAgICBDcmVhdGUgb2JqZWN0cyAoY2xpZW50LCBjb25uZWN0aW9uLCBvciBjaGFubmVsKSBvbiBjaGFpbnMKICAgIGhlYWx0aC1jaGVjayAgICBQZXJmb3JtcyBhIGhlYWx0aCBjaGVjayBvZiBhbGwgY2hhaW5zIGluIHRoZSB0aGUgY29uZmlnCiAgICBoZWxwICAgICAgICAgICAgUHJpbnQgdGhpcyBtZXNzYWdlIG9yIHRoZSBoZWxwIG9mIHRoZSBnaXZlbiBzdWJjb21tYW5kKHMpCiAgICBrZXlzICAgICAgICAgICAgTWFuYWdlIGtleXMgaW4gdGhlIHJlbGF5ZXIgZm9yIGVhY2ggY2hhaW4KICAgIGxpc3RlbiAgICAgICAgICBMaXN0ZW4gdG8gYW5kIGRpc3BsYXkgSUJDIGV2ZW50cyBlbWl0dGVkIGJ5IGEgY2hhaW4KICAgIG1pc2JlaGF2aW91ciAgICBMaXN0ZW4gdG8gY2xpZW50IHVwZGF0ZSBJQkMgZXZlbnRzIGFuZCBoYW5kbGVzIG1pc2JlaGF2aW91cgogICAgcXVlcnkgICAgICAgICAgIFF1ZXJ5IG9iamVjdHMgZnJvbSB0aGUgY2hhaW4KICAgIHN0YXJ0ICAgICAgICAgICBTdGFydCB0aGUgcmVsYXllciBpbiBtdWx0aS1jaGFpbiBtb2RlCiAgICB0eCAgICAgICAgICAgICAgQ3JlYXRlIGFuZCBzZW5kIElCQyB0cmFuc2FjdGlvbnMKICAgIHVwZGF0ZSAgICAgICAgICBVcGRhdGUgb2JqZWN0cyAoY2xpZW50cykgb24gY2hhaW5zCiAgICB1cGdyYWRlICAgICAgICAgVXBncmFkZSBvYmplY3RzIChjbGllbnRzKSBhZnRlciBjaGFpbiB1cGdyYWRlCiAgICBjb21wbGV0aW9ucyAgICAgR2VuZXJhdGUgYXV0by1jb21wbGV0ZSBzY3JpcHRzIGZvciBkaWZmZXJlbnQgc2hlbGxzCg=="}}),e._v(" "),a("p",[e._v("When comparing the list of commands with the requirements from the introduction, recognize the ability to query and submit a transaction (tx), keys management, and a config command. However, no immediate commands are available to add chains and path information. The Hermes relayer does not support fetching data from the "),a("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("chain-registry"),a("OutboundLink")],1),e._v(" automatically yet, but this is on the roadmap.")]),e._v(" "),a("p",[e._v("For now, you need to manually add the data to the config file "),a("code",[e._v("config.toml")]),e._v(", which is by default stored at "),a("code",[e._v("$HOME/.hermes/config.toml")]),e._v(".")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("The config is not added automatically. The first time you run Hermes, you will have to copy a template and paste it into the aforementioned folder.")])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://hermes.informal.systems/config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("config info"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://hermes.informal.systems/example-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("a sample configuration"),a("OutboundLink")],1),e._v(" for a detailed explanation on all aspects of the config. Take a closer look at the "),a("code",[e._v("[[chains]]")]),e._v(" section:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W1tjaGFpbnNdXQppZCA9ICdpYmMtMScKcnBjX2FkZHIgPSAnaHR0cDovLzEyNy4wLjAuMToyNjU1NycKZ3JwY19hZGRyID0gJ2h0dHA6Ly8xMjcuMC4wLjE6OTA5MScKd2Vic29ja2V0X2FkZHIgPSAnd3M6Ly8xMjcuMC4wLjE6MjY1NTcvd2Vic29ja2V0JwpycGNfdGltZW91dCA9ICcxMHMnCmFjY291bnRfcHJlZml4ID0gJ2Nvc21vcycKa2V5X25hbWUgPSAndGVzdGtleScKc3RvcmVfcHJlZml4ID0gJ2liYycKZGVmYXVsdF9nYXMgPSAxMDAwMDAKbWF4X2dhcyA9IDQwMDAwMApnYXNfcHJpY2UgPSB7IHByaWNlID0gMC4wMDEsIGRlbm9tID0gJ3N0YWtlJyB9Cmdhc19tdWx0aXBsaWVyID0gMS4xCm1heF9tc2dfbnVtID0gMzAKbWF4X3R4X3NpemUgPSAyMDk3MTUyCmNsb2NrX2RyaWZ0ID0gJzVzJwptYXhfYmxvY2tfdGltZSA9ICczMHMnCnRydXN0aW5nX3BlcmlvZCA9ICcxNGRheXMnCnRydXN0X3RocmVzaG9sZCA9IHsgbnVtZXJhdG9yID0gJzEnLCBkZW5vbWluYXRvciA9ICczJyB9CmFkZHJlc3NfdHlwZSA9IHsgZGVyaXZhdGlvbiA9ICdjb3Ntb3MnIH0K"}}),e._v(" "),a("p",[e._v("Pay particular attention to the "),a("code",[e._v("RPC")]),e._v(", "),a("code",[e._v("gRPC")]),e._v(", and "),a("code",[e._v("websocket")]),e._v(" endpoints and make sure they correspond with the node you are running. Remember that it is recommended to run your own full node instead of using publicly available endpoints when relaying outside of testing purposes. Also, make sure the "),a("code",[e._v("key_name")]),e._v(" corresponds to the funded address from which you intend to pay relayer fees. The other parameters can be found in the "),a("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("chain-registry"),a("OutboundLink")],1),e._v(" for deployed chains or set by yourself when creating a new chain (either in production or for testing).")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Hermes does not require path information in the config. By default, it will relay over all possible paths over all channels that are active on the configured chains. However, it is possible to change this by filtering. Add the following to the chain config:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W2NoYWlucy5wYWNrZXRfZmlsdGVyXQpwb2xpY3kgPSAnYWxsb3cnCmxpc3QgPSBbCiAgIFsndHJhbnNmZXInLCAnY2hhbm5lbC0xNDEnXSwgIyBvc21vc2lzLTEKXQo="}}),e._v(" "),a("p",[e._v("This filters only the "),a("code",[e._v("transfer")]),e._v(" channel for the Hub to Osmosis in this example.")])],1),e._v(" "),a("h3",{attrs:{id:"hermes-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hermes-start"}},[e._v("#")]),e._v(" Hermes start")]),e._v(" "),a("p",[e._v("When the chains have been configured, you can start the relayer with the start command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgc3RhcnQK"}}),e._v(" "),a("p",[e._v("This powerful command bundles a lot of functionality where Hermes will be listening or events signaling IBC packet send requests, submitting "),a("code",[e._v("ReceivePacket")]),e._v(" and "),a("code",[e._v("AcknowledgePacket")]),e._v(" messages, and periodically checking if the clients on serviced chains need updating. However, during the tutorials, it makes sense to look at the commands in a more granular way to understand what is going on.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("When starting the Hermes relayer, it will assume that the channels you wish to relay over are set up. This will be the case if you want to start relaying on an existing "),a("em",[e._v("canonical")]),e._v(" channel, meaning the official and agreed-upon channel (for example, used for fungible token transfers).\n"),a("br"),a("br"),e._v("\nThis is perfectly possible and the right approach, given that creating a new channel would make assets relayed over it non-fungible with assets relayed over the canonical channel. Most tutorials will create new channels (and possibly clients and connections) as this provides more insight into the software. However, it is "),a("strong",[e._v("important to note that you only need to create new channels if no canonical channel is present")]),e._v(" (for example, for a newly deployed chain).")])]),e._v(" "),a("h2",{attrs:{id:"testing-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-locally"}},[e._v("#")]),e._v(" Testing locally")]),e._v(" "),a("p",[e._v("The Hermes documentation provides a "),a("a",{attrs:{href:"https://hermes.informal.systems/tutorials/local-chains/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guided tutorial"),a("OutboundLink")],1),e._v(" to start relaying between two local "),a("code",[e._v("gaia")]),e._v(" chains. Furthermore, demos are available that spin up a Hermes relayer between two "),a("a",{attrs:{href:"https://docs.ignite.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ignite CLI"),a("OutboundLink")],1),e._v(" chains, like "),a("a",{attrs:{href:"https://github.com/informalsystems/hermes-hackatom-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("this one"),a("OutboundLink")],1),e._v(". Be sure to check those out.")]),e._v(" "),a("p",[e._v("Here you will use a "),a("code",[e._v("docker-compose")]),e._v(" network with two local "),a("code",[e._v("checkers")]),e._v(" chains and a relayer between them.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("The example presented is based on the demo in the "),a("a",{attrs:{href:"https://github.com/b9lab/cosmos-ibc-docker/tree/main/tokentransfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("b9lab/cosmos-ibc-docker"),a("OutboundLink")],1),e._v(" repository.")])]),e._v(" "),a("p",[e._v("Start by cloning the repository:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2I5bGFiL2Nvc21vcy1pYmMtZG9ja2VyLmdpdAo="}}),e._v(" "),a("p",[e._v("Then build the "),a("strong",[e._v("images for the checkers blockchain")]),e._v(" if you did not already do so in the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/4-ibc-adv/3-go-relayer.html"}},[e._v("Go Relayer")]),e._v(" section:")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCBjb3Ntb3MtaWJjLWRvY2tlci90b2tlbnRyYW5zZmVyL2NoZWNrZXJzCiQgLi9idWlsZC1pbWFnZXMuc2gK"}}),e._v(" "),a("p",[e._v("You can build the relayer image manually, or just start the network via "),a("code",[e._v("docker-compose")]),e._v(" and let it build the missing image for the "),a("code",[e._v("hermes")]),e._v(" relayer:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCBjb3Ntb3MtaWJjLWRvY2tlci90b2tlbnRyYW5zZmVyCiQgZG9ja2VyLWNvbXBvc2UgLWYgdG9rZW50cmFuc2Zlci55bWwgLS1wcm9maWxlIGhlcm1lcyB1cAo="}}),e._v(" "),a("p",[e._v("Observe the output of "),a("code",[e._v("docker-compose")]),e._v(" until the chains are ready - the chains will take some time.")]),e._v(" "),a("p",[e._v("When the chains are ready, go into the relayer container and run a bash:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgcmVsYXllciBiYXNoCg=="}}),e._v(" "),a("p",[e._v("First, check the Hermes version with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgdmVyc2lvbgo="}}),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("In this section, you have to run commands both inside the Docker container and on your local terminal. By default, coding examples will indicate the Docker terminal; a comment will inform you when you have to use the local terminal.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"remember"}},[a("p",[e._v("You can check the CLI commands with "),a("code",[e._v("hermes -h")]),e._v(". The Hermes CLI offers help for each CLI command you can use when trying "),a("code",[e._v("hermes <command> -h")]),e._v(".")])]),e._v(" "),a("p",[e._v("You can find the configuration in "),a("code",[e._v("cosmos-ibc-docker/tokentransfer/relayer_hermes/config.toml")]),e._v(".")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("You will see two "),a("code",[e._v("[[chains]]")]),e._v(" sections in the "),a("code",[e._v("config.toml")]),e._v(". The first one includes comments about configuration.\n"),a("br"),a("br"),e._v("\nChain IDs need to be specified, as well as the RPC, GRPC, and WebSocket addresses.")])]),e._v(" "),a("p",[e._v("Do a validation check on the configuration file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgY29uZmlnIHZhbGlkYXRlCg=="}}),e._v(" "),a("p",[e._v("Next, do a health check:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgaGVhbHRoLWNoZWNrCg=="}}),e._v(" "),a("p",[e._v("You should see that both chains are healthy. The demo includes a script to start the relayer, but do the steps manually to practice a bit.")]),e._v(" "),a("h3",{attrs:{id:"manual-testing-setting-up-relayer-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-testing-setting-up-relayer-keys"}},[e._v("#")]),e._v(" Manual testing - setting up relayer keys")]),e._v(" "),a("p",[e._v("You need some keys to sign a transaction. Populate the aliases:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMga2V5cyBhZGQgLS1jaGFpbiBjaGVja2Vyc2EgLS1tbmVtb25pYy1maWxlICZxdW90O2FsaWNlLmpzb24mcXVvdDsKJCBoZXJtZXMga2V5cyBhZGQgLS1jaGFpbiBjaGVja2Vyc2IgLS1tbmVtb25pYy1maWxlICZxdW90O2JvYi5qc29uJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("Get the user addresses for the "),a("strong",[e._v("checkersa")]),e._v(" chain:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMga2V5cyBsaXN0IC0tY2hhaW4gY2hlY2tlcnNhCg=="}}),e._v(" "),a("p",[e._v("Now get the user addresses for the "),a("strong",[e._v("checkersb")]),e._v(" chain:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMga2V5cyBsaXN0IC0tY2hhaW4gY2hlY2tlcnNiCg=="}}),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("config.toml")]),e._v(" the default user key is set to "),a("code",[e._v("alice")]),e._v(" for "),a("code",[e._v("checkersa")]),e._v(" and "),a("code",[e._v("bob")]),e._v(" for "),a("code",[e._v("checkersb")]),e._v(", so you do not need to specify a user if you want to sign a transaction with those.")]),e._v(" "),a("p",[e._v("Now check the balance of those accounts in another terminal:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyB1c2UgeW91ciBsb2NhbCB0ZXJtaW5hbAokIGRvY2tlciBleGVjIGNoZWNrZXJzYSBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyBjb3Ntb3MxNHkwa2R2em5rc3NkdGFsMnI2MGE4dXMyNjZuMG1tOTdyMnhqdTgKJCBkb2NrZXIgZXhlYyBjaGVja2Vyc2IgY2hlY2tlcnNkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgY29zbW9zMTczY3plcTc2azBsaDBtNnpjejcyeXU2emo4YzZkMHRmMjk0dzVrCg=="}}),e._v(" "),a("h3",{attrs:{id:"manual-testing-create-a-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-testing-create-a-channel"}},[e._v("#")]),e._v(" Manual testing - create a channel")]),e._v(" "),a("p",[e._v("It is time to create a channel in order to send some tokens from "),a("code",[e._v("checkersa")]),e._v(" to "),a("code",[e._v("checkersb")]),e._v(". In the relayer container, run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgY3JlYXRlIGNoYW5uZWwgLS1hLWNoYWluIGNoZWNrZXJzYSAtLWItY2hhaW4gY2hlY2tlcnNiIC0tYS1wb3J0IHRyYW5zZmVyIC0tYi1wb3J0IHRyYW5zZmVyIC0tbmV3LWNsaWVudC1jb25uZWN0aW9uCg=="}}),e._v(" "),a("p",[e._v("To query the clients for the chain "),a("strong",[e._v("checkersa")]),e._v(", run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgcXVlcnkgY2xpZW50cyAtLWhvc3QtY2hhaW4gY2hlY2tlcnNhCg=="}}),e._v(" "),a("p",[e._v("There should be one Tendermint client for the chain "),a("strong",[e._v("checkersb")]),e._v(".")]),e._v(" "),a("p",[e._v("Query the connections for "),a("strong",[e._v("checkersa")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgcXVlcnkgY29ubmVjdGlvbnMgLS1jaGFpbiBjaGVja2Vyc2EK"}}),e._v(" "),a("p",[e._v("There should be one connection established between "),a("strong",[e._v("checkersa")]),e._v(" and "),a("strong",[e._v("checkersb")]),e._v(".")]),e._v(" "),a("p",[e._v("Query the channels for "),a("strong",[e._v("checkersa")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgcXVlcnkgY2hhbm5lbHMgLS1jaGFpbiBjaGVja2Vyc2EK"}}),e._v(" "),a("p",[e._v("You should see one channel and the port binding transfer. All this is part of the "),a("code",[e._v("create channel")]),e._v(" command. It will create a client, a connection, and a channel as well as a binding to a port. You can redo some steps to better understand the CLI.")]),e._v(" "),a("p",[e._v("Create another connection for both chains:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgY3JlYXRlIGNvbm5lY3Rpb24gLS1hLWNoYWluIGNoZWNrZXJzYSAtLWItY2hhaW4gY2hlY2tlcnNiCg=="}}),e._v(" "),a("p",[e._v("In the output of this command, you receive the "),a("code",[e._v("connection_id")]),e._v("s for both chains. Use the "),a("code",[e._v("connection_id")]),e._v(" for the "),a("strong",[e._v("checkersa")]),e._v(" chain and create a channel:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgY3JlYXRlIGNoYW5uZWwgLS1hLXBvcnQgdHJhbnNmZXIgLS1iLXBvcnQgdHJhbnNmZXIgLS1hLWNoYWluIGNoZWNrZXJzYSAtLWEtY29ubmVjdGlvbiBjb25uZWN0aW9uLTEK"}}),e._v(" "),a("p",[e._v("This repeats the port binding "),a("code",[e._v("transfer")]),e._v(". Check that the channel is created again with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgcXVlcnkgY2hhbm5lbHMgLS1jaGFpbiBjaGVja2Vyc2EK"}}),e._v(" "),a("h3",{attrs:{id:"manual-testing-send-an-ibc-transfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-testing-send-an-ibc-transfer"}},[e._v("#")]),e._v(" Manual testing - send an IBC transfer")]),e._v(" "),a("p",[e._v("Next up, send an IBC transfer using the second channel that was created:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgdHggZnQtdHJhbnNmZXIgLS1zcmMtY2hhaW4gY2hlY2tlcnNhIC0tZHN0LWNoYWluIGNoZWNrZXJzYiAtLXNyYy1wb3J0IHRyYW5zZmVyIC0tc3JjLWNoYW5uZWwgY2hhbm5lbC0xIC0tYW1vdW50IDEwMCAtLWRlbm9tIHRva2VuIC0tdGltZW91dC1oZWlnaHQtb2Zmc2V0IDEwMDAK"}}),e._v(" "),a("p",[e._v("In case you do not want to test with the default user, you can specify the sender with a "),a("code",[e._v("-k")]),e._v(" flag and the receiver on the other chain with a "),a("code",[e._v("-r")]),e._v(" flag.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Usually, the Hermes relayer automatically relays packets between the chains if it runs via:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgc3RhcnQK"}}),e._v(" "),a("p",[e._v("In this case, you want to relay the transfer transaction by hand.")])],1),e._v(" "),a("p",[e._v("First, query packet commitments on "),a("strong",[e._v("checkersa")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgcXVlcnkgcGFja2V0IGNvbW1pdG1lbnRzIC0tY2hhaW4gY2hlY2tlcnNhIC0tcG9ydCB0cmFuc2ZlciAtLWNoYW5uZWwgY2hhbm5lbC0xCg=="}}),e._v(" "),a("p",[e._v("You can see that there is one packet:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"U1VDQ0VTUyBQYWNrZXRTZXFzIHsKICAgIGhlaWdodDogSGVpZ2h0IHsKICAgICAgICByZXZpc2lvbjogMCwKICAgICAgICBoZWlnaHQ6IDIzODIsCiAgICB9LAogICAgc2VxczogWwogICAgICAgIFNlcXVlbmNlKAogICAgICAgICAgICAxLAogICAgICAgICksCiAgICBdLAp9Cg=="}}),e._v(" "),a("p",[e._v("You can also query for unreceived packets:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgcXVlcnkgcGFja2V0IHBlbmRpbmcgLS1jaGFpbiBjaGVja2Vyc2IgLS1wb3J0IHRyYW5zZmVyIC0tY2hhbm5lbCBjaGFubmVsLTEK"}}),e._v(" "),a("p",[e._v("The output should be similar to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"U1VDQ0VTUyBTdW1tYXJ5IHsKICAgIHNyYzogUGVuZGluZ1BhY2tldHMgewogICAgICAgIHVucmVjZWl2ZWRfcGFja2V0czogW10sCiAgICAgICAgdW5yZWNlaXZlZF9hY2tzOiBbXSwKICAgIH0sCiAgICBkc3Q6IFBlbmRpbmdQYWNrZXRzIHsKICAgICAgICB1bnJlY2VpdmVkX3BhY2tldHM6IFsKICAgICAgICAgICAgU2VxdWVuY2UoCiAgICAgICAgICAgICAgICAxLAogICAgICAgICAgICApLAogICAgICAgIF0sCiAgICAgICAgdW5yZWNlaXZlZF9hY2tzOiBbXSwKICAgIH0sCn0K"}}),e._v(" "),a("p",[e._v("There you can observe an unreceived packet.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("You can get the "),a("code",[e._v("connection_id")]),e._v(" and "),a("code",[e._v("channel_id")]),e._v(" for "),a("strong",[e._v("checkersb")]),e._v(" in the output of the "),a("code",[e._v("hermes create connection")]),e._v(" and "),a("code",[e._v("hermes create channel")]),e._v(" commands.")])]),e._v(" "),a("p",[e._v("If you check the balances again, you should only see a change for "),a("strong",[e._v("checkersa")]),e._v(". You should see no change in the balance of "),a("code",[e._v("bob")]),e._v(" on "),a("strong",[e._v("checkersb")]),e._v(" because the transfer is initiated but it is not relayed yet.")]),e._v(" "),a("p",[e._v("Now submit the "),a("code",[e._v("RecvPacket")]),e._v(" message to "),a("strong",[e._v("checkersb")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgdHggcGFja2V0LXJlY3YgLS1kc3QtY2hhaW4gY2hlY2tlcnNiIC0tc3JjLWNoYWluIGNoZWNrZXJzYSAtLXNyYy1wb3J0IHRyYW5zZmVyIC0tc3JjLWNoYW5uZWwgY2hhbm5lbC0xCg=="}}),e._v(" "),a("p",[e._v("In case of success, you will see an output like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"U1VDQ0VTUyBbCiAgICBTZW5kUGFja2V0KAogICAgICAgIFNlbmRQYWNrZXQgLSBzZXE6MSwgcGF0aDpjaGFubmVsLTEvdHJhbnNmZXItJmd0O2NoYW5uZWwtMS90cmFuc2ZlciwgdG9oOjAtMzM2OCwgdG9zOlRpbWVzdGFtcChOb1RpbWVzdGFtcCkpLAogICAgKSwKXQo="}}),e._v(" "),a("p",[e._v("Send an acknowledgment to "),a("strong",[e._v("checkersa")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgdHggcGFja2V0LWFjayAtLWRzdC1jaGFpbiBjaGVja2Vyc2EgLS1zcmMtY2hhaW4gY2hlY2tlcnNiIC0tc3JjLXBvcnQgdHJhbnNmZXIgLS1zcmMtY2hhbm5lbCBjaGFubmVsLTEK"}}),e._v(" "),a("p",[e._v("Check the balances again. A new denom should appear because of the recent transfer. As an exercise, transfer the tokens back to "),a("strong",[e._v("checkersa")]),e._v(".")]),e._v(" "),a("p",[e._v("If you are finished with the tests, make sure to shut down your network with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXItY29tcG9zZSAtZiB0b2tlbnRyYW5zZmVyLnltbCAtLXByb2ZpbGUgaGVybWVzIGRvd24K"}}),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("Hermes, an open-source Rust implementation of and IBC relayer, which is widely used in production by relayer operators due to its great logging and debugging options, but may require more detailed knowledge of IBC for effective use.")]),e._v(" "),a("li",[e._v("How to install and configure Hermes, and then perform automated and manual end-to-end testing of Docker containers for two-chain instances and a relayer instance.")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);