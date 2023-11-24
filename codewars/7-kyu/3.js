/*
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y
*/


function isDivisible(n, ...dividers){
  return dividers.every(divider => n % divider == 0);
}
  
console.log(isDivisible(3,3,4));
console.log(isDivisible(12,3,4));
console.log(isDivisible(8,3,4,2,5));

/*
function isDivisible(n) {
  for (var i = 1; i < arguments.length; i++) {
    if (n % arguments[i]) { return false };
  }
  return true;
}
*/