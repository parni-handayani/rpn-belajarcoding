function basicOp(operation, value1, value2){ 
    let sum;

    switch (operation) {
        case '+':
            sum = value1 + value2;
            break;
        case '-':
            sum = value1 - value2;
            break;
        case '*':
            sum = value1 * value2;
            break;
        case '/':
            sum = value1 / value2;
            break;
        default:
            console.log("Invalid operation");
            return undefined;
    }

    return sum;
}

console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);