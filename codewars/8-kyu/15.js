function bigToSmall(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      newArr = newArr.concat(arr[i]);
      newArr.sort((a,b)=>b-a);
    }
    let str = newArr.join(">");
    return str;
}

console.log(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
console.log(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
console.log(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");