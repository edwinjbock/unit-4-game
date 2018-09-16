// Wait for the entire file to load before execution
$(document).ready(function () {

  // Global Objects, Arrays and Variables related to the scripting logic
  var initialClickEvent = false;
  var wins = 0;
  var losses = 0;
  var cosplayerAlreadyBattled = [];
  var randomHitPoints = 0;
  var damagePoints = 0;
  var cosplayerRandomlyChosen; // current cosplayer randomly checked
  var cosplayer = {
    name: ["Jade", "Sub-Zero", "Mileena", "Raiden", "Kitana", "Liu-Kang"],
    preName: ["Phony-", "Faux-", "Fake-", "Not-Real-", "Counterfeit-", "Fake-"],
    gender: ["her", "him", "her", "him", "her", "him"],
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
    console.log("***** FUNCTION CHOOSE RANDOM COSPLAYER() *****"); //TEST
    var newCosplayer = false;
    console.log("var newCosplayer INITIALLY=" + newCosplayer);
    console.log("cosplayerAlreadyBattled.length = " + cosplayerAlreadyBattled.length);
    if (cosplayerAlreadyBattled.length == 6) {
      // resets in case all were previously battled
      cosplayerAlreadyBattled = [];
      for (i = 0; i < cosplayer.name.length; i++) {
        // reset images to color
        $(cosplayer.imageLocationID[i]).html(cosplayer.imageColor[i]);
      }
    }
    do {
      result = (Math.floor(Math.random() * cosplayer.name.length));
      console.log("preliminary result = " + result);
      // Check to see if that cosplayer has battled already by comparing to the cosplayerAlreadyBattled array
      console.log("BEFORE PUSH cosplayerAlreadyBattled = " + cosplayerAlreadyBattled);
      console.log("cosplayerAlreadyBattled.length = " + cosplayerAlreadyBattled.length);
      if ($.inArray(result, cosplayerAlreadyBattled) == "-1") {
        newCosplayer = true;
      }
      // for (j = 0; j < cosplayerAlreadyBattled.length; j++ ) {
      //   console.log("cosplayerAlreadyBattled[" + j + "] = " + cosplayerAlreadyBattled[j]);
      //   if (result == cosplayerAlreadyBattled[j]) {
      //     // the result is not new
      //     newCosplayer = false;
      //     console.log("newCosplayer = " + newCosplayer);
      //   }
      // }
      if (newCosplayer == true) {
        // the result is a new value
        console.log("newCosplayer=" + newCosplayer);
        // add "result" to the cosplayerAlreadyBattled array
        cosplayerAlreadyBattled.push(result);
        console.log("AFTER PUSH cosplayerAlreadyBattled: " + cosplayerAlreadyBattled);
        console.log("chooseRandomCosplayer result is " + result);
        console.log("cosplayer.name[result]=" + cosplayer.name[result]);
        newCosplayer = true;
        // then return the result
        return result;
      }
    }
    while (newCosplayer == false); // end of do-while loop
  } // end of chooseRandomCosplayer function

  function chooseRandomAttackValues() {
    console.log("***** FUNCTION CHOOSE RANDOM ATTACK VALUES() *****"); //TEST
    // must be between 1-12
    attacks.attackValue = []; // reset
    var value;
    for (i = 0; i < attacks.name.length; i++) {
      var value = [Math.floor(Math.random() * 11)];
      value++;
      if (value == 0) {
        value++;
      }
      if (jQuery.inArray(value, attacks.attackValue) == "-1") {
        (attacks.attackValue).push(value);
        console.log("attacks.attackValue pushed = " + attacks.attackValue);
      }
      else {
        i--; // guarantees that the same iteration will be run again
        console.log("attacks.attackValue NOT pushed = " + attacks.attackValue);
      }
      console.log("ALL attacks.attackValue = " + attacks.attackValue);
    }
  } // end of function chooseRandomAttackValues

  function chooseRandomHitPoints() {
    console.log("***** FUNCTION CHOOSE RANDOM HITPOINTS() *****"); //TEST
    // must be between 19-120
    var value;
    do {
      value = [Math.floor(Math.random() * 101)];
      console.log("looped chooseRandomHitPoints = " + value);
    } while ((value < 19) || (value > 120)) // end of do-while loop
    console.log("final chooseRandomHitPoints = " + value);
    return value;
  }

  function recordDamageAndResult() {
    console.log("***** FUNCTION RECORD DAMAGE AND TEXT() *****"); //TEST
    $("#htmlDamagePoints").text(damagePoints);
    afterAttack = checkForWinOrLoss();
    if (afterAttack == "win") {
      $("#htmlResult").text("You won!");
      parseInt(wins);
      wins++;
      $("#htmlWins").text(wins);
      // Change the image to black and white
      $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBW[cosplayerRandomlyChosen]);
      initialClickEvent = false;
    }
    else if (afterAttack == "loss") {
      $("#htmlResult").text("You killed " + cosplayer.gender[cosplayerRandomlyChosen] + "!!! You Lost.");
      parseInt(losses);
      losses++;
      $("#htmlLosses").text(losses);
      // Change the image to deathImage
      $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(deathImage);
      // function timeOut() {
      // }
      // setTimeout(timeOut, 3000);
      initialClickEvent = false;
    }
    else if (afterAttack == "neither") {
      // do nothing
    }
  }
  
  function checkForWinOrLoss() {
    console.log("***** FUNCTION CHECK FOR WIN OR LOSS() *****"); //TEST
    // compare damage and hitpoints
    if (damagePoints == randomHitPoints) {
      // Win
      console.log("return 'win'");
      return "win";
    }
    else if (damagePoints > randomHitPoints) {
      // Loss. Killed the player.
      console.log("return 'loss'");
      return "loss";
    }
    else if (damagePoints < randomHitPoints) {
      // continue the game
      console.log("return 'neither'");
      return "neither";
    }
  } // end of function checkForWinOrLoss


  // ********** Kick off and continue the game with click events **********
  $(document).on('touchstart click', document, function () {
  // $("#htmlXRayImg").click(function () {
  // $(document).click(function () {
    if (initialClickEvent == false) {
      console.log("$(document).click(function()... initialClickEvent=" + initialClickEvent); // TEST
      // Get rid of the directions
      $("#htmlDirections").text("");

      console.log("initialClickEvent set to true... initialClickEvent=" + initialClickEvent); // TEST

      // Clears the You Won/You Lost message
      // $("#htmlResult").text("");
      $("#htmlMessage").text("");
      damagePoints = 0;
      $("#htmlDamagePoints").text(damagePoints);

      // Choose a random cosplayer that hasn't been attacked this round
      cosplayerRandomlyChosen = chooseRandomCosplayer();
      console.log("FUNCTION RETURNED cosplayerRandomlyChosen=" + cosplayerRandomlyChosen);

      // Change their picture to black and white inverted. Then send a msg who is being attacked
      $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBWi[cosplayerRandomlyChosen]);
      $("#htmlMessage").text("You are now fighting " + cosplayer.preName[cosplayerRandomlyChosen] + cosplayer.name[cosplayerRandomlyChosen]);

      // chooseRandomHitPoints(); 
      randomHitPoints = chooseRandomHitPoints();
      $("#htmlHitPoints").text(randomHitPoints);

      // choose random attack values
      chooseRandomAttackValues();

      // record initial click event as performed
      initialClickEvent = true;

    } // end of "if (initialClickEvent === false)"
  }); // End of $(document).click(function ()


  // ATTACKS
  //  if (initialClickEvent === true) { // then allow for ONLY attacks 

  // Click on Lightning
  $(document).on('touchstart click', '#htmlXRayImg', function () {
    // $("#htmlXRayImg").click(function () {
    if (initialClickEvent == true) {
      afterAttack = ""; // reset
      console.log("Lightening Attack = damagePoints + attacks.attackValue[0] = " + damagePoints + "+" + attacks.attackValue[0]);
      damagePoints = damagePoints + attacks.attackValue[0];
      recordDamageAndResult();
    }
  });

  // Click on Freezeball
  $(document).on('touchstart click', '#htmlXRayImg', function () {
    // $("#htmlXRayImg").click(function () {    
    if (initialClickEvent == true) {
      var afterAttack = ""; // reset
      console.log("Freezeball Attack = damagePoints + attacks.attackValue[1] = " + damagePoints + "+" + attacks.attackValue[1]);
      damagePoints = damagePoints + attacks.attackValue[1];
      recordDamageAndResult();
    }
  });

  // Click on Fireball
  $(document).on('touchstart click', '#htmlXRayImg', function () {
  // $("#htmlXRayImg").click(function () {
    if (initialClickEvent == true) {
      var afterAttack = ""; // reset
      console.log("Fireball Attack = damagePoints + attacks.attackValue[2] = " + damagePoints + "+" + attacks.attackValue[2]);
      damagePoints = damagePoints + attacks.attackValue[2];
      recordDamageAndResult();
    }
  });

  // Click on X-Ray
  $(document).on('touchstart click', '#htmlXRayImg', function () {
  // $("#htmlXRayImg").click(function () {
    if (initialClickEvent == true) {
      var afterAttack = ""; // reset
      console.log("X-Ray Attack = damagePoints + attacks.attackValue[3] = " + damagePoints + "+" + attacks.attackValue[3]);
      damagePoints = damagePoints + attacks.attackValue[3];
      recordDamageAndResult();
    }
  });

}); // end of $(document).ready(function()
// End of file