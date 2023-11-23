/*
Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

  [[1, 0], [0, 1]] should return 1
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45
*/

function mainDiagonalProduct(mat){
    let result = 1;
    for (let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat[i].length; j++){
            if (i === j){
                result *= mat[i][j];
            }
        }
    }
    return result;
}

console.log(mainDiagonalProduct([[1, 0], [0, 1]])) // 1
console.log(mainDiagonalProduct([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // 45

// BEST PRACTICE
/*
function mainDiagonalProduct(mat){
  return mat.reduce(function(n, v, i){ return n * v[i] }, 1);
}

function mainDiagonalProduct(mat){
var res = 1; 
 for (var i = 0; i<mat.length; i++){
 res *= mat[i][i]
 }
 return res
}
*/