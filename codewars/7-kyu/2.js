function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
      return true;
    } else {
      return false;
    }
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(2000));
console.log(isLeapYear(2015)); 
console.log(isLeapYear(2100)); 

// BEST PRACTICE
/*
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
*/