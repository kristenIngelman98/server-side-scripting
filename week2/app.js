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

const data = {
  animals: [
    {
      name: "bee",
      description: "flying insect"
    },
    {
      name: "whale",
      description: "large sea creature"
    },
    {
      name: "duck",
      description: "swim in ponds"
    }
  ]
};

app.get('/animals/:animalName', (req, res) => {
  let animalName = req.params.animalName;

  // send a description of the requested animal from the data object
  // if it doesnt exist, send an error message
  // use the array find method

  let animal = data.animals.find(an => an.name == animalName);

  if (animal != undefined) {
    res.send(animal.description); // default status is 200 "ok"
  }
  else {
    res.status(404).send("No animal with that name found!"); // 404 means "not found"
  }
});