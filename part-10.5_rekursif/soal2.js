/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti 
akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/

  function changeVocals (str) {
    let objVocal = {
      a : "b", i : "j", u : "v", e : "f", o : "p",
      A : "B", I : "J", U : "V", E : "F", O : "P"
    }
    let nextVocal = "";
    for (let i = 0; i < str.length; i++){
      if (objVocal[str[i]]){
        nextVocal += objVocal[str[i]];
      } else {
        nextVocal += str[i];
      }
    }
    return nextVocal;    
  }
  
  function reverseWord (str) {
    let kataTerbalik = "";
    for (let i = str.length-1; i >= 0; i--){
      kataTerbalik += str[i];
    }
    return kataTerbalik;
  }

  function setLowerUpperCase (str) {
    let ubahKecilBesarHuruf = "";
    for (let i = 0; i < str.length; i++){
      if (str[i] === str[i].toUpperCase()){
        ubahKecilBesarHuruf += str[i].toLowerCase();
      } else {
        ubahKecilBesarHuruf += str[i].toUpperCase();
      }
    }
    return ubahKecilBesarHuruf;
  }
  
  function removeSpaces (str) {
    let hapusSpaces = str.split(" ");
    return hapusSpaces.join("");
  }
  
  function passwordGenerator (name) {
    if(name.length >= 5){
      let vocalsChange = changeVocals(name);
      let wordReverse = reverseWord(vocalsChange);
      let setCaseLowerUpper = setLowerUpperCase(wordReverse);
      let spacesRemove = removeSpaces(setCaseLowerUpper);
      return spacesRemove;
    } else {
      return '';
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'