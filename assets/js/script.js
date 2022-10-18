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

/** roles a "dice" to determine the difficulty check of any given encounter, difficulty check increases depending on game progress */
function rollDice (){
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
}


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
   document.getElementById('encounter-log').style.visibility = "hidden";
}

window.addEventListener('load', pageLoad);

/** covers page with "loading" screen while the page reloads all elements */
function pageReset() {
   document.getElementById('loading').style.display = "block";
   document.getElementById('game-loaded').style.display = "none";
}

window.addEventListener('unload', pageReset);



// explanatory text on how the game works
document.getElementById('intro-text').innerHTML =
   `Welcome to Qwetht. It's a game. The aim of the game is to complete the Qwetht by doing stuff.
   Every Qwetht is different. Encounters are random, you are random, the reason for being on your qwetht is random.<br>
   Qwethts can be pretty unforgiving, You can take action or run away from an encounter, but death can loom around the corner
   of any choice you make. Take care in your choices and good luck!`;

// 3 functions below allow player to pick their job before starting their quest using the 3 job buttons
/** selects the Knight Job, allocates necessary stats and begins the quest */
function rollKnight() {
   document.getElementById('str-num').textContent = "5";
   document.getElementById('dex-num').textContent = "4";
   document.getElementById('cun-num').textContent = "3";
   document.getElementById('job-icon').style.backgroundImage = "url(assets/images/jobs/knight.webp)";
   job = "Knight"
   startGame()
   createQuest()
}

/** selects the Thief Job, allocates necessary stats and begins the quest */
function rollThief() {
   document.getElementById('str-num').textContent = "2";
   document.getElementById('dex-num').textContent = "7";
   document.getElementById('cun-num').textContent = "3";
   document.getElementById('job-icon').style.backgroundImage = "url(assets/images/jobs/thief.webp)";
   job = "Thief"
   startGame()
   createQuest()
}

/** selects the Merchant Job, allocates necessary stats and begins the quest */
function rollMerch() {
   document.getElementById('str-num').textContent = "3";
   document.getElementById('dex-num').textContent = "3";
   document.getElementById('cun-num').textContent = "6";
   document.getElementById('job-icon').style.backgroundImage = "url(assets/images/jobs/merchant.webp)";
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
      document.getElementById('actions').style.visibility = "hidden";
      document.getElementById('run-actions').style.visibility = "hidden";
   
   charName = questLine.name[x];
   destination = questLine.endDestination[y];
   destReason = z[0];
   console.log("character name:", charName);
   console.log("destination:", destination);
   console.log("reason:", destReason);
   }

// event listeners for the 3 job buttons that start the quests
knightButton.addEventListener('click', rollKnight);
thiefButton.addEventListener('click', rollThief);
merchButton.addEventListener('click', rollMerch);

/** cycles random backgrounds */
function backgroundRoller() {
   let d6 = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
   let bgArray = [
      "url(assets/images/backgrounds/env-1.webp)",
      "url(assets/images/backgrounds/env-2.webp)",
      "url(assets/images/backgrounds/env-3.webp)",
      "url(assets/images/backgrounds/env-4.webp)",
      "url(assets/images/backgrounds/env-5.webp)",
      "url(assets/images/backgrounds/env-6.webp)"];
   document.getElementById("story-bg").classList.add('encounter-bg-slide');
   document.getElementById("story-bg").style.backgroundImage = bgArray[d6];
}

/** removes the animation from the encounter background so that it can be added again on the next trigger */
function resetBgSlide() {
   document.getElementById("story-bg").classList.remove('encounter-bg-slide');
}


