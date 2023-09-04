let angka = 1;

switch (angka){
    case '1':
        console.log ("anda memasukkan angka 1");
        break;
    case '2':
        console.log ("anda memasukkan angka 2");
        break;
    case '3':
        console.log ("anda memasukkan angka 3");
        break;
    default:
        console.log ("angka yang anda masukkan salah");
        break;
} // angka yang anda masukkan salah

// type data pada variabel angka (int) harus sama dengan type data pada case (string)
// didalam case hanya dapat memasukkan value/nilai, tidak dapat memasukkan logic operator

switch (angka){
    case 1:
        console.log ("anda memasukkan angka 1");
        break;
    case 2:
        console.log ("anda memasukkan angka 2");
        break;
    case 3:
        console.log ("anda memasukkan angka 3");
        break;
    default:
        console.log ("angka yang anda masukkan salah");
        break;
} // anda memasukkan angka 1

let item = "nasi";

switch (item) {
    case "nasi":
        console.log("makanan/minuman sehat");
    case "daging":
        console.log("makanan/minuman sehat");
        break;
    case "susu":
        console.log("makanan/minuman sehat");
        break;
    case "hamburger":
        console.log("makanan/minuman tidak sehat");
        break;
    case "softdrink":
        console.log("makanan/minuman tidak sehat");
        break;
    default:
        console.log("anda memasukkan nama makanan/minuman yang salah");
        break; 
}   // makanan/minuman sehat
    // makanan/minuman sehat

// dalam suatu case tidak ada break maka tidak keluar dari switchnya, dia akan menjalankan case selanjutnya, kemudian jika bertemu break di case selanjutnya maka baru dapat keluar dari switch

let item2 = "daging"

switch (item2) {
    case "nasi":
    case "daging":
    case "susu":
        console.log("makanan/minuman sehat");
        break;
    case "hamburger":
    case "softdrink":
        console.log("makanan/minuman tidak sehat");
        break;
    default:
        console.log("anda memasukkan nama makanan/minuman yang salah");
        break; 
} // makanan/minuman sehat




