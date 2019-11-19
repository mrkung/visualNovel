
// Start <img class='pic1' src='images/start.jpg'></img>
document.querySelector(".story").innerHTML = "<p style='text-align:center;'>A Visual Novel<br><br>Developed by: Mr. Kung</p><img class='pic1' src='images/mrdino.gif'></img>";

document.querySelector(".start-btn").addEventListener("click", function() {
    document.querySelector(".story").innerHTML = "<p>You wake up to the sound of screeching birds. You never heard birds so loud before. Your back is sore and you look around. You realize you are in some strange looking land from prehistoric times. Look out! A dinosaur suddenly appears by your side. Will you talk to him?</p><img class='pic1' src='images/prehistoric-land.jpg'></img>";
    // Erase buttons
    document.querySelector(".start-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".talk-btn").classList.remove("invisible");
    document.querySelector(".runAway-btn").classList.remove("invisible");
});

// Talk to Dino event

document.querySelector(".talk-btn").addEventListener("click", function() {
    // Story 1
    document.querySelector(".story").innerHTML = "<p>You choose to talk to him. You find out he does not talk and he eats you.</p><h3>Game Over</h3>";
    // Erase buttons
    document.querySelector(".talk-btn").classList.add("invisible");
    document.querySelector(".runAway-btn").classList.add("invisible");
    // Picture
    document.querySelector(".pic1").classList.add("invisible");
})

// Run from Dino event

document.querySelector(".runAway-btn").addEventListener("click", function() {
    // Story 1
    document.querySelector(".story").innerHTML = "<p>You attenmpt to run away. However, Dino is too fast and he catches you. He asks you why you are so rude that you didn't even say good morning?</p>";
    // Erase buttons
    document.querySelector(".talk-btn").classList.add("invisible");
    document.querySelector(".runAway-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".giveCandy-btn").classList.remove("invisible");
    document.querySelector(".apologize-btn").classList.remove("invisible");
    // Picture
    document.querySelector(".pic1").classList.add("invisible");
})

// Give Candy

document.querySelector(".giveCandy-btn").addEventListener("click", function() {
    // Story 1
    document.querySelector(".story").innerHTML = "<p>Dinosaurs do not eat candy. You are foolish, and you are eaten.</p>";
    // Erase buttons
    document.querySelector(".talk-btn").classList.add("invisible");
    document.querySelector(".runAway-btn").classList.add("invisible");
})

// Apologize

document.querySelector(".apologize-btn").addEventListener("click", function() {
    // Story 1
    document.querySelector(".story").innerHTML = '<p>He is delighted that you have such nice manners. He puts you on his back and begins walking. He asks you in a jolly voice, "I wonder what I should name you?".</p>';
    // Erase buttons
    document.querySelector(".giveCandy-btn").classList.add("invisible");
    document.querySelector(".apologize-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".promptName-btn").classList.remove("invisible");
})

// Prompt Name

var name = 'hero';

document.querySelector(".promptName-btn").addEventListener("click", function() {
    // Story 1
    name = prompt("Enter your name");
    document.querySelector(".story").innerHTML = "So your name is " + name + "? What a beautiful name! Where would you like to go together?";
    // Erase buttons
    document.querySelector(".promptName-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".computerStore-btn").classList.remove("invisible");
    document.querySelector(".beach-btn").classList.remove("invisible");
})