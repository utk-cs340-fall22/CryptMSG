# Sprint 3

Riley Crockett (rcrocke6)
CryptMSG

### Original Plans
- Set up Auth0 for authenticating users. (Issue https://github.com/utk-cs340-fall22/CryptMSG/issues/63)
- Add log in/out functionality with Auth0. (Issue https://github.com/utk-cs340-fall22/CryptMSG/issues/64)
- Display the user's auth0 information under their settings. (Issue https://github.com/utk-cs340-fall22/CryptMSG/issues/67)

### Partially finished
The settings for the user could be better formatted. (Issue 67)

### Problems encountered
It took some time for me to configure the Auth0 application correctly, and to implement the authorization callbacks with our site's react routing.

### Files worked on
- cryptmsg-site/src/index.js
- cryptmsg-site/src/App.js
- cryptmsg-site/src/pages/home/login.js
- cryptmsg-site/src/pages/home/index.js
- cryptmsg-site/src/components/Settings/logout.js
- cryptmsg-site/src/components/Settings/UserProfile.js
- cryptmsg-site/src/components/Settings/settings.css
- cryptmsg-site/src/components/Settings/index.js

### Accomplishments
There is now functioning user verification and connections. Although the application is acting as a server as of now, Auth0 is adaptable and can be further configured to support machine to machine connections/API verification.