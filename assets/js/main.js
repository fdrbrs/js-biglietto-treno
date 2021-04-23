//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

var distance = parseInt(prompt('Quanti kilometri desidera percorrere?'));
console.log(distance);

if (distance < 1 || isNaN(distance) ) {
    alert('Valore inserito non corretto. Inserire un numero maggiore di 0')
}

var age = parseInt(prompt('Qual\' è la sua età?'));

if (age < 0 || isNaN(age) ) {
    alert('Valore inserito non corretto. Inserire un valore numerico non inferiore a 0')
}

console.log(age);

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)

var price = distance * 0.21;
console.log(price);

//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

if (age < 18) {
    price = price * 0.80;
} else if (age > 65) {
    price = price * 0.60;
}
else {price = price}
console.log(price);

//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
var priceRounded = price.toFixed(2);

var msg = document.getElementById('msg');
msg.innerHTML = 'Il prezzo del suo biglietto è ' + priceRounded + '€';


//bonus css carino

var ageResult = document.getElementById('age_result');

if ( age < 18) {
    ageResult.innerHTML = 'minore'
} else if (age > 65) {
    ageResult.innerHTML = 'adulto over 65'
} else {
    ageResult.innerHTML = 'adulto'
}