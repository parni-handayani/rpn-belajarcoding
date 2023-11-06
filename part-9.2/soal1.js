//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima

/*Algoritma 
1. angka prima merupakan bilangan asli yang merupakan faktor dari 1 dan angka itu sendiri
2. mencari tahu faktor lain pada angka
3. jika iya kembalikan false
4. jika tidak kembalikan true
 */
function angkaPrima(angka) {
    for (let i = 2; i < angka; i++){
        if (angka % i === 0){
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false