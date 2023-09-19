function helloWorld(){
    return "Hello World"
} //fungsi ini mempunyai nilai "Hello World"

console.log(helloWorld()); //Hello World

function test() {
    console.log("test");
}

console.log (test()); //undefined

// return memberikan nilai ke fungsi
// bila tidak memberikan return di fungsi maka fungsi tersebut mempunyai nilai undefined

let hello = helloWorld();
let hello1 = "Hello World"
// var hello dan hello1 mempunyai maksud yang sama, sama-sama menampilkan "Hello World"

function tambahAngka(angka1,angka2){
    return angka1 + angka2;
}

console.log(tambahAngka(1,2)); //3
console.log(tambahAngka(2,4)); //6
console.log(tambahAngka(3,6)); //9
console.log(tambahAngka(4,8)); //12
console.log(tambahAngka());    //NaN -> undefined + undefined = NaN

let angka5 = tambahAngka(2,3);
console.log(angka5);            //5

function balikKata(kata){
    let balikKata = "";
    for (let i = kata.length - 1; i >= 0; i--){
        balikKata += kata[i];
    }
    return balikKata;
}

console.log(balikKata("gajah"));    //hajag
console.log(balikKata("kucing"));   //gnicuk
console.log(balikKata("katak"));    //katak
console.log(balikKata("jerapah"));  //haparej
console.log(balikKata(0));          // 

function nambahinHurufBesarSetelahSpasi(kata){
    let result = "";
    for (let i = 0; i < kata.length; i++){
        if (i === 0 || kata[i-1] === " "){
            result += kata[i].toUpperCase();
        } else {
            result += kata[i];
        }
    }
    return result;
}

console.log(nambahinHurufBesarSetelahSpasi("parni handayani")); //Parni Handayani