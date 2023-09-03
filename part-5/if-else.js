let nilai = 50;

// console.log(nilai >= 50); //true

if (nilai >= 50){
    console.log("lulus");
} else if (nilai >= 40) {
    console.log("tidak lulus")
} else {
    console.log("tidak lulus pake banget");      
}
// kode diatas menampilkan lulus

if (nilai >= 40){
    console.log("tidak lulus");
} else if (nilai >= 50) {
    console.log("lulus")
} else {
    console.log("tidak lulus pake banget");      
}
// kode diatas menampilkan tidak lulus
// dengan begitu membuktikan kode dieksekusi dari atas ke bawah,
// yang mana kondisinya terpenuhi duluan maka akan dieksekusi duluan

// logical operator dan comparison operator
nilai = 65;
if (nilai >= 80 && nilai <= 100){
    nilai = "A";
} else if (nilai >= 70 && nilai < 80){
    nilai = "B";
} else if (nilai >= 60 && nilai < 70){
    nilai = "C";
} else {
    nilai = "D";
}

console.log(nilai); //C

// && (and) semua kondisi harus terpenuhi maka akan menghasilkan nilai true
// || (or) salah satu kondisi terpenuhi maka akan menghasilkan nilai true

nilai = 60;

let banding = nilai >= 80 && nilai <= 100;
console.log(banding, "&&"); //false &&
let banding2 = nilai >= 80 || nilai <= 100;
console.log(banding2, "||"); //true ||
let banding3 = nilai != 50;
console.log(banding3, "!"); //true!

// beda == (equal to) dan === (equal value and equal type)
let x = 50;
let y = "50";

let banding4 = x == y;
console.log(banding4, "4"); //true 4
let banding5 = x === y;
console.log(banding5, "5"); //false 5

// if else bersarang
let number = 7;

if (number > 5){
    if (number%2 === 0){
        console.log("lebih besar dari 5 dan genap");
    } else {
        console.log("lebih besar dari 5 dan ganjil");
    }
} else {
    if (number%2 === 0){
        console.log("lebih kecil dari atau sama dengan 5 dan genap");
    } else {
        console.log("lebih kecil dari atau sama dengan 5 dan ganjil");
    }
} // lebih besar dari 5 dan ganjil



