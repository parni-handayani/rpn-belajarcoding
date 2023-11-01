/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
/* Algoritma
1. akses array berisi string
2. mencari nilai index 'o'
3. mencari nilai index 'x' dan menampung setiap nilai x kedalam array baru 
jika tidak ada 'x' dalam array, return 0.
4. pada array baru kembalikan nilai index x yang paling kecil, jika nilai index o < index x 
dan sebaliknya
5. kurangkan nilai index o dan index x
*/


function targetTerdekat(arr) {
    let o = 0, result = 0, arrNew = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'o'){
            o = i;
        } 
        if (arr[i] === 'x'){
            arrNew.push(i);
        } else if (!arr.includes('x')){
            return 0;
        }
    } 
    let x = arrNew[0];
    for (let j = 0; j < arrNew.length; j++){
        if (o < arrNew[j]){
            if (arrNew[j] < x){
                x = arrNew[j];
            }
        } else {
            if (arrNew[j] > x){
                x = arrNew[j];
            }
        }
    }
    result = Math.abs(o - x);
    return result;
}
// undifined because no return
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
