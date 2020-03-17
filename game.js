//3. crete a new array called button color on the top containg red blue green and yellow
var buttonColors=["red","blue","green","yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern=[];

//1. Create a function called nextSequence
function nextSequence(){

    //2. Generate random number between 0 and 3
    var randomNumber=Math.floor(Math.random()*4);
    
    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColor=buttonColors[randomNumber];
    
    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColor);
}