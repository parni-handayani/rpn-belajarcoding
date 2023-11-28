function squareSum(numbers){
    if (numbers.length === 0){
      return 0;
    }
    let hasil = 0;
    for (let i = 0; i < numbers.length; i++){
      hasil += numbers[i] * numbers[i]
    }
    return hasil; 
}

console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);