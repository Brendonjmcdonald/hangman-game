// <!-- Create an array of words -->
  var wordBank = ["clint eastwood", "tuco", "blondie", 
  "angel eyes", "lee van cleef", "sergio leone", 
  "spaghetti western", "italian", "bounty", "civil war", "the good",
  "the bad", "the ugly", "eli wallach", "shootout", "cemetery",
  "buried gold", "the man with no name", "noose"]; 

  

  var guessesLeft = 10;
  console.log(guessesLeft);


  var loses = 0;
  console.log(loses);

  var wins = 0;
  console.log(wins);

  var previousGuesses= [];
  console.log(previousGuesses);


  // <!-- The computer picks a random word from the array -->

  var randomWord = wordBank[Math.floor(Math.random()
   * wordBank.length)];


  console.log(randomWord);

  
  // the screen shows a number of blanks equal to 
  // the number of letters in secret word


  var answerArray = [];

  for (var i =0; i<randomWord.length; i++){
    answerArray[i]= "_";
  }
  

  console.log(answerArray);

  document.getElementById("word-holder")
  .innerHTML = answerArray.join(" ");



  

  // When player chooses letter the computer registers

  document.onkeyup = function(event) {

  var letter = String.fromCharCode(event.keyCode).toLowerCase();

  console.log(letter);

  document.getElementById("letters-guessed").innerHTML = letter;


  if (letter === answerArray[i]){
   alert(match);


  }

  

}



// If the letter is correct, a "_" is replaced by the 
// letter in the correct position


  
  

// If the letter is incorrect the letter choosen appears
// in the letters guessed area and the number of guesses
// goes down by one




// -------
// //listen for this event - when a user types a key:
// document.onkeyup = function() {
//   store the key in a variable // letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
//  //the user has not guessed this letter already
//   if(letterGuess is not found in the previousGuesses array) {
//      add the letterGuess into the previousGuesses array;
//      console.log("new guess");
//      if (the letter is in the secret word - aka it was a good guess) {
//          reveal the letter instead of blanks (what if letter occurs more than once?)
    
//          if(the word is completely guessed) {
//               console.log("the user wins!!");
//               wins++;
//               reset the secret word
//               reset the number of guesses available
//               reset the number of blanks shown
//               reset the previous guesses array
//          }
//      }
//      else {
//         guessesLeft--;
        
//         if(guessesLeft === 0) {
//              console.log("you lost");
//              losses++;
//              reset the secret word
//              reset the number of guesses available
//              reset the number of blanks shown
//              reset the previous guesses array
//         }
//      }
//   }
//   else {
//      console.log("this is a duplicate guess");
//   }
// }









  
