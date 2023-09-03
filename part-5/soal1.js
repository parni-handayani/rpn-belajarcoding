/*
Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. 
Variabel peran harus memiliki isi data, bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.
ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!
halo Tabib ${nama}, kamu akan membantu temanmu yang terluka
halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!
tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
tips belajar penggunaan `` (backtick) pada javascript agar mudah dalam memasukan variabel ke dalam string
tapi tanpa backtick juga ga masalah sih yg penting output sesuai

algoritma
isi algoritma mu disini (AWAS KALO GA DI ISI!!!!), me: siyap sepuh (fire emot)

1. deklarasi dan inisialisasi variabel nama dan peran
2. melakukan pengecekan jika var nama kosong maka tampilkan "nama wajib diisi"
3. melakukan pengecekan jika var peran kosong maka tampilkan "Pilih Peranmu untuk memulai game", 
dan apabila var peran tidak kosong yaitu:
jika Ksatria maka tampilkan halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!
jika Tabib maka tampilkan halo Tabib ${nama}, kamu akan membantu temanmu yang terluka
jika Penyihir maka halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!
jika selain 3 itu perannya maka tampilkan kamu jadi bot aja ya

code disini gunakan console.log untuk outputnya
*/

let nama = "nik", peran = "kameramen";

if (nama === ""){
    console.log("nama wajib diisi");
}

if (peran === ""){
    console.log("pilih peranmu untuk memulai game");
} else {
    if (peran === "ksatria"){
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "tabib") {
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    } else if (peran === "penyihir") {
        console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`halo ${nama}, kamu jadi bot aja ya`);
    }
} // halo nik, kamu jadi bot aja ya

