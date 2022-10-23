/*jshint esversion: 6 */
// Global Variables
// Game Starting buttons
const knightButton = document.getElementById('choose-knight');
const thiefButton = document.getElementById('choose-thief');
const merchButton = document.getElementById('choose-merchant');
// selected Job
let job = "";
// generated characteristics
let charName = "";
let destination = "";
let destReason = "";

// game controls
// start an encounter
const adventureButton = document.getElementById('keep-going');
// run away button
const runAwayButton = document.getElementById('flee-btn');
// action button
const actionButton = document.getElementById('fight-btn');
// new game/refresh the page
const nGButton = document.getElementById('new-game');

//game mechanics
// used for assigning the type of ability checks in each scenario
let check = "";
// used to prevent getting the same encounter type twice in a row
let dupeStopper = 5;
// logs the encounter type to ensure the correct system messages on action success or failure
let encounterFoe = "";
let encounterType = 5;
let encounterDiceRoll = 0;
let runRoll = false;


// initial page functions

/** if triggered, refreshes the page */
function newGame() {
   document.getElementById('game-loaded').style.display = "none";
   document.getElementById('loading').style.display = "block";
   location.reload();
}

/** covers page with "loading" screen while the page reloads all elements */
function pageReset() {
   document.getElementById('loading').style.display = "block";
   document.getElementById('game-loaded').style.display = "none";
}

/**removes game controls on page inital load so that users can only select options that start the game */
function pageLoad() {
   let stats = document.querySelectorAll('.load');
   stats.forEach(stat => {
      stat.style.visibility = "hidden";
   });
   let restartButton = document.getElementById('new-game');
   restartButton.style.visibility = "hidden";
   document.getElementById('loading').style.display = "none";
   document.getElementById('game-loaded').style.display = "grid";
   document.getElementById('encounter-log').style.visibility = "hidden";
}

/** changes the "instructions" text on the instructions button to a different 
 * random "uctions" word on click, while the button is clicked */
function instClick() {
   let instAlts = ["Deductions", "Reductions", "Conductions",
      "seductions", "Abductions", "Inductions", "Constructions",
      "productions", "Liposuctions", "Destructions", "Introductions",
      "constructions", "Solifluctions"
   ];
   let altRoller = (Math.round((Math.floor(Math.random() * 11)) / 100 * 60)) + (Math.round((Math.floor(Math.random() * 11)) / 100 * 60));
   document.getElementById('modal-button').innerHTML = instAlts[altRoller];
   console.log('Instructions button clicked');
   console.log(`the variable "altRoller" generated a ${altRoller}`);
   console.log(`the "instAlts" array contains:`);
   console.log(instAlts);
   console.log(`Meaning, the instructions button should contain ${instAlts[altRoller]} (instAlts[altRoller])`);
}

function instReturn() {
   document.getElementById('modal-button').innerHTML = "Instructions";
   console.log(`button was released, returning innerHTML to "Instructions"`);
}


// choosing a job functions

/** selects the Knight Job, allocates necessary stats and begins the quest */
function rollKnight() {
   document.getElementById('str-num').textContent = "5";
   document.getElementById('dex-num').textContent = "4";
   document.getElementById('cun-num').textContent = "3";
   document.getElementById('job-icon').style.backgroundImage = "url(assets/images/jobs/knight.webp)";
   job = "Knight";
   console.log(`job chosen is ${job}`);
   console.log(`stats are: strength: 5, Agility: 4, Cunning: 3`);
   startGame();
   console.log('now switching to "lets go" button');
   console.log('now creating quest');
   createQuest();
}

/** selects the Thief Job, allocates necessary stats and begins the quest */
function rollThief() {
   document.getElementById('str-num').textContent = "2";
   document.getElementById('dex-num').textContent = "7";
   document.getElementById('cun-num').textContent = "3";
   document.getElementById('job-icon').style.backgroundImage = "url(assets/images/jobs/thief.webp)";
   job = "Thief";
   console.log(`job chosen is ${job}`);
   console.log(`stats are: strength: 2, Agility: 7, Cunning: 3`);
   startGame();
   console.log('now switching to "lets go" button');
   console.log('now creating quest');
   createQuest();
}

