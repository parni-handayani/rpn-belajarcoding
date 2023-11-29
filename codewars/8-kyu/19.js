function feast(beast, dish) {
    let letterFrontBeast = beast[0], letterEndBeast = beast[beast.length-1];
    let letterFrontDish = dish[0], letterEndDish = dish[dish.length-1];
    if (letterFrontBeast === letterFrontDish && letterEndBeast === letterEndDish){
        return true;
    }
    return false;
}

console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)