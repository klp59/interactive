// Create an array of messages. 
var messages = [
  "Yes + Ur T-Shirt is Ugly!!", 
  "Def", 
  "FUCKIT",
  "Fuck YEaaaaaa",
  "Duh (nothings real anyways)",
  "Ya y not",
  "fuck it be hedonist",
  "uhhhh yea",
  "tbh do whatever u want",
  "Fuck yeah",
  "omg it would be so funny",
  "i think thats what you need right now",
  "deadass u better",
  "bro if you don't i'll get mad",
  "tbh not my problem",
  "lol sure"
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


  // Get a reference to the embedded YouTube player
  const music = document.getElementById('music');

  // Add an event listener for touchmove events
  document.addEventListener('touchmove', function(e) {
    // Get the touch position
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    // Calculate the speed based on the position of the touch
    const speed = (x + y) / 1000;

    // Set the playback rate of the video to the calculated speed
    music.playbackRate = speed; 20
  });


const circle1 = document.getElementById('circle1');

document.addEventListener('touchmove', function(e) {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  // Calculate the speed based on the position of the touch
  const speed = (x + y) / 1000;

  // Update the animation-duration property with the new speed
  circle1.style.animationDuration = `${speed}s`; 10
});

const circle2 = document.getElementById('circle2');

document.addEventListener('touchmove', function(e) {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  // Calculate the speed based on the position of the touch
  const speed = (x + y) / 1000;

  // Update the animation-duration property with the new speed
  circle2.style.animationDuration = `${speed}s`; 5000
});
