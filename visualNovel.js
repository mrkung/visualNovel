// innerHTML injects HTML code into your website
// innerHTML REPLACES ALL of the HTML code in that element
// it does NOT add to it.

var soundStart = new Audio('sounds/collect-point-01.wav');
var soundLose = new Audio('sounds/jingle-lose-00.wav');
var soundAdvance = new Audio('sounds/collect-point-00.wav');
var soundHappy = new Audio('sounds/jingle-achievement-00.wav');
var soundWin = new Audio('sounds/jingle-win-00.wav');

document.querySelector(".story").innerHTML = "<h1 style='text-align:center'>The Wrath of Dino</h1><p style='text-align:center;'>A Visual Novel<br>Developed by: Mr. Kung</p><img src='images/mrdino.gif'></img>";

// Start Button

document.querySelector(".start-btn").addEventListener("click", function() {
    soundStart.play(); // START GAME
    // document.querySelector('.container').classList.add("game-bg"); // Change BG of game
    // Story
    document.querySelector(".story").innerHTML = "<p>You wake up to the sound of screeching birds. You never heard birds so loud before. Your back is sore and you look around. You realize you are in some strange looking land from prehistoric times. Look out! A dinosaur suddenly appears by your side. Will you talk to him?</p>";
    // <img src='images/scary-dino.jpg'></img>
    // Erase buttons
    document.querySelector(".start-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".talk-btn").classList.remove("invisible");
    document.querySelector(".runAway-btn").classList.remove("invisible");
});

// Talk to Dino event

document.querySelector(".talk-btn").addEventListener("click", function() {
    soundLose.play(); // LOSE
    // Story
    document.querySelector(".story").innerHTML = "<p>You choose to talk to him. You find out he does not talk and he eats you.</p><h3>Game Over</h3><img src='images/regular-dino.png'>";
    // Erase buttons
    document.querySelector(".talk-btn").classList.add("invisible");
    document.querySelector(".runAway-btn").classList.add("invisible");
    // Reset button
    document.querySelector(".reset-btn").classList.remove("invisible");
});

// Run from Dino event

document.querySelector(".runAway-btn").addEventListener("click", function() {
    soundAdvance.play(); // ADVANCE
    // Story
    document.querySelector(".story").innerHTML = "<p>You attenmpt to run away. However, Dino is too fast and he catches you. He asks you why you are so rude that you didn't even say good morning?</p>";
    // Erase buttons
    document.querySelector(".talk-btn").classList.add("invisible");
    document.querySelector(".runAway-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".giveCandy-btn").classList.remove("invisible");
    document.querySelector(".apologize-btn").classList.remove("invisible");
});

// Give Candy

document.querySelector(".giveCandy-btn").addEventListener("click", function() {
    soundLose.play(); // LOSE
    // Story
    document.querySelector(".story").innerHTML = "<p>Dinosaurs do not eat candy. You are foolish, and you are eaten.</p><h3>Game Over</h3><img src='images/regular-dino.png'>";
    // Erase buttons
    document.querySelector(".apologize-btn").classList.add("invisible");
    document.querySelector(".giveCandy-btn").classList.add("invisible");
    // Reset button
    document.querySelector(".reset-btn").classList.remove("invisible");
});

// Apologize

document.querySelector(".apologize-btn").addEventListener("click", function() {
    soundAdvance.play(); // ADVANCE
    // Story
    document.querySelector(".story").innerHTML = '<p>He is delighted that you have such nice manners. He puts you on his back and begins walking. He asks you in a jolly voice, "I wonder what I should name you?".</p>';
    // Erase buttons
    document.querySelector(".giveCandy-btn").classList.add("invisible");
    document.querySelector(".apologize-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".promptName-btn").classList.remove("invisible");
});

// Prompt Name

var name = 'hero';

document.querySelector(".promptName-btn").addEventListener("click", function() {
    // Story
    soundHappy.play(); // ADVANCE INPUT
    name = prompt("Enter your name");
    document.querySelector(".story").innerHTML = "So your name is " + name + "? What a beautiful name! Where would you like to go together?";
    // Erase buttons
    document.querySelector(".promptName-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".computerStore-btn").classList.remove("invisible");
    document.querySelector(".eatStudents-btn").classList.remove("invisible");
});

// Eat Naughty Students

document.querySelector(".eatStudents-btn").addEventListener("click", function() {
    soundLose.play(); // LOSE
    // Story
    document.querySelector(".story").innerHTML = "<p>All the students finished their homework. Therefore, they are good students and cannot be eaten.</p><h3>Game Over</h3><img src='images/regular-dino.png'>";
    // Erase buttons
    document.querySelector(".eatStudents-btn").classList.add("invisible");
    document.querySelector(".computerStore-btn").classList.add("invisible");
    // Reset button
    document.querySelector(".reset-btn").classList.remove("invisible");
});

// Computer Store

document.querySelector(".computerStore-btn").addEventListener("click", function() {
    soundAdvance.play(); // ADVANCE
    // Story
    document.querySelector(".story").innerHTML = "You and Dino walk to the local Department Cave and look around. You find that there are many different computers inside. You tell the cavemanager that you would like to buy one for your friend Dino. Which one will you buy?";
    // Erase buttons
    document.querySelector(".computerStore-btn").classList.add("invisible");
    document.querySelector(".eatStudents-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".mac-btn").classList.remove("invisible");
    document.querySelector(".pc-btn").classList.remove("invisible");
    document.querySelector(".linux-btn").classList.remove("invisible");
});

// Macbook Pro

document.querySelector(".mac-btn").addEventListener("click", function() {
    soundLose.play(); // LOSE
    // Story
    document.querySelector(".story").innerHTML = "<p>You are too poor to buy it.</p><h3>Game Over</h3><img src='images/regular-dino.png'>";
    // Erase buttons
    document.querySelector(".mac-btn").classList.add("invisible");
    document.querySelector(".pc-btn").classList.add("invisible");
    document.querySelector(".linux-btn").classList.add("invisible");
    // Reset button
    document.querySelector(".reset-btn").classList.remove("invisible");
});

// Gaming PC

document.querySelector(".pc-btn").addEventListener("click", function() {
    soundLose.play(); // LOSE
    // Story
    document.querySelector(".story").innerHTML = "<p>You and Dino play too many video games. At first it was just a couple hours a day, but over time, you become addicted. The video games become your escape. You neglect your real life responsibilities and become a smelly blob. Remember to play video games responsibly!</p><h3>Game Over</h3><img src='images/regular-dino.png'>";
    // Erase buttons
    document.querySelector(".mac-btn").classList.add("invisible");
    document.querySelector(".pc-btn").classList.add("invisible");
    document.querySelector(".linux-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
});

// Wood PC

document.querySelector(".linux-btn").addEventListener("click", function() {
    soundWin.play(); // WIN
    // Story
    document.querySelector(".story").innerHTML = "<p>Contratulations " + name + "!</p><h3>You Win!</h3><img src='images/coding-dino.png'>";
    // Erase buttons
    document.querySelector(".mac-btn").classList.add("invisible");
    document.querySelector(".pc-btn").classList.add("invisible");
    document.querySelector(".linux-btn").classList.add("invisible");
});

// RESET GAME

document.querySelector(".reset-btn").addEventListener("click", reset);

function reset() {
    soundAdvance.play();
    // Show Title Screen
    document.querySelector(".story").innerHTML = "<h1 style='text-align:center'>The Wrath of Dino</h1><p style='text-align:center;'>A Visual Novel<br>Developed by: Mr. Kung</p><img src='images/mrdino.gif'></img>";
    // Show START button
    document.querySelector(".start-btn").classList.remove("invisible");
    // Erase buttons
    document.querySelector(".reset-btn").classList.add("invisible");
}