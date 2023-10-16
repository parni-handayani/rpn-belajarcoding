/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

/* Algoritma
membuat function dengan parameter type data string
melakukan perbandingan jika string[0] === string[length-1] maka nilai = true
jika tidak maka nilai = false
return nilai
*/

// function palindrome(kata) {
//     if (kata[0] === kata[kata.length-1]){
//      return true;
//     } else {
//      return false;
//     }
// }

// masalah yang muncul dr algoritma diatas adalah jika string yang ditengah ada yang beda, 
// huruf yang sama hanya diawal dan diakhir maka tetap akan menghasilkan true 
// padahal dr kasus diatas harusnya mengembalikan false 
// solusi :

/* Algoritma
1. membuat function yang menerima parameter string
2. melakukan akses pada string dengan menggunakan for
3. membandingkan elemen 1 dgn elemen terakhir, elemen 2 dengan element ke-2 terakhir, dst
4. kembalikan true 
*/

function palindrome(kata){
    for (let i = 0; i < kata.length; i++){
        if (kata[i] === kata[kata.length-1-i]){
            return true;
        } else {
            return false;
        }
    }
}

/* Algoritma
1. membuat function yang menerima parameter string
2. melakukan akses pada string mulai dari element terakhirnya
//bertujuan untuk membalikkan string
3. string yang dibalikkan dicompare dengan param string yang diterima,
jika sama kembalikan true, jika tidak false
*/

// function palindrome(kata){
//     let str = "";
//     for (let i = kata.length - 1; i >= 0; i--){
//         str += kata[i];
//     }
//     return str === kata;
// }



// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

// palindrome('katak');