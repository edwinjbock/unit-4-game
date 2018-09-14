// Wait for the entire file to load before execution
$(document).ready(function () {

  // Global Objects, Arrays and Variables related to the scripting logic
  var wins = 0;
  var losses = 0;
  var initialClickEvent = false;
  var cosplayerAlreadyBattled = [];
  var cosplayerRandomlyChosen; // current cosplayer randomly checked
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
        console.log("cosplayer.name[result]=" + cosplayer.name[result]);
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
    for (i = 0; i < attacks.name.length; i++) {
      attacks.attackValue[i] = [Math.floor(Math.random() * 12)];
      if (attacks.attackValue[i] == 0) {
        (attacks.attackValue[i])++;
      }
    }
    console.log("attacks.attackValue[" + i + "]=" + attacks.attackValue[i]);
    
  } // end of function chooseRandomAttackValues

  function resetGameBoard() { // run when all six are done being battled
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
      // Clears the You Won/You Lost message
      $("#htmlResult").text("");
      $("#htmlMessage").text("");
    }



    // NEED A LOOP HERE TO THE END!!!!!!!!!!!!!!!!!!!!!!
    ``
    // Choose a random cosplayer
    cosplayerRandomlyChosen = chooseRandomCosplayer();
    console.log("Random Player: " + cosplayerRandomlyChosen);

    $(cosplayer.imageLocationID[cosplayerRandomlyChosen]).html(cosplayer.imageBW[cosplayerRandomlyChosen]);

    // chooseRandomAttackValues(); 



    // ATTACK
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


    // Reset after win or loss




  }); // End of click event


}); // end of $(document).ready(function()
// End of file
