function arrayPlusArray(arr1, arr2) {
    let result = 0;
    let arr = arr1.concat(arr2);
    for (let i = 0; i < arr.length; i++){
      result += arr[i]
    }
    return result; 
  }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);