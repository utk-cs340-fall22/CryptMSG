# Product Requirements Document
Name: Dylan Lewis  
Product Name: CryptMSG  

## Background
Many social media companies do not place a lot of emphasis on protecting user's personal data. Companies such as YouTube (and others) make large profits 
from collecting data from users and selling it. One area of social media that should certainly be private and secure is personal messaging. Users 
should be able to communicate with each other without worrying about their communications being read by a large company or malicous actor. This is the 
problem that CryptMSG aims to solve. We want to provide a messaging service that provides similar functionality to other services in the space that is 
secure while still being easy to use.  

## Project Overview
Our project is going to be a messaging service that stores very little user data, and uses encrypted channels to communicate messages between users. 
By providing end-to-end encryption to users, they will be getting the most secure form of communication that can be used on the Internet currently. This 
service is also going to be easy to use, which is something that many security centric applications do not provide. 

## Features
1. **Group Message Functionality** As a customer I would like to be able to communicate with multiple people in the same chat.
2. **Minimal Stored Data** As a new user, I would like to provide very little personal data to the service 
3. **Simple to use UI** As a user with many options in the same field, I would like the secure choice to still be convient to use. 
4. **Fast Communication** As a regular user, I want my messages to be sent quickly and correctly. 
5. **Actually Secure Communication** As someone that is going to switch to this service, I want to know that it actually uses the best possible security. 
6. **Secure Password Storage** As someone that does not want to be impersonated, I want to know that a secure service is being used to authenticate me when I log into my personal account.
7. **No Email Sharing** As someone that gets enough spam emails from giving my email to so many sites, I want to know that my email is securely stored. 
8. **Minimal Outages** As a user that does business through apps such as this, I want to know that I can rely on it to be up and running.  


## Technologies to be used
The frontend of the site uses the ReactJS framework to provide the UI and the Auth0 tool to authenticate users. The backend of the site uses a mix of JS and some Rust. 
NodeJS is used to communicate between the React frontend and the backend of the site. 
