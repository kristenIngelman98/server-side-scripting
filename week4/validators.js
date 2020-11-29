// using the 'check' module from express-validator module
const {check} = require("express-validator");

const isFlan = value => {
  if(value.toLowerCase() == "flan") {
    return false;
  }
  else {
    return true;
  }
};

exports.recipeValidators = [

  // Name validator
  check("recipeName")
  .escape()
  .trim()
  .isLength({min:1, max:30}).withMessage("name must be between 1 and 30 characters.")
  .custom(isFlan).withMessage("no flans please"),
  

  // Servings validator
  check("servings")
  .toInt()
  .isInt().withMessage("please enter a valid number"),
  
];


exports.someOtherFormValidators = [];