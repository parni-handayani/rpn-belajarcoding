/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
/* Algoritma
1. mengurutkan array animals
2. akses kata dari array animals kemudian melakukan pengecekan jika huruf pertama dari kata (array animals)
sama dengan huruf pertama dari kata (array penampung) atau array penampung sama dengan 0
3. maka lakukan push kata yang sama (array animals) ke array penampung
4. jika tidak lakukan push array penampung ke dalam array hasil
5. dan masukan kata yang tidak sama (array animals) ke dalam array penampung
6. kata dalam array penampung yang belum sempat dipush ke array hasil kemudian dipush  
7. kembalikan hasil
*/

function groupAnimals(animals) {
  for (let i = 0; i < animals.length-1; i++){
    for (let j = 0 + i; j < animals.length; j++){
      if(animals[i] > animals[j]){
        let temp = animals[i];
        animals [i] = animals [j];
        animals [j] = temp;
      }
    }
  }

  let penampung = [];
  let hasil = [];
  for (let i = 0; i < animals.length; i++){
    if (penampung.length === 0 || animals[i][0] === penampung[0][0]){
      penampung.push(animals[i]);
    } else {
      hasil.push(penampung);
      penampung = [animals[i]];
    }
  }
  hasil.push(penampung);
  return hasil;
}



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]