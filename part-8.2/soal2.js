let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(data) {
    data.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(data);

    let tanggal = data[3].split("/");
    let bulan = tanggal[1];
    switch(tanggal[1]){
        case "01":
            bulan = "Januari";
            break;
        case "02":
            bulan = "Februari";
            break;
        case "03":
            bulan = "Maret";
            break;
        case "04":
            bulan = "April";
            break;
        case "05":
            bulan = "Mei";
            break;
        case "06":
            bulan = "Juni";
            break;
        case "07":
            bulan = "Juli";
            break;
        case "08":
            bulan = "Agustus";
            break;
        case "09":
            bulan = "September";
            break;
        case "10":
            bulan = "Oktober";
            break;
        case "11":
            bulan = "November";
            break;
        case "12":
            bulan = "Desember";
            break;
    }
    console.log(bulan);

    // if (tanggal[1] == "05"){
    //     console.log("Mei");
    // }

    // console.log(tanggal);
    console.log(tanggal[2],tanggal[0],tanggal[1]);

    console.log(tanggal.join("-"));
    // let tanggal3 = `${tanggal[0]}-${tanggal[1]}-${tanggal[2]}`;
    // console.log(tanggal3);

    let nama = data[1];
    console.log(nama.slice(0,15));
    // if (data[2].length > 15){
    //     console.log("Roman Alamsyah ")
    // }
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */