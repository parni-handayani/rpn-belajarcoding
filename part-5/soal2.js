/*
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

let hari = 21; let bulan = 1; let tahun = 1945;

Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

tips gunakan keyword ini di google "conditional switch case javascript"
dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

Algoritma 
1. membuat variabel input, misal: let hari = 21, bulan = 1, tahun = 1945
2. melakukan pengecekan var bulan, 
    jika nilainya 1 maka nilai var bulan akan berubah menjadi Januari s/d
    jika nilainya 12 maka nilai var bulan akan berubah menjadi Desember
3. jika nilai yang dimasukkan tidak sama dengan 1 s/d 12, 
    tampilkan peringatan untuk memasukkan nilai bulan dari 1 s/d 12 
4. menampilkan tanggal 21 Januari 1945

code switch case kamu disini
*/

let hari = 21, bulan = 1, tahun = 1945;

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei"
        break;
    case 6:
        bulan = "Juni"
        break;
    case 7:
        bulan = "Juli"
        break;
    case 8:
        bulan = "Agustus"
        break;
    case 9:
        bulan = "September"
        break;
    case 10:
        bulan = "Oktober"
        break;
    case 11:
        bulan = "November"
        break;
    case 12:
        bulan = "Desember"
        break;
    default:
        console.log ("masukkan nilai bulan dari 1 s/d 12!");
        break;
}

console.log (hari + " " + bulan + " " + tahun); // 21 Januari 1945
// console.log (`${hari} ${bulan} ${tahun}`); //21 Januari 1945
