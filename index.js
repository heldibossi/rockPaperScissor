var computerOptions = ["rock", "paper", "scissors"];

$(".button").on("click", click);

function click() {
  var pressedButton = $(this).attr("id");
  console.log("user pressed " + pressedButton);
  computerPick(pressedButton);
  $(this).addClass("clicked");
  setTimeout(() => {
    $(this).removeClass("clicked");
  }, 100);
  $(".button").off();
}

function computerPick(humanpick) {
  var pick = Math.round(Math.random() * 2);
  var computerButton = computerOptions[pick];
  console.log("computer picked " + computerButton);
  game(humanpick, computerButton);
}

function game(human, computer) {
  if (human === computer) {
    console.log("game draw");
    decision((win = 0), computer);
  } else if (human == "paper" && computer == "rock") {
    console.log("human wins");
    decision((win = true), computer);
  } else if (human == "rock" && computer == "paper") {
    console.log("computer wins");
    decision((win = false), computer);
  } else if (human == "rock" && computer == "scissors") {
    console.log("human wins");
    decision((win = true), computer);
  } else if (human == "scissors" && computer == "rock") {
    console.log("computer wins");
    decision((win = false), computer);
  } else if (human == "scissors" && computer == "paper") {
    console.log("human wins");
    decision((win = true), computer);
  } else if (human == "paper" && computer == "scissors") {
    console.log("computer wins");
    decision((win = false), computer);
  }
}

function decision(result, choice) {
  if (result === true) {
    $("h1").text("Robot picked " + choice);
    setTimeout(() => {
      $("h1").text("You Win");
      $("h1").fadeOut(100).fadeIn(100);
      $("body").addClass("winner");
      $("h2").text("Amazing!");
      $("h2").css("color", "green");
      setTimeout(() => {
        $("body").removeClass("winner");
        setTimeout(() => {
        $("h2").text("Click a button to play again");
        $(".button").on("click", click);
      }, 1000);
      }, 500);
    }, 1500);
  } else if (result === false) {
    $("h1").text("Robot picked " + choice);
    setTimeout(() => {
      $("h1").text("You Lost");
      $("h1").fadeOut(100).fadeIn(100);
      $("body").addClass("loser");
      $("h2").text("Next Time");
      $("h2").css("color", "red");
      setTimeout(() => {
        $("body").removeClass("loser");
        setTimeout(() => {
        $("h2").text("Click a button to play again");
        $(".button").on("click", click);
    }, 1000);
      }, 500);
    }, 1500);
  } else {
    $("h1").text("Robot picked " + choice);
    setTimeout(() => {
      $("h1").text("Game Draw");
      $("h1").fadeOut(100).fadeIn(100);
      $("h2").text("Close!");
      $("h2").css("color", "azure");
      $("body").fadeOut(100).fadeIn(100);
      setTimeout(() => {
        $("h2").text("Click a button to play again");
        $(".button").on("click", click);
    }, 1500);
    }, 1500);
  }
}
