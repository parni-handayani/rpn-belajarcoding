/* Algoritma
1. membuat function yang menerima parameter array
2. melakukan akses elemen2 array dengan menggunakan perulangan for
// untuk mengetahui apakah termasuk deret geometri atau bukan yaitu 
dengan nilai rasio yang sama setiap antar sukunya (r = U2/U1; U3/U2; dst)
// jika i < arr.length dan melakukan akses dengan i+1 maka, element arr yg diakhir/ index terakhir 
akan ditambahkan dengan undifined sehingga mengembalikan nilai false
// solusi: i < arr.length-1
4. menjadikan hasil rasio sebagai pembanding
5. jika sama kembalikan true, jika tidak false
// jika langsung dikembalikan maka, saat hasil logic ada yang true 
// maka akan langsung mengembalikan true, 
// tidak lagi menjalankan else
// solusi : dengan menampung nilai true/false kedalam var kosong
*/
function tentukanDeretGeometri(arr) {
    let nilai;
    for(let i = 0; i < arr.length - 1; i++){
      if (arr[i+1]/arr[i] === arr[1]/arr[0]){
        nilai = true;
      } else {
        nilai = false;
      }
    }
    return nilai;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false