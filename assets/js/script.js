// Global Variables
// Game Starting buttons
const knightButton = document.getElementById('choose-knight');
const thiefButton = document.getElementById('choose-thief');
const merchButton = document.getElementById('choose-merchant');
// selected Job
let job = "";

/**removes game controls on page inital load so that users can only select options that start the game */
function pageLoad() {
   let stats = document.querySelectorAll('.load')
   stats.forEach(stat => {
      stat.style.visibility = "hidden";
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

// 3 functions below allow player to pick their job before starting their quest using the 3 job buttons
/** selects the Knight Job, allocates necessary stats and begins the quest */
function rollKnight() {
   document.getElementById('str-num').textContent = "4";
   document.getElementById('dex-num').textContent = "3";
   document.getElementById('cun-num').textContent = "2";
   job = "Knight"
   startGame()
   createQuest()
}

/** selects the Thief Job, allocates necessary stats and begins the quest */
function rollThief() {
   document.getElementById('str-num').textContent = "2";
   document.getElementById('dex-num').textContent = "6";
   document.getElementById('cun-num').textContent = "3";
   job = "Thief"
   startGame()
   createQuest()
}

/** selects the Merchant Job, allocates necessary stats and begins the quest */
function rollMerch() {
   document.getElementById('str-num').textContent = "3";
   document.getElementById('dex-num').textContent = "2";
   document.getElementById('cun-num').textContent = "4";
   job = "Merchant"
   startGame()
   createQuest()
}

/** removes job selector buttons and replaces with game controls */
function startGame() {
   let stats = document.querySelectorAll('.load')
   stats.forEach(stat => {
      stat.style.visibility = "visible";
   });
   let choices = document.querySelectorAll('.start')
   choices.forEach(choice => {
      choice.style.visibility = "hidden";
   });
}

/** generates a random storyline for the player's quest */
function createQuest() {
   let questLine = {
      name: ["Harrison", "Brick", "Engelbert", "Constance", "Inga", "Gertrude"],
      endDestination: ["the Grand ol' Opry", "the Bahamas", "your Gran's house",
         "Greggs", "the Amish Lowrider Motor Show", "your scheduled audience with the king"
      ],
      reason: ["as is tradition", "for tax purposes", "on a spiritual journey of self-discovery",
         "for an important business lunch", "for a romantic long weekend", "because you have been paid a lot of money to do so"
      ]
   }
   let x = []
   let y = []
   let z = []
   for (let i = 0; i < 3; i++){
     let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
     if (x.length === 0){
       x.push(d6);
       } else if (y.length === 0){
       y.push(d6);
       } else if (z.length === 0){
       z.push(d6);
       } else {
         console.log("no variables to assign dice roll, breaking loop!")
         break;
     }
   }
   document.getElementById('intro-text').textContent = 
    `You are ${questLine.name[x]} the ${job} and you are travelling to ${questLine.endDestination[y]}, ${questLine.reason[z]}!`;
}

// event listeners for the 3 job buttons that start the quests
knightButton.addEventListener('click', rollKnight);
thiefButton.addEventListener('click', rollThief);
merchButton.addEventListener('click', rollMerch);



// str tests:
// fight
// jump

// dex tests:
// mimic
// climb

// cun tests:
// book
// cardgame

// the first function would roll a random encounter, first it has to roll 1d6 to determine one of the 6 encounters

// will establish a variable named "check", which will then be given "str", "dex" or "cun" depending on the encounter rolled.
// will establish a variable called encounterCounter and pull the value of the "encounter-counter" Id. 

// an event listener should be attached to the run away and do it buttons

// an if statement will then determine based on the value of the check variable what stat to roll against. 
// a function to roll against that stat will be activated
// will use strength as the exmaple here: 

// a strength variable is established by getting the value of the strength stat in the docuement
// strength check function will roll a number between 0 and 10 
// if check number lower than the player's strength variable, then


