function countPositivesSumNegatives(input) {
    let newArr = [], sum = 0, resArr = [];
    if (input === null || input.length === 0){
      return [];
    }
    for (let i = 0; i < input.length; i++){
      if (input[i] > 0){
        newArr.push(input[i]);
      } else if (input[i] < 0){
        sum += input[i];
      }
    }
    resArr.push(newArr.length);
    resArr.push(sum);
    return resArr;
}

console.log(countPositivesSumNegatives(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10, -65]))
console.log(countPositivesSumNegatives([]))