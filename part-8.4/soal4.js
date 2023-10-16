/* Algortima
1. membuat function yang menerima parameter number
2. mengubah number dgn type int ke string
3. melakukan akses pada number_to_string
4. melakukan penjumlahan mulai dari elemen 1 dan 2, kemudian 2 dan 3 dst,
hasil dimasukan pada sebuah var sementara, 
hasil yang dimasukkan berupa pasangan elemen-elemen.
5. kemudian membandingkan var sementara dgn var yg bernilai 0, 
yg mana jika var sementara lebih besar, 
isikan nilai var sementara ke dalam var yg bernilai 0 tadi. 
6. return nilai yg dimasukkan ke dalam var bernilai 0
*/

function pasanganTerbesar(num) {
  let numToStr = num.toString();
  let penampung = 0;
  for (let i = 0; i < numToStr.length; i++){
    let strToNum = parseInt(numToStr[i] + numToStr[i+1]);
    if (strToNum > penampung){
      penampung = strToNum;
    }
  }
  return penampung;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99