/** selects the Merchant Job, allocates necessary stats and begins the quest */
function rollMerch() {
   document.getElementById('str-num').textContent = "3";
   document.getElementById('dex-num').textContent = "3";
   document.getElementById('cun-num').textContent = "6";
   document.getElementById('job-icon').style.backgroundImage = "url(assets/images/jobs/merchant.webp)";
   job = "Merchant";
   console.log(`job chosen is ${job}`);
   console.log(`stats are: strength: 3, Agility: 3, Cunning: 6`);
   startGame();
   console.log('now switching to "lets go" button');
   console.log('now creating quest');
   createQuest();
}

// instruction modal box
// code for modal box lifted from w3Schools, 
//but functions changed to accomodate touchscreen users
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let modalBtn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modalBtn.onclick = function () {
   modal.style.display = "block";
};
modalBtn.onclick.innerHTML = function () {
   modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
};

// Own code added to accomodate touchscreens for modal box
/** makes modal instruction button respond to touchscreen presses */
function touchScreenModalHandler() {
   modal.style.display = "block";
}

//Beginning the game functions

/** removes job selector buttons and replaces with game controls */
function startGame() {
   let stats = document.querySelectorAll('.load');
   stats.forEach(stat => {
      stat.style.visibility = "visible";
   });
   let choices = document.querySelectorAll('.start');
   choices.forEach(choice => {
      choice.style.visibility = "hidden";
   });
   document.getElementById('story-box').classList.add('story-vis');
   document.getElementById('str-num').classList.add('str-vis');
   document.getElementById('strength').classList.add('str-vis');
   document.getElementById('dex-num').classList.add('dex-vis');
   document.getElementById('dexterity').classList.add('dex-vis');
   document.getElementById('cun-num').classList.add('cun-vis');
   document.getElementById('cunning').classList.add('cun-vis');
   document.getElementById('game-loaded').classList.remove('game-start-menu');
   document.getElementById('game-loaded').classList.add('game');
   document.getElementById('story-box').classList.remove('story-box-start-bg');
   document.getElementById('story-box').classList.add('story-box-questing');
}

/** generates a random storyline for the player's quest and replaces the intro text on the html*/
function createQuest() {
   let questLine = {
      name: ["Harrison", "Brick", "Laurence", "Constance", "Shirley", "Hyacinth"],
      endDestination: ["the Grand ol' Opry", "the Bahamas", "your Gran's house",
         "Greggs", "an Amish Lowrider Motor Show", "your scheduled audience with the king"
      ],
      reason: ["as is tradition", "for tax purposes", "on a spiritual journey of self-discovery",
         "for an important business lunch", "for a romantic long weekend", "because you have been paid a lot of money to do so"
      ]
   };
   console.log(`all possible outcomes for character name, destniation and reson are stored in the "questLine" object.`);
   console.log(`questLine object = ${questLine}`);
   let x = [];
   let y = [];
   let z = [];
   for (let i = 0; i < 3; i++) {
      let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
      if (x.length === 0) {
         x.push(d6);
      } else if (y.length === 0) {
         y.push(d6);
      } else if (z.length === 0) {
         z.push(d6);
      } else {
         break;
      }
   }
   console.log(`variable "d6" was rolled 3 times (${x}, ${y}, ${z}) and created the 3 numbers that pick relevant contents from the object`);
   document.getElementById('intro-text').textContent =
      `You are ${questLine.name[x]} the ${job} and you are travelling to ${questLine.endDestination[y]}, ${questLine.reason[z]}!`;
   console.log(`The function has now printed: "You are 'questLine.name ${x}' the ${job} and you are travelling to 'questLine.endDestination ${y}', 'questLine.reason ${z}'!"`);
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   
   console.log(`Character name, destination and destination reason are now saved to global variables(charName: ${charName}, destination: ${destination}, reason: ${destReason})`);
   charName = questLine.name[x];
   destination = questLine.endDestination[y];
   destReason = z[0];
}

