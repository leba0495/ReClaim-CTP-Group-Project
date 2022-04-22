# ReClaim
A tool that helps users easily collect recyclables and re-use them for new projects or purposes.

Live Demo: [reclaim](https://reclaim-project.herokuapp.com/)
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

- [x] Landing Page containing About Us, How it works, Environment Facts
- [ ] User can Login/ Sign Up and Logout
- [x] User can post, edit, and delete a batch
- [x] User can view details of batch and claim it
- [x] User can view their profile and edit their information

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
 </div>

### Demo
#### Landing Page
<img src="https://user-images.githubusercontent.com/61469904/147397509-8ddded9e-2416-4626-a9ea-f767a5d2c300.png" height=700>

#### MarketFeed & Posting

![ezgif com-gif-maker](https://user-images.githubusercontent.com/61469904/147397501-ef7eaa88-0bbf-425a-a372-f887a92fdbac.gif)

## Schema 
### Models
#### User

   | Property      | Type     | Description |
   | ------------- | -------- | ------------|
   | userId      | Int   | unique id for the user post (default field) |
   | userFirstName| String| user’s first name |
   | userLastName| String| user's last name |
   | userPassword| String| user's password |
   | userNumber| String   |user's phone number|
   |userEmail|String| user's email|
   |userStreetAdd|String|user's street address|
   |userCity|String|user's city|
   |userZipCode|Int|user's zip code|
   | createdAt     | DateTime | date when user creates account (default field) |
   | updatedAt     | DateTime | date when user updates account (default field) |
   
#### Batch

   | Property      | Type     | Description |
   | ------------- | -------- | ------------|
   | objectId      | Int   | unique id for the user post (default field) |
   | author        | Pointer to User| creater of the batch |
   | activeClaimant| Pointer to User| The user that is currently claiming the batch |
   | image | URL String| image added to the batch by the author|
   | title | String | descriptive title of the batch's content|
   | description | String  |Description of the batch's contents |
   | batchLocation|String | General location of where the batch is|
   |address| String | exact address of the batch |
   |isSorted | Boolean | label of whether the goods in the batch are sorted (plastics, metals, etc.) |
   | isClaimed | Boolean | active status of the batch |
   | completedAt| DataTime | data when the batch was collected |
   | createdAt     | DateTime | date when post is created (default field) |
   | updatedAt     | DateTime | date when post is last updated (default field) |