/** generates a new encounter */
function keepGoing() {
   document.getElementById('keep-going').style.visibility = "hidden";
   document.getElementById('keep-going').textContent = "Keep Going!";
   document.getElementById('actions').style.visibility = "visible";
   document.getElementById('run-actions').style.visibility = "visible";


   // this is the selection of names that can be chosen for encounter "monsters"
   // the choice is determined by generating 2 numbers between 0 and 6, then adding them together
   let names = ["Unfortunate Greg", "Deuce", "Snake-Eyes Pete", "Daunchy",
      "The Artist formerly known as", "Doris", "Boblin", "Majestic Michael",
      "Flothers", "Dangerous Daniel", "Bruce", "Alexander", "Crit McGee"
   ]
   let monsters = ["crab-person", "slime", "goblin", "steam-powered debt collector",
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
      while (eCalc[4] === dupeStopper) {
         console.log(`encounter roll (${eCalc[4]}) is the same as previous roll (${encounterType})`)
         let i = 0;
         eCalc[4] = (Math.round((Math.floor(Math.random() * 11)) / 100 * 50));
         i++;
         if (i === 2) {
            break;
         }
      }
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
   encounterFoe = monsters[monsterResult];
      check = "strength";
   } else if (eCalc[4] === 2) {
      document.getElementById('encounter-text').textContent = `It's getting dark and you come across a camp. You meet ${names[nameResult]}, the ${npcs[monsterResult]}.
      They extend an offer to stay at their cozy camp for the night, provided you play a game of cards with them... Will you do it!?`;
      encounterFoe = npcs[monsterResult];
      check = "cunning";
   } else if (eCalc[4] === 3) {
      document.getElementById('encounter-text').textContent = `You have been ambushed by ${names[nameResult]} the notorious ${monsters[monsterResult]}! 
      they try to mug you! you'll need to fight back if you want to press forward... Will you do it!?`;
      encounterFoe = monsters[monsterResult];
      check = "strength";
   } else if (eCalc[4] === 4) {
      document.getElementById('encounter-text').textContent = `You are travelling through a forest and you come across a big dusty book sitting on a tree stump. 
      It's giving off real spooky vibes and you think you can hear it whispering at you to read it... Will you do it!?`
      encounterFoe = names[nameResult];
      check = "cunning";
   } else if (eCalc[4] === 5) {
      document.getElementById('encounter-text').textContent = `You find a big ol' chest abandoned on the side of the road. 
      Looks like it might have something valuable in it. You could try an open it... Will you do it!?`
      check = "dexterity";
   } else {
      alert("invalid encounter type!")
      console.log("Error! encounter number =", eCalc[4])
   }
   dupeStopper = eCalc[4];
   encounterType = dupeStopper;
   

   console.log("random name generator rolled a", nameResult, "and picked", names[nameResult]);
   console.log("encounter type", encounterType, "rolled");
   console.log("encounter number", eCalc[4], "selected");
   backgroundRoller();
};

adventureButton.addEventListener('click', keepGoing)

// launches when a run away roll is successfull
function runSuccess() {
   let flee = [
      `You decide against making the jump, a bunch of kids see you backing down. 
      They mock you. You go and have a wee cry before taking the long way round`,

      `The ${encounterFoe} tries to make chase, but you outrun them, 
      you have no idea where you are now though`,

      `You decide against it, the ${encounterFoe} seems sketchy AF. You backtrack the way you came to the nearest inn.`,

      `You manage to successfully escape the ambush and hide in some nearby woods for a day, 
      just to be on the safe side.`,

      `You decide against it. Way too spooky. so spooky in fact, you run back the way you came...`,

      `Ah! the chest was a mimic! As it opens its big chest mouth you stumble and fall back, it eats your weapons, 
      but at least you're alive. You double back to the nearest town to make an insurance claim on your lost weapons.`
   ];
   document.getElementById('encounter-text').textContent = flee[encounterType]
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById('keep-going').style.visibility = "visible";

}

/** animation trigger for job icon when the player dies */
function deathAnim() {
   document.getElementById('job-icon').classList.add('death-anim');
}

