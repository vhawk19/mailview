# Mailview
A FOSS web based mail client made from the ground up focusing on quality on each level. We started with the aim of discovering what email is all about, hoping to find meaning through building in the email ecosystem. 


> We have divided our thoughts and progress in two views, feel free to skip the more in-depth 10Ft view. 

# TL;DR
[Video Demo](https://loom.com/share/09cd1d06be89442ca3fd1d2f4d43e425)
### Problem we are solving? 
Currently there is dearth of robust webmail clients which are open source. So why not make one?

### Short description
A snappy minimal mail UI client that:
- Exposes a RESTful interface that maybe used to extend the client/interact with it in a more user friendly manner
- Does not use the standard `mbox`, `maildir` format, but rather a database, making search, retrival and backup easier and faster
- Ability to self host with ease
- Does no fancy automatic classification using the next **AI THING!**

### Current Stage of the product 
We have a bootstrapped a PoC version with a simple mail client that utilises `POP3` and `SMTP` to send and recieve mails. It uses next.js on the frontend and python on the backend.


# And, if you fancy a longer read/rant!

## Why?
- There is a deficit in the availability of good email software that can make it's users life easier by just being what's it's supposed to be - an email app. 
- While there is Superhuman (the supposedly god like email interface), not everyone can afford to pay $30 per month even if it offers the best and unreal email experience and that puts it in a elite circle, which we are not a fan of. And again its niether FOSS nor web!!!
- We want to focus on making the email open, accessible for everyone while not sacrificing on a good experience which everyone deserves.
- Self-hosting is a huge part of the story from owning your  data and not being worried about some random scraper which is possibly farming your data for an LLM model  

```
- Is it possible to address this problem with a tool better suited for todays API'esque world?
- Is it possible to address this problem with a tool which uses a simple database, instead of legacy dir structures which varies from one client to another?
- Is it possible to build a FOSS mail client which people actually like using and isnt limited to the hacker bubble?
```

> All we wanted to do was play, break and learn  as much as we could to understand the email ecosystem and potentially build something that makes sense for us to use. 


## How did we get here?
- So we all started with deciding on what can be achieved from an architecture & UX perspective in the scope and time we had. Went around talking to people at the hackathon to get ideas and opinions on their email experience and putting it all together we realized, it's a good idea to start building a better web experience for both mobile and desktops. Starting with a small step allowed to learn more about what can be different in our approach. How it'd be better if we give up working on IMAP implementation for the event, rather focus on POP & SMTP implementation for a complete flow. And this is what we ended up doing.

## What do we have now?
- Right now we have a pretty minimal almost hackily put together frontend web app which runs good on two flows. 
    - 1: Getting the mails in the POP server, showing them up on the screen (faced some issues here when rendering certain HTML based emails).
    - 2: The auth flows, and being able to send emails to atleast one tested email for now using the SMTP server setup. We allow the user to set up their emails using their host and port information alongwith their credentials.
 -  The RESTful interface is a hacky wrapper around `POP3,SMTP` and sqlite and requires a lot more functional components, such as a functional daemon(Had issues running celery within the short timeframe), a better db support to better serve the frontend. But for now it does a pretty decent job with fetching and sending simple mails
- Frontend: 
    - Using the NextJS/Tailwind/Typescript to rapidly bootstrap our website and get it up and running. Credits: [theodoruclarence/ts-nextjs-tailwind-starter](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter)
    - Axios for fetching the data, we can use SWR/ReactQuerytools for handling the fetching of the data. 
    - Right now we have state to a minimal, so decided to not use any global state management like zustand for the scope of the event.
 
 ## Feature checklist
 - [x] A functional inbox that can read mails (POP3)
 - [x] Send simple mails (SMTP)
 - [x] Client thats hostable with ease
 - [x] Expose the mail like function using a hacky RESTlike API instead of interfacing with the native protocols directly
 - [ ] IMAP support
 - [ ] Tagging support
 - [ ] A daemon which checks the mailbox regularly
 - [ ] Esposing a SQLike interface to search the mails from a db
    
 ## How to run this?
 This assumes docker and docker-compose is available in the system, a simple reverse proxy server can be run for better routing.
 ```
 git clone https://github.com/vhawk19/mailview --recurse-submodules
 cd mailview
 docker-compose build
 docker-compose up
 ```
