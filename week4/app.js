const express = require("express");
const app = express();

const server = app.listen(process.env.PORT || 8080,
  () => console.log("listening"));


const {recipeValidators, someOtherValidators} = require("./validators.js");

// Static middleware allows us to easily serve static files
app.use(express.static("public"));

// parse the body of the request
app.use(express.urlencoded({extended:true}));
// allows us to access the form data from within the body.


// post request to deal with data from form
app.post('/recipe-submission', recipeValidators, (req,res) => {
  res.send(`<h1>Success!</h1>
    <ul>
      <li>Recipe Name: ${req.body.recipeName}</li>
      <li>Serves: ${req.body.servings}</li>
      <li>How to make: ${req.body.instructions}</li>
    </ul>`);


});


