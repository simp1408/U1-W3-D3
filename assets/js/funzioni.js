
//OPERATOREI DI UGUAGLIANZA E IDENTITA' " ==  " E "   ===   "

let numero = 3;
let numero2= '3';

let uguaglianza = numero == numero2;
console.log(uguaglianza); //mi da un true xke guarda solo il valore

let identita = numero === numero2;
console.log(identita); //mi dara false xke guarda proprio la tipicita e il valore

//OPERATORI NEGATIVI DI UGUAGLIANZA E IDENTITA " !==" E " != "

let ris = numero !== 3;
console.log(ris); // mi da false 

let ris2= numero !== '3';
console.log(ris2); // mi da true  XK IL 3 E UNA STRINGA QUINDI NON E UGUALE 

let ris3 = numero !=3
console.log(ris3); //mi da false 

let ris4 = numero!=5;
console.log(ris4); // mi da true

// OPERTAORI TERNARI  ? :
 let anni = 15;
 let anni2 = 20;

 let ingresso = (anni < 18) ? "ingresso vietato" :"ingresso permesso";
 console.log(ingresso); // mi stampa ingresso vietato


 let ingresso2 = (anni2 >18) ? "ingresso vietato" :"ingresso permesso";
 console.log(ingresso2); // mi stampa ingresso permesso

 //FUNZIONI



//funzione range eta

function cambiaColore(colore)
{
    document.getElementById("boxColore").style.backgroundColor= colore;
}



function calcola()
{
 let anno= parseInt(document.getElementById('value1').value);//metto dentro la varibile a il valore di value1
let annoAttuale=parseInt(document.getElementById('value2').value);//metto dentro la varibalie b il valore di value2
let op=document.getElementById('operatore').value; // metto dentro la varibile op il valore dell operatore
 let calcolo = document.getElementById('calcolo');//metto dentro la variabile calcolo il valore "min"
   if( op == 'min')
   {
    calcolo = anno - annoAttuale;
   }

   document.getElementById('result').innerHTML = calcolo;
}



