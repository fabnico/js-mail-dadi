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
