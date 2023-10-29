/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/

/* Algoritma
1. jika terakses elemen 1
2. hapus elemen 1
3. kalikan sisa elemen
4. hasil kali dipush kedalam array baru
5. kembalikan lagi elemen yg terhapus ke sisi kiri array/menjadi elemen 1 
6. lakukan proses berulang
*/

function perkalianUnik(arr) {
  let newArr = [], shiftArr;
  for (let i = 0; i < arr.length; i++){
    let totalKali = 1;
    shiftArr = arr.splice(i, 1);
    for (let j = 0; j < arr.length; j++){
      totalKali *= arr[j];
    }
    newArr.push(totalKali);
    arr.unshift(shiftArr);
    // console.log(shiftArr);
    // console.log(arr);
  }
  return newArr;
}

/* Algoritma
1. mengalikan seluruh isi element array
2. hasil kali dibagi dengan element yang diiterasi/dieksekusi satu persatu dgn loop
3. hasil bagi dipush ke dalam array baru
4. kembalikan array baru
*/
function perkalianUnik(arr) {
  let totalKali = 1, totalBagi, newArr = [];
  for (let i = 0; i < arr.length; i++){
    totalKali *= arr[i];
  }
  for (let j = 0; j < arr.length; j++){
    totalBagi = totalKali/arr[j];
    newArr.push(totalBagi);
  }
  return newArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]