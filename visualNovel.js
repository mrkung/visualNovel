// DOM MANIPULATION Visual Novel Game

// Create a new event
// Select the button you want to edit
// Run a function when it is clicked
document.querySelector(".button1").addEventListener("click", function() {
    // 1. Story 1 text
    document.querySelector(".story-window").innerHTML = '<p>Once upon a time....';
    // 2. Erase old button   add dot                  no dot
    document.querySelector(".button1").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".choice1-btn").classList.remove("invisible");
    document.querySelector(".choice2-btn").classList.remove("invisible");
} )