/** launches when a run away roll or action roll is failed. */
function deathMessage() {
   deathAnim()
   document.getElementById("you-died-js-target").style.display = "block";
   let fightDeath = [
      `You tried to jump it, but you got a leg cramp just as you lept. You fell to your death. You are dead.`,

      `You agreed to fight them to the death, and you fought them to death, your death. You are dead.`,

      `The ${encounterFoe} caught you looking at their cards! They pull out a revolver and start blastin'. You are dead.`,

      `You tried to stand your ground but the ground was actually a bunch of ${encounterFoe}s in ghillie suits.
      They severely outnumber you and overpower you. You are dead.`,

      `You accidentally summon ${encounterFoe} the demon. they eat you. You are dead.`,

      `The chest was a mimic, it snapped open and gobbled you up. You are dead.`
   ];

   let runDeath = [
   `you decided to leave jumping the gorge but a bunch of jocks saw you wimp out 
   so they tried to throw you across against your will. You fell to your death.`,
   
   `when you tried to flee, but the ${encounterFoe} shot you with an well-aimed arrow to the back.
    You died a coward's death.`,

   `You decided not to stay for the night, you died of hypothermia at 3AM. 
   Should have worn more layers.`,

   `You tried to escape the ambushed but you were ambushed within your ambush 
   and were subsequently ambushed to death by an ambush of ${encounterFoe}s.`,

   `You decide against reading the book. It is insulted that you ignored it's whispers. It places a curse on you.
   You die from radiation poisoning.`,

   `You decided to play it safe and not open the chest. But were then mauled by a bear 
   for interrupting it's monologue on the economic distribution of wealth.
   You are dead.`
   ];

   let death = "";
   
   if (runRoll === true) {
      death = runDeath[encounterType]
   } else {
      death = fightDeath[encounterType]
   }
   document.getElementById('death-text').textContent = death;
   document.getElementById('new-game').style.visibility = "visible";
}

/** function that activates when player beats the game */
function winQuest() {
   let epilogue = [`With the tradition been upheld for another 100 years. You look towards the horizon, or rather, 
   wherever the horizon would be in ${destination}, and ponder, "Will the next adventurer's journey be as perilous as mine?"
   i guess you'll never know...`,

   `Now that you have managed to move all of your assets safely. You can now retire knowing that you will 
   never have to work another day in your life. Which makes you wonder, "what about the next life?". 
   If only there was some way to find out...`,

   `As you look back on all your encounters - and down at your stats - you truly feel like you have really discovered the real you.
   The real ${charName} the enlightened ${job}. You regale the tales of your travels to anyone that would listen.
   Years from now, Divine ${job} ${charName} is the monarch of the ${charName}anism, the religeon of great adventurers. 
   Will any disciple ever hold a candle to the great flame of ${charName}?...`,

   `Thank goodness you managed to make your business lunch, just on time and only with a few scrapes. You eat heartily
   and seal the deal. With your new business in ${job}ing you make lots of money and never have to worry about 
   doing another quest. Will anyone else ever get so lucky?...`,

   `unfortunately, your date didn't get so lucky in their quest. that, or you got stood up. 
   but let's not fuss over the small details. You enjoyed ${destination} to it's fullest as ${charName} the strong independent
   ${job} who don't need nobody. years later, you Look back on your adventures and ponder if things could have been different.
   If only there was a way to see...`,

   `Now that you have got to ${destination} you can now officially spend all that money you'd been paid. 
   You blow it all on Funko Pops. You immediately regret your decision. They are utterly useless. 
   Surely no one else will ever make the same mistake...`
]
   let winner = `You did it ${charName}! You made it to ${destination}! ${epilogue[destReason]}`;
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById('keep-going').style.visibility = "hidden";
   document.getElementById('new-game').style.visibility = "visible";
   document.getElementById("you-died-js-target").style.display = "block";
   document.getElementById('you-died-js-target').classList.remove =("you-died-css");
   document.getElementById('you-died-js-target').classList.add("you-won-css");
   document.getElementById('story-box').classList.add("story-box-completed")
   document.getElementById('dead').textContent = "You did it!"
   document.getElementById('death-text').textContent = winner;
   document.getElementById('job-icon').classList.add('victory-anim');
}

