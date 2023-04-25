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

// just to make sure it's working
console.log("js loaded");

// this function runs when a touchStart is detected, so the beginning of a touch
function start_handler(ev) {
  ev.preventDefault();

  if (ev.targetTouches.length == 1) {
    document.body.style.background = "red";
  } else if (ev.targetTouches.length == 2) {
    document.body.style.background = "orange";
  } else if (ev.targetTouches.length == 3) {
    document.body.style.background = "yellow";
  } else if (ev.targetTouches.length == 4) {
    document.body.style.background = "pink";
  } else {
    document.body.style.background = "black";
  }
}

// this function runs when a touchMove is detected.
function move_handler(ev) {
  ev.preventDefault();

  var y_position = ev.targetTouches[0].clientY;
  document.getElementById("circle1").style.height = y_position + "px";
  
  audio.playbackspeed = y_position;

  var x_position = ev.targetTouches[0].clientX;
  document.getElementById("circle1").style.width = x_position + "px";
}

// this runs when a touch end is detected. It resets the styles to the initial state.
function end_handler(ev) {
  ev.preventDefault();
  if (ev.targetTouches.length == 0) {
    document.body.style.background = "white";
    document.getElementById("circle1").style.width = "150px";
    document.getElementById("circle1").style.height = "150px";
  }
}

// this sets up all the event handlers
function set_handlers(name) {
  var el = document.getElementById(name);
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

// and this initializes them
function init() {
  set_handlers("target");
}
