function fizzbuzz(n){
    let newArr = []
    for (let i = 1; i <= n; i++){
        let num = i;
        if (num % 3 === 0 && num % 5 === 0){
            num = "FizzBuzz";           
        } else if (num % 3 === 0){
            num = "Fizz";
        } else if (num % 5 === 0){
            num = "Buzz";
        }
        newArr.push(num);
    }
    return newArr;
  }

console.log(fizzbuzz(15));