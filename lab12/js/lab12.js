// Lab 12: Conditionals
// Author: Jack Grzegorzyk
// Date: May 24th, 2024


function sortingHat(src) {
  var len = src.length;
  var mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }
    else if (mod ==1) {
      return "Ravenclaw"
    }
    else if (mod == 2){
      return "Slytherin"
    }
    else if (mod == 3){
      return "Hufflepuff"
    }
  
  }



var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
    var name = document.getElementById('input').value;
    var house = sortingHat(name);
    var newText = "<p> Abracadabra Alacazam! Presto Majesto! The Sorting hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});
