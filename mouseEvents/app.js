// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered

let mouseOver = document.getElementById("mouseDiv");
mouseOver.onmouseover = function mOver() {
    mouseOver.style.fontSize = "80px";
}

let mouseOut = document.getElementById("mouseDiv");
mouseOut.onmouseout = function mOut() {
    mouseOut.style.fontSize = "50px";
}

let mouseOverTrivia = document.getElementById("mouseDiv");
mouseOverTrivia.addEventListener("mouseover", function (event) {
    event.target.innerHTML = "what is the capital of colorado?"

}, true);

let mouseOutTrivia = document.getElementById("mouseDiv");
mouseOutTrivia.addEventListener("mouseout", function (event) {
    event.target.innerHTML = "denver, colorado";
}, true);




//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question



