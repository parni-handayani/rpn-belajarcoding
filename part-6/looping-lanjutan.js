// counter pada looping
 
let i = 0;              //i adalah counternya
while (i < 100){
    console.log(i);
    i += 2;             //disini counternya ditentukan besarnya berapa
}

let j = 0;
// disini kita akan belajar menggabungkannya dengan if else
while (j < 50){
    // disini kita akan mencari ganjil atau genap
    if (j % 2 === 0){
        console.log(`${j} adalah genap`);
    } else {
        console.log(`${j} adalah ganjil`);
    }
    j++;
}

// modulus operator adalah sisa bagi
// misal 3/2 hasilnya akan koma dan kalau 3%2 hasilnya 1
// n % 3 === 0, maka ini adalah kelipatan 3
// n % 5 === 0, maka ini adalah kelipatan 5
// n % 2 === 0, maka ini adalah kelipatan 2 dan 2 kebetulan bisa menentukan ganjil atau genap
// apapun angkanya kalau di modulus apapun juga angkanya dan hasilnya adalah 0 maka itu adalah kelipatannya

// problem fizzbuzz
// jika i adalah kelipatan 3 maka tampilkan fizz
// jika i adalah kelipatan 5 maka tampilkan buzz
// jika i adalah kelipatan 3 dan sekaligus kelipatan 5 maka tampilkan fizzbuzz
// jika bukan kelipatan diatas maka tampilkan angka
for (let i = 1; i < 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0){
        console.log("fizz");
    } else if (i % 3 !== 0 && i % 5 === 0){
        console.log("buzz");
    } else {
        console.log(i);
    }
}

// pada looping ada yang namanya break dan continue
// break membuat loop berhenti sepenuhnya
// continue membuat loop skip di iterasi tertentu

// contoh break
for (let i = 0; i < 10; i++){
    if (i === 7){
        break;
    }
    console.log(i);
}   // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6

// contoh continue

for (let i = 0; i < 10; i++){
    if (i === 7){
        continue;
    }
    console.log(i);
}   // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 8
    // 9