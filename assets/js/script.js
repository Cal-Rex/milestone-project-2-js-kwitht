// Global Variables
// Game Starting buttons
const knightButton = document.getElementById('choose-knight');
const thiefButton = document.getElementById('choose-thief');
const merchButton = document.getElementById('choose-merchant');
// selected Job
let job = "";

// game controls
// start an encounter
const adventureButton = document.getElementById('keep-going');
// run away button
const runAwayButton = document.getElementById('flee-btn');

//game mechanics
// used for assigning the type of ability checks in each scenario
let check = "";
// used to prevent getting the same encounter type twice in a row
let dupeStopper = "";
// logs the encounter type to ensure the correct system messages on action success or failure
let encounterFoe = "";
let encounterType = "";
let runRoll = false;


/**removes game controls on page inital load so that users can only select options that start the game */
function pageLoad() {
   let stats = document.querySelectorAll('.load')
   stats.forEach(stat => {
      stat.style.visibility = "hidden";
   });
   let restartButton = document.getElementById('new-game');
   restartButton.style.visibility = "hidden";
   document.getElementById('loading').style.display = "none";
   document.getElementById('game-loaded').style.display = "grid";
}

window.addEventListener('load', pageLoad);

function pageReset() {
   document.getElementById('loading').style.display = "block";
   document.getElementById('game-loaded').style.display = "none";
}

