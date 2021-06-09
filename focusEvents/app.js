// When you enter the input field, a function is triggered which sets the background
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.

// const inputColor = document.querySelector('input[type="text"');
// inputColor.addEventListener("focus", (event) => {
//     event.target.style.background = "skyBlue";
// });

// inputColor.addEventListener("blur", (event) => {
//     event.target.style.background = "";
// });

const color = document.getElementById('myForm');
color.addEventListener('focus', nameFocusFunction, true);
color.addEventListener('blur', nameBlurFunction, true);

function nameFocusFunction() {
    // document.getElementById('text').style.backgroundColor = "skyBlue";
    // document.getElementById('date').style.backgroundColor = "grey";
    document.getElementById("text").style.border = "5px solid red";
}

function nameBlurFunction() {
    // document.getElementById('text').style.backgroundColor = "white";
    // document.getElementById('date').style.backgroundColor = "white";
    document.getElementById("text").style.border = "1px solid black";
}


