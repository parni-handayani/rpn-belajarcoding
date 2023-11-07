/*cari faktor persekutuan terbesar
fpb = bilangan terbesar yang dapat membagi kedua bilangan sampai habis.
misal: 
a = 14 --> 1, 2, 7, 14
b = 28 --> 1, 2, 4, 7, 14, 28
faktor dari dua bilangan itu ada 1, 2, 7, 14
dan yang terbesar adalah 14 
jadi fpbnya adalah 14

nilai yang merupakan faktor dari suatu bilangan merupakan  
nilai-nilai yang lebih kecil dari bilangan tersebut.
oleh karena itu fpb dari 2 bilangan bisa jadi
salah satu bilangannya merupakan faktor dari bilangan lainnya. 
dan karena bilangan terkecil pasti tidak akan memiliki faktor yg lebih dari bilangannya
untuk itu iterasi cukup sampai dengan salah satu bilangan yang terkecil.

*/
function fpb(angka1, angka2) {
    let angkaTerkecil = 0;
    if (angka1 > angka2){
        angkaTerkecil = angka2;
    } else {
        angkaTerkecil = angka1;
    }
    
    for (let i = angkaTerkecil; i > 0; i--){
        if (angka1 % i === 0 && angka2 % i === 0){
            return i;
        }
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(14, 28)); // 14