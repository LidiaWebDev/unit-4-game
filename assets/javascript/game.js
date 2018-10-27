$(document).ready(function() {
  var random = Math.floor(Math.random() * 102 + 19);
  $("#numberToMatch").text(random);

  var redNum = Math.floor(Math.random() * 12 + 1);
  var blueNum = Math.floor(Math.random() * 12 + 1);
  var yellowNum = Math.floor(Math.random() * 12 + 1);
  var greenNum = Math.floor(Math.random() * 12 + 1);

  var totalScore = 0;
  var wins = 0;
  var losses = 0;

  $("#wins").text(wins);
  $("#losses").text(losses);

  function reset() {
    random = Math.floor(Math.random() * 102 + 19);
    console.log(random);
    $("#numberToMatch").text(random);
    redNum = Math.floor(Math.random() * 12 + 1);
    blueNum = Math.floor(Math.random() * 12 + 1);
    yellowNum = Math.floor(Math.random() * 12 + 1);
    greenNum = Math.floor(Math.random() * 12 + 1);
    totalScore = 0;
    $("#totalScore").text(totalScore);
  }

  function win() {
    alert("Congrats! You won!");
    wins++;
    $("#wins").text(wins);
    reset();
  }

  function lose() {
    alert("Sorry! You lost!");
    losses++;
    $("#losses").text(losses);
    reset();
  }

  $(".redCrystal").on("click", function() {
    totalScore = totalScore + redNum;
    console.log("updateTotal= " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore == random) {
      win();
    } else if (toalScore > random) {
      lose();
    }
  });
  $(".blueCrystal").on("click", function() {
    totalScore = totalScorel + blueNum;
    console.log("updateTotal= " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore == random) {
      win();
    } else if (totalScore > random) {
      lose();
    }
  });
  $(".yellowCrystal").on("click", function() {
    totalScore = totalScore + yellowNum;
    console.log("updateTotal= " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore == random) {
      win();
    } else if (totalScore > random) {
      lose();
    }
  });
  $(".greenCrystal").on("click", function() {
    totalScore = totalScore + greenNum;
    console.log("updateTotal= " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore == random) {
      win();
    } else if (totalScore > random) {
      lose();
    }
  });
});
