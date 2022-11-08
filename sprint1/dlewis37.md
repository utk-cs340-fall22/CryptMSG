# Sprint 1

Dylan Lewis (dylanbl)
CryptMSG

### Plans
- Create tokens that allow messages to be sent (Issue #18 [Link](https://github.com/utk-cs340-fall22/CryptMSG/issues/18))
- Implement encryption and decryption of messages in messaging client (Issue #17 [Link](https://github.com/utk-cs340-fall22/CryptMSG/issues/17))
- Implement a basic messaging service (Issue #2 [Link](https://github.com/utk-cs340-fall22/CryptMSG/issues/2))

### Did not complete
- Issue #17 is partially completed, issues with decrypting messages in the client 
- Issue #18 was not completed, this issue was added during the sprint meeting where we clarified what we want the end goal of the project to be. There was not enough time to begin working on this issue before the end of this sprint. 

### Problems encountered
- Learning how TCP/IP sockets are implemented was hard to understand at first as this was my first time doing networking in a project. 
- Extracting the information needed to decrypt the message from the message itself is proving to be challanging 

### Issues worked on
- Issue #17 [Link](https://github.com/utk-cs340-fall22/CryptMSG/issues/17)
- Issue #2 [Link](https://github.com/utk-cs340-fall22/CryptMSG/issues/2)

### Files worked on
- CryptMSG/messaging/scripts/client.py
- CryptMSG/messaging/scripts/server.py

### Accomplishments
The file CryptMSG/messaging/scripts/client.py implements the client side of a messaging service. The client.py program contains a class that implements a node which connects to a specified port on a given IP address. This is done using the Python sockets library. When the program is run, a client thread is setup and messages can be entered on the command line to send to the server. The CryptMSG/messaging/scripts/server.py program is very similar to the client.py program, but it listens for connections to a specified port on the given IP address instead of establishing a connection to that port. The server.py program must be running before the client.py program is run. Once the 2 programs are running, any input sent from the terminal running client.py will appear on the terminal running server.py and vice versa. 