// Core Gameplay loop functions

/** generates a new encounter */
function keepGoing() {
   //first part of the function switches the game buttons out to show the "do it!" and "Run away!" buttons"
   document.getElementById('keep-going').style.visibility = "hidden";
   document.getElementById('keep-going').textContent = "Keep Going!";
   document.getElementById('actions').style.visibility = "visible";
   document.getElementById('run-actions').style.visibility = "visible";
   adventureButton.classList.remove('btn-anim');
   actionButton.classList.add('btn-anim');
   runAwayButton.classList.add('btn-anim');
   console.log(`let's go button pressed, change=ing button content to "keep going!" and removing.`);
   console.log(`game buttons now visible`);

   // this is the selection of names that can be chosen for encounter "monsters"
   let names = ["Unfortunate Greg", "Deuce", "Snake-Eyes Pete", "Daunchy",
      "The Artist formerly known as", "Doris", "Boblin", "Majestic Michael",
      "Flothers", "Dangerous Daniel", "Crit McGee"
   ];
   let monsters = ["crab-person", "slime", "goblin", "steam-powered debt collector",
      "talking bear", "highwayman", "hoodlum", "land pirate", "outlaw", "Nestle executive", "splitter of realms"
   ];

   let npcs = ["last old lady alive who still plays bridge", "magician", "casino dealer",
      "amateur Blackjack addict", 'kid who loves playing "Go Fish"', "cowboy", "noble",
      "ol' timey gangster", "chain-smoking stock broker", "professional russian roullette player", "bounty hunter"
   ];

   // Encounter calculating array, the for loop pushes 6 random numbers into the array, 
   // which are used to generate the encounter data
   // Global variable "dupeStopper" is compared to and then updated at this point to 
   // prevent back-to-back duplications of scenarios
   let eCalc = [];
   for (let i = 0; i < 6; i++) {
      let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
      eCalc.push(d6);
   }
   if (eCalc[4] === dupeStopper) {
      console.log(`encounter roll was ${eCalc[4]}, same as ${dupeStopper}, so it will be rolled again.`)
      while (eCalc[4] === dupeStopper) {
         let i = 0;
         eCalc[4] = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
         i++;
         if (i === 2) {
            break;
         }
      }
      console.log(`encounter roll is now ${eCalc[4]}`)
   }

   // using the first 4 values of the encounter calculation array, 
   // a value is establised to pick a random name from the "names" array
   // the same is done for the monsters and npcs array, which are swapped out in the template literal content
   // for each encounter as appropriate
   let monsterResult = eCalc[2] + eCalc[3];
   let nameResult = eCalc[0] + eCalc[1];
   console.log(`monster or npc type rolled was: ${monsterResult}`);
   console.log(`name result rolled was ${nameResult}`);
   console.log(`encounter roll is now: ${eCalc[4]}`);
   // the final number in the encounter calculation array determines the encounter selected by cycling through
   // the if and if else statements below, it also a value to the "check" global variable
   if (eCalc[4] === 0) {
      document.getElementById('encounter-text').textContent = `You come across a large gorge. 
      To walk around it would take a really long time. Although, you could just jump it... Will you do it!?`;
      check = "strength";
   } else if (eCalc[4] === 1) {
      document.getElementById('encounter-text').textContent = `You have crossed paths with ${names[nameResult]} the ${monsters[monsterResult]}. 
   They wont let you past unless you fight them to the death! Will you do it!?`;
      encounterFoe = monsters[monsterResult];
      check = "strength";
   } else if (eCalc[4] === 2) {
      document.getElementById('encounter-text').textContent = `It's getting dark and you come across a camp. You meet ${names[nameResult]} the ${npcs[monsterResult]}.
      They extend an offer to stay at their cozy camp for the night, provided you play a game of cards with them... Will you do it!?`;
      encounterFoe = npcs[monsterResult];
      check = "cunning";
   } else if (eCalc[4] === 3) {
      document.getElementById('encounter-text').textContent = `You have been ambushed by ${names[nameResult]} the notorious ${monsters[monsterResult]}! 
      They try to mug you! You'll need to fight back if you want to press forward... Will you do it!?`;
      encounterFoe = monsters[monsterResult];
      check = "strength";
   } else if (eCalc[4] === 4) {
      document.getElementById('encounter-text').textContent = `On your travels you come across a big dusty book sitting on a tree stump. 
      It's giving off real spooky vibes and you think you can hear it whispering at you to read it... Will you do it!?`;
      encounterFoe = names[nameResult];
      check = "cunning";
   } else if (eCalc[4] === 5) {
      document.getElementById('encounter-text').textContent = `You find a big ol' chest abandoned on the side of the road. 
      Looks like it might have something valuable in it. You could try an open it... Will you do it!?`;
      check = "dexterity";
   } else {
      alert("invalid encounter type!");
   }

   // with the encounter now selected, the value of the dupeStopper variable is now re-assigned, 
   // to prevent generating this same encounter on the next round should the player succeed this encounter
   dupeStopper = eCalc[4];
   encounterType = dupeStopper;
   console.log(`the encounter value has now been pushed to "dupeStopper" to prevent repeat next turn.`);
   console.log(`dupeStopper is now ${dupestopper}`);

   // the background is then randomly cycled
   backgroundRoller();
}

