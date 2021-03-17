
var myPet = {
    species: "Border collie",
    name: "Piko",
    legs: 4,
    friends: "Luna, Max"
};

function myFunction(myObj) {
    return myObj;
}


console.log(myFunction(myPet));
module.exports = { myPet, myFunction };