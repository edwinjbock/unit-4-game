// Variables related to the scripting logic
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
  ],
};
var attacks = {
  name: ["Lightening", "Freezeball", "Fireball", "X-ray"],
  attackValue = ["", "", "", ""]
};

// Global Functions
function randomCosplayer() {
  var newCosplayer = false;
  do {
    var result = [Math.floor(Math.random() * cosplayer.name.length)];
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
  } while (newCosplayer = false) // end of do-while loop
} // end of randomCosplayer function

  function randomAttackValue() {

    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  function resetGame() { // run when all six are done being battled
    $("#htmlWins").text("");
    $("#htmlLosses").text("");
    $("#htmlResult").text("");
    $("#htmlMessage").text("");
    // reset cosplayer images to color
    for (i = 0; i < cosplayer.length; i++) {
      $(cosplayer[i].imageLocationID).html(imageColor);
    }
    // Clear those who were already battled
    cosplayerAlreadyBattled = [];
  }

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
    cosplayerRandomlyChosen = randomCosplayer();

    // change the cosplayer's image to black and white


    // Check for win or loss


    // Reset after win or loss




  }); // End of click event

// End of file
