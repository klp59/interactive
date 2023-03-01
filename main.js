document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  document.getElementById("key_display").innerHTML = key;

  var new_element = document.createElement("h1");
  new_element.innerHTML = key;
  new_element.classList.add("xl-type");
  document.body.appendChild(new_element);

  if (key == "a") {
     document.body.style.backgroundColor = "pink";
  } else if (key == "b") {
     document.body.style.backgroundColor = "darkorange";
  }
    else if (key == "c") {
     document.body.style.backgroundColor = "magenta";
  }
    else if (key == "d") {
     document.body.style.backgroundColor = "darkblue";
  }
    else if (key == "e") {
     document.body.style.backgroundColor = "palegreen";
  }
    else if (key == "f") {
     document.body.style.backgroundColor = "lightpurple";
  }
    else if (key == "g") {
     document.body.style.backgroundColor = "yellow";
  }
    else if (key == "h") {
     document.body.style.backgroundColor = "white";
  }
    else if (key == "i") {
     document.body.style.backgroundColor = "black";
  }
    else if (key == "j") {
     document.body.style.backgroundColor = "blue";
  }
    else if (key == "k") {
     document.body.style.backgroundColor = "pink";
  }
    else if (key == "l") {
     document.body.style.backgroundColor = "red";
  }
    else if (key == "m") {
     document.body.style.backgroundColor = "red";
  }
    else if (key == "n") {v
     document.body.style.backgroundColor = "yellow";
  }
    else if (key == "o") {
     document.body.style.backgroundColor = "cyan";
  }
    else if (key == "p") {
     document.body.style.backgroundColor = "yellow";
  }
    else if (key == "q") {
     document.body.style.backgroundColor = "grey";
  }
    else if (key == "r") {
     document.body.style.backgroundColor = "pink";
  }
    else if (key == "s") {
     document.body.style.backgroundColor = "red";
  }
    else if (key == "t") {
  document.body.style.backgroundColor = "magenta";
  }
    else if (key == "u") {
     document.body.style.backgroundColor = "green";
  }
    else if (key == "v") {
     document.body.style.backgroundColor = "blue";
  }
    else if (key == "w") {
     document.body.style.backgroundColor = "hotpink";
  }
    else if (key == "x") {
     document.body.style.backgroundColor = "yellowgreen";
  }
    else if (key == "y") {
     document.body.style.backgroundColor = "maroon";
  }
    else if (key == "z") {
     document.body.style.backgroundColor = "aqua";
  }
}