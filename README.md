# ReClaim (readme in progress)
A tool that helps users easily collect recyclables and re-use them for new projects or purposes.
## Table of Contents
1. [Overview](#Overview)
1. [Product Spec](#Product-Spec)
1. [Demos](#Demo)
1. [Schema](#Schema)

## Overview
### Description
ReClaim is a web-app that was created for users that want to reduce waste and help the earth!
This app provides its users with a marketplace and gives them the ability to easily find recyclables near them.

### App Evaluation
- **Category:** Market Place
- **Mobile:** This app would be ideally developed for mobile but would perhaps be just as viable on a computer. Since it is a market place type of app the desired functionality would allow for better usage on mobile devices.
- **Story:** Create an app that allows people to create a post containing batches/bundles of recyclables available for those who may want it in a seamless manner.

- **Market:** Environmentalists/people who could use passive income/people who want to actively make this a side/full-time hustle. Those who care about recycling in general.
- **Habit:** This app could be used as often or often as the user wanted. It depends on whether or not the users (Providers) do actually recycle and collectors are interested in collecting those recycled goods.
- **Scope:** First we would start with a simple marketplace where Providers post their batch, and collectors simply claim and pick up. Then, as the amount of users grows we would need to implement better systems to prevent others from picking up batches that are already claimed. This would be text/notification systems that allows for you to claim a batch, while allowing others to be placed in queue in case that batch is canceled (think Uber, Instacart, etc..). Even bigger, could be pairing up with organizations to create a reward system to entice everyone to recycle more and do it long term.



## Product Spec
### 1. User Stories (Required and Optional)

**Required Must-have Stories**

* Landing Page containing About Us, How it works, Environment Facts
* User can Login/ Sign Up and Logout
* User can post, edit, and delete a batch
* User can view details of batch and claim it
* User can view their profile and edit their information

**Optional Nice-to-have Stories**

* User profile
    * Picture, small bio/status
* Search Bar
    * Allow search by city, zip code, mile range, tag label (i.e. bottles, tv, furniture)
* Time limit once Collector commits/claims batch
* Notifications regarding batch
* Maps
* Users can save posts and be (that user) placed in a queue. In case it doesn't get completed the following user can get notifies
* List of past posts/claims. Maybe to see what has been offered in the past
* User are able to see others profiles, stats and maybe follow them
    * Stats could be: batches picked up, sorted by item category...

## Demo
### Digital Wireframes & Mockups
<div>
<img src="https://i.imgur.com/e0xBlpJ.png" height=300 style="margin-right: 60px">
<img src="https://i.imgur.com/pbMlw3F.png" height=300>
<img src="https://i.imgur.com/kYqHDZY.png" height=250>
 </div>

### Demo
#### Landing Page
<img src="https://user-images.githubusercontent.com/61469904/147397509-8ddded9e-2416-4626-a9ea-f767a5d2c300.png" height=700>

#### MarketFeed & Posting

![ezgif com-gif-maker](https://user-images.githubusercontent.com/61469904/147397501-ef7eaa88-0bbf-425a-a372-f887a92fdbac.gif)


<!---
# Project Starter
A starter repo for building CUNY Tech Prep projects with React, Express.js, and Sequelize.js

## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router


## Development Setup

Each team member will need to do this on their local machine.

### Create a postgres db

Create a user in postgres named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user app2021_development
```

> You will create a DB for each project you start based on this repo. For other projects change `app2021_development` to the new apps database name.

*For more details see the [installing postgres guides](https://github.com/CUNYTechPrep/guides#postgresql)*

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

*Clone* this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.

## Deployment

### Setting up Heroku

Install the heroku cli if you don't already have it.

> You will also need a heroku account
> And this will only be done once on your machine

```bash
# on mac
brew install heroku/brew/heroku
heroku login
```

### Create a Heroku project

Next, `cd` into this project directory and create a project:

```bash
heroku create cool-appname
heroku addons:create heroku-postgresql:hobby-dev
```

> This will deploy your apps to https://cool-appname.herokuapp.com, assuming that it is not taken already.

> You only need to do this once per app

### Deploying the app

Whenever you want to update the app run this command.

```bash
git push heroku main
```

> This command deploys your main branch. You can change that and deploy a different branch such as: `git push heroku development`



## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   ├── index.js
│   │   └── posts.js
│   └── <strong>models</strong>
│       ├── index.js
│       └── post.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── <strong>components</strong>
│       │   ├── Loading.js
│       │   └── Post.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── <strong>pages</strong>
│       │   ├── AboutUsPage.js
│       │   ├── PostFormPage.js
│       │   ├── PostsListPage.js
│       │   └── ShowPostPage.js
│       └── serviceWorker.js
├── package-lock.json
└── package.json
</pre>
-->
