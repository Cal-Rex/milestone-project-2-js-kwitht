// Global Variables
// Game Starting buttons
const knightButton = document.getElementById('choose-knight');
const thiefButton = document.getElementById('choose-thief');
const merchButton = document.getElementById('choose-merchant');

/**removes game controls on page inital load so that users can only select options that start the game */
function pageLoad() {
 let stats = document.querySelectorAll('.load')
 stats.forEach(stat => {
    stat.style.visibility ="hidden";
 });
 let restartButton = document.getElementById('new-game');
 restartButton.style.visibility = "hidden";
}

window.addEventListener('load', pageLoad);

// explanatory text on how the game works
document.getElementById('intro-text').textContent = 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

function rollKnight() {
   document.getElementById('str-num').textContent = "4"; 
   document.getElementById('dex-num').textContent = "3"; 
   document.getElementById('cun-num').textContent = "2"; 
   startGame()
}

function rollThief() {
   document.getElementById('str-num').textContent = "2"; 
   document.getElementById('dex-num').textContent = "6"; 
   document.getElementById('cun-num').textContent = "3"; 
   startGame()
}

function rollMerch() {
   document.getElementById('str-num').textContent = "3"; 
   document.getElementById('dex-num').textContent = "2"; 
   document.getElementById('cun-num').textContent = "4"; 
   startGame()
}

function startGame() {
    let stats = document.querySelectorAll('.load')
 stats.forEach(stat => {
    stat.style.visibility ="visible";
 });
 let choices = document.querySelectorAll('.start')
 choices.forEach(choice => {
    choice.style.visibility ="hidden";
 });
    
}

knightButton.addEventListener('click', rollKnight);
thiefButton.addEventListener('click', rollThief);
merchButton.addEventListener('click', rollMerch);

