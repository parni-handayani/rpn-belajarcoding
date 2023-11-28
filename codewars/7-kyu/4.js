/*
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5
*/

function sortByValueAndIndex(array){
    let result = 0, newArr = [], result2 = 0, newArr2 = [];
    for (let i = 0; i < array.length; i++){
        result = array[i]*(i+1);
        newArr.push(result);
    }

    for (let j = 0; j < newArr.length; j++){
        for (let k = 1 + j; k < newArr.length; k++){
            if (newArr[k] < newArr[j]){
                let temp = newArr[k];
                newArr[k] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    console.log(newArr);

    for (let l = 0; l < newArr.length; l++){
       for (let m = 0; m < array.length; m++){
            if (l === m){
                result2 = newArr[l] / (m+1);
                newArr2.push(result2); 
            }
       }
    }

    return newArr2;
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5])) // [2, 3, 4, 23, 5]