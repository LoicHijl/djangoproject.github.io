$(document).ready(function(){
    /* Sliding animation when clicking on a link */
    $('.slide-section').click(function(e) {
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    });

    e.preventDefault();
  });
    
    /* */
    $("[data-toggle=tooltip]").tooltip();
});

/* GAME */
function setup() {
  /* Below is the list with image links */
  let dishList = [
    'https://imgur.com/8aYvbBg.png',
    'https://imgur.com/9ZDQazn.png',
    'https://i.imgur.com/kbeMNq5.png',
    'https://i.imgur.com/9w8sLx2.png',
    'https://imgur.com/u34JvAy.png',
    'https://imgur.com/SewCLFu.png'
  ];

  /* We choose a random flag from the dishList
  and display it at the #headerFlag position */
  let rand = Math.floor(Math.random() * dishList.length);
  let dishGuess = dishList[rand];
  $("#headerFlag").attr('src', dishGuess);

  /* Then we run chooseAnswers to get the buttons */
  chooseAnswers(dishGuess);
}

function chooseAnswers(flag) {
  /* First we make a new array to hold 4 dishes for the buttons */
  let dishNames = [];

  /* Now we make another array holding all possible dish names */
  let dishes = [
    'Roasted Duck',
    "Boerenkool",
    "Pasta Carbonara",
    'Sushi',
    "Quesadillas",
    "Pad Thai"
  ];

  /* Then we delete the "Previous" correctAnswer */
  document.getElementById("correctAnswer").innerHTML = "";

  /* Then we enter a switch with the current correctAnswer
     In this switch we check the answer and push the name
     of that dish into our new array and then we set the
     global correctAnswer to the correct answer. We also
     remove that dish from the dishes array */
  switch(flag) {
    case 'https://imgur.com/8aYvbBg.png':
      dishNames.push("Roasted Duck");
      document.getElementById("correctAnswer").innerHTML = "Roasted Duck";
      dishes.splice(0, 1);
      break;
    case 'https://imgur.com/9ZDQazn.png':
      dishNames.push("Boerenkool");
      document.getElementById("correctAnswer").innerHTML = "Boerenkool";
      dishes.splice(1, 1);
      break;
    case 'https://i.imgur.com/kbeMNq5.png':
      dishNames.push("Pasta Carbonara");
      document.getElementById("correctAnswer").innerHTML = "Pasta Carbonara";
      dishes.splice(2, 1);
      break;
    case 'https://i.imgur.com/9w8sLx2.png':
      dishNames.push("Sushi");
      document.getElementById("correctAnswer").innerHTML = "Sushi";
      dishes.splice(3, 1);
      break;
    case 'https://imgur.com/u34JvAy.png':
      dishNames.push("Quesadillas");
      document.getElementById("correctAnswer").innerHTML = "Quesadillas";
      dishes.splice(4, 1);
      break;
    case 'https://imgur.com/SewCLFu.png':
      dishNames.push("Pad Thai");
      document.getElementById("correctAnswer").innerHTML = "Pad Thai";
      dishes.splice(5, 1);
      break;
  }

  /* And we randomly pick 3 NEW values from that array to store in
     our button holding array we made in the beginning of this function */
  let ran = Math.floor(Math.random() * dishes.length);
  dishNames.push(dishes[ran]);
  dishes.splice(ran, 1);
  ran = Math.floor(Math.random() * dishes.length);
  dishNames.push(dishes[ran]);
  dishes.splice(ran, 1);
  ran = Math.floor(Math.random() * dishes.length);

  dishNames.push(dishes[ran]);
  dishes.splice(ran, 1);

  /* Finally we randomize the order the buttons appear in
     to prevent each answer to be at the same position */
  dishNames = shuffle(dishNames);

  /* And we place the names we picked into the buttons */
  document.getElementById("A").innerHTML = dishNames[0];
  document.getElementById("B").innerHTML = dishNames[1];
  document.getElementById("C").innerHTML = dishNames[2];
  document.getElementById("D").innerHTML = dishNames[3];
  document.getElementById("dish1").innerHTML = dishNames[0];
  document.getElementById("dish2").innerHTML = dishNames[1];
  document.getElementById("dish3").innerHTML = dishNames[2];
  document.getElementById("dish4").innerHTML = dishNames[3];
}

