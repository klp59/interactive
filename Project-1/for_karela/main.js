// Create an array of messages. 
var messages = [
  "Yes + Ur T-Shirt is Ugly!!", 
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

const circle1 = document.getElementById('circle1');

document.addEventListener('touchmove', function(e) {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  // Calculate the speed based on the position of the touch
  const speed = (x + y) / 1000;

  // Update the animation-duration property with the new speed
  box.style.animationDuration = `${speed}s`;
});