

let container = document.getElementById("container");
let text = document.getElementById("text");


document.addEventListener("keydown", function (event) {
  text.style.backgroundColor = "red";
  text.innerText = event.key + " is keyDown";
});


document.addEventListener("keyup", function (event) {
  text.style.backgroundColor = "green";
  text.innerText = event.key + " is keyUp";
});