// write a function that changes the demo id to hello world
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    document.getElementById("demo").style.color = "red";
}

// write a function that changes the demo id to change the text color to red

// function myFunction() {
//     document.getElementById("demo").style.color = "red";
// }

// HW *** add the current date and time to this function

var today = new Date();
var currentTime = new Date();
var time = document.getElementById("cTime");
time.innerHTML = currentTime.toLocaleTimeString();
var date = document.getElementById("cDate");
date.innerHTML = currentTime.toLocaleDateString();