// Wait for the entire file to load before execution
$(document).ready(function () {

  // Global Objects, Arrays and Variables related to the scripting logic
  var wins = 0;
  var losses = 0;
  var initialClickEvent = false;
  var cosplayerAlreadyBattled = [];
  var randomHitPoints = 0;
  var damagePoints = 0;
  var cosplayerRandomlyChosen; // current cosplayer randomly checked
  var cosplayer = {
    name: ["Jade", "Sub-Zero", "Mileena", "Raiden", "Kitana", "Liu-Kang"],
    preName: ["Phony-", "Faux-", "Fake-", "Not-Real-", "Counterfeit-", "Fake-"],
    gender: ["female", "male", "female", "male", "female", "male",],
    imageLocationID: [
      "#htmlJadeImg",
      "#htmlSubZeroImg",
      "#htmlMileenaImg",
      "#htmlRaidenImg",
      "#htmlKitanaImg",
      "#htmlLiuKangImg"],
    imageColor: [
      "<img src='assets/images/jade.png' alt='Jade'>",
      "<img src='assets/images/sub-zero.png' alt='Sub-Zero'>",
      "<img src='assets/images/mileena.png' alt='Mileena'>",
      "<img src='assets/images/raiden.png' alt='Raiden'>",
      "<img src='assets/images/kitana.png' alt='Kitana'>",
      "<img src='assets/images/liu-kang.png' alt='Liu-Kang'>"],
    imageBW: [
      "<img src='assets/images/jade_bw.png' alt='Jade'>",
      "<img src='assets/images/sub-zero_bw.png' alt='Sub-Zero'>",
      "<img src='assets/images/mileena_bw.png' alt='Mileena'>",
      "<img src='assets/images/raiden_bw.png' alt='Raiden'>",
      "<img src='assets/images/kitana_bw.png' alt='Kitana'>",
      "<img src='assets/images/liu-kang_bw.png' alt='Liu-Kang'>"],
    imageBWi: [
      "<img src='assets/images/jade_bwi.png' alt='Jade'>",
      "<img src='assets/images/sub-zero_bwi.png' alt='Sub-Zero'>",
      "<img src='assets/images/mileena_bwi.png' alt='Mileena'>",
      "<img src='assets/images/raiden_bwi.png' alt='Raiden'>",
      "<img src='assets/images/kitana_bwi.png' alt='Kitana'>",
      "<img src='assets/images/liu-kang_bwi.png' alt='Liu-Kang'>"]
  };
  var attacks = {
    name: ["Lightening", "Freezeball", "Fireball", "X-ray"],
    attackValue: []
  };
  var deathImage = "<img src='assets/images/death.png' alt='Dead Cosplayer'>";

  // Global Functions
  function chooseRandomCosplayer() {
    var newCosplayer = false;
    do {
      var result = [Math.floor(Math.random() * cosplayer.name.length)];
      console.log("chooseRandomCosplayer result is " + result);
      console.log("newCosplayer=" + newCosplayer);
      console.log("cosplayer.name[result]=" + cosplayer.name[result]);

      // Check to see if that cosplayer has battled already by comparing to the cosplayerAlreadyBattled array
      if (jQuery.inArray(result, cosplayerAlreadyBattled) == "-1") {
        // then result is a new value
        newCosplayer = true;
        console.log("newCosplayer=" + newCosplayer);
        // add "result" to the cosplayerAlreadyBattled array
        cosplayerAlreadyBattled.push(result);
        // change the cosplayer's image to black and white
        $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBW[cosplayerRandomlyChosen]);
        // then return the result
        return result;
      }
    } while (newCosplayer != true) // end of do-while loop
  } // end of chooseRandomCosplayer function

  function chooseRandomAttackValues() {
    // must be between 1-12
    var value;
    for (i = 0; i < attacks.name.length; i++) {
      value = [Math.floor(Math.random() * 12)];
      if (value == 0) {
        value++;
      }
      (attacks.attackValue).push(value);
    }
    console.log("attacks.attackValue=" + attacks.attackValue);
  } // end of function chooseRandomAttackValues

  function chooseRandomHitPoints() {
    // must be between 19-120
    var value = [Math.floor(Math.random() * 120)];
    if ((value >= 19) && (value <= 120)) {
      return value;
    }
  }

  function resetGameBoard() { // run when all six are done being battled
    $("#htmlResult").text("");
    $("#htmlMessage").text("");
    $("#htmlHitPoints").text("");
    $("#htmlDamagePoints").text("0");
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
      // Clears the You Won/You Lost message
      $("#htmlResult").text("");
      $("#htmlMessage").text("");


      // Choose a random cosplayer that hasn't been attacked this round
      cosplayerRandomlyChosen = chooseRandomCosplayer();
      console.log("Random Player: " + cosplayerRandomlyChosen);

      // Change their picture to black and white inverted. Then send a msg who is being attacked
      $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBWi[cosplayerRandomlyChosen]);
      $("#htmlMessage").text("You are fighting " + cosplayer.preName[cosplayerRandomlyChosen] + cosplayer.name[cosplayerRandomlyChosen]);

      // chooseRandomHitPoints(); 
      randomHitPoints = chooseRandomHitPoints();
      $("#htmlHitPoints").text(randomHitPoints);

      // choose random attack values
      chooseRandomAttackValues();
    } // end of "if (initialClickEvent === false)"

    // ******************* NEED TO FINISH FROM HERE ON DOWN *******************************
    //  PROBLEM: 

    // ATTACKS
    $("#htmlLightningImg").click(function () {
      // Click on Lightning
    });

    $("#htmlFreezeballImg").click(function () {
      // Click on Freezeball
    });

    $("#htmlFireballImg").click(function () {
      // Click on Fireball
    });

    $("#htmlXRayImg").click(function () {
      // Click on X-Ray
    });


    // Check for win or loss
    // don't forget about audio files for kills


    // Reset after win or loss
    initialClickEvent = false; // allows for $(document).click again
    //change the player's image to black and white IF they did not die
    //if they died, change their image to death.png


    //Reset the gameboard after all cosplayers have been battled


    // ************************************************************************
  }); // End of $(document).click(function ()
}); // end of $(document).ready(function()
// End of file