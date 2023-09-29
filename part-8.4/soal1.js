/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// Algoritma
// membuat function dengan parameter type data string
// melakukan akses/pengecekan pada string, dengan menggunakan loop-->for
// melakukan perbandingan jika string[0] === string[length-1] maka nilai = true
// jika tidak maka nilai = false
// return nilai

function palindrome(kata) {
    let nilai;
    for(let i = 0; i < kata.length; i++){
        if (kata[0] === kata[kata.length-1]){
            nilai = true;
        } else {
            nilai = false;
        }
    }
    return nilai;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false