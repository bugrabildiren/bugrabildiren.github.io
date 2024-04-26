var names = []; // Initialize empty arrays to store user input
var scores = [];

function $(id) {
  return document.getElementById(id);
}

function onLoad() {
  loadScores(); // Load scores from localStorage on load (if implemented)
  $("name").focus(); // Set focus to the name field on load
  $("add").addEventListener("click", addScore);
  $("display_results").addEventListener("click", displayResults);
  $("display_scores").addEventListener("click", displayScores);
}

function addScore() {
  var name = $("name").value.trim();
  var score = parseFloat($("score").value);

  if (name === "" || isNaN(score) || score < 0 || score > 100) {
    alert("You must enter a name and a valid score (0-100)");
    return;
  }

  names.push(name);
  scores.push(score);

  saveScores(); // Save scores to localStorage (if implemented)

  $("name").value = ""; // Clear the name field after adding
  $("score").value = ""; // Clear the score field after adding
  $("name").focus(); // Set focus back to the name field after adding
}

function displayResults() {
  var average = calculateAverage(scores);
  var highScore = findHighestScore(scores, names);

  var results = $("results");
  results.innerHTML = "<h2>Results</h2>";
  results.innerHTML += "<p>Average score = " + average + "</p>";
  results.innerHTML += "<p>High score = " + highScore + "</p>";
}

function displayScores() {
  var table = $("scores_table");
  table.innerHTML = ""; // Clear the table before adding new rows

  for (var i = 0; i < names.length; i++) {
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var scoreCell = row.insertCell(1);

    nameCell.innerHTML = names[i];
    scoreCell.innerHTML = scores[i];
  }
}

function calculateAverage(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function findHighestScore(scoreArray, nameArray) {
  var highestScore = 0;
  var highScoreIndex = 0;
  for (var i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i] > highestScore) {
      highestScore = scoreArray[i];
      highScoreIndex = i;
    }
  }
  return nameArray[highScoreIndex] + " with a score of " + highestScore;
}

// Add these functions if you want to save scores in localStorage
function saveScores() {
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("scores", JSON.stringify(scores));
}

function loadScores() {
  var storedNames = localStorage.getItem("names");
  var storedScores = localStorage.getItem("scores");

  if (storedNames && storedScores) {
    names = JSON.parse(storedNames);
    scores = JSON.parse(storedScores);
  }
}

window.onload = onLoad; // Call onLoad function when the window loads