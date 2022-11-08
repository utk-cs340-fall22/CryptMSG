# Sprint 2

Dylan Lewis  
dylanbl  
CryptMSG

### Plans
- Allow for messaging across different Wi-Fi networks ([Issue #46](https://github.com/utk-cs340-fall22/CryptMSG/issues/46))
- Establish connection with peer based on who user wants to connect to ([Issue #65](https://github.com/utk-cs340-fall22/CryptMSG/issues/65))
- Find peers across different Wi-Fi networks #66  ([Issue #66](https://github.com/utk-cs340-fall22/CryptMSG/issues/66))

### Not Completed
- Issue #46 and #66 are not fully completed yet. Finding peers and establishing connections across networks was the biggest hurdle the backend 
of our site had encountered, and now that those problems are resolved the solution just needs some more configuration to solve Issue #46 and #66. 

### Problems Encountered
- Networking proved to be very nuanced and it was challenging to get anything working. There was almost an information overload when trying to determine the best
protocols to use for our problem; had to filter through a lot of information before even starting to implement a solution. 

### Issues you worked on
- [Issue #46](https://github.com/utk-cs340-fall22/CryptMSG/issues/46)
- [Issue #65](https://github.com/utk-cs340-fall22/CryptMSG/issues/65)
- [Issue #66](https://github.com/utk-cs340-fall22/CryptMSG/issues/66)

### Files you worked on
- CryptMSG/messaging/js/app.js
- CryptMSG/messaging/js/index.js
- CryptMSG/messaging/js/package.json

### Accomplishments 
In this sprint I focused on connecting nodes that are on different Wi-Fi networks. This is not a trivial step due to things like NAT and firewalls that prevent devices on networks from communicating with devices outside of that local network. There are a couple approaches to solving this with the most common (and most logical to me) being hole punching, but this method required more manual configuration of my home router than I was comftorable with. Instead I chose to use the method of signaling servers. In this approach, there are signaling servers which nodes can connect to and then a broadcast that a new connection has been made is sent to all nodes that are connected to the signaling server. Nodes are then able to connect directly once they have met via the signaling server, or they can use the signaling server as a relay to allow communication between the 2 nodes. I deployed a signaling server using Heroku and then created a client that connects to this server and listens for other connections to the signaling server. This was done using NodeJS instead of Rust because I knew the features were readily availble in NodeJS, but according to the documentation this functionality is also available in Rust so hopefully a Rust implementation will be used in the final version.  
