
var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
};



function myFunction(myObj) {
    var player = "Muhemed Besic";
    var playerNumber = myObj[7];
    var player = "Miralem Pjanic";
    var playerNumber = myObj[10]
    var player = "Edin Dzeko";
    var playerNumber = myObj[11];
    return player;
    

    
}


console.log(myFunction(players));
module.exports = { players, myFunction };