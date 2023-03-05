# Mailview
A FOSS web based mail client made from the ground up focusing on quality on each level. We started with the aim of discovering what email is all about, hoping to find meaning through building in the email ecosystem. 


> We have divided our thoughts and progress in two views, feel free to skip the more in-depth 10Ft view. 

# 1000Ft view
### Problem we are solving? 
Building an alternative modern email client, with some future plans to work on architectural side of things. 

### Short description
A snappy minimal mail UI client that you can self-host all by yourself. You can register your mail server information on the Signup page `/signup`. The frontend is built using NextJS, Typescript, Tailwind. The backend is built with python hosted for testing purposes on railway.app.

### Current Stage of the product 
We have a bootstrapped version of our vision with the main Mail App, we don't have a name but we do have a better understanding compared to when we started.



# 10Ft View
## Why?
- There is a deficit in the availability of good email software that can make it's users life easier by just being what's it's supposed to be - an email app. 
- While there is Superhuman, not everyone can afford to pay $30 per month even if it offers the best and unreal email experience and that puts it in a elite circle, which we are not a fan of. 
- We really want to focus on making the email open, accessible for everyone.
- Self-hosting is a great start to owning your email data and there are some popular alternatives: [Roundcube](https://roundcube.net/)/[Rainloop](https://www.rainloop.net/). Which are fairly feature rich, however lack a good user experience, design and are not very extensible.  
- Is it possible to address this problem with a tool better suited for todays API'esque world?
- Our approach is to play with it, break and learn what can be done to understand the email system and build something that makes sense for us to use. 


## Building at the FossHack (hackathon experience)

Varun amongst us has always been passionate and curious about email and as a team we really wanted to explore this often over-looked gray area, that we all eventually end up needing or using in our professional lives. 
- So we all started with deciding on what can be achieved from an architecture & UX perspective in the scope and time we had. Went around talking to people at the hackathon to get ideas and opinions on their email experience and putting it all together we realized, it's a good idea to start building a better web experience for both mobile and desktops. Starting with a small step allowed to learn more about what can be different in our approach. How it'd be better if we give up working on IMAP implementation for the event, rather focus on POP & SMTP implementation for a complete flow.
- From backend, it maent making sure we had a basic working POP and SMTP servers to get the core flow API endpoints for the mail app to consume, 
- Then it was time for these python APIs to be deployed, for which we are using railway.app
- Right now we have a pretty minimal almost hackily put together frontend web app which runs good on two flows. 
    - 1: Getting the mails in the POP server, showing them up on the screen (faced some issues here when rendering certain HTML based emails).
    - 2: The auth flows, and being able to send emails to atleast one tested email for now using the SMTP server setup. We allow the user to set up their emails using their host and port information alongwith their credentials. 
- The daemon is not working ... 
- Frontend: 
    - Using the NextJS/Tailwind/Typescript to rapidly bootstrap our website and get it up and running. Credits: [theodoruclarence/ts-nextjs-tailwind-starter](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter)
    - Axios for fetching the data, we can use SWR/ReactQuerytools for handling the fetching of the data. 
    - Right now we have state to a minimal, so decided to not use any global state management like zustand for the scope of the event.
