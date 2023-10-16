/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

/* 
Algoritma
1. membuat function yg menerima parameter number
2. number dicounter, misal : 
num++; // ini kalo di console.log akan menghasilkan num+1 aja
// sedangkan kita memerlukan counter yg bisa bertambah secara berulang terus menerus
// solusi: dengan menggunakan perulangan while dengan kondisi true.
3. mengubah number type integer ke string 
//tujuannya untuk melakukan akses pada number
4. melakukan akses pada string
5. melakukan reverse number dengan for 
6. membandingkan hasil reverse dengan number, jika sama return number 
//kondisi ini membuat perulangan while menjadi false/0
*/

function angkaPalindrome(num) {
  while (1){
    num++;
    let numStr = num.toString();
    let str = "";
    for (let i = numStr.length-1; i >= 0; i--){
      str += numStr[i];
    }
    if (str == numStr){
      return parseInt(str);
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001