// TODO: Declare any global variables we need
var img = document.getElementById("penny-img");
var flip = document.getElementById("flip")
var roll = document.getElementById("roll")
let numberHeads = 0
let numberTails = 0
let percentHeads = 0
let percentTails = 0
let totalFlip = 0
let flipText = document.querySelector(".message-container");
let scoreboardTails = document.querySelector("#tails")
let scorboardHeads = document.querySelector("#heads")
let scorboardPerTails = document.querySelector("#tails-percent")
let scorboardPerHeads = document.querySelector("#heads-percent")

flip.addEventListener("click", function() {
    let result = Math.floor(Math.random() * 2) + 1
    console.log(result)
    if(result == 1) {
        numberHeads++                                            //flipped heads
       scoreboardHeads.textContent = numberHeads

    }   
    else {                                                      //flipped tails
          numberTails++
          scorboardHeads.innerHTML = numberTails
    }      

    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
