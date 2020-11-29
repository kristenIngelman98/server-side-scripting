exports.recipeValidators = [

  // Name validator
  (req,res,next) => {
    if(req.body.recipeName == "") {
      req.body.recipeName = "no name entered";
    }
    next(); // move on to the next middleware in the chain
  },
  
  // Instructions validator
  (req,res,next) => {
    if(req.body.instructions.length < 10) {
      req.body.instructions = "too short";
    }
    next(); // move on to the next middleware in the chain
    
  }
];


exports.someOtherFormValidators = [];