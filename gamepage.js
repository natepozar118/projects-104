// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess
if(x == y)
{
  alert("CONGRATULATIONS!!!"+playername+"  You Guessed It Right In"
      + guess + "GUESS");
  guess= 1;
}

else if(x > y)

{
  guess++;
  alert("Oops Sorry! Try A Smaller Number")
}
else
{
  guess++;
  alert("Oops Sorry! Try A Grater Number")
}
function playAgain(){
  y = Math.floor(Math.random() * 10 + 1);
}
  
// function for number guessed by user     
var x = document.getElementById("guessField").value;