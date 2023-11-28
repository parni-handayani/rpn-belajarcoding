function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function oddNotPrime(n) {
  let newArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0 && !isPrime(i)) {
      newArr.push(i);
    }
  }

  // console.log(newArr);
  return newArr.length;
}
  console.log(oddNotPrime(5),1);
  console.log(oddNotPrime(10),2);
  console.log(oddNotPrime(99),26);
  console.log(oddNotPrime(9),2);
  console.log(oddNotPrime(1),1);