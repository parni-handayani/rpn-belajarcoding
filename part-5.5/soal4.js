// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15,17);
let exampleFourthWord4 = word4.substring(18,20);
let exampleFifthWord4 = word4.substring(21,25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);      //First Word: wow, with length: 3
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);   //Second Word: JavaScript, with length: 10
console.log('Third word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);      //Third word: is, with length: 2
console.log('Fourth word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);   //Fourth word: so, with length: 2
console.log('Fifth word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);      //Fifth word: cool, with length: 4

