/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut. 
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/

/*Algoritma
1. mencari faktor dari angka 24
24 = 1*24
24 = 2*12
24 = 3*8
24 = 4*6
24 = 6*4
24 = 8*3
24 = 12*2
24 = 24*1
digit pertama increment ==> 1-2-3-4-dst
digit kedua angka/increment
//cukup sampai iterasi ke 9 karena yang diminta digit paling sedikit setelah di jumlahkan digitnya
2. melakukan penjumlahan digit dari faktor
3. return jumlah digit
*/

function digitPerkalianMinimum(angka) {
    let digit1 = 0, digit2 = 0;
    for (let i = 1; i <= 9; i++){
        if (angka % i === 0){
            digit1 = i;
            digit2 = angka/i;
            // console.log(digit1 + " " + digit2);

        }
    }
    let hasil = (digit1.toString() + digit2.toString()).length;
    return hasil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(64)); // 2