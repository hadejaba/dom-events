// The event handler onFocus is fired when a form element gets
// the focus.
// Similarly, the onblur event handler is fired when the form 
// element loses focus, i.e when the cursor moves away from form field
//add an alert box that responses to the onclick alerting the
// user before they fill out the form

document.getElementById("myForm").addEventListener("focus", focusField);

function focusField() {
    document.getElementById("myForm").style.backgroundColor = "red";
}


