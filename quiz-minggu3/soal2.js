/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let arrayOfObjects = [];
    for (let i = 0; i < arrPenumpang.length; i++){
      let obj = {
        penumapang : arrPenumpang[i][0],
        naikDari : arrPenumpang[i][1],
        tujuan : arrPenumpang[i][2],
      }

      let ruteNaik = 0, ruteTurun = 0, hargaBayar = 0;
      for (let j = 0; j < rute.length; j++){ 
        if (arrPenumpang[i][1] === rute[j]) {
          ruteNaik = j;
        } else if (arrPenumpang[i][2] === rute[j]){
          ruteTurun = j;
        }
        
      }
      hargaBayar = (ruteTurun - ruteNaik)*2000;
      obj["harga"] = hargaBayar;
      arrayOfObjects.push(obj);
    }
    return arrayOfObjects;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]