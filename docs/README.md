# CycLove dating app
![Screenshot of the homepage](https://github.com/kriskuiper/project-tech/blob/master/assets/screenshot-cyclove.png)

## Description
CycLove is a web app where cyclists can date each other and keep up to date with activities of users that are near them. The app uses a MongoDB database which is configured using [Atlas](https://www.mongodb.com/cloud/atlas). The server is built using the [express package](https://www.npmjs.com/package/express).

When a user creates an account it's first name, last name and bike get stored in a session by using [express-session](https://www.npmjs.com/package/express-session). By using the session the user can get access to it's feed and always gets redirected to the feed if they go to the homepage of CycLove.

If you want to try the app out, you can take a look at the [deployed version](https://cyclove-app.herokuapp.com/).

## Research
You can look at the [Wiki](https://github.com/kriskuiper/project-tech/wiki) to see all the research I did for this project.


## Installation

### Prequisites
* MongoDB installed
* MongoDB database is up and running
* Configure .env:
```
MONGODB_URI=uri_to_your_mongodb_database
SESSION_SECRET=your_session_secret
```

### 1. Clone the repository
The repository can be cloned by running `git clone` in the command line.
```
git clone https://github.com/kriskuiper/project-tech.git
```

### 2. Install node modules
Install all necessary dependencies by running `npm install`.
```
npm install
```

## Running and viewing the application
You can run the node server by simply running `npm run start`, you can view it by going to `localhost:specified_port`.
```
1. npm run start
2. open browser and go to localhost:specified_port
```

NOTE:
Make sure you run `npm run start` before you try viewing the app, otherwise it won't show in your browser, the app will let you know on which port it's running:
```
The app is shown at port: 8000
```
