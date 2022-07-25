const element = document.getElementById("btn");
element.addEventListener("click", changeBackground);

function changeBackground() {
   document.body.style.backgroundColor = "red";
}