function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier'
  } else if (argMoveId == 3){
    return 'nożyce'
  } else return 'nieznany ruch';
}

function displayResult(computerMove, playerMove){
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

  if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Komputer Wygrywa!');
  } else if (playerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch. Nikt nie wygrywa.');
  } else {
    printMessage('Ty wygrywasz!');
  }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + computerMove);

displayResult(playerMove, computerMove);

