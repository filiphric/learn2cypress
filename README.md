<!-- # Cypress automation for people in a hurry
Repository for a course hosted on [Udemy on the topic of test automation in Cypress](https://www.udemy.com/course/cypress-test-automation-for-people-in-a-hurry/?referralCode=21A875FF429457CF641D). The name of the course is a homage to [Neil DeGrasse Tyson’s book](https://www.amazon.com/Astrophysics-People-Hurry/dp/B06XB2PX7G) which I recommend you give a read.

## About author
I’m Filip. I’m a QA lead at [Slido](https://www.sli.do/) and [Cypress.io ambassador](https://cypress.io/ambassadors/)

## What’s in here
In this repo, you can find an application we are testing throughout the course as well as all the examples in video course. Each coding video chapter starts with `start.js` file, so you can follow along and code with me. The final state of the code can be found in `final.js` file. Some of the chapters contain `challenge.js` file too. As the name suggest, you can find additional examples and challenges to improve your Cypress skills.

## TodoMVC app
Simple todoMVC app build with Vue.js, originally forked from [testing-workshop-cypress](https://github.com/cypress-io/testing-workshop-cypress). I expanded the application and added a couple of features.

### How to install and run app
1. `npm install`
2. `npm start`
3. open app on http://localhost:3000

### Backend
Backend is a json-server on a static json file located in `todomvc/data.json`.  -->

### API
---
#### POST /reset
Odstráni všetky boardy, listy, tasky a userov

---
#### DELETE /boards
Odstráni všetky boardy, zoznamy a tasky

---
#### DELETE /lists
Odstráni všetky zoznamy a tasky

---
#### DELETE /tasks
Odstráni všetky tasky

---
#### DELETE /users
Odstráni všetkých userov