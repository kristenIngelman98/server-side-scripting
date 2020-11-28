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