/** cycles random backgrounds per encounter*/
function backgroundRoller() {
   let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
   let bgArray = [
      "url(assets/images/backgrounds/env-1.webp)",
      "url(assets/images/backgrounds/env-2.webp)",
      "url(assets/images/backgrounds/env-3.webp)",
      "url(assets/images/backgrounds/env-4.webp)",
      "url(assets/images/backgrounds/env-5.webp)",
      "url(assets/images/backgrounds/env-6.webp)"
   ];
   // The class that contained the animation for the background is now re-added
   document.getElementById("story-bg").classList.add('encounter-bg-slide');
   document.getElementById("story-bg").style.backgroundImage = bgArray[d6];
   console.log(`background has been cycled, "d6" rolled has selected bgArray[${d6}]`);
}

// triggered when the player chooses to "do it!" or "run away!", assigning a value to chack the player's stat against
/** "roles" a "dice" to determine the difficulty check of any given encounter, 
 * difficulty check increases depending on game progress
 * the end result of the function is pushed into the ancounterDiceRoll global variable */
function rollDice() {
   let diceRoll = 0;
   let encounterDocLog = document.getElementById('encounter-counter').textContent;
   let encounterCounter = parseInt(encounterDocLog);
   if (encounterCounter <= 4) {
      diceRoll = (Math.round((Math.floor(Math.random() * 11)) / 100 * 40));
   } else if (encounterCounter <= 7) {
      diceRoll = (Math.round((Math.floor(Math.random() * 11)) / 100 * 60));
   } else {
      diceRoll = (Math.round((Math.floor(Math.random() * 11)) / 100 * 90));
   }
   encounterDiceRoll = diceRoll;
   console.log(`Progress checked. Because progress is ${encounterDocLog} difficulty is now adjust through if statements`);
}

// "running away" functions

/** activates if the player chooses to run away */
function runAway() {
   // global variable set to true to determine the correct type of message to generate on failure
   runRoll = true;
   console.log(`player chose to run away!`);
   let stat = document.getElementById('dex-num').textContent;
   rollDice();
   let escapeRoll = encounterDiceRoll;
   if (stat >= escapeRoll) {
      runSuccess();
      runRoll = false;
      console.log(`system rolled a ${escapeRoll}, which is less than the player's stat, run away successfull.`);
   } else {
      console.log(`system rolled a ${escapeRoll}, which is greater than the player's stat, run away is a fail.`);
      deathMessage();
   }
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById("story-bg").classList.remove('encounter-bg-slide');
   btnAnimReset();
}

