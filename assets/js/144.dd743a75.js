(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{747:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"introduction-to-cosmjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-cosmjs"}},[e._v("#")]),e._v(" Introduction to CosmJS")]),e._v(" "),s("HighlightBox",{attrs:{type:"synopsis"}},[s("p",[e._v("Build applications that interact with Cosmos blockchains with CosmJS.")]),e._v(" "),s("p",[e._v("In this section:")]),e._v(" "),s("ul",[s("li",[e._v("What is CosmJS?")]),e._v(" "),s("li",[e._v("What can you use it for?")]),e._v(" "),s("li",[e._v("Modular design of CosmJS")])])]),e._v(" "),s("p",[s("strong",[e._v("Distributed applications (dApps)")]),e._v(" are "),s("em",[e._v("software applications that run on distributed networks")]),e._v(". Blockchains provide persistent data, or the state, as well as persistent processes and logic. The Cosmos SDK helps developers create such applications. A user interface is important in most cases, and server interactions are important in many cases. This is where "),s("a",{attrs:{href:"https://github.com/cosmos/CosmJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmJS"),s("OutboundLink")],1),e._v(" comes in handy.")]),e._v(" "),s("p",[e._v('As the name suggests, CosmJS is a Typescript/JavaScript library. It helps developers integrate frontend user interfaces and backend servers with Cosmos blockchains that implement distributed applications. To many users, the "dApp" '),s("strong",[e._v("is")]),e._v(" the user interface, even though it is often delivered to the browser in a centralized, traditional way - relying on the DNS infrastructure and centralized web servers.")]),e._v(" "),s("p",[e._v("This re-introduction of a degree of centralization is usually considered acceptable by most teams, provided that the important business logic of the system is enforced by a blockchain and provided it is not strictly necessary to use the provided user interface in order to use the dApp. As a general heuristic, offer a user interface as a convenience rather than a necessity.")]),e._v(" "),s("p",[e._v("In general, user interfaces help users interpret the blockchain state, compose and sign transactions, and send them - all things that can potentially be accomplished by other less convenient methods. A user interface can be supported by servers or micro-services that also interact with the blockchain.")]),e._v(" "),s("h2",{attrs:{id:"some-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some-examples"}},[e._v("#")]),e._v(" Some examples")]),e._v(" "),s("p",[e._v("Developers who are engaged in developing intuitive and coherent user interfaces need to accomplish certain things at the browser level:")]),e._v(" "),s("ul",[s("li",[e._v("Help the user create unsigned Cosmos SDK transactions.")]),e._v(" "),s("li",[e._v("Let the user sign an unsigned transaction with their wallet.")]),e._v(" "),s("li",[e._v("Help the user submit a signed transaction to a Cosmos SDK endpoint.")]),e._v(" "),s("li",[e._v("Query the state from the Cosmos Hub or a custom module using the legacy REST endpoint.")]),e._v(" "),s("li",[e._v("Query the state from the Cosmos Hub or a custom module using the gRPC endpoint.")]),e._v(" "),s("li",[e._v("Help the user submit multiple messages in a single transaction.")])]),e._v(" "),s("p",[e._v("Backend systems are often useful components of the overall design:")]),e._v(" "),s("ul",[s("li",[e._v("Cache a complex state for performance reasons.")]),e._v(" "),s("li",[e._v("Minimize client requirements for basic, anonymous browsing.")]),e._v(" "),s("li",[e._v("Monitor the blockchain for changes and inform clients.")]),e._v(" "),s("li",[e._v("Present API endpoints and WebSockets.")])]),e._v(" "),s("p",[e._v("Developers need a tool-kit to accomplish things that address these foundational concerns:")]),e._v(" "),s("ul",[s("li",[e._v("Signing a transaction when a mnemonic phrase is known.")]),e._v(" "),s("li",[e._v("Signing a transaction when a private key is known.")]),e._v(" "),s("li",[e._v("Grouping multiple messages into a single transaction.")]),e._v(" "),s("li",[e._v("Requesting a user signature with help from a wallet like Keplr.")]),e._v(" "),s("li",[e._v("Querying the blockchain state.")]),e._v(" "),s("li",[e._v("Listening for events emitted by Cosmos SDK modules.")])]),e._v(" "),s("p",[e._v("CosmJS assists with these tasks and more.")]),e._v(" "),s("p",[e._v("CosmJS's modular structure lets developers import only the parts that are needed, which helps reduce download payloads. Since the library is unopinionated, it is compatible with popular JavaScript frameworks such as Vue, React, and Express.")]),e._v(" "),s("h2",{attrs:{id:"packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packages"}},[e._v("#")]),e._v(" Packages")]),e._v(" "),s("p",[e._v("CosmJS is a library that consists of many smaller npm packages within the "),s("a",{attrs:{href:"https://www.npmjs.com/org/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("@cosmjs namespace"),s("OutboundLink")],1),e._v(", a so called monorepo.\nGenerally people will only be needing the "),s("code",[e._v("stargate")]),e._v(" and "),s("code",[e._v("encoding")]),e._v(" packages as they contains the main functionality to interact with Cosmos SDK chains version 0.40 and higher.\nAmong many more, here are some examples packages:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Package")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Latest")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"packages/stargate"}},[e._v("@cosmjs/stargate")])]),e._v(" "),s("td",[e._v("A client library for the Cosmos SDK 0.40+ (Stargate)")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/stargate",target:"_blank",rel:"noopener noreferrer"}},[s("tm-image",{attrs:{src:"https://img.shields.io/npm/v/@cosmjs/stargate.svg"}}),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"packages/faucet"}},[e._v("@cosmjs/faucet")])]),e._v(" "),s("td",[e._v("A faucet application for node.js")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/faucet",target:"_blank",rel:"noopener noreferrer"}},[s("tm-image",{attrs:{src:"https://img.shields.io/npm/v/@cosmjs/faucet.svg"}}),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"packages/cosmwasm-stargate"}},[e._v("@cosmjs/cosmwasm-stargate")])]),e._v(" "),s("td",[e._v("Client for Stargate chains with the CosmWasm module enabled")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/cosmwasm-stargate",target:"_blank",rel:"noopener noreferrer"}},[s("tm-image",{attrs:{src:"https://img.shields.io/npm/v/@cosmjs/cosmwasm-stargate.svg"}}),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"packages/crypto"}},[e._v("@cosmjs/crypto")])]),e._v(" "),s("td",[e._v("Cryptography for blockchain projects, e.g. hashing (SHA-2, Keccak256, Ripemd160), signing (secp256k1, ed25519), HD key derivation (BIP-39, SLIP-0010), KDFs and symmetric encryption for key storage (PBKDF2, Argon2, XChaCha20Poly1305)")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/crypto",target:"_blank",rel:"noopener noreferrer"}},[s("tm-image",{attrs:{src:"https://img.shields.io/npm/v/@cosmjs/crypto.svg"}}),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"packages/encoding"}},[e._v("@cosmjs/encoding")])]),e._v(" "),s("td",[e._v("Encoding helpers for blockchain projects")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/encoding",target:"_blank",rel:"noopener noreferrer"}},[s("tm-image",{attrs:{src:"https://img.shields.io/npm/v/@cosmjs/encoding.svg"}}),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"packages/math"}},[e._v("@cosmjs/math")])]),e._v(" "),s("td",[e._v("Safe integers; decimals for handling financial amounts")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/math",target:"_blank",rel:"noopener noreferrer"}},[s("tm-image",{attrs:{src:"https://img.shields.io/npm/v/@cosmjs/math.svg"}}),s("OutboundLink")],1)])])])]),e._v(" "),s("h2",{attrs:{id:"modularity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modularity"}},[e._v("#")]),e._v(" Modularity")]),e._v(" "),s("p",[e._v("We're proud of the modularity and clean dependency tree in this monorepo. This ensures software quality on our side, and lets users pick exactly what they need and only what they need. The following diagram shows how everything fits together (every item is a npm package; right depends on left):")]),e._v(" "),s("p",[s("tm-image",{attrs:{src:"/academy/xl-cosmjs/images/cosmjs-tree.png"}})],1),e._v(" "),s("p",[e._v("Continue reading for a "),s("RouterLink",{attrs:{to:"/academy/xl-cosmjs/first-steps.html"}},[e._v("hands-on developer exercise")]),e._v(". The tutorial starts with downloading dependencies and proceeds through the steps of creating a simple user interface.")],1),e._v(" "),s("HighlightBox",{attrs:{type:"reading"}},[s("p",[e._v("Some additional reading or video material is available as well:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=VTjiC4wcd7k",target:"_blank",rel:"noopener noreferrer"}},[e._v("HackAtom HCMC Workshop - CosmWasm/CosmJS: from zero to hero"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cosmos/CosmJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmJS GitHub repository"),s("OutboundLink")],1)])])]),e._v(" "),s("h2",{attrs:{id:"next-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),s("p",[e._v("Take your "),s("RouterLink",{attrs:{to:"/academy/xl-cosmjs/first-steps.html"}},[e._v("first steps with CosmJS")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);