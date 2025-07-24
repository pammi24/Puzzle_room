let currentRoom = 1;
let score = 0;
let timeLeft = 60;
let timer;

const puzzles = {
  1: { question: "What has keys but can't open locks?", answer: "keyboard", hint: "Used to type" },
  2: { question: "What runs but never walks?", answer: "water", hint: "Found in rivers" },
  3: { question: "What has hands but no arms?", answer: "clock", hint: "Shows time" }
};

function loadRoom() {
  document.getElementById("room-title").innerText = `Room ${currentRoom}`;
  document.getElementById("puzzle").innerText = puzzles[currentRoom].question;
  document.getElementById("answer").value = "";
  document.getElementById("clue").innerText = "";
  document.getElementById("message").innerText = "";
  document.getElementById("next").style.display = "none";
  document.getElementById("score").innerText = score;
  resetTimer();
}

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value.toLowerCase().trim();
  if (userAnswer === puzzles[currentRoom].answer) {
    document.getElementById("message").innerText = " Correct!";
    score += 10;
    clearInterval(timer);
    document.getElementById("next").style.display = "inline-block";
  } else {
    document.getElementById("message").innerText = "Try Again!";
  }
  document.getElementById("score").innerText = score;
}

function showHint() {
  document.getElementById("clue").innerText = " Hint: " + puzzles[currentRoom].hint;
}


function nextRoom() {
  currentRoom++;
  if (puzzles[currentRoom]) {
    loadRoom();
  } else {
    document.getElementById("game-box").innerHTML = `<h2>You completed the game!</h2><p>Score: ${score}</p>`;
  }
}
window.onload = loadRoom;
