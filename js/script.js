// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//BONUS
var difficolta = parseInt(prompt("Scegli il livello di difficoltà '0,1,2'"));




switch (difficolta) {
    case 0:
    var massimo = 100;
    break;
    case 1:
    var massimo = 80;
    break;
    case 2:
    var massimo = 50;
    break;
    default:
    var massimo = 100;
}


//Lista vuota per numeri pc
var numeri = [];
var randomnum;
var i = 0;


//Scelta numeri "bomba" pc
while (numeri.length < 16) {
  var randomnum = random(1,massimo);
  var presente = numeri.includes(randomnum);
  //Se il numero random è unico push nella stringa vuota
  if (presente == false ) {
    numeri.push(randomnum);
  }
}
console.log(numeri);

//Lista vuota numeri giocatore
var sceltaR = [];
var trovato = false;
var range = massimo - 16;

while ( (sceltaR.length < range) && (trovato == false) ) {
  //Scelta numeri giocatore
  var scelta = parseInt(prompt("Scegli un numero"));
  //Controllo lista numeri
  var presente = sceltaR.includes(scelta);
  if ( presente == true ) {
    console.log("Numero già inserito, scegline un altro");
  } else if ( isNaN(scelta) ) {
    console.log("Non è un numero, inserisci un numero");
  } else if ( (scelta < 1) || (scelta > massimo) ) {
    console.log("Scegli un numero tra 1 e " + massimo);
  } //Se superati i controlli, scelta inserita nella lista
    else {
    sceltaR.push(scelta);
    //Confronto - se la scelta non è presente nella lista
    if ( (numeri.includes(scelta) == false) && (sceltaR.length < range) ) {
      console.log("Punti: " + sceltaR.length + " " + "Salvo! Puoi continuare");
    } //Se la scelta è presente nella lista - Hai perso
      else if (numeri.includes(scelta) == true) {
      trovato = true;
      console.log("Punti: " + sceltaR.length + " " + "Bomba! Hai perso");
    } //Se la scelta non coincide con nessuna bomba - Hai vinto
      else {
      console.log("Punti: " + sceltaR.length + " " + "Hai vinto!");
    }
  }
  i++;
}
console.log(sceltaR);


// FUNZIONI
function random ( min,max ) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
