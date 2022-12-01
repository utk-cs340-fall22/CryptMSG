# Sprint 4

Riley Crockett (rcrocke6)
CryptMSG

### Original Plans
- Add link detection and formatting. (Issue https://github.com/utk-cs340-fall22/CryptMSG/issues/68)
- Connect rocket to the netlify site. (Issue https://github.com/utk-cs340-fall22/CryptMSG/issues/80)
- Connect the peer-to-peer messaging with rocket. (Issue https://github.com/utk-cs340-fall22/CryptMSG/issues/81)

### Partially finished
(Issue 80)
(Issue 81)

### Problems encountered
When Jacob made the netlify build, we had some trouble updating the auth0 callbacks so that they'd work 
with the new site. I haven't used rust/rocket or libp2p before, and I've been spending a lot of time reading the docs and going through example projects on my own.

It took some time for me to configure the Auth0 application correctly, and to implement the authorization callbacks with our site's react routing.

### Files worked on
- cryptmsg-site/src/components/Chatbox/index.js

### Accomplishments
The link detection/formatting adds more functionality, and should not require additional work on the
backend.