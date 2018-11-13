var words =['chicken', 'cow', 'dog', 'gorilla'];
var randomWord;
var blanks;

function resetGame() {
  randomWord = words[Math.floor(Math.random() * 4)];
  blanks = [];
  letterGuessed = [];
  for (var i = 0; i < randomWord.length; i++) {
    blanks.push('-');
  };
  $('.blanks').text(blanks.join(''))
}

document.onkeyup = function(event) {
  var userChoice = event.key;
  for (var i = 0; i < randomWord.length; i++){
    if (userChoice === randomWord[i]){
      blanks[i] = userChoice;
    }
  }
  $('blanks').text(blanks.join(''));
  $('.letters').text(letterGuessed.join(''));
  if (randomWord === blanks.join('')){
    alert('you win!')
    resetGame();
  }
}

console.log(randomWord);

resetGame();