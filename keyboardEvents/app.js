//  Caps Lock Activated?
// Write some text in the input field,
//  using the Cap Lock key on and off in the input field:

// Hint: The getModifierState() method

//  Caps Lock Activated?
//simplifying the message

function myCaps(event) {
    let x = event.getModifierState("CapsLock");
    document.getElementById('message').innerHTML = 'caps lock is turned on ' + x;
    // (`caps lock is turned on ${x}`);
}
