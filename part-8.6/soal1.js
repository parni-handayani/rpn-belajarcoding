/* Algoritma
1. membuat function yang menerima parameter array
2. melakukan akses pada element-element array dengan perulangan for
3. menjumlahkan setiap element array dengan menggunakan assignment operator
4. mengembalikan hasil nilai penjumlahan setiap element array dibagi dengan panjang array
*/

function cariMean(arr) {
    let mean = 0;
    for (let i = 0; i < arr.length; i++){
        mean += arr[i];
    }
    return Math.round(mean / arr.length);
}
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  
  //tips baca dokumentasi Math js untuk pembulatan