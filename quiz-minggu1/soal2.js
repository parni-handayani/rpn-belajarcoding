 // Problem
  // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
  // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

// Algoritma
  // membuat function dengan parameter kata dengan type data string
  // melakukan akses string dengan looping
  // dengan pertama-tama mengakses huruf terakhir pada kata, menggunakan method length
  // sampai dengan huruf pertama pada kata.
  // setiap mengakses huruf ditampung pada var kataTerbalik, 
  // yang ditampung ialah huruf dr yg terakhir - pertama pada kata, dengan menggunakan assignment string.
  // lalu fungsi mengembalikan nilai, hasil dari var kataTerbalik

  function balikKata(kata) {
  let kataTerbalik = "";
  for (let i = kata.length-1; i >= 0; i--){
    kataTerbalik += kata[i];
  }
  return kataTerbalik;
}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
