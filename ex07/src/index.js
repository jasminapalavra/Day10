
var lion = {
 name: "Simba",
 legs: 4,
 tails: 1   
}; 

lion["roar"] = "roar-roar";

function myFunction(name, legs, tails) {
delete lion[name];
return lion;
}


myFunction("roar");
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;