/** launches when a run away roll is successfull, generates the correct message based off of the encounterType global variable */
function runSuccess() {
   let flee = [
      `You decide against making the jump, a bunch of kids see you backing down. 
      They mock you furiously about your weak legs. You go and have a wee cry before taking the long way round.`,

      `The ${encounterFoe} tries to make chase, but you outrun them. 
      You have no idea where you are now though.`,

      `You decide against it, the ${encounterFoe} seems sketchy AF. You backtrack the way you came to the nearest inn.`,

      `You manage to successfully escape the ambush and hide in some nearby woods for a day, 
      just to be on the safe side.`,

      `You decide against it, way too spooky. So spooky in fact, you run back the way you came...`,

      `Ah! the chest was a mimic! As it opens its big chest mouth you stumble and fall back, it eats your weapons, 
      but at least you're alive. You double back to the nearest town to make an insurance claim on your lost weapons.`
   ];

   // switches buttons out to prompt the user to progress
   document.getElementById('encounter-text').textContent = flee[encounterType];
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById('keep-going').style.visibility = "visible";
   console.log(`outcome ${encounterType} is printed from the "flee" variable because the enounter type was ${encounterType}`);
}

// fight "Do it!" functions

/** triggered when "do it!" is clicked. assigns the correct stat to be checked based on value 
 * that is assigned to the "check" variable then decides what function to trigger depending 
 * on the compared values of the encounterDiceRoll global variable and player's respective stat */
function statCheck() {
   console.log(`player chose to "do it!"`);
   rollDice();
   let playerStat = 0;
   if (check === "strength") {
      let stat = document.getElementById('str-num').textContent;
      playerStat = parseInt(stat);
   } else if (check === "cunning") {
      let stat = document.getElementById('cun-num').textContent;
      playerStat = parseInt(stat);
   } else if (check === "dexterity") {
      let stat = document.getElementById('dex-num').textContent;
      playerStat = parseInt(stat);
   } else {
      alert("invalid check type!");
   }
   console.log(`check for this encounter is ${check}, so player's check stat is ${playerStat}`)
   if (playerStat > encounterDiceRoll) {
      victory();
      console.log(`system rolled ${encounterDiceRoll} which is less than or equal to the player's stat of ${playerStat}, victory function triggered`);
   } else {
      deathMessage();
      console.log(`system rolled ${encounterDiceRoll} which is greater than the player's stat of ${playerStat}, death functions triggered`);
   }
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById("story-bg").classList.remove('encounter-bg-slide');
   btnAnimReset();
}

// WINNING

/** activates if the player's playerStat beats the encounterDiceRoll against them. 
 * increases the stat that was checked against by 1 and generates a victory message depending
 * encounter type. Triggers the "progress" function. */
function victory() {
console.log(`because the check was ${check}, the ${check} stat now increases by 1`);
   if (check === "strength") {
      let skill = document.getElementById('str-num').textContent;
      let strSkill = parseInt(skill);
      strSkill++;
      document.getElementById('str-num').textContent = strSkill;
   } else if (check === "cunning") {
      let skill = document.getElementById('cun-num').textContent;
      let cunSkill = parseInt(skill);
      cunSkill++;
      document.getElementById('cun-num').textContent = cunSkill;
   } else {}
   let vMessage = [
      "You managed to jump the gorge! Clearly you didn't skip leg day. Your strength increases by 1.",

      `You fought the ${encounterFoe} to the death, and they died! What's even better than that is that you didn't die! 
      Your strength has increases by 1.`,

      `You decide to stay and try your luck. The ${encounterFoe} keeps accidentally showing you their hand. 
      You absolutely clean them out. Your Cunning has increases by 1.`,

      `The ambush was a bust, you absolutely battered them and took their lunch money.
      Your strength increases by 1.`,

      `You recite a verse from the book and you are teleported 50 miles up the road 
      and you your acid reflux from eating that squirrel earlier is gone, Jackpot.
      Your cunning increases by 1.`,

      `Ah! the chest was a mimic! As it opens its big chest mouth you manage to jump out the way just in time. 
      You burn it and head onwards.`
   ];
   document.getElementById('encounter-text').textContent = vMessage[encounterType];
   console.log(`a victory message is pulled from the "vMessage" array based on the encounter type`);
   console.log(`vMessage:`);
   console.log(vMessage);


   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById('keep-going').style.visibility = "visible";
   progress();
}

