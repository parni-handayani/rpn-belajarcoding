function between(a, b) {
    let newArr = []
    for (let i = a; i <= b; i++){
      newArr.push(i);
    }
    return newArr;
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);