window.addEventListener('unload', pageReset);



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
         "Greggs", "an Amish Lowrider Motor Show", "your scheduled audience with the king"
      ],
      reason: ["as is tradition", "for tax purposes", "on a spiritual journey of self-discovery",
         "for an important business lunch", "for a romantic long weekend", "because you have been paid a lot of money to do so"
      ]
   }
   let x = []
   let y = []
   let z = []
   for (let i = 0; i < 3; i++) {
      let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
      if (x.length === 0) {
         x.push(d6);
      } else if (y.length === 0) {
         y.push(d6);
      } else if (z.length === 0) {
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

/** generates a new encounter */
function keepGoing() {
   document.getElementById('keep-going').style.visibility = "hidden"
   document.getElementById('keep-going').textContent = "Keep Going!";

   // this is the selection of names that can be chosen for encounter "monsters"
   // the choice is determined by generating 2 numbers between 0 and 6, then adding them together
   let names = ["Unfortunate Greg", "Deuce", "Snake-Eyes Pete", "Daunchy",
      "The Artist formerly known as", "Doris", "Cynthia", "Majestic Michael",
      "Flothers", "Dangerous Daniel", "Bruce", "Alexander", "Crit McGee"
   ]
   let monsters = ["goblin", "slime", "crab-person", "steam-powered debt collector",
      "talking bear", "highwayman", "hoodlum", "land pirate", "outlaw", "rabid hobbit",
      "handstanding mermaid", "Nestle executive", "splitter of realms"
   ]

   let npcs = ["last old lady alive who still plays bridge", "magician", "casino dealer",
      "amateur Blackjack addict", 'kid who loves playing "Go Fish"', "cowboy", "noble",
      "ol' timey gangster", "chain-smoking stock broker", "professional russian roullette player", "bounty hunter",
      'self-proclaimed "betting man"', "card-counting robot"
   ]
   let eCalc = [];
   for (let i = 0; i < 6; i++) {
      let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
      eCalc.push(d6)
   }
   if (eCalc[4] === dupeStopper) {
      eCalc[4]++
      if (eCalc[4] === 5) {
         eCalc[4] === 0; 
      }
      console.log("dupeStopper was used!")
   }

   let monsterResult = eCalc[2] + eCalc[3];
   let nameResult = eCalc[0] + eCalc[1];
   // let encounterText = document.getElementById('encounter-text').textContent;
   if (eCalc[4] === 0) {
      document.getElementById('encounter-text').textContent = `You come across a large gorge. 
      to walk around it would take a really long time. or, you could just jump it... Will you do it!?`;
      check = "strength";
   } else if (eCalc[4] === 1) {
      document.getElementById('encounter-text').textContent = `You have crossed paths with ${names[nameResult]} the ${monsters[monsterResult]}. 
   They wont let you past unless you fight them to the death! Will you do it!?`;
      check = "strength";
   } else if (eCalc[4] === 2) {
      document.getElementById('encounter-text').textContent = `It's getting dark and you come across a camp. You meet ${names[nameResult]}, the ${npcs[monsterResult]}.
      They extend an offer to stay at their cozy camp for the night, provided you play a game of cards with them... Will you do it!?`;
      check = "cunning";
   } else if (eCalc[4] === 3) {
      document.getElementById('encounter-text').textContent = `You have been ambushed by ${names[nameResult]} the notorious ${monsters[monsterResult]}! 
      they try to mug you! you'll need to fight back if you want to press forward... Will you do it!?`;
      check = "strength";
   } else if (eCalc[4] === 4) {
      document.getElementById('encounter-text').textContent = `You are travelling through a forest and you come across a big dusty book sitting on a tree stump. 
      It's giving off real spooky vibes and you think you can hear it whispering at you to read it... Will you do it!?`
      check = "cunning";
   } else if (eCalc[4] === 5) {
      document.getElementById('encounter-text').textContent = `You find a big ol' chest abandoned on the side of the road. 
      Looks like it might have something valuable in it. You could try an open it... Will you do it!?`
   } else {
      alert("invalid encounter type!")
      console.log("Error! encounter number =", eCalc[4])
   }
   dupeStopper = eCalc[4];
   encounterType = dupeStopper;
   encounterFoe = monsters[monsterResult];

   console.log("random name generator rolled a", nameResult, "and picked", names[nameResult]);
   console.log("encounter type", encounterType, "rolled");
   console.log("encounter number", eCalc[4], "selected");
   // document.getElementById('encounter-text').textContent = names[nameResult];


   // let x = [];
   // let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
   // x.push(d6);
   // console.log("loading scernario", x[0])
};

adventureButton.addEventListener('click', keepGoing)

function deathMessage() {
   let fightDeath = [];
   let runDeath = [
   `you decided to leave jumping the gorge but a bunch of jocks saw you wimp out 
   so they tried to throw you across against your will. You fell to your death.`,
   
   `when you tried to flee, but the ${encounterFoe} shot you with an well-aimed arrow to the back.
    You died a coward's death.`,

   `You decided not to stay for the night, you died of hypothermia at 3AM. 
   Should have worn more layers.`,

   `You tried to escape the ambushed but you were ambushed with in your ambush 
   and were subsequently ambushed to death by an ambush of ${encounterFoe}s.`,

   `You accidentally summon a demon. It eats you. You are dead.`,

   `You decided to play it safe and not open the chest. But were then mauled by a bear 
   for interrupting it's monologue on the economic distribution of wealth.
   You are dead.`
   ];

   let death = "";
   if (runRoll = true) {
      death = runDeath[encounterType]
   } else {
      death = fightDeath[encounterType]
   }
   document.getElementById('death-text').textContent = death;
}

function runAway() {
   runRoll = true;
   let stat = document.getElementById('dex-num').textContent;
   let escapeRoll = (Math.round((Math.floor(Math.random() * 11)) / 100 * 90));
   if (stat >= escapeRoll) {
      keepGoing();
   } else {
      document.getElementById("you-died-js-target").style.display = "block";
      deathMessage()
      alert(`system rolled ${escapeRoll} and beat your Dexterity of ${stat}`);
      console.log("game rolled", escapeRoll, "for escape challenge");
   }

}

runAwayButton.addEventListener('click', runAway)




// the first function would roll a random encounter, first it has to roll 1d6 to determine one of the 6 encounters

// will establish a variable named "check", which will then be given "str", "dex" or "cun" depending on the encounter rolled.
// will establish a variable called encounterCounter and pull the value of the "encounter-counter" Id. 

// an event listener should be attached to the run away and do it buttons

// an if statement will then determine based on the value of the check variable what stat to roll against. 
// a function to roll against that stat will be activated
// will use strength as the exmaple here: 

// a strength variable is established by getting the value of the strength stat in the docuement
// strength check function will roll a number between 0 and 10 
// if check number lower than the player's strength variable, then the encounter text box will say they have completed the task
// the encounterCounter variable will increase by 1 and then be assigned to html id text content of encounter-counter
// if the encounterCounter variable = 10 it will run the questCompleted function
// else, the story background will change to black, job icon will disappear, 
// red text will desplay "YOU DIED" and then print the .death value of the encounter object
// game controls should disappear, new game button should appear which should refresh the page on click