function cariMedian(arr) {
    let hasil = 0;
    for (let i = 0; i < arr.length-1; i++){
        for (let j = 0 + i; j < arr.length; j++){
            if (arr[i] > arr[j]){
                let sementara = arr[i];
                arr[i] = arr[j];
                arr[j] = sementara;
            }
        }
    }
    for (let i = 0; i < arr.length; i++){
        let temp = arr.length/2;
        if (arr.length % 2 !== 0){
            hasil = arr[Math.floor(temp)];
        } else {
            hasil = (arr[temp-1] + arr[temp])/2;
        }
    }
    return hasil;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
console.log(cariMedian([3, 4, 5, 5, 6, 6, 6])); // 5