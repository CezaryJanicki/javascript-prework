function playGame(playerInput)  {

  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier'
    } else if (argMoveId == 3){
      return 'nożyce'
    } else {
      return 'nieznany ruch';
    }
  }


  function showElem() {
    document.getElementById('messages').style.display = "block";
  }

  function displayResult(computerMove, playerMove){
    showElem();
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

    if (computerMove == playerMove) {
      printMessage('Remis!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'kamień') {
      printMessage('Komputer Wygrywa!');
    } else if (playerMove == 'nieznany ruch') {
      printMessage('Nieznany ruch. Nikt nie wygrywa.');
    } else {
      printMessage('Ty wygrywasz!');
    }
  }

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Ruch komputera to: ' + computerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});

