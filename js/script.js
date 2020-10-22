var message = document.getElementById('emailMessage');
var feedback = "Accesso non consentito"

var emailList = ['pawn@gmail.com', 'queen@gmail.com', 'rook@gmail.com'];

var emailUser = prompt('Inserisci la tua email');

for (var i = 0; i < emailList.length; i++){
   if(emailList[i] == emailUser){
      feedback = "Accesso consentito.";
   }
}

message.innerHTML = feedback;

//Fine primo esercizio

//Inizio secondo esercizio

var userWinner = document.getElementById('winner');

var giocatore = Math.floor(Math.random() * 6)+1;
var computer = Math.floor(Math.random() * 6)+1;

if (giocatore > computer){
   userWinner.innerHTML = "Complimenti giocatore, hai vinto!"
}else if (giocatore == computer){
   userWinner.innerHTML = "Avete pareggiato!"
}else {
   userWinner.innerHTML = "Mi dispiace, ha vinto il computer!"
}

console.log(giocatore, computer)
