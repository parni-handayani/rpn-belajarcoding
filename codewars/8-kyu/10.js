/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. 
Also, the final outcome must be sorted and not have any duplicate.
*/

function mergeArrays(a, b) {
    for (let i = 0; i < b.length; i++){
        if (!a.includes(b[i])){
            a.push(b[i]);
        }
    }
    for (let j = 0; j < a.length; j++){
        for (let k = 0 + j; k < a.length; k++){
            if (a[j] > a[k]){
                let temp = a[j];
                a[j] = a[k];
                a[k] = temp;
            }
        }
    }
    let panjang = a.length;
    for (let l = 0; l < panjang; l++){
        if (a[l] === a[l+1]){
            a.splice(l, 1);
            panjang--;
            l--;
        }
    }
    return a;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])); // [2, 4, 6, 8]


// BEST PRACTICE
/*
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}

 https://www.dumetschool.com/blog/cara-menghilangkan-nilai-yang-sama-dalam-array-javascript
*/