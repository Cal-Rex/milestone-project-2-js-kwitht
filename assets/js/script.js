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

