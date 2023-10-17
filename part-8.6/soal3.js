//tentukan apakah ini deret aritmatika atau bukan

/* Algoritma
1. membuat function yang menerima parameter array
2. melakukan akses elemen2 array dengan menggunakan perulangan for
// untuk mengetahui apakah termasuk deret aritmatika atau bukan yaitu 
dengan nilai beda yang sama setiap selisih sukunya (b = U2-U1; U3-U2; dst)
// jika i < arr.length dan melakukan akses dengan i+1 maka, element arr yg diakhir/ index terakhir 
akan ditambahkan dengan undifined sehingga mengembalikan nilai false
// solusi: i < arr.length-1
4. menjadikan hasil selisih b sebagai pembanding
5. jika sama kembalikan true, jika tidak false
// jika langsung dikembalikan maka, saat hasil logic ada yang true 
maka akan langsung mengembalikan nilai true, 
tidak lagi menjalankan else yang bernilai false
// solusi: dengan menampung nilai true/false kedalam var kosong
*/

function tentukanDeretAritmatika(arr) {
    let nilai;
    for (let i = 0; i < arr.length-1; i++){
        if (arr[i+1] - arr[i] === arr[1] - arr[0]){
            nilai = true;
        } else {
            nilai = false;
        }
    }
    return nilai;
}
  
  // TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false