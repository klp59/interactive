// Create an array of messages. 
var messages = [
  "Yes", 
  "Def", 
  "Fuck yeah"
]

// store the number of messages in a variable
var range = messages.length;

// when you click on the window, run this code...
document.getElementById("button").onclick = function() {

  // then, pull out a random integer between 0
  // and the total number of messages. Store that in 
  // a variable called random_index.
  var random_index = Math.floor(Math.random() * range);

  // use the random number to pull out one random image
  // from the array.
  var message = messages[random_index];

  document.getElementById("message").innerHTML = message;
};