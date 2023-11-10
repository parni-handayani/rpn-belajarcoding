function changeMe(arr) {
    let objData = {};
    for (let i = 0; i < arr.length; i++){
        let obj = {};
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        obj.age = arr[i][3];
        if (obj.age === undefined){
            obj.age = "Invalid Birth Year";
        } else {
            let year = new Date().getFullYear();
            obj.age = year - arr[i][3];
        }
        objData[arr[i][0] + " " + arr[i][1]] = obj; 
    }
    return objData;
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); 
// Christ Evans: { 
// firstName: 'Christ',
// lastName: 'Evans',
// gender: 'Male',
// age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { 
// firstName: 'Robert',
// lastName: 'Downey',
// gender: 'Male',
// age: 'Invalid Birth Year' }

console.log(changeMe([])); // ""