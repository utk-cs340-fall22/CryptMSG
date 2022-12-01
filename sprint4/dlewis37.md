# Sprint 4

- Dylan Lewis
- dylanbl
- CryptMSG

### Files you worked on
- CryptMSG/chat/src/App.js
- CryptMSG/chat/package.json
- CryptMSG/chat/index.js

### What you accomplished
After some reflection of what we were going to be able to accomplish for this project, we realized that the fully decentralized application we were hoping to 
build has some technical parts that are simply too complex for us to finish, so I focused on getting fully end-to-end encrypted messaging implemented. 
I have mainly been focusing on using NodeJS to get functionality between our front end and backend as the Rust portions of the code were focused on implementing 
peer to peer functionality, and it is much easier to work with JS on both ends now that we have the option to. I have been working on backend code that creates channels 
for users to talk in, as well as code that handles recieving messages from the front end. I have been working on this code separate of our main front end 
thus far (as far as what is pushed to the repo) as I don't want to introduce bugs while there are some in this code. 
