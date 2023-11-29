var isEven = function (n) { //if n is even return true, otherwise, return false
    if((n & 1) === 0){
        return true;
    }
    return false;
  }

  console.log(isEven(0),true)
  console.log(isEven(2),true)
  console.log(isEven(3),false)
  console.log(isEven(14),true)
  console.log(isEven(15),false)
  console.log(isEven(26),true)
  console.log(isEven(27),false)