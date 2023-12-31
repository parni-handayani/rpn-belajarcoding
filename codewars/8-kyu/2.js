/*
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

function sumMul(n,m){
    if (m <= n){
        return 'INVALID';
    }
    let temp = 0;
    for (let i = n; i < m; i++){
        if (i % n === 0){
            temp += i;
        }
    }
    return temp;
}

console.log(sumMul(2, 9))
console.log(sumMul(3, 13))
console.log(sumMul(4, 123))
console.log(sumMul(4, -7))

// Best Practice
/* function sumMul(n,m){
    if (n >= m) return "INVALID";
  
  var sum = 0;
    for (var i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
  }
*/