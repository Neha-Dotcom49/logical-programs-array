console.log(`method 1`);
let array1 = [1,2,3,4,5];
let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
    newArray1.push(array1[i])
    
}
console.log(newArray1);

console.log(`method 2`);
let array2 = [1,2,3,4,5];
let newArray2 = array2.slice();
console.log(newArray2);

console.log(`method 3`);
let array3 = [1,2,3,4,5];
let newArray3 = [...array3]
console.log(newArray3);