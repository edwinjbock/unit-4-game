// Global Objects, Arrays and Variables related to the scripting logic
var wins = 0;
var losses = 0;
var initialClickEvent = false;
var cosplayerAlreadyBattled = [];
var cosplayerRandomlyChosen;
var cosplayer = {
  name: ["Jade", "Sub-Zero", "Mileena", "Raiden", "Kitana", "Liu-Kang"],
  imageLocationID: [
    "#htmlJadeImg",
    "#htmlSubZeroImg",
    "#htmlMileenaImg",
    "#htmlRaidenImg",
    "#htmlKitanaImg",
    "#htmlLiuKangImg"
  ],
  imageColor: [
    "<img src='assets/images/jade.png' alt='Jade'>",
    "<img src='assets/images/sub-zero.png' alt='Sub-Zero'>",
    "<img src='assets/images/mileena.png' alt='Mileena'>",
    "<img src='assets/images/raiden.png' alt='Raiden'>",
    "<img src='assets/images/kitana.png' alt='Kitana'>",
    "<img src='assets/images/liu-kang.png' alt='Liu-Kang'>"
  ],
  imageBW: [
    "<img src='assets/images/jade_bw.png' alt='Jade'>",
    "<img src='assets/images/sub-zero_bw.png' alt='Sub-Zero'>",
    "<img src='assets/images/mileena_bw.png' alt='Mileena'>",
    "<img src='assets/images/raiden_bw.png' alt='Raiden'>",
    "<img src='assets/images/kitana_bw.png' alt='Kitana'>",
    "<img src='assets/images/liu-kang_bw.png' alt='Liu-Kang'>"
  ]
};
var attacks = {
  name: ["Lightening", "Freezeball", "Fireball", "X-ray"],
  attackValue =[]
};
var deathImage = "<img src='assets/images/death.png' alt='Dead Cosplayer'>";

// Global Functions
function chooseRandomCosplayer() {
  var newCosplayer = false;
  do {
    var result = [Math.floor(Math.random() * cosplayer.name.length)];
    console.log("chooseRandomCosplayer result is " + result);
    // Check to see if that cosplayer has been battled already by comparing to the cosplayerAlreadyBattled array
    if (jQuery.inArray(result, cosplayerAlreadyBattled) != '-1') {
      // then result is a new value
      newCosplayer = true
      // add this number to the array
      cosplayerAlreadyBattled.push(result);
      // then return the result
      return result;
    } else {
      // this result already is in the array
    }
  } while (newCosplayer == false) // end of do-while loop
} // end of chooseRandomCosplayer function

function randomAttackValue() {
  // must be between 1-12
  for (i = 0; i < attacks.name.length; i++) {
    attacks[i].attackValue = [Math.floor(Math.random() * 12)];
    if (attacks[i].attackValue == 0) {
      attacks[i].attackValue++;
    }
  }
} // end of function randomAttackValue

function resetGameBoard() { // run when all six are done being battled
  // $("#htmlWins").text("");
  // $("#htmlLosses").text("");
  $("#htmlResult").text("");
  $("#htmlMessage").text("");
  // reset cosplayer images to color
  for (i = 0; i < cosplayer.length; i++) {
    $(cosplayer[i].imageLocationID).html(cosplayer[i].imageColor);
  }
  // Clear Objects, arrays, vars
  cosplayerAlreadyBattled = [];
  attacks.attackValue = [];
} // end of function resetGameBoard

function newWin() {
  wins++;
  $("#htmlMessage").text("You beat " + cosplayer[cosplayerRandomlyChosen].name + "!");
  attacks.attackValue = [];
} // end of function newWin

function newLoss() {
  losses++;
  $("#htmlMessage").text("You beat " + cosplayer[cosplayerRandomlyChosen].name + "!");
  attacks.attackValue = [];
} // end of function newLoss


// Kick off the game with a click event
$(document).click(function () {

  if (initialClickEvent === false) {
    // Get rid of the directions
    $("#htmlDirections").text("");
    // record initial click event as performed
    initialClickEvent = true;
  }

  // Clears the You Won/You Lost message
  $("#htmlResult").text("");
  $("#htmlMessage").text("");

  // Choose a random cosplayer
  cosplayerRandomlyChosen = chooseRandomCosplayer();

  // change the cosplayer's image to black and white


  // Check for win or loss


  // Reset after win or loss




}); // End of click event

// End of file
