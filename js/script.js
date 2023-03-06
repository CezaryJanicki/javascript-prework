let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier'
} else if (playerInput == '3') {
    playerMove = 'nożyce'
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else {
    computerMove = 'nożyce'
}

printMessage('Ruch komputera to: ' + computerMove);

if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Komputer Wygrywa!');
  } else if (playerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch. Nikt nie wygrywa.');
  } else {
    printMessage('Ty wygrywasz!');
  }