/** increases the adventure completion percentage in addition to moving the job avatar
 * accross the screen. when the progression value hits 10, it will trigger the game winning function */
function progress() {
   document.getElementById('encounter-log').style.visibility = "visible";
   let stepForward = document.getElementById('job-icon');
   let progressString = document.getElementById('encounter-counter').textContent;
   let progression = parseInt(progressString);
   progression++;
   if (progression === 1) {
      stepForward.style.left = "22%";
   } else if (progression === 2) {
      stepForward.style.left = "25%";
   } else if (progression === 3) {
      stepForward.style.left = "27%";
   } else if (progression === 4) {
      stepForward.style.left = "30%";
   } else if (progression === 5) {
      stepForward.style.left = "32%";
   } else if (progression === 6) {
      stepForward.style.left = "35%";
   } else if (progression === 7) {
      stepForward.style.left = "37%";
   } else if (progression === 8) {
      stepForward.style.left = "40%";
   } else if (progression === 9) {
      stepForward.style.left = "45%";
   } else if (progression === 10) {
      stepForward.style.left = "50%";
   }
   document.getElementById('encounter-counter').textContent = progression;
   console.log(`progression is increased, animation triggered by if statement, progress logged`)
   if (progression === 10) {
      winQuest();
      console.log(`progress 100%, quest completion functions triggered.`)
   }
}

/** function that activates when player beats the game
 * modifies the deathbox and turns it into a victory box, printing a custom epilogue
 * depending on the quest generated at the start of the game */
function winQuest() {
   let epilogue = [`With the tradition been upheld for another 100 years. You look towards the horizon 
   (wherever the horizon would be in ${destination}) and ponder, "Will the next adventurer's journey be as perilous as mine?"
   i guess you'll never know...`,

      `Now that you have managed to move all of your assets safely. You can now retire knowing that you will 
   never have to work another day in your life. Which makes you wonder, "what about the next life?". 
   If only there was some way to find out...`,

      `As you look back on all your encounters - and down at your stats - you truly feel like you have really discovered the real you.
   The real ${charName} the enlightened ${job}. You regale the tales of your travels to anyone that would listen.
   Years from now, Divine ${job} ${charName} is the monarch of the ${charName}anism, the religeon of great adventurers. 
   Will any disciple ever hold a candle to the great flame of ${charName}?...`,

      `Thank goodness you managed to make your business lunch. Just on time and only with a few scrapes. You eat heartily
   and seal the deal. With your new business in ${job}ing you make lots of money and never have to worry about 
   doing another quest. Will anyone else ever get so lucky?...`,

      `Unfortunately, your date didn't get so lucky in their quest. That, or you got stood up. 
   but let's not fuss over the small details. You enjoyed ${destination} to it's fullest as ${charName} the strong independent
   ${job} who don't need nobody. Years later, you Look back on your adventures and ponder if things could have been different.
   If only there was a way to see...`,

      `Now that you have got to ${destination} you can now officially spend all that money you'd been paid. 
   You blow it all on Funko Pops. You immediately regret your decision, They are utterly useless. 
   Surely no one else will ever make the same mistake...`
   ];
   console.log(`a game completion message is pulled from the "winQuest" array based on the stored global variables of "charName", "destination" and "destReason"`);
   console.log(`winQuest array:`);
   console.log(winQuest);
   let winner = `You did it ${charName}! You made it to ${destination}! ${epilogue[destReason]}`;
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById('keep-going').style.visibility = "hidden";
   document.getElementById('new-game').style.visibility = "visible";
   document.getElementById("you-died-js-target").style.display = "block";
   document.getElementById('you-died-js-target').classList.remove = ("you-died-css");
   document.getElementById('you-died-js-target').classList.add("you-won-css");
   document.getElementById('story-box').classList.add("story-box-completed");
   document.getElementById('dead').textContent = "You did it!";
   document.getElementById('death-text').textContent = winner;
   document.getElementById('job-icon').classList.add('victory-anim');
}