/** activates if the player's playerStat beats the encounterDiceRoll against them */
function victory() {
   document.getElementById('encounter-log').style.visibility = "visible";
   let stepForward = document.getElementById('job-icon');
   let progressString = document.getElementById('encounter-counter').textContent;
   let progression = parseInt(progressString);
   progression++
   if (progression === 1) {
      stepForward.style.left = "22%"
   } else if (progression === 2) {
      stepForward.style.left = "25%"
   } else if (progression === 3) {
      stepForward.style.left = "27%"
   } else if (progression === 4) {
      stepForward.style.left = "30%"
   } else if (progression === 5) {
      stepForward.style.left = "32%"
   } else if (progression === 6) {
      stepForward.style.left = "35%"
   } else if (progression === 7) {
      stepForward.style.left = "37%"
   } else if (progression === 8) {
      stepForward.style.left = "40%"
   } else if (progression === 9) {
      stepForward.style.left = "45%"
   } else if (progression === 10) {
      stepForward.style.left = "50%"
   };
   document.getElementById('encounter-counter').textContent = progression;
   
   console.log("adventure progression should now be", progression,"0%");

   if (check === "strength") {
      let skill = document.getElementById('str-num').textContent;
      strSkill = parseInt(skill);
      strSkill++
      document.getElementById('str-num').textContent = strSkill;
      console.log("strength is now increased to", strSkill);
   } else if (check === "cunning"){
      let skill = document.getElementById('cun-num').textContent;
      cunSkill = parseInt(skill);
      cunSkill++
      document.getElementById('cun-num').textContent = cunSkill;
      console.log("strength is now increased to", cunSkill);
   } else {
      console.log(`check is "${check}" so no increment added`);
   }
   let vMessage = [
      "You managed to jump the gorge! Clearly you didn't skip leg day. Your strength increases by 1",

      `You fought the ${encounterFoe} to the death, and they died! what's even better than that is that you didn't die! 
      Your strength has increases by 1`,

      `you decide to stay and try your luck. The ${encounterFoe} keeps accidentally showing you their hand. 
      You absolutely clean them out. Your Cunning has increases by 1`,

      `The ambush was a bust, you absolutely battered them and took their lunch money.
      Your strength increases by 1`,

      `You recite a verse from the book and you are teleported 50 miles up the road 
      and you your acid reflux from eating that squirrel earlier is gone. Jackpot.
      Your cunning increases by 1`,

      `Ah! the chest was a mimic! As it opens its big chest mouth you manage to jump out the way just in time. 
      You burn it and head onwards.`
   ]
   document.getElementById('encounter-text').textContent = vMessage[encounterType];

   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   document.getElementById('keep-going').style.visibility = "visible";

   if (progression === 10) {
      winQuest()
   }
}

/** activates if the player chooses to run away */
function runAway() {
   runRoll = true;
   let stat = document.getElementById('dex-num').textContent;
   rollDice()
   let escapeRoll = encounterDiceRoll;
   if (stat >= escapeRoll) {
      runSuccess();
      runRoll = false;
   } else {
      deathMessage()
      console.log("game rolled", escapeRoll, "for escape challenge");
   }
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   resetBgSlide();
}

runAwayButton.addEventListener('click', runAway)

/** assigns the correct stat to be checked based on the type of encounter that is rolled */
function statCheck() {
   rollDice()
   let playerStat = 0;
   if (check === "strength") {
      let stat = document.getElementById('str-num').textContent;
      playerStat = parseInt(stat);
   } else if (check === "cunning"){
      let stat = document.getElementById('cun-num').textContent;
      playerStat = parseInt(stat);
   } else if (check === "dexterity") {
      let stat = document.getElementById('dex-num').textContent;
      playerStat = parseInt(stat);
   } else {
      alert("invalid check type!")
      console.log("Error! check was", check);
      console.log("stat =", stat);
      console.log("playerStat =", playerStat)
   }
   console.log("playerStat is", playerStat, "because check is", check);
   console.log("enemy rolled", encounterDiceRoll);
   if (playerStat > encounterDiceRoll) {
      console.log("the check passed player's roll of", playerStat, "beat the encounter roll of", encounterDiceRoll);
      victory()
   } else {
      deathMessage()
   }
   document.getElementById('actions').style.visibility = "hidden";
   document.getElementById('run-actions').style.visibility = "hidden";
   resetBgSlide();
}

actionButton.addEventListener('click', statCheck)

/** if triggered, refreshes the page */
function newGame() {
   document.getElementById('game-loaded').style.display = "none";
   document.getElementById('loading').style.display = "block";
   location.reload();
}

nGButton.addEventListener('click', newGame)