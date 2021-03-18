
var lion = {
 name: "Simba",
 legs: 4,
 tails: 1   
}; 

lion["roar"] = "roar-roar";

function myFunction(name, legs, tails) {
lion.roar = "roar-roar";
return lion;
}


myFunction();
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;