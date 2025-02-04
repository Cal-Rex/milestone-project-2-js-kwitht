# QWETHT
![testing banner](assets/images/readme-images/testing-banner.webp)

# Testing

## Contents

1. [User Stories](#user-stories)
 - [User Stories: Answered](#user-stories-answered)
 - [Project Goals: Achieved](#project-goals)
 - [Player Goals: Achieved](#player-goals)
 - [Developer Goals: Achieved](#developer-goals)
2. [Manual Testing](#manual-testing)
 - [Index page](#index)
   - Responsiveness
   - Page load
   - Game Elements
   - Links
 - [404 page | 500 Page](#404500)
   - Responsiveness
   - Page Load
3. [Automated Testing](#automated-testing)
 - [Lighthouse Testing](#lighthouse-testing)
 - [Code Validation](#code-validation)
   - Index page
     - HTML/CSS
     - Javascript
   - 404 page
     - HTML/CSS
   - 500 page
     - HTML/CSS
 - [Browser Validation](#browser-validation)
4. [User Testing](#user-testing)

---

## User Stories

#### **User Stories: Answered**
1. _"As a first-time player, i want to be able to understand the game mechanics with little study. The game UI needs to be intuitive."_
  - The UI for the game only shows the buttons necessary to progess at each stage, which prevents any confusion as to what options are.
  - The game buttons/controls are large and are polar contrasting to the page background, making them easy to notice.
  - Buttons are animated when they appear so that they draw the attention of the user to their presence.
  - Buttons are responsive when hovered over and mouse pointers are set to change when hovering. This signals to the user that these elements are interactive without need for any further prompting.

2. _"As a first-time player, i want there to be a help or menu section that explains the finer intricacies of the game, with little-to-no redirection from the game."_
  - In the bottom-right-hand corner (bottom-center on portrait/mobile devices) there is an instructions button.
  - The Button is animated just like the game buttons, and falls from the top of the screen when the game loads to grab the users attention.
  - The Button - as it is situatied on a black background - has inverted colours to the rest of the game Buttons.
  - The Button is coded to be responsive to mouceclisks and touchscreen taps
  - The button is animated and has custom pointer coding to signal to the user that it is interactive.
  - When clicked, the button opens a modal box which explains the game mechaincs and rules in more detail.
  - The modal box works as an overlay, and can be closed by its large "X" in the top right corner.
    - This "X" is responsive to the mouse hovering over it, becoming unfaded when doing so.

3. _"As a first-time player, i want to have the element of choice when starting a game."_
  - Upon successfully loading the page, users will be presented with a choice of 3 jobs. Depending on the job picked, they will be given different starting stats to be checked against during their game playthrough.
  - Each choice loads a unique character model for the player.

4. _"As a first time player, i want the game interface to be clear and consistent at each step of the core gameplay loop."_
  - When the game is underway, users can only see the buttons relevant to that point in the game at any given time, preventing any confusion as to what to press.
  - player stats are clearly shown at all times above the game controls.
  - The game's story box presents a visual element and shows the player's character advancing across the screen with each encounter.
  - the Journey progress string underneath the buttons gives a realtime update depending on outcomes of the player's choices.

5. _"As a first-time player, i want to be able to track my progress during a playthrough."_ 
  - The game's story box presents a visual element and shows the player's character advancing across the screen with each encounter.
  - the Journey progress string underneath the buttons gives a realtime update depending on outcomes of the player's choices.


6. _"As a returning player, I want some options that would allow further augmentation of encounter chances."_
  - When completing an encounter, depending on the encounter type, player stats will be incrementally increased to augment further encounter chances.
  - More ideas have been considered and have been set to be implemented in the future. for more information, see: **[Features to Implement in the future](readme.md/#features)**. 

7. _"As a returning player, I want to be able to pick up where i left off."_
  - There was not enough time before the deadline to add this feature and has been logged for patching in. Please refer to **[Features to Implement in the future](readme.md/#features)**.

8. _"As a returning player, I want to see fresh encounters when i play the game."_
  - An additional function was added to the game that tracks the active encounter number and logs it. If the same encounter type is rolled straight after a function cycles the roll again on a loop until a different encounter number is generated. This prevents bak-to-back identical encounter types.
  - More encounter types are prejected to be added in the future.

##### **Project Goals:**
Based on the user stories above, the following has been achieved:

- [x]  The primary project goal is to create a simple adventure game that draws from text-based and procedural adventure games that provides light humour and a challenge balanced equally by luck and choice.

##### **Player goals:**

Based on the User-stories above, the following goals have been achieved:

- [x]  A simple and easy to follow game.
- [x]  A game that strikes a balance between choice and luck.
- [x]  A game that can track and acknowledge the achievements of players.
- [ ]  A game that easy to "pick up" and "put down" as appropriate for a user.
  - [x]  Mechanics and user interface are not hard to re-learn.
  - [ ]  Users can pick up where they left off is they close then re-open the page.

##### **Developer Goals:**
Comparing the project in it's current state to the research collated, the following goals have been achieved:

- [x]  Create a random and humerous adventure game.
- [x]  Create a game that adopts roguelike concepts, treating player death as part of the integral gameplay loop.
- [x]  Create a game that effectively functions as a mini solo-play table-top RPG.

---

## Manual Testing

Below are demonstrations of the elements and functions on the site (including 404 and 500 pages). Each section has a GIF visual aid, with an itemised checklist of what is being tested on each page.

#### **Index**

#### _Site Responsiveness_

 - The page was tested in all dimensions on Google Chrome Dev Tools. `grid` layout of game content changes forscreens below a 1000 pixels width.
 - The instructions button moves to the center of the footer if device width is below 580 pixels.

![GIF of testing site responsiveness](assets/images/readme-images/testing/resolution-response.gif)


#### _Testing of page load:_
- all animations load accordingly. The instructions button falls down into view from the top of the screen. The game buttons "fold" out of there positions when triggered.
- The Javascript for when the page is unloading and reloading triggers a "loading" screen while the script of the page is being reloaded.
- Hover elements trigger correctly. Buttons change colour when hovered over.
- When clicked, buttons adopt the relevant `:active` styles appended to them in their style rules.

![GIF of testing HTML and CSS Elements loading correctly](assets/images/readme-images/testing/html-css-response.gif)

#### _Testing of game elements:_

**note: `console.log` commands were temporarily implemented within the code functions so that accurate tracking of script could be carried out during testing, these were then removed post testing phase.**

- instructions:
  - When touched or clicked; while active, the buttons text will change to one of the following words:
    - "Deductions" 
    - "Reductions" 
    - "Conductions"
    - "seductions" 
    - "Abductions"
    - "Inductions"
    - "Constructions"
    - "productions"
    - "Liposuctions"
    - "Destructions"
    - "Introductions"
    - "constructions"
    - "Solifluctions"
  - The button text returns to "instructions" when released.
  - Once clicked, A modal box appears giving more information about how the game works.
  - The "X" in the top right corner of the modal closes the modal.

- Job buttons:
  - When pressed, the Knight button will launch the game with knight stats and show the knight job character.
  - When pressed, the Thief button will launch the game with Thief stats and show the Thief job character.
  - When pressed, the Merchant button will launch the game with Merchant stats and show the Merchant job character.
  - When pressed, The introductory text changes to show:
    - A randomly generated name. 
    - The player's chosen job.
    - A randomly generated destination.
    - A randomly generated reason for adventure.
- _Let's go!_/_Keep Going!_ Button:_
  - Appears after selecting a job.
  - `:hover` is responsive.
  - `:active` is responsive.
  - When clicked, disappears.
  - Triggers an encounter to randomly generate.
  - The innter text of the button changes to "_Keep Going!_" once the first encounter has generated.
- Encounters:
  - The same encounter type cannot be generated back-to-back.
    - confirmed by the variable "dupestopper" being different every time an encounter is generated.
  - Failing an encounter causes a game over.
  - Beating an encounter triggers:
    - Incremental increase in progression bar.
    - Incremental increase in relevant stat used for check.
    - If an encounter is beaten while progression is at 90%, the game will trigger win conditions.
- Death:
  - When a player fails an encounter the Deathbox appears.
  - Death text should be releavnt to the encounter generated.
  - The players character should "fall over" using an animation.
  - The button to "start a new qwetht" should appear and share all relevant responsive design as other buttons.
    - Clicking this button re-laods the page.
- Game Completion:
  - When progression hits 100% a completion messge appears
  - The completion message should be tailered to the player's name, job, destination and reason for adventure.
  - The Player's will do continous backflips
  - The button to start a new qwetht will appear with the same functions described in the death point. 

![GIF of Javascript testing](assets/images/readme-images/testing/js-testing.gif)

#### _links_:

- The only `anchor` on the page is to the author's Github.
- The colour changes red on hover and the underline is removed.
- The cursor changes to a pointer on hover.
- The link opens in a separate tab.

#### **404/500**

#### _Site Responsiveness_

Both pages share the same code with the exception of one image. so for the sake of not repeating, the 404 will be demonstrated in all resolutions on Chrom Dev tools:

![GIF of 404 resolution testing](assets/images/readme-images/testing/404-responsive-test.gif)

#### _Testing of page load and elements_

- The 500 will be used as example this test. As seen above, the 404 is displaying nominally.
- When hovered over, the button linking to the index adopts the standard hovered button style for the game.
- When clicked, the button takes the user back tot he index. 

![GIF of 500 css test](assets/images/readme-images/testing/500-css-test.gif)

---

## Automated Testing

### Lighthouse Testing

Lighthouse, in google chrome dev tools was used to primarily check accessibility of each page:

![Lighthouse report](assets/images/readme-images/testing/lighthouse.png)

---

### Code Validation

All page HTML and CSS was validated using the [W3C Markup Validation Service](https://validator.w3.org/) and [Jigsaw](https://jigsaw.w3.org/css-validator/) by input of URI in the final testing stages. It is worth noting at this point that the final validation for the index revealed this level 0 warning. It pertains to the use of `pointer-events: auto`, which is used to override a bug issue with the modal instructions box. This code will be refactored in the future.

Javascript for the index was also reviewed and validated within [JSHint](https://jshint.com/), showing no errors.

#### _Index_

| HTML Check |
| ---------- |
| ![HTML check in W3C markup Validation Service](assets/images/readme-images/testing/index-html-check.png) |

| CSS and HTML Validation in Jigsaw |
| ---------- |
| ![CSS and HTML Validation in Jigsaw](assets/images/readme-images/testing/jigsaw-validation-index.png)  |
|![Jigsaw Warning about pointer events](assets/images/readme-images/testing/jigsaw-index-warnings.png) |

| Javascript Validation in JSHint |
| ---------- |
| ![Javascript Validation in JSHint](assets/images/readme-images/testing/jshint-code-review.png) |


#### _404_

| HTML Check |
| ---------- |
| ![HTML check in W3C markup Validation Service](assets/images/readme-images/testing/404-html-check.png) |

| CSS and HTML Validation in Jigsaw |
| ---------- |
| ![CSS and HTML Validation in Jigsaw](assets/images/readme-images/testing//jigsaw-404-validation.png)  |


#### _500_

| HTML Check |
| ---------- |
| ![HTML check in W3C markup Validation Service](assets/images/readme-images/testing/500-html-check.png) |

| CSS and HTML Validation in Jigsaw |
| ---------- |
| ![CSS and HTML Validation in Jigsaw](assets/images/readme-images/testing/jigsaw-500-validation.png)  |

---

### Browser Validation

#### Google Chrome
[Chrome Desktop screenshot](assets/images/readme-images/testing/chrome-desktop-sc.png)

#### Mozilla Firefox
[Firefox Desktop screenshot](assets/images/readme-images/testing/firefox-desktop%3Dsc.png)

#### Opera
[Opera Desktop screenshot](assets/images/readme-images/testing/opera-desktop-sc.png)

#### Microsoft Edge
[Edge Desktop screenshot](assets/images/readme-images/testing/edge-desktop-sc.png)

#### Safari on Mac
[Safari on desktop screenshot](assets/images/readme-images/testing/mac-desktop-sb-sc.png)

#### Safari on iPad
[iPad Safari screenshot](assets/images/readme-images/testing/ipad-sb-sc.jpg)

#### Google Chrome on Android
[Chrome on Android OnePlus 7T](assets/images/readme-images/testing/chrom-mob-sc.jpg)
[Chrome on Android Google Pixel 6](assets/images/readme-images/testing/)

#### Safari on iOS
[Safari on iOS iphone 12](assets/images/readme-images/testing/iphone12-mf-sc.jpeg)
[Safari on iOS iphone 13 Mini](assets/images/readme-images/testing/iphone13-mini-gh-sc.jpeg)
[Safari on iOS iphone 14 Pro Max](assets/images/readme-images/testing/iphone14promax-safari-mob-sb-sc.jpg)

---

## User Testing

Special thanks to the following individuals took the time to meticulously go through the site and and give me excellent feedback:

- Sarah Breen: tested on iOS Mobile (iPhone 14 Pro Max) + iPad + Macbook Pro - Safari
- Suzie Lii: tested on PC - Chrome
- Gemma Hamill: tested on iOS Mobile (iPhone 13 Mini) - Safari
- Matthew Franklin: tested on iOS Mobile (iPhone 12) - Safari
- Daniel Cahill: tested on Android Mobile (Google Pixel 7 Pro) - Chrome
- Kelan Simpson: tested on Android Mobile (Google pixel 6) - Chrome
- Lily Elakha: tested on Android Mobile (Google pixel 6) - Chrome
- Omercan Cirit: tested on PC - Firefox, and Android Mobile (device unknown)
- Seun Owonikoko: Mentor, tested on unknown
- Christina Myrvold: Tested on PC - Browser unknown
- Roger Pfäffli: Device unknown, Browser unknown
- Members of the DREAM Discord server (various devices)

Also, a big thank you to Everyone In the Code Institute Slack who took the time to have a look at my project.
---