function shuffle(array) {
  /* First, variables are declared which will help us later */
  var current = array.length;
  var temp;
  var randIndex;

  /* While loop keeps going untill everything is shuffled */
  while (0 < current) {
    /* First, we select a random element */
    randIndex = Math.floor(Math.random() * current);
    current -= 1;
    /* Then we swap that element with the next unshuffled one; */
    temp = array[current];
    array[current] = array[randIndex];
    array[randIndex] = temp;
  }

  /* Finally, we return the shuffled array */
  return array;
}

function isCorrect(ele) {
  /* First we get the global variables from the html */
  let lock = document.getElementById("lock").innerHTML;
  let score = document.getElementById("score").innerHTML;
  let lives = document.getElementById("lives").innerHTML;
  let dish1 = document.getElementById("dish1").innerHTML;
  let dish2 = document.getElementById("dish2").innerHTML;
  let dish3 = document.getElementById("dish3").innerHTML;
  let dish4 = document.getElementById("dish4").innerHTML;
  let correctAnswer = document.getElementById("correctAnswer").innerHTML;
  let scoreInt = parseInt(score);

  /* We check if the game is locked */
  if (lock == "false") {

    /* Next, we will execute a switch statement which finds which
       button was pressed. After that has been found it looks in
       the dishNames array to see if that button holds the name
       with the correctAnswer.
       If so: Up the score by 1
       If not: Keep playing and subtract one from score */
    switch (ele.id) {
      case "A":
        if (dish1 == correctAnswer) {
          document.getElementById("A").innerHTML = "CORRECT";
          lock = "correct";
          scoreInt += 1;
        } else {
          document.getElementById("A").innerHTML = "WRONG";
          lock = "wrong";
          lives = "0";
          $("#headerFlag").attr('src', "https://i.imgur.com/qnWA0rX.png");
        }
        break;
      case "B":
        if (dish2 == correctAnswer) {
          document.getElementById("B").innerHTML = "CORRECT";
          lock = "correct";
          scoreInt += 1;
        } else {
          document.getElementById("A").innerHTML = "WRONG";
          lock = "wrong";
          lives = "0";
          $("#headerFlag").attr('src', "https://i.imgur.com/qnWA0rX.png");
        }
        break;
      case "C":
        if (dish3 == correctAnswer) {
          document.getElementById("C").innerHTML = "CORRECT";
          lock = "correct";
          scoreInt += 1;
        } else {
          document.getElementById("A").innerHTML = "WRONG";
          lock = "wrong";
          lives = "0";
          $("#headerFlag").attr('src', "https://i.imgur.com/qnWA0rX.png");
        }
        break;
      case "D":
        if (dish4 == correctAnswer) {
          document.getElementById("D").innerHTML = "CORRECT";
          lock = "correct";
          scoreInt += 1;
        } else {
          document.getElementById("A").innerHTML = "WRONG";
          lock = "wrong";
          lives = "0";
          $("#headerFlag").attr('src', "https://i.imgur.com/qnWA0rX.png");
        }
        break;
      }

      /* Update the score and guesses */
      score = scoreInt.toString();
      document.getElementById("lock").innerHTML = lock;
      document.getElementById("points").innerHTML = score;
      document.getElementById("score").innerHTML = score;
      document.getElementById("guess").innerHTML = lives;
      document.getElementById("lives").innerHTML = lives;
    }
}

/* This is the reset function for the "NEXT" button
   it allows users to play more than once and keep track of
   their score */
function randomize() {
  /* First we get the global variables from the html */
  let lives = document.getElementById("lives").innerHTML;
  let livesInt = parseInt(lives);

  if (livesInt > 0) {
    /* Remove the Lock */
    document.getElementById("lock").innerHTML = "false";

    /* finally we run the startup again */
    setup();
  }
}