// DEATH

/** animation trigger for job icon when the player dies */
function deathAnim() {
   document.getElementById('job-icon').classList.add('death-anim');
   console.log(`death animation triggered`);
}

/** launches when a run away roll or action roll is failed. 
 * generates a deathbox message depending on encounter rolled. 
 * triggers the death animation function. also replaces buttons to let user reset game*/
function deathMessage() {
   deathAnim();
   document.getElementById("you-died-js-target").style.display = "block";
   let fightDeath = [
      `You tried to jump it, but you got a leg cramp just as you lept. You fell to your death. You are dead.`,

      `You agreed to fight them to the death, and you fought them to death, your death. You are dead.`,

      `The ${encounterFoe} caught you looking at their cards! They pull out a revolver and start blastin'. You are dead.`,

      `You tried to stand your ground but the ground was actually a bunch of ${encounterFoe}s in ghillie suits.
      They severely outnumber you and overpower you. You are dead.`,

      `You accidentally summon ${encounterFoe} the demon. They eat you. You are dead.`,

      `The chest was a mimic, it snapped open and gobbled you up. You are dead.`
   ];

   let runDeath = [
      `You decided to leave jumping the gorge but a bunch of jocks saw you wimp out 
   so they tried to throw you across against your will. You fell to your death.`,

      `You tried to flee, but the ${encounterFoe} shot you with an well-aimed arrow to the back.
    You died a coward's death.`,

      `You decided not to stay for the night, but couldn't find anywhere else to rest. You died of hypothermia at 3AM. 
   Should have worn more layers.`,

      `You tried to escape the ambush but you were ambushed within your ambush 
   and were subsequently ambushed to death by an ambush of ${encounterFoe}s.`,

      `You decide against reading the book. It is insulted that you ignored it's whispers. It places a curse on you.
   You die from radiation poisoning.`,

      `You decided to play it safe and not open the chest. But were then mauled by a bear 
   for interrupting it's monologue on the economic distribution of wealth.
   You are dead.`
   ];

   let death = "";

   if (runRoll === true) {
      death = runDeath[encounterType];
      console.log(`a death message is pulled from the "runDeath" array because the payer chose to run`);
   console.log(`runDeath array:`);
   console.log(runDeath);
   } else {
      death = fightDeath[encounterType];
      console.log(`a death message is pulled from the "fightDeath" array because the payer chose to fight`);
   console.log(`fightDeath array:`);
   console.log(fightDeath);
   }
   document.getElementById('death-text').textContent = death;
   document.getElementById('new-game').style.visibility = "visible";
   nGButton.classList.add('btn-anim');
}

function btnAnimReset() {
   document.getElementById('keep-going').classList.add('btn-anim');
   actionButton.classList.remove('btn-anim');
   runAwayButton.classList.remove('btn-anim');
}
// event listeners for all game functions

// listners that trigger the "page loading" and start menu screens
window.addEventListener('load', pageLoad);
window.addEventListener('unload', pageReset);

// event listeners for the instructions button
document.getElementById('modal-button').ontouchstart = function () {
   instClick();
};
document.getElementById('modal-button').ontouchend = function () {
   touchScreenModalHandler();
   instReturn();
};
document.getElementById('modal-button').onmousedown = function () {
   instClick();
};
document.getElementById('modal-button').onmouseup = function () {
   instReturn();
};
document.getElementById('modal-button').onmouseleave = function () {
   instReturn();
};


// event listeners for the 3 job buttons that start the quests
knightButton.addEventListener('click', rollKnight);
thiefButton.addEventListener('click', rollThief);
merchButton.addEventListener('click', rollMerch);

// event listeners for in-game functions and actions, like running away, 
// choosing to do an action and then the functions that are triggered in response to those actions
runAwayButton.addEventListener('click', runAway);
actionButton.addEventListener('click', statCheck);
nGButton.addEventListener('click', newGame);
adventureButton.addEventListener('click', keepGoing);