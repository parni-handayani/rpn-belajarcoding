//while and for

let i = 0;
while(i < 5){               // kondisi bernilai true
    console.log(i);
    i++;                    // i kemudian ditambahkan agar kondisi yang ada pada while menyetuh atau berubah menjadi false  
}   // 0
    // 1
    // 2
    // 3
    // 4

// dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan dan kanan itu pertambahan

 let j = 5;
 while(j >= 0){
    console.log(j);
    j--;
 }  // 5
    // 4
    // 3
    // 2
    // 1
    // 0

// hati-hati akan infinite loop atau loopnya tidak jalan  
// contoh loop tidak jalan
let k = 5;
while (k > 5){
    console.log(k);
    k++;
}
// contoh infinite loop
let l = 5;
while (l >= 0){
    console.log(l);
    l++
}

for (let i = 0; i < 5; i++){
    console.log(i);
}   // 0
    // 1
    // 2
    // 3
    // 4

for (let i = 1; i >= 0; i--){
    console.log(i);
}   // 1
    // 0

let nama = "parni";

// ada method yang namanya method length untuk tipe data string dan array
// method length mengembalikan angka, total huru yang ada pada string atau total element yang ada pada array

for (let i = 0; i < nama.length; i++){
    console.log(nama[i]);
}   // p
    // a
    // r
    // n
    // i

//  pada type data string atau array pada javascript, ada yang namanya indexing
//  index SUDAH PASTI berawal dari 0

console.log(nama[0] + nama[4]); //pi
console.log(nama[0] + nama[5]); //pundefined

// diberikan kasus untuk membalikan suatu kata, tanpa menggunakan methode reverse
let name = "agus"; //length 4, sedangkan index dari 0, a -> 0, g -> 1, u -> 2, s -> 3
let result = "";

for (let i = name.length - 1; i >= 0; i--){ //i = 4-1; 4-1 >= 0; i--
    result += name[i];                      //s -> su -> sug -> suga
}
console.log(result); //suga

// nested loop
for (let i = 0; i < 5; i++){            //parent loop mula-mula 0 kondisinya true, 0 < 5, maka akan menjalankan statement dalam loop parent.
    for (let j = 0; j < 5; j++){        //child loopnya dijalankan, j mula-mula 0 kondisi true, 0 < 5, maka akan menampilkan 0, terus j di increment 
        console.log(j);                 //j kemudian bernilai 1 kondisi true, 1 < 5, maka akan menampilkan 1, terus j di increment lagi
    }                                   //proses dilakukan terus menerus dan berulang, sampai j bernilai 5 kondisi false, lalu keluar dari child loop 
    console.log('');                    //kemudian menjalankan string kosong. Lalu i di increment, i bernilai 1 kondisinya true, 1 < 5, jalankan statement yang ada dalam loop parent lagi
}
console.log('selesai');

for (let i = 0; i < 5; i++){
    for (let j = 0; j <= i; j++){
        console.log(j);
    }
    console.log(''); 
}
console.log('selesai');

//looping akan sering bertemu dengan methode length
//looping membuat code jadi lebih pendek
//looping mrmbuat suatu proses menjadi dinamis