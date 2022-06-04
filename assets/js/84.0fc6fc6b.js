(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{689:function(e,t,a){"use strict";a.r(t);var i=a(1),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cryptographic-fundamentals-of-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-fundamentals-of-blockchain"}},[e._v("#")]),e._v(" Cryptographic Fundamentals of Blockchain")]),e._v(" "),a("p",[e._v("Modern cryptography leverages computer capabilities to make the power of certain mathematical functions available for practical use. Without modern cryptography, there would be no blockchain technology.")]),e._v(" "),a("p",[e._v("Therefore, anyone new to blockchains discovers frequent references to message signatures and other concepts related to cryptography. While this is not an extensive exploration of the topic and you will not deep dive into the mathematics, this section will demystify important concepts if they are new to you.")]),e._v(" "),a("h2",{attrs:{id:"public-and-private-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-and-private-keys"}},[e._v("#")]),e._v(" Public and private keys")]),e._v(" "),a("p",[e._v("In public-key cryptographic systems, keys always "),a("strong",[e._v("come in pairs")]),e._v(" and offer various capabilities. The capabilities are based on cryptographic mathematics. As the name suggests, the "),a("strong",[e._v("public key")]),e._v(" is meant to be distributed while the "),a("strong",[e._v("private key")]),e._v(" is to be jealously guarded. Compare the key pairs to having your house address public but keeping the key to your house private.")]),e._v(" "),a("p",[e._v("The following example will help to better understand public/private keys, which you may know under the names:")]),e._v(" "),a("ul",[a("li",[e._v("RSA")]),e._v(" "),a("li",[e._v("PGP or GnuPG")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Ly8gQ3JlYXRlIFNFQ1AyNTZLMSBwcml2YXRlIGtleSB3aXRoIGV4cGxpY2l0IHBhcmFtZXRlcnMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkKJCBvcGVuc3NsIGVjcGFyYW0gLW5hbWUgc2VjcDI1NmsxIC1nZW5rZXkgLW5vb3V0IC1vdXQgc2VjcDI1NmsxLWtleS5wZW0gLXBhcmFtX2VuYyBleHBsaWNpdAovLyBDcmVhdGUgcHVibGljIGtleQokIG9wZW5zc2wgZWMgLWluIHNlY3AyNTZrMS1rZXkucGVtIC1wdWJvdXQgLW91dCBzZWNwMjU2azEta2V5LXB1Yi5wZW0KLy8gU2hvdyBwdWJsaWMga2V5CiQgb3BlbnNzbCBlYyAtaW4gc2VjcDI1NmsxLWtleS1wdWIucGVtIC1wdWJpbiAtdGV4dCAtbm9vdXQKCi8vIENyZWF0ZSBSU0EgcHJpdmF0ZSBrZXkKJCBvcGVuc3NsIGdlbnJzYSAtZGVzMyAtb3V0IHJzYS1rZXkucGVtIDIwNDgKR2VuZXJhdGluZyBSU0EgcHJpdmF0ZSBrZXksIDIwNDggYml0IGxvbmcgbW9kdWx1cwouLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLisrKwouLi4uLi4uLi4uLisrKwplIGlzIDY1NTM3ICgweDEwMDAxKQpFbnRlciBwYXNzIHBocmFzZSBmb3IgcnNhLWtleS5wZW06ClZlcmlmeWluZyAtIEVudGVyIHBhc3MgcGhyYXNlIGZvciByc2Eta2V5LnBlbToKLy8gQ3JlYXRlIHB1YmxpYyBrZXkKJCBvcGVuc3NsIHJzYSAtaW4gcnNhLWtleS5wZW0gLW91dGZvcm0gUEVNIC1wdWJvdXQgLW91dCByc2Eta2V5LXB1Yi5wZW0KRW50ZXIgcGFzcyBwaHJhc2UgZm9yIHJzYS1rZXkucGVtOgp3cml0aW5nIFJTQSBrZXkK"}}),e._v(" "),a("p",[e._v("This is like a password that is used to encrypt your private key on disk. If the private key was not encrypted, it would be at greater risk of theft. Since you are just testing here, you can put in nothing or just a simple word. Still remember that whenever you create keys in the future, you need to protect them with a proper password.")]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("Note that you may need openssl version 1.0 or a newer one.")])]),e._v(" "),a("p",[e._v("Now take a look at scenarios in which public/private key pairs are useful.")]),e._v(" "),a("h3",{attrs:{id:"encrypt-and-decrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-and-decrypt"}},[e._v("#")]),e._v(" Encrypt and decrypt")]),e._v(" "),a("p",[e._v("Alice wants to send a message to Bob that is meant for Bob's eyes only:")]),e._v(" "),a("ol",[a("li",[e._v("Bob gives Alice his public key.")]),e._v(" "),a("li",[e._v("Alice uses Bob's public key to encrypt the message.")]),e._v(" "),a("li",[e._v("Alice sends Bob the encrypted message.")]),e._v(" "),a("li",[e._v("Bob decrypts the message with his private key.")])]),e._v(" "),a("p",[a("tm-image",{attrs:{src:"/academy/0.0-B9lab-Blockchains/images/00_11_rsa_keys_v1.png"}})],1),e._v(" "),a("p",[e._v("Now look at the senario code-wise. For example, try the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Ly8gRW5jcnlwdCBmaWxlCiQgb3BlbnNzbCBwa2V5dXRsIC1lbmNyeXB0IC1wdWJpbiAtaW5rZXkgcnNhLWtleS1wdWIucGVtIC1pbiBoZWxsb3dvcmxkLnR4dCAtb3V0IGhlbGxvd29ybGQuZW5jCi8vIERlY3J5cHQgZmlsZQokIG9wZW5zc2wgcGtleXV0bCAtZGVjcnlwdCAtaW5rZXkgcnNhLWtleS5wZW0gLWluIGhlbGxvd29ybGQuZW5jIC1vdXQgaGVsbG93b3JsZDIudHh0Cg=="}}),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("If you receive an error, try with "),a("code",[e._v("openssl rsautl")]),e._v(" instead.")])]),e._v(" "),a("h3",{attrs:{id:"sign-and-verify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-and-verify"}},[e._v("#")]),e._v(" Sign and verify")]),e._v(" "),a("p",[e._v("Alice wants to make sure that Bob's public announcement is indeed from Bob:")]),e._v(" "),a("ol",[a("li",[e._v("Bob gives Alice his public key.")]),e._v(" "),a("li",[e._v("Bob signs his announcement with his private key.")]),e._v(" "),a("li",[e._v("Bob sends Alice his announcement and its signature.")]),e._v(" "),a("li",[e._v("Alice verifies the signature with Bob's public key.")])]),e._v(" "),a("p",[a("tm-image",{attrs:{src:"/academy/0.0-B9lab-Blockchains/images/00_12_digital_signature_keys_v2.png"}})],1),e._v(" "),a("p",[e._v("Back to the code example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBTaWduIGZpbGUgaGFzaAokIG9wZW5zc2wgZGdzdCAtc2hhMjU2IC1zaWduIHNlY3AyNTZrMS1rZXkucGVtIC1vdXQgaGVsbG93b3JsZC1iaW4uc2hhMjU2IGhlbGxvd29ybGQudHh0CiMgRW5jb2RlIHNpZ25hdHVyZSBpbiBCYXNlNjQKJCBvcGVuc3NsIGJhc2U2NCAtaW4gaGVsbG93b3JsZC1iaW4uc2hhMjU2IC1vdXQgaGVsbG93b3JsZC5zaGEyNTYKCiMgRGVjb2RlIHNpZ25hdHVyZSBmb3JtIEJhc2U2NAokIG9wZW5zc2wgYmFzZTY0IC1kIC1pbiBoZWxsb3dvcmxkLnNoYTI1NiAtb3V0IGhlbGxvd29ybGQtYmluLWRlY29kZWQuc2hhMjU2CiMgVmVyaWZ5IHNpZ25hdHVyZQokIG9wZW5zc2wgZGdzdCAtc2hhMjU2IC12ZXJpZnkgc2VjcDI1NmsxLWtleS1wdWIucGVtIC1zaWduYXR1cmUgaGVsbG93b3JsZC1iaW4tZGVjb2RlZC5zaGEyNTYgaGVsbG93b3JsZC50eHQK"}}),e._v(" "),a("p",[e._v("Which finally prints:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"VmVyaWZpZWQgT0sK"}}),e._v(" "),a("h3",{attrs:{id:"mix-and-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mix-and-match"}},[e._v("#")]),e._v(" Mix and match")]),e._v(" "),a("p",[e._v("It is possible to mix both conceptual ideas. For example:")]),e._v(" "),a("ol",[a("li",[e._v("Alice encrypts her message with Bob's public key.")]),e._v(" "),a("li",[e._v("Alice signs the encrypted file with her private key.")]),e._v(" "),a("li",[e._v("Upon reception, Bob verifies the signature with Alice's public key to make sure the file came from Alice.")]),e._v(" "),a("li",[e._v("Bob decrypts the file with his private key.")])]),e._v(" "),a("p",[a("tm-image",{attrs:{src:"/academy/0.0-B9lab-Blockchains/images/00_13_mix_n_match_keys_v3.png"}})],1),e._v(" "),a("h3",{attrs:{id:"is-this-science-or-magic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-this-science-or-magic"}},[e._v("#")]),e._v(" Is this science or magic?")]),e._v(" "),a("p",[e._v("If these examples seem counter-intuitive it means you sense the mathematical shadow of public-key encryption. You do not have to understand the mathematics behind it at a deep level, but you must understand the properties and implications of using public-key cryptography.")]),e._v(" "),a("p",[e._v("Given four keys (A, B, C, and D), we can encrypt a message with three keys (A, B, and C) such that the fourth key (in this case, D) is required to decrypt it and is very hard to guess or discover. So, if Alice knows her private key and her public key and she also knows Bob's public key, she can encrypt a message that can only be understood by someone who knows Bob's private key.")]),e._v(" "),a("p",[e._v("Similarly, given knowledge of public and private keys, one can generate a signature (i.e. a character string) so that someone with a copy of the message and the signature can independently determine the public key of the entity that signed the message, proving that the signer knows the corresponding private key.")]),e._v(" "),a("p",[e._v("It is then possible to proceed with the understanding that signed messages from Alice could only come from someone with knowledge of Alice's private key, and messages that are encrypted for Bob can only be deciphered by Bob.")]),e._v(" "),a("h3",{attrs:{id:"key-management-and-public-key-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-management-and-public-key-infrastructure"}},[e._v("#")]),e._v(" Key management and public key infrastructure")]),e._v(" "),a("p",[e._v('If you look again at the Alice and Bob examples, you will notice that there is a vulnerability in "Bob gives Alice his public key". A malicious Charlie could intercept Bob\'s public key and pass on '),a("em",[e._v("his own")]),e._v(" public key to Alice.")]),e._v(" "),a("p",[e._v("Key management and public key infrastructure (PKI) is an important aspect of cryptography that helps mitigate this risk.")]),e._v(" "),a("h2",{attrs:{id:"cryptographic-hash-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-hash-functions"}},[e._v("#")]),e._v(" Cryptographic hash functions")]),e._v(" "),a("p",[e._v('Blockchain technology relies heavily on hash functions, as they help establish the so-called "chain of blocks".')]),e._v(" "),a("p",[e._v("All cryptographic hash functions fulfill several properties:")]),e._v(" "),a("ul",[a("li",[e._v("Converts an input (a.k.a. the message) into an output (a.k.a the hash).")]),e._v(" "),a("li",[e._v("Does the conversion in a reasonable amount of time.")]),e._v(" "),a("li",[e._v("It is practically impossible to re-generate the message out of the hash.")]),e._v(" "),a("li",[e._v("The tiniest change in the message changes the hash beyond recognition.")]),e._v(" "),a("li",[e._v("It is practically impossible to find two different messages with the same hash.")])]),e._v(" "),a("p",[e._v("With such a function, you can:")]),e._v(" "),a("ul",[a("li",[e._v("Prove that you have a message without disclosing the content of the message, for instance:\n"),a("ul",[a("li",[e._v("To prove you know your password.")]),e._v(" "),a("li",[e._v("To prove you previously wrote a message.")])])]),e._v(" "),a("li",[e._v("Be confident that the message was not altered.")]),e._v(" "),a("li",[e._v("Index your messages.")])]),e._v(" "),a("h3",{attrs:{id:"a-closer-look-at-a-hash-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-closer-look-at-a-hash-function"}},[e._v("#")]),e._v(" A closer look at a hash function")]),e._v(" "),a("p",[e._v("MD5 is such a hash function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvICZxdW90O1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cmcXVvdDsgfCBtZDUK"}}),e._v(" "),a("p",[e._v("Which prints:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"MzdjNGI4N2VkZmZjNWQxOThmZjVhMTg1Y2VlN2VlMDkK"}}),e._v(" "),a("p",[e._v("On Linux, this is "),a("code",[e._v("md5sum")]),e._v(".")]),e._v(" "),a("p",[e._v('Now introduce a typo to see what happens (e.g. changing "jumps" to "jump"):')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvICZxdW90O1RoZSBxdWljayBicm93biBmb3gganVtcCBvdmVyIHRoZSBsYXp5IGRvZyZxdW90OyB8IG1kNQo="}}),e._v(" "),a("p",[e._v("Which prints:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"NGJhNDk2ZjRlZWM2Y2ExNzI1M2NmOGI3MTI5ZTQzYmUK"}}),e._v(" "),a("p",[e._v("Notice how the two hashes have nothing in common other than their length, but length is identical for all MD5 hashes so it reveals nothing about the input.")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("This provides a convenient example, but "),a("code",[e._v("MD5")]),e._v(" is no longer considered a hard-to-crack hash function. Bitcoin uses "),a("code",[e._v("SHA-256")]),e._v(". Ethereum uses "),a("code",[e._v("Keccak-256")]),e._v("and "),a("code",[e._v("Keccak-512")]),e._v(".")])]),e._v(" "),a("HighlightBox",{attrs:{type:"reading"}},[a("p",[a("strong",[e._v("Further readings")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.nku.edu/~christensen/the%20mathematics%20of%20the%20RSA%20cryptosystem.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Mathematics of the RSA Public-Key Cryptosystem"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://osxdaily.com/2012/01/30/encrypt-and-decrypt-files-with-openssl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSCDaily (2012): Encrypt & Decrypt Files from the Command Line with OpenSSL"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://gist.github.com/ezimuel/3cb601853db6ebc4ee49",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zimuel, Enrico (2016): Sign and verify a file using an OpenSSL comand line tool"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);