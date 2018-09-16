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
    console.log("function chooseRandomCosplayer()"); //TEST
    var newCosplayer = false;
    console.log("var newCosplayer INITIALLY=" + newCosplayer);
    do {
      var result = [Math.floor(Math.random() * cosplayer.name.length)];
      console.log("RANDOM result=" + result);
      // Check to see if that cosplayer has battled already by comparing to the cosplayerAlreadyBattled array
      if (jQuery.inArray(result, cosplayerAlreadyBattled) == "-1") {
        // then result is a new value
        newCosplayer = true;
        console.log("newCosplayer=" + newCosplayer);
        // add "result" to the cosplayerAlreadyBattled array
        cosplayerAlreadyBattled.push(result);
        console.log("PUSH cosplayerAlreadyBattled: " + cosplayerAlreadyBattled);
        // change the cosplayer's image to black and white
        $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBW[cosplayerRandomlyChosen]);
        // then return the result
        console.log("chooseRandomCosplayer result is " + result);
        console.log("cosplayer.name[result]=" + cosplayer.name[result]);
        return result;
      }
    } while (newCosplayer != true) // end of do-while loop
  } // end of chooseRandomCosplayer function

  function chooseRandomAttackValues() {
    console.log("function chooseRandomAttackValues()"); //TEST
    // must be between 1-12
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
    console.log("function chooseRandomHitPoints()"); //TEST
    // must be between 19-120
    var value;
    do {
      value = [Math.floor(Math.random() * 101)];
      console.log("looped chooseRandomHitPoints = " + value);
    } while ((value < 19) || (value > 120)) // end of do-while loop
    console.log("final chooseRandomHitPoints = " + value);
    return value;
  }

  function checkForWinOrLoss() {
    console.log("function checkForWinOrLoss()"); //TEST
    var youLose = false;
    var youWin = false;
    // compare damage and hitpoints
    if (damagePoints == randomHitPoints) {
      // Win
      youWin = true;
      console.log("return 'win'");
      return "win";
    }
    else if (damagePoints > randomHitPoints) {
      // Loss
      youLose = true;
      console.log("return 'lose'");
      return "loss";
    }
    else if (damagePoints < randomHitPoints) {
      // continue the game
      console.log("return 'neither'");
      return "neither";
    }
  } // end of function checkForWinOrLoss



  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function newWin() {
    console.log("function newWin()"); //TEST
    console.log("PREVIOUS wins=" + wins);
    wins++;
    console.log("NEW wins=" + wins);
    $("#htmlMessage").text("You beat " + cosplayer[cosplayerRandomlyChosen].name + "!");
    attacks.attackValue = [];


    // !!!!!!!!! NEED A WAY TO DISPLAY TO CLICK AGAIN TO CONTINUE



  } // end of function newWin
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


  function newLoss() {
    console.log("function newLoss()"); //TEST
    losses++;
    $("#htmlMessage").text("You beat " + cosplayer[cosplayerRandomlyChosen].name + "!");
    attacks.attackValue = [];

    initialClickEvent = false; // allows for $(document).click again
      
    // don't forget about audio files for kills

  } // end of function newLoss


  function resetGameBoard() { // run when all six are done being battled
    console.log("function resetGameBoard()"); //TEST
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


  // ********** Kick off and continue the game with a click event **********

  $(document).click(function () {
    if (initialClickEvent === false) {
      console.log("$(document).click(function()... initialClickEvent=" + initialClickEvent); // TEST
      // Get rid of the directions
      $("#htmlDirections").text("");
      // record initial click event as performed
      initialClickEvent = true;
      console.log("initialClickEvent set to true... initialClickEvent=" + initialClickEvent); // TEST

      // Clears the You Won/You Lost message
      $("#htmlResult").text("");
      $("#htmlMessage").text("");

      // Choose a random cosplayer that hasn't been attacked this round
      cosplayerRandomlyChosen = chooseRandomCosplayer();
      console.log("FUNCTION RETURNED cosplayerRandomlyChosen=" + cosplayerRandomlyChosen);

      // Change their picture to black and white inverted. Then send a msg who is being attacked
      $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBWi[cosplayerRandomlyChosen]);
      $("#htmlMessage").text("You are fighting " + cosplayer.preName[cosplayerRandomlyChosen] + cosplayer.name[cosplayerRandomlyChosen]);

      // chooseRandomHitPoints(); 
      randomHitPoints = chooseRandomHitPoints();
      $("#htmlHitPoints").text(randomHitPoints);

      // choose random attack values
      chooseRandomAttackValues();

    } // end of "if (initialClickEvent === false)"
  }); // End of $(document).click(function ()

  //  if (initialClickEvent === true) { // then allow for ONLY attacks 

  // ATTACKS

  // Click on Lightning
  $("#htmlLightningImg").click(function () {
    if (initialClickEvent === true) {
      var afterAttack = ""; // reset
      console.log("Lightening Attack = damagePoints + attacks.attackValue[0] = " + damagePoints + "+" + attacks.attackValue[0]);
      damagePoints = damagePoints + attacks.attackValue[0];
      $("#htmlDamagePoints").text(damagePoints);
      afterAttack = checkForWinOrLoss();
      if (afterAttack == "win") {
        newWin();
      }
      else if (afterAttack == "loss") {
        newLoss();
      }
      else if (afterAttack == "neither") {
        // do nothing
      }
    }
  });

  // Click on Freezeball
  $("#htmlFreezeballImg").click(function () {
    if (initialClickEvent === true) {
      var afterAttack = ""; // reset
      console.log("Lightening Attack = damagePoints + attacks.attackValue[0] = " + damagePoints + "+" + attacks.attackValue[1]);
      damagePoints = damagePoints + attacks.attackValue[1];
      $("#htmlDamagePoints").text(damagePoints);
      afterAttack = checkForWinOrLoss();
      if (afterAttack == "win") {
        newWin();
      }
      else if (afterAttack == "loss") {
        newLoss();
      }
      else if (afterAttack == "neither") {
        // do nothing
      }
    }
  });

  // Click on Fireball
  $("#htmlFireballImg").click(function () {
    if (initialClickEvent === true) {
      var afterAttack = ""; // reset
      console.log("Lightening Attack = damagePoints + attacks.attackValue[0] = " + damagePoints + "+" + attacks.attackValue[2]);
      damagePoints = damagePoints + attacks.attackValue[2];
      $("#htmlDamagePoints").text(damagePoints);
      afterAttack = checkForWinOrLoss();
      if (afterAttack == "win") {
        newWin();
      }
      else if (afterAttack == "loss") {
        newLoss();
      }
      else if (afterAttack == "neither") {
        // do nothing
      }
    }
  });

  // Click on X-Ray
  $("#htmlXRayImg").click(function () {
    if (initialClickEvent === true) {
      var afterAttack = ""; // reset
      console.log("Lightening Attack = damagePoints + attacks.attackValue[0] = " + damagePoints + "+" + attacks.attackValue[3]);
      damagePoints = damagePoints + attacks.attackValue[3];
      $("#htmlDamagePoints").text(damagePoints);
      afterAttack = checkForWinOrLoss();
      if (afterAttack == "win") {
        newWin();
      }
      else if (afterAttack == "loss") {
        newLoss();
      }
      else if (afterAttack == "neither") {
        // do nothing
      }
    }
  });




  // Reset after win or loss
  //change the player's image to black and white IF they did not die
  //if they died, change their image to death.png


  //Reset the gameboard after all cosplayers have been battled

  // ************************************************************************
}); // end of $(document).ready(function()
// End of file