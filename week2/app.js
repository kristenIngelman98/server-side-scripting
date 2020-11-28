const express = require("express");
const app = express(); // create the express application

app.set('port', process.env.PORT || 8080);
// create a setting called 'port', with value either equal to 8080
// or whichever port you prefer

let server = app.listen(app.settings.port, ()=> {
  console.log('server ready on port', app.settings.port);
});
// create server and start it up
// print message to the console letting us know it's working!


// get requests

// allows us to access 2 different end points, / and /about
app.get('/', (req,res) => {
  res.send("Hello Express!");
});

app.get('/about', (req,res) => {
  res.send("Our first Node/Express application.");
});

app.get('/:something', (req,res) => {
  let something = req.params.something;
  res.send(`You're trying to find ${something}?`);
});

