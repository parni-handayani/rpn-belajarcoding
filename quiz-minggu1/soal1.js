// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

// Algoritma
// membuat function dengan 2 parameter 
// melakukan pengecekan angka-angka yang dimasukkan pada parameter, angka1 dan angka2
// selanjutnya membandingkan angka-angka tersebut
// jika angka2 > angka1 kembalikan nilai true
// jika angka1 > angka2 kembalikan nilai false
// jika angka1 = angka2 kembalikan nilai -1

function bandingkanAngka(angka1, angka2) {
    let nilai;
    if (angka2 > angka1){
        nilai = true;
    } else if (angka1 > angka2){
        nilai = false;
    } else if (angka1 === angka2){
        nilai = -1;
    }
    return nilai;
  }
    
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false
 