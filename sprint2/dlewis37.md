# Sprint 2

Dylan Lewis  
dylanbl  
CryptMSG

### Plans
- Implement messaging using a peer to peer connection. ([Issue #45](https://github.com/utk-cs340-fall22/CryptMSG/issues/45))
- Allow for messaging across different Wi-Fi networks ([Issue #46](https://github.com/utk-cs340-fall22/CryptMSG/issues/46))
- Allow multiple users to join a conversation ([Issue #47](https://github.com/utk-cs340-fall22/CryptMSG/issues/47))

### Not Completed
- Issue #46 is not fully completed yet, the pros and cons of the two possible methods that can be used are still  
being discussed as it is a decision that has a lot of implications on the project.

### Problems Encountered
- Getting proficient enough to implement what we needed for this sprint in a new programming language (Rust)  
took some time, but it was rewarding and not too bad considering Rust has a strong type system similar to C++.

### Issues you worked on
- [Issue #45](https://github.com/utk-cs340-fall22/CryptMSG/issues/45)
- [Issue #46](https://github.com/utk-cs340-fall22/CryptMSG/issues/46)
- [Issue #47](https://github.com/utk-cs340-fall22/CryptMSG/issues/47)

### Files you worked on
- CryptMSG/messaging/crypt_msg/Cargo.toml
- CryptMSG/messaging/crypt_msg/src/main.rs

### Accomplishments 
In this sprint I focused on using the libp2p networking library to implement a messaging service over a peer-to-peer network instead of the usual client/server connection. This communication is done by starting a node on each computer wishing to communicate and establishing a standard TCP/IP connection directly between the nodes. Typically each client would connect to a central server that would then establish a connection between the clients. The method used by CryptMSG eliminates the need for this 3rd party. This was done using Rust which allows for fast execution time without the risk of leaking memory which would be an issue considering users could be running the program for a significant amount of time during a lengthy conversations. I also used a communication protocol known as publish/subscribe in the decentralized field. This allows multiple users to join a messaging session and each user's messages will be broadcast to all users in the session (picture the functionality of a group chat on iMessage). 
