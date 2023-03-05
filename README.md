# Mailview
A FOSS web based mail client made from the ground up focusing on quality on each level. We started with the aim of discovering what email is all about, hoping to find meaning through building in the email ecosystem. 



## Why?
- There is a deficit in the availability of good email software that can make it's users life easier by just being what's it's supposed to be - an email app. 
- While there is Superhuman, not everyone can afford to pay 30$ per month even if it offers the best email experience and that puts it in a elite circle, which we are not a fan of. 
- We really want to focus on making the email open, accessible for everyone.
- Self-hosting is a great start to owning your email data and there are some popular alternatives: [Roundcube](https://roundcube.net/)/[Rainloop](https://www.rainloop.net/). Which are fairly feature rich, however lack a good user experience, design and are not very extensible. 
- Is it possible to address this problem with a tool better suited for todays API'esque world?
- Our approach is of play with it, break and learn what can be done to understand the email system and build something that makes sense for us to use. 

## Building at the FossHack (hackathon experience)

Varun amongst us has always been passionate and curious about email and as a team we really wanted to explore this often over-looked gray area, that we all eventually end up needing or using in our professional lives. 
- So we all started with deciding on what can be achieved from an architecture & UX perspective in the days we had. Talked to people at the hackathon to get their ideas and opinions on their email experience and. Putting it all together we realized, it's a good idea to start building a better web experience for both mobile and desktops. 
- From backend, made sure we have a basic working POP and SMTP servers to get the core flow for the mail app.
- Then it was time for these python APIs to be deployed, for which we are using railway.app
- Right now we have a pretty minimal almost hackily put together frontend web app which runs good on two flows. 
    - 1: Getting the mails in the POP server, showing them up on the screen (faced some issues here when rendering certain HTML based emails).
    - 2: The auth flows, and being able to send emails to atleast one tested email for now using the SMTP server setup. We allow the user to set up their emails using their host and port information alongwith their credentials. 
- The daemon is not working ... .@vhawk19
