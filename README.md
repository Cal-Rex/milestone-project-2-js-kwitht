<h1 style="
text-align: Center; 
text-transform: uppercase; 
font-family: 'Courier New', Courier, monospace; 
letter-spacing: 3px;
font-weight: 700;
">
Qwetht
</h1>

### [AMIRESPONSIVE IMG TO GO HERE]

<h2 style="
text-align: center;
font-family: 'Courier New', Courier, monospace;
">
The Adventure generator beyond your wildest dreams, if your wildest dreams were created in MS paint.
</h2>

<hr>
<br>

# Table of Contents
1. [INTRODUCTION](#introduction)
<br>

2. [UX](#ux)
   - Stakeholder Interview
   - Competitor Review
   - Target Demographics
   - User Goals
   - Business Interview
   - Development Planes
     - Strategy
     - Scope
     - Structure
     - Skeleton
     <br><br>

3. [DESIGN](#design)
   - Colors
   - Typography
   - Imagery
   <br><br>

4. [FEATURES](#features)
   - Design Features
       - Visual Features
       - Gameplay Features
   - Features to Implement in Future
     - Post-deadline Patching
     - User Feedback features
     - Script features
  <br><br>

 5. [BUGS](#bugs)
   - Resolved Bugs
   - Unresolved Bugs
 <br>

 6. [TECHNOLOGIES](#technologies)
    - Languages Used
    - Frameworks
    - Libraries
    - Programs
<br><br>

6. [TESTING](testing.md)
  - Contained as a seperate document [here](testing.md)
   <br><br>

7. [DEPLOYMENT](#deployment)
    - Step-by-step guide on how to deploy
 <br><br>

8. [CREDITS](#credits)
<br>

9. [ACKNOWLEDGEMENTS](#acknowledgements)
<br>

# Introduction
<span style="
font-family: 'Courier New', Courier, monospace;
font-weight: 700;
letter-spacing: 1px;">
Qwetht</span> is a randomly generated adventure game inspired by classic text-based Adventure games like [Colossal Cave Adventure](https://en.wikipedia.org/wiki/Colossal_Cave_Adventure), webcomics such as [Problem Sleuth](http://www.mspaintadventures.com/newindex.php?viewmap=4) by [MS Paint Adventures](http://www.mspaintadventures.com/newindex.php) and tabletop games such as [Munchkin](https://en.wikipedia.org/wiki/Munchkin_(card_game)). The Game allows a player to pick one of three classes:

| <p style="text-align: center;">The Knight</p> | <p style="text-align: center;">The Thief</p> | <p style="text-align: center;">The Merchant</p> |
| ---------- | --------- | ------------ |
| ![Knight](assets/images/jobs/knight.webp) | ![Thief](assets/images/jobs/thief.webp) | ![Merchant](assets/images/jobs/merchant.webp) |

Once the player chooses their class, they will then have a random character generated for them, in addition to an adventure, where they will be take on 10 random encounters in order to complete the game.
<br>
Much like the games it was inspired by, <span style="
font-family: 'Courier New', Courier, monospace;
font-weight: 700;
letter-spacing: 1px;">
Qwetht</span> is very much designed to be that of a [roguelike](https://en.wikipedia.org/wiki/Roguelike) game, where incorrect decisions or bad luck result in game over, and there is heavy emphasis on starting over fresh each time the game is played.

## This project is the second of the five projects to be created for the Diploma in Full Stack Software Development (Common Curriculum).

Project purpose: Presentation of interactive data

The aim of this project is to:
 - Build an interactive front-end website
 - The site in question should respond to user's actions, allowing users to interact with data
 - alter the way the site displays information to achieve a preferred user goal
 - The site should make use of HTML, CSS and Javascript to achieve the above aims

<hr>
<br>

# User Experience (UX)

## <span style="text-decoration: underline;">Research</span>

As Mentioned in the [Introduction](#introduction), the game is inspired by original text-based adventure games, table-top games, roguelike games and webcomics. styling inspiration and mechanic ideas where derived from viewing the following sources:
1. [MS Paint Adventures](http://www.mspaintadventures.com/newindex.php?viewpage=archive)
    - As this site is now pretty old, it appears the site archive has not been maintained. However, when this comic series was active, the author would create the next pane of each comic solely from the input provided by fans and its community. This resulted in an element of chaos and randomness which made the comic humorous and enjoyable.
    - with these elements in mind, peers were contacted for limitied input regarding encounters with no context, names, monsters and other aspects of the end product that are rendomly generated, to try and emulate a similar sense of chaos and randomness in this game.
    - Style for the project was inspired by the original design of these webcomics.

    <br>

2. [Colossal Cave Adventure](https://www.microsoft.com/en-gb/p/colossal-cave-adventure/9wzdncrdlv4h?activetab=pivot:overviewtab)
    - The original test based game that proceduraly generates an adventure, offering users text to determine outcomes of scenarios.
    - This mechanic is adopted with the use of the information collected by peers to create the concept of a randomly generated adventure.

    <br>

3. [Dark Souls](https://en.wikipedia.org/wiki/Dark_Souls)
    - This video game employs the use of player death as a direct mechanic of the core gameplay loop.
    - This idea was adopted for use within this game, given the game's small nature, and the limited timeframe to build. the routine death mechanic ensures for regular cycling of player type and encounter type.

    <br>

4. [Munchkin](https://en.wikipedia.org/wiki/Munchkin_(card_game))
    - The aim of the game in Munchkin is for players to reach level 10 by "kicking in the door" on each turn as if they are progressig through a dungeon. the game employs simple math to determine if players succeed in an encounter, and if they do, gain and increased stat each level they complete.
    - The game also employs elements that encourage other players to either work together or sabotage each other to prevent victory.
    - Both of these concepts were utilised within the project. With the Idea that players must complete a journey (consisting of 10 stages, progress being represented in percentage) with a reward of an increase in player stats upon successful engagement in the randomly generated encounter. The game also employs a "run away" mechanic should a player not like their odds when presented with a given encounter, but can still be punished during the run away roll, much like the conflict that is presented when playing Munchkin.

    <br>

5. [Dungeons & Dragons 5E](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons) 
    - This table top game uses varying types of dice rolls to determine the outcome of adventures tailored to the players. 
    - "Dice rolls" were employed as the base mechanics in this project to determine encounters, names, monesters and so forth. As well as performing stat checks, similar to the way they are carried out in a standard game of Dungeons & Dragons.

<br>

## Development Planes

## <b><span style="text-decoration: underline;">Strategy Plane</span></b>

## <span style="text-decoration: underline;">User Stories</span>

### <b>First-time Players</b>
Play-testers were interviewed before playing the game to establish user stories:

1. <em>"As a first-time player, i want to be able to understand the game mechanics with little study. The game UI needs to be intuitive."</em>
2. <em>"As a first-time player, i want there to be a help or menu section that explains the finer intricacies of the game, with little-to-no redirection from the game."</em>
3. <em>"As a first-time player, i want to have the element of choice when starting a game."</em>
4. <em>"As a first time player, i want the game interface to be clear and consistent at each step of the core gameplay loop."</em>
5. <em>"As a first-time player, i want to be able to track my progress during a playthrough."</em>

### <b>Returning Players</b>
After Playtesting the game, players were interviewed to establish their user stories as users who had played the game previously:

1. <em>"As a returning player, I want to be able to pick up where i left off."</em>
2. <em>"As a returning player, I want to be able to see a record of my past completions."</em>
3. <em>"As a returning player, I want to see fresh encounters when i play the game."</em>


<br>

## <span style="text-decoration: underline;">Project Goals</span>

The project goal is to create a simple adventure game that draws from text-based and procedural adventure games that provides light humour and a challenge balanced equally by luck and choice.

<br>

  ### <b>Player goals</b>
  Based on user stories, user goals are defined as:

   1. A simple and easy to follow game
   2. A game that strikes a balance between choice and luck
   3. A game that can track and acknowledge the achievements of players
   4. A game that easy to "pick up" and "put down" as appropriate for a user

  ### <b>Developer Goals</b>   
  Based on project research, project goals are defined as:

   1. Create a random and humerous adventure game
   2. Create a game that adopts roguelike concepts, treating player death as part of the integral gameplay loop
   3. Create a game that effectively functions as a mini solo-play table-top RPG

<br>

## <b><span style="text-decoration: underline;">Scope Plane</span></b>

Based on the results of the strategy plane the following features have been focused on to develop:
 1. Player jobs/classes
    - at the start of the game, the player will be given the choice of 3 classes, each leaning more favourably into one of the 3 stats used for the game.

    <br>

 2. Text that generates per each choice and action taken by the user
    - The text will be the first element to be read after the page title, being a focal point of information for the user.
    - This same text field will update every time a user takes an action, prompting them of the outcome of their choices.

    <br>

 3. A box or viewport that gives visual representation of the adventure
    - The box will be placed directly under the text, to give visualisation of the narrative generated.
    - It will contain a backdrop and also an image representative of the player character.
    - image representing player character will be different based on the class picked by the player.

    <br>

 4. An element that highlights player progress
    - a progress bar or counter will be places under all the main game controls, which tracks the players progress/how many encounters they have completed.

    <br>

 5. Viewable and upgradable player stats
    - player stats will display next or under the visualisation window, depending on viewport/device parameters.
    - the stats will upgrade automatically depending on successful choices made by the user.

    <br> 

 6. A Prompt that appears upon player death
    - This will mimic the style of the death message that appears when players would die in the game [Dark Souls](https://www.youtube.com/watch?v=-ZGlaAxB7nI).

    <br>

 7. A prompt that appears upon completing the game
    - Adopt a similar style to the message that appears in Dark souls [when a player defeats a boss or lights a bonfire](https://youtube.com/shorts/CzY3jsotryg?feature=share) in order to keep in line with the game style.

    <br>

 8. Options to take per encounter
    - Have clear buttons that outline player options that appear right below the encounter visualisation.

    <br>

 9. a "new Game" button
    - Will appear when a user completes a game or dies, allowing more a more seamless replay and user experience. 

<br>

## <b><span style="text-decoration: underline;">Structure Plane</span></b>
Given the simplistic nature of the game; and for it to be seemless, all elements will be housed on the one page.

![Site Map](assets/images/readme-images/sitemap.webp)

<br>

## <b><span style="text-decoration: underline;">Skeleton Plane</span></b>
Using the information this far, Wireframes were created using Balsamiq. Mock ups were created for both a mobile design and landscape design

from left to right (reading like a storyboard), each image displays the following:
 1. The view of the page upon initial loading
 2. After the player has clicked to begin
 3. Afer the player has selected their class and received their prologue
 4. When a player is met with an encounter
 5. View upon encounter success
 6. View on encounter failure
    
    a. Same style will be used when user completes game. but text will be altered to reflect completion

<h3 syle="text-align: center">Landscape/desktop view</h3>

![Landscape wireframes](assets/images/readme-images/wireframe-landscape.png)

<br>

<h3 syle="text-align: center">Portrait/mobile view</h3>

![Portrait Wireframes](assets/images/readme-images/wireframe-portrait.png)

<br>

# design 

## Colour Scheme

[Coolors](https://coolors.co/) was used to render the sample palette for the project. However, given the nature of the project, colours were very straightforward to discern. Black and white for the general aesthetic of the site was ideal, follow the ideal of the game being simplistic and low-fidelity in nature. Red and Orange colours were kept as simple as possible t try and stay in line with this style ethos. These brighter colours are to be used when a player gets a game over of completes the game.

![Coolors palette](assets/images/readme-images/palette-qwetht.png)

## Typography

To continue with the project's "classic" text-based game origin, classical serif and monospace fonts were deliberately selected as they actively reflect the projects inspiration and reductive style.

All main text is written in styles/decorations of the <span style="font-family: Courier New, Courier, Monospace;">Courier New</span> / <span style="font-family: Courier, Monospace;">Courier</span> / <span style="font-family: Monospace;">Monospace</span> font family.

The outcome box, AKA, the "You died" notification, follows the style form the source is was inspired from, as such, it adopts the use of the <span style="font-family: 'Times New Roman', Times, serif;">Times New Roman</span> / <span style="font-family: Times, serif;">Times</span> / <span style="font-family: serif;">Serif</span> Font family.

<br>

## Imagery

All imagery for the project was created in Microsoft PowerPoint. This was done deliberately to maintain a <em>doodle-like</em> design, but better that my actual doodles. because i can't draw.

High res images were taken from google and then traced over or replaced with rudimentary shapes on microsoft powerpoint. the super imposed drawing was then lifted and converted to an image to give a doodle like feel, but because of the tracing, background environments are more discernable as oppoesed to drawing them from nothing.

The page design allows for the users choices to essentially create the hero image of the page. Offering a very minor degree of personalisation/immersion - given the style of the game.

|![Example Hero Image 1](assets/images/readme-images/example-hero.png)|![Example Hero Image 2](assets/images/readme-images/example-hero-2.png)|![Example Hero Image 3](assets/images/readme-images/example-hero-3.png)|
| ------ | ------ | ------ |

The site does not employ any other imagery, given that it is derived from a text-based idea.

Buttons and interactive elements on the page follow suit with the monochrome/monospace design, but still have hoverable and active elements to give the user appropriate feedback to ensure they are using controls correctly. more of this will be covered in the next section

## Features

### Design Features

Visual features

loading screen

- When a user visits the page, while the page is loading they will only see a white screen with "loading...".
- this dissapears once all javascript has been loaded.
- this prevents any players with slower connections from playing with partially read code, preventing any errors that could be caused by this

introductory text

- When the game is first loaded, this text gives a general welcome to the game. It tells the visitor that the site is a game and what kind of game it is
- when a game is started - once a use has picked a job, a random name, destination and reason for adventure are generated. they are then insterted into a string of text to make sense of the information, and this then replaces the initial introductory text
- has a white background with white dispered shadow border so that the rotating background image does not obstruct text 

Backgrounds

- Opening page: There is an animated hero image, showing some of the basic cartoon design elements in the game. the background rotates on an infinite 20-second loop. giving a small amount of interaction, without being too overbaring in comparison to the minimalistic style. This feature helps give more context to the initial introduction text.

- Game backgrounds: upon starting the adventure, or moving to the next encounter. The background in the story box cycles randomly to give a different background each encounter. backgrounds are also animated to slide in from the right to imply movement into another area.

Character

- Character Icon: the character model that players can see depends on what job they pick. 
  - The icon will also move across a small percentage of the window upon each encounter beaten.
  - The icon has an animation where it will "fall over" if a player fails an encoutner and dies.
  - The icon does continous backflips on a loop if the player completed the game.

stats

- there are 3 stats:
  - Strength
  - Agility
  - Cunning
- Each job has a unique allocation of points for each stat from a total of 12 points
- when a job is selected, the stats and their values slide up from the bottom of the screen in a cascading fashion
- These stats are used to determine wether each encounter is successful or not
- when a player is successful in an encounter, the stat that was used to check if they succeeded increases by 1

Encounter text

- whenever an encounter is generated, a string of text with a randomly generated name and monster/npc type is printed above the story box
- If a user succeds in an encounter, a victory message replaces the text here, it also prompts the user to et them know the certain stat that was checked against is raised by 1
- the information will then cycle upon further progression

Death/Victory box

- Upon death, a shadowed opaque box appears with red shadowed text telling the user that they DIED
- This box will also contain a unique death message depending on the encounter type, monster type, and monster name
- If the user completes the game, this box changes to orange with yellow shadowed text, with a completion message tailored to their chosen job, destination and reason for advanture

buttons

- Features applied to all buttons:
  - Button buttons are styled black with shite writing to contrast with the mainly white with black text design of the page
  - when hovered over, button text turns bold, the color changes black and the background colour changes white
    - the mouse cursor also changes to "pointer"
  - When clicked, the padding in the button reduces by 1 pixel and a box shadow is employed, to simulate the button being clicked-down-on
- job choosing buttons
  - animated to drop down into view when page loads
  - vanishes once a player picks a class
  - only appear when at the starting phase of the game
- action buttons
  - Do it! buttons and Run away! buttons
    - appears once an encounter is generated
    - shares the same appearance animation to the job buttons when they become visible
    - dissapears when clicked
    - triggers javascript functions to progress game (more on that in the next subsection below)
- Let's go! and Keep going! buttons
  - appears once a player has selected a job or successfully passed or ran from an encounter
  - is actually the same button, but the text changes to Keep going! after first use
- new game button
  - appears when a user either dies or completes the game
  - when clicked, it reloads the page and triggers the loading screen to come up while the page is unloading.

Modal box with instructions

- has it's own seperate button in the footer
  - has the same style as regular page buttons but all colours are inverted as it sits on a black background
  - when the button is active (on mouse down) the button replaces its text with another randum "uction" word
  - when clicked, a modal window appears over the top of the game
    - it consists of an outer box, which acts as an opaque backdrop
    - and an inner box with a white background, displaying instructions text
  - any time a button is mentioned in the instructions, the style is changed with a span so that it looks like
   the button it represents in game
  - the same styling rhetoric is applied to any time the word "die" is mentioned. to match the styling of the death message

footer
 - Houses a link to the author's GitHub and provides a space for the instructions button.

Gameplay features

gameplay loop:

![flowchart of the game design](assets/images/readme-images/flowchart.webp)

1. Game Loaded: <br>
When the page first loads, the grid that houses the structure of the game is targeted in the css with a style rule to remain not display. instead a div with "loading" is displayed. Once the JS has been fully loaded an event listener targets the loading screen and makes it no longer display, instead, the grid housing the game is now displayed.<br>
2. Choose Class: <br>
Now that the game is loaded, the grid area that houses the storybox displays a hero image that is on a infinite rotation animation loop through use of a css class. The javascript targets the 3 following buttons and makes them visible:<br>
   - Choose to play as a Knight: Strength 5, Agility 4, Cunning 3.
   - Choose to play as a Thief: Strength 2, Agility 7, Cunning 3.
   - Choose to play as a Merchant: Strength 3, Agility 3, Cunning 6.
   <br>

   Each button triggers a function in JS to allocate strings of stat values to allocated divs in the HTML. Then an avatar unique to that class is set to a smaller div inside the story box. This diplays the Players character over a randomly generated backdrop when the next step in the phase launches.
   <br>

    Now that there is a character model and stats, the JS creates 3 empty variables, then populates each one with a random integer between 0 and 5, essentially acting like rolling a 6 sided dice 3 times.

   - One variable is used for picking a character name from a pre-established array in the function.
   - The second picks a destination from a different array.
   - Lastly, the 3rd "roll" determines a reason for the adventure to take place.
   <br>

   These values are then printed in a template literal string into the div the introductory text was housed and replaces it.<br>

   Another function is then triggered to remove the choose class buttons and instead display the game controls. The "let's go!" button is now visible too.<br>

3. Generate Encounter: <br>
   Now that the game has now been set up toplay. the player can hit "Lets go!" to begin.<br>
   Upon Clicking, a function will trigger to "roll" 5 random numbers between 0 and 5 and push them into an array <br>
    - The first 2 numbers in the array are added together, and allocated as the value of a variable that determines what random name should be selected for the monster/npc in the generated encounter if there is one.
    - the the 3rd and 4th array values are allocated to a second variable which is used to determine what type of monster/npc will be in the encounter
    - the last value in the array is used to determine what encounter is "rolled"
       - There is also a function that checks the value of this array number. if it is the same as the last encounter, it "re-rolls" the number until it is a different value. this prevents getting the same encounter back-to-back.
   Players can now decide to do one of the following:
    - Run away!
       - a global variable called RunRoll is declared as "true"
       - Another number is rolled in the JS. This new value is compared to the player's Agility stat.
       - If the number is less than or equal to the player's agility stat, it is regarded as a success.
       - If the rolled number is greater than the player's agility stat, it is deemed a failure.
       
    - Do it!
       - Another number is rolled in the JS. This new value is compared to the player's Strength or Cunning stat depending on what type of encounter was generated (Agility can also be checked, but there are no scenarios that target it for this action).
       - If the number is lesser than the players Allocated stat, the action is regarded as a success
       - If the number is greater than or equal to the player's allocated stat, the action is regarded as a failure

4. fail check
    - failing run away! roll
       - The game buttons are removed from view, along with the let's go button. instead they are replaced with a large opaque box that tells the player "THEY DIED".
       - if the RunRoll variable is declared as true, it prints the death outcome for the scenario allocated to that encounter number if you fail the run away roll.
       - a button appears under this box with the phrase "Start a new Qwetht!" which refreshes the page when clicked. This restarts the game. 
    
    - failing a Do it! roll
       - The game buttons are removed from view, along with the let's go button. instead they are replaced with a large opaque box that tells the player "THEY DIED".
       - if the RunRoll variable is declared as false, it prints the death outcome for the scenario allocated to that encounter number if you fail the "Do it!" roll.
       - a button appears under this box with the phrase "Start a new Qwetht!" which refreshes the page when clicked. This restarts the game. 
       
6. Pass check
    - Succeeding a Run away! roll 
       - If the check is regarded as a success, a string of text pertaining to that encounter is generated.
       - the "Do it!" and "Run away!" buttons are swapped out and replaced with the "Let's go!" button, which has now had its text content changed to "Keep Going!". This cycles the game back to generating a new encounter, but does not award progession.
    - Succeeding a Do it! roll
       - If the check is regarded as a success, a string of text pertaining to that encounter is generated.
       - The type of check used for the encounter is called, and increased incrementally by 1.
       - The journey progression counter at the bottom of the screen is targeted and incrementally increased too (more on this in the next list item)
       - the "Do it!" and "Run away!" buttons are swapped out and replaced with the "Let's go!" button, which has now had its text content changed to "Keep Going!". This cycles the game back to generating a new encounter.

7. Increasing Progress
    - As stated in the pass check section, any time an encounter is succeeded by a "Do it!" roll, the game progess counter increases. The function that carries this out has an IF statement attached to it that if it reaches "10" a function will be triggered to launch the win game conditions
    - If statements are also appended to the encounter generating function. which adjusts how high the number a check roll can generate
       - If the the player's progress is less than or equal to 40%, the random number generated can be no higher than 4.
       - If the the player's progress is less than or equal to 70%, the random number generated can be no higher than 6.
       - If the the player's progress is greater than or equal to 80%, the random number generated can be up to 9.
      This creates a sliding increase in difficulty, but still allows players a chance of progression without a high chance of outright murder at the start of the game.
8. Beating the game
    - When game completion function is triggered. The death box elements are repurposed to display game winning text, the style is changed from red to orange with a yellow shadow.
    - the box then displays the same way a deathbox would, but will contain unique text depending on the player's randomly generated name, job, destination and reason for adventure.
    
404 and 500 error pages

both pages chare the same css style and design with the exception to minor changes to text content on the HTML - which displays the type of error, and a picture of one of the characters from the game.
 - in the 404, the thief character appears, looking as if he attempting to mug you with a butter knife
 - For the 500, the merchant character is standing infront of what is supposed to look like an ominous doorway.

At the bottom of the image in each page there is a button that launches a function that returns users to the index.

Features to Implement in Future

This project was constrained mainly by a very short time budget. The following features were planned to be implemented, but instead, will be implemented int he future:

- Making use of localStorage object in Javascript to save a users game.
- Making use of localStorgae object in Javascript to keep a record of past completions.
- A higher variety of backgrounds and character models.
- A higher variety of encounters
- Sound effects
  - A Sound that plays on death. Either similar to the [death noise in Dark Souls](https://www.youtube.com/watch?v=-ZGlaAxB7nI) or the [noise you make when you take damage in Minecraft](https://www.youtube.com/watch?v=0T_NR2KY8uI).
  - A sound effect for button clicks. Something light and not too invasive.
  - A sound that plays when an adventure is completed (some sort of incredibly dumb trumpet noise would be ideal).
- A More advanced death animation for the whole page. A telescopic zoom fade-in of the death box and the screen fading to black was an initial idea.
- A More advanced completion animation.
- smoother class add/remove transitions from the background elements of the story box, instead of just having one slide in, the existing one should also slide out.

After hearing feedback from testers, the following features have been considered to be implemented in the future:
- Forking adventures, where certain decisions would shift the cycle, and backgrounds of adventures entirely depending on choices. like, for example: going out to sea and having sea-only encounters.
- Choosing your own character model
- completing certain encounters would give you items or options which could change the outcome of other encounters
  - like an item that lets you skip one roll or specific encounter
  - An extra life
  - temporary skill boosts

Other back-of-house features:
- changing how the JS stores information so that users cannot cheat by using dev tools to change their stat numbers.
- partition the JS into more manageable sized code blocks. perhaps seperate certain functions where possible and crete 3 JS scripts of roughly 200 line of code each, as opposed to one big script file.



bugs:

Resolved Bugs:
- 404 and 500 pages performing an immediate re-direct when loaded.
  - An error in the JS was found where the function that was the target of the buttons was not listed correctly.
- Progress counter being pushed behind the footer on certain encounters.
  - This was a sizing issue within the CSS, the .game grid has been adjust to not account for a section the vieport, which, while this allows for scrolling, allows for full view of all necessary content. 
- The Modal box button is bugged on touchscreens. users must click on the outside of the button multiple times for it to work.
  - Discovered [touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events?fbclid=IwAR2w2PfZG7e7IHm1pGNPlkc-Nz0eJEo1P6i27eAJ4_4DYdS0LLzCD4nHbSc) and implemented them to simulate the same functions as 'click' event listeners.

Unresolved Bugs:
-  "let's go!"/"Keep Going!" button not removing class animation.
   - somehow the css that adds and removes animations to buttons is being added twice or more to this button. This is probably a case of siftin throught he code and altering the line that is cuasing this. However, there was not enough time tosearch for this before the deadline.
  - Buttons moving on click on the 404/500 pages.
    - while clicked on, the buttons on the 404 and 500 pages jump. CSS needs to be altered to prevent this.

# Technologies:

Languages Used

- HTML
- CSS
- Javascript
- Markdown


Frameworks | Libraries | Programs

**[GitHub](https://github.com/)**
- Used to store, deploy and publish site.
<br><br>

**[GitPod](https://gitpod.io/)**
- Used to write and preview code, commit and push to GitHub.
<br><br>

**[Google Chrome](https://www.google.co.uk/chrome)**
- Used developer tools to check site responsiveness, preview site outside of GitPod, preview and make minor tweaks in real time to code without messing up original code during development.
<br><br>

**[W3C Markup Validation Service](https://validator.w3.org/)**
- Used to validate and format code.

**[GIMP - GNU Image Manipulation Program](https://www.gimp.org/)**
- Used to convert images to .WEBP format.

**[MS Word](https://www.microsoft.com/en-us/microsoft-365/word)**
- Used to spellcheck and format text.
<br><br>

**[MS Paint3D](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H?hl=en-us&gl=us)**
- Used to crop and consolidate imagery created in MS PowerPoint.
<br><br>

**[MS PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint)**
- Used to make Imagery on site
<br><br>

**[Balsamiq](https://balsamiq.com/)**
- Used to create site wireframes.
<br><br>

**[amiresponsive](https://ui.dev/amiresponsive)**
- Used to create Example image at top of the [readme.md](#contents)

**[Faviconer](http://faviconer.com/icon/index)**
- Used to create site favicon

**[Opera](https://www.opera.com/)**
- Used to test UX.
<br><br>

**[Firefox](https://www.mozilla.org/en-GB/firefox/new/)**
- Used to test UX.
<br><br>

**[Microsoft Edge](https://www.microsoft.com/en-us/edge?form=MA13FJ)**
- Used to test UX.
<br><br>

**[Google Chrome on Android](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DAndroid)**
- Used to test UX.
<br><br>

**[Safari on Mac and iOS](https://www.apple.com/uk/safari/)**
- Used to test UX.
<br><br>

**[ScreenRec](https://screenrec.com/)**
- Used to capture screen recordings of live site testing for testing.md.
<br><br>

**[Cloud Converter](https://cloudconvert.com/mp4-to-gif)**
- Used to convert screen captures into gifs to reduce file size in repo and [testing.md](testing.md).
<br><br>


# [TESTING](testing.md)
  - Contained as a seperate document [here](testing.md)
  <br>
  <hr>
<br>

# [DEPLOYMENT](#deployment)
This Site was created, developed, managed and stored on GitHub and GitPod.

The site is deployed on GitHub Pages, the following steps can be replicated to achieve the same result:
1. Sign up/create an account with GitHub (or log in with existing details).
2. Locate this repository (repo) by using the _search_ function.
3. Once clicked into the repo, click the settings cogwheel at the top right of the project.
4. Navigate to the pages section.
5. Navigate to source, select `main` from the dropdown menu to designate what branch to deploy.
6. Once this has been selected, the page will refresh, and the site will begin to deploy. This could take some time.
7. Once the page has been deployed you will be able to see it on the right-hand side of the main repo page.
8. You can click into the deployment page and then click "view deployment" to get the deployed link.
![Gif demonstrating the above steps](assets/images/readme-images/GitHub-deployment.gif)


# Credits
## Troubleshooting sources
- [stack overflow](https://stackoverflow.com/)
- [Bobby Hadz](https://bobbyhadz.com/blog/javascript-change-style-of-all-elements-with-class)
- [w3schools](https://www.w3schools.com/js/default.asp)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events?fbclid=IwAR2w2PfZG7e7IHm1pGNPlkc-Nz0eJEo1P6i27eAJ4_4DYdS0LLzCD4nHbSc)
- [Web.dev](https://web.dev/)
- Seun Owonikoko: Project Mentor

# Acknowledgements

