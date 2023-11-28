function convert(number){
    let str = "", word = "";
    for (let i = 0; i < number.length; i+=2){
        str = number[i] + number[i+1];
        word += String.fromCharCode(str)
    }
    return word;
}

console.log(convert("65"),"A")
console.log(convert("656667"),"ABC")
console.log(convert("676584"),"CAT")
console.log(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE")