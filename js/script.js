{
  const playGame = function(playerInput)  {

    clearMessages();

    const getMoveName = function(argMoveId) {
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


    const showElem = function() {
      const messages =  document.getElementById('messages');
      messages.style.display = "block";
    }

    const displayResult = function(computerMove, playerMove) {
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

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera to: ' + computerMove);

    displayResult(computerMove, playerMove);
  }

const rockElement = document.getElementById('play-rock');

rockElement.addEventListener('click', function () {
  playGame(1);
});

const playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', function () {
  playGame(2);
});

const playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', function () {
  playGame(3);
});

}