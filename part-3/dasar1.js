// cara membuat variabel
var a = "a";
var b = "b";
var c = "c";

//  variabel bisa menampung type data string (text), integer/number, boolean, array, object
let nama = "parni";
let umur = 23;
let apakahBenar = true;
let uang = 5000.5;

// operator aritmetika
let angka1 = 10;
let angka2 = 20;
console.log (angka1 + angka2, 'pertambahan') //30 pertambahan
console.log (angka1 - angka2, 'pengurangan') //-10 pengurangan
console.log (angka1 / angka2, 'pembagian') //0.5 pembagian
console.log (angka1 * angka2, 'perkalian') //200 perkalian
console.log (angka1 % angka2, 'modulus') //10 modulus

// operator assignment
let penampungHasilOperatorAritmetika = angka1 + angka2;
console.log(penampungHasilOperatorAritmetika); //30
penampungHasilOperatorAritmetika = angka1 - angka2;
console.log(penampungHasilOperatorAritmetika); //-10
penampungHasilOperatorAritmetika = angka1 / angka2;
console.log(penampungHasilOperatorAritmetika); //0.5
penampungHasilOperatorAritmetika = angka1 * angka2;
console.log(penampungHasilOperatorAritmetika); //200
penampungHasilOperatorAritmetika = angka1 % angka2;
console.log(penampungHasilOperatorAritmetika); //10

// string bisa ditambah namun string ga bisa dikurang dengan operator aritmetika
let firstname = "parni";
let lastname = "handayani";
let fullname = firstname + " " + lastname;
console.log(fullname); //parni handayani
console.log(firstname + " " + lastname) //parni handayani
console.log(firstname - lastname); //NaN

//  alur pembacaan code, dari atas ke bawah dan kiri ke kanan
let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10, mengapa false + 10 = 10? karena, false = 0 dan true = 1
number = true;
console.log(number + 10) //11

// contoh error 
const hewan = "jerapah";
console.log(hewan);
hewan = "buaya"; 
// TypeError: Assignment to constant variable. 
// Tidak bisa mengubah nilainya jika dideklarasi dengan variabel const






