// Objects
var animal = {
  name: "bee",
  description: "flies",
  numberOfLegs: 6
}

animal.description = "yellow and black";
console.log(animal.description);
console.log(animal['numberOfLegs']);

// Arrays
var animals = ['whale', 'llama', 'duck'];

console.log(animals[2]); // outputs duck

animals.push('wildabeast');
console.log(animals[3]);

// Map - transforms one array into another array
var animalIntroductions = animals.map(function(an){
  return "Hi " + an + ", nice to meet you!";
});

console.log(animalIntroductions);

// ES6
for (var i=0; i<10; i++) {
  console.log("count i: " + i);
}
console.log(i);

// Using let
for (let j=0; j<10; j++) {
  console.log("count j: " + j);
}

// Const - can mutate, not redefine (constant)
const dog = {
  name: "Rover",
  type: "dachshund"
};

dog.name = "Spot";

console.log(dog);

// Template Literals
let name = "Kristen Ingelman";
let hobby = "Field Hockey";

console.log(`${name} likes to play ${hobby}!`);

// Destructuring Assignment
animal = {
  name: "bee",
  description: "flies",
  numberOfLegs: 6
}

let {description, numberOfLegs} = animal;

console.log(numberOfLegs);
console.log(description);

// Spread Syntax
function adding(a,b,c,d) {
  console.log(`The sum is ${a+b+c+d}`);
}

let numbers = [1.1, 2.02, 3.003, 4.004];

// adding(numbers[0], numbers[1], numbers[2], numbers[3]);
adding(...numbers);

function listingNumbers(a,b,...rest) {
  console.log(`The first two numbers are ${a} and ${b}. The other numbers are ${rest}`);
}

listingNumbers(1,2,3,4,5,6,7,8,9);


