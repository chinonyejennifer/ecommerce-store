# ecommerce-store
How to create a backend and frontend 
//1. Create a github repo and clone a repository

Create two folders 'client' and 'server';

In the client file add the html code:
title.html 

In the server folder:
cd folder with server ansd run npm init 
Npm init will create package json 
In the same folder, npm i express nodemon swagger-ui-express
After installing, set up a script
above test in package.json file - run "start":"nodemon"

Create a 'routes' folder
Set up index.js & put this following code:
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("welcome to the backend");
});
// start the app to listen on the right port
app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`)
});

Set up app.js & put this following code:
const express = require('express')
const app = express()
const port = 3000;
// map all routes to the express app

// export the app
module.exports = app;

Create a 'controllers' folder:
Add a file 'titleControllers.js' 
