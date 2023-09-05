// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15,17);
let exampleFourthWord3 = word3.substring(18,20);
let exampleFifthWord3 = word3.substring(21,25);

// ---------------------------------------
console.log('First Word: ' + exampleFirstWord3);     //First Word: wow
console.log('Second Word: ' + exampleSecondWord3);   //Second Word: JavaScript
console.log('Third Word: ' + exampleThirdWord3);     //Third Word: is
console.log('Fourth Word: ' + exampleFourthWord3);   //Fourth Word: so
console.log('Fifth word: ' + exampleFifthWord3);     //Fifth Word: cool
// ---------------------------------------