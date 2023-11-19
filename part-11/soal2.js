/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    let temp = str.split(",")
    if (str === ''){
        return [];
    }
    let arrRanged = [], arrMelee = [], arrHero = [];
        for (let i = 0; i < temp.length; i++){
        let temp2 = temp[i].split("-")
        if (temp2[1] === "Ranged"){
            arrRanged.push(temp2[0]);
        } else {
            arrMelee.push(temp2[0]);
        }
    }
    arrHero.push(arrRanged);
    arrHero.push(arrMelee);
    return arrHero;
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

// uji coba yang ke-1
function meleeRangedGrouping (str) {
    let temp = str.split (",")
    if (str === ''){
        return [];
    }
    let arrRanged = [], arrMelee = [], arrHero = [];
    for (let i = 0; i < temp.length; i++){
        for (let j = 0; j < temp[i].length; j++){
            if (temp[i][j] === "-" && temp[i][j+1] === "R"){
                let namaHeroRanged = temp[i].split("-")
                arrRanged.push(namaHeroRanged[0]);
            }
            if (temp[i][j] === "-" && temp[i][j+1] === "M"){
                let namaHeroMelee = temp[i].split("-")
                arrMelee.push(namaHeroMelee[0]);
            }
        }
    }
    arrHero.push(arrRanged);
    arrHero.push(arrMelee);
    return arrHero;
}