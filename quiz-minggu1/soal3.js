// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

// Algoritma
// membuat function dengan parameter bertype data int
// untuk mendapatkan nilai jam :
// membagi nilai parameter dengan 60, kemudian dengan method floor hasil pembagian dibulatkan kebawah
// kemudian ditampung dalam variable
// untuk mendapatkan nilai menit :
// dengan menggunakan modulus 60, kemudian ditampung dalam varible jg
// 

function konversiMenit(menit) {
  let tampilan = "";
  let hour = Math.floor (menit/60);
  let minute = menit % 60;
  
  if (minute < 10){
    tampilan = `${hour}:0${minute}`;
  } else {
    tampilan = `${hour}:${minute}`;
  }
  return tampilan;
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00


