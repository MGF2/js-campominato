//Lista vuota per numeri pc
var numeri = [];
var randomnum;
var i = 0;


//Scelta numeri "bomba" pc
while (numeri.length < 16) {
  var randomnum = random(1,100);
  var presente = numeri.includes(randomnum);
  //Se il numero random è unico push nella stringa vuota
  if (presente == false ) {
    numeri.push(randomnum);
  }
}

console.log(numeri);
//Lista vuota numeri giocatore
var sceltaR = [];

while ( sceltaR.length < 5 ) {
  //Scelta numeri giocatore
  var scelta = parseInt(prompt("Scegli un numero"));
  //Controllo lista numeri
  var presente = sceltaR.includes(scelta);
  if ( presente == true ) {
    console.log("Numero già inserito, scegline un altro");
  } else {
    sceltaR.push(scelta);
    if (numeri.includes(scelta)) {
      console.log( scelta + " " + "Bomba! Hai perso");
      break;
    } else {
      console.log("Salvo! Puoi continuare");
    }
  }

  i++;
}
console.log(sceltaR);



//BOHH
// while ( (numeri.includes(sceltaR[i]) == false) && (sceltaR.length < 5) ) {
//   console.log("Puoi continuare");
// } if (numeri.includes(sceltaR[i]) == true) {
//   console.log("Bomba! Hai perso");
// }


// else if (i > 5) {
//   console.log("Hai vinto!");
// }


// FUNZIONI

function random ( min,max ) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
