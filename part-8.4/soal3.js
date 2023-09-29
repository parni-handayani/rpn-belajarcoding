// Algoritma
// membuat function dengan parameter type data string
// melakukan akses/pengecekan string, dengan menggunakan loop
// jika terdapat string kosong maka counter akan bertambah
// kembalikan/return counter + 1

function hitungJumlahKata(kalimat) {
    let count = 0;
    for (let i = 0; i < kalimat.length; i++){
        if (kalimat[i] == " "){
            count++
            console.log(`hasil counter ${count}`);
        }
    }
    return count + 1;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5