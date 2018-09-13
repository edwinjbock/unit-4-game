// Variables related to the scripting logic
var wins = 0;
var losses = 0;
var initialClickEvent = false;
var cosplayerAlreadyBattled = [];
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

// Global Functions
function randomCosplayer() {

}

function randomAttackValue() {

}

functionResetGame() {
  $("#htmlWins").text("");
  $("#htmlLosses").text("");
  $("#htmlResult").text("");
  $("#htmlMessage").text("");
  for (i = 0; i < cosplayer.length; i++) {
    // reset cosplayer images to color
    $(cosplayer[i].imageLocationID).html(imageColor);
  }
}

// Kick off the game with a click event
$(document).click(function() {

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


  // change the cosplayer's image to black and white


  // Check for win or loss


  // Reset after win or loss



}); // End of click event

// End of file
