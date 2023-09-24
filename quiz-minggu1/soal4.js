//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// Algoritma 
// membuat function dengan parameter str, type data string
// melakukan akses pada string, menggunakan loop
// melakukan pengecekan jika huruf == x, maka var x akan bertambah
// jika tidak, maka var o akan bertambah.
// lalu membandingkan x dan o,
// jika x == o, maka true
// jika tidak, maka false

function xo(str) {
  let nilai, x = 0, o = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === 'x'){
      x++;
    } else {
      o++;
    }
    
    if (x == o){
      nilai = true;
    } else {
      nilai = false;
    }
  }
  return nilai;
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true