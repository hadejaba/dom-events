//Click the buttons to toggle between showing and hiding the content in collapsible.

function myFunction() {
    let collapse = document.getElementsByClassName("content");
    if (collapse.style.display === "none") {
        collapse.style.display = "block";
    } else {
        collapse.style.display = "none";
    }
}