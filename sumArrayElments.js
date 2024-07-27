function calculateSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        
    }
    return sum
}
let array = [1,2,3,4,5,6];
console.log("Sum of all the items in the array:", calculateSum(array));

//-----------------------------------------------------

function sumOf(array1){
    let sum = 0;
    for (let index = 0; index < array1.length; index++) {
        sum = sum + array1[index]
        
    }
    console.log(sum);
}
let ar = [1,2,3,4,5,6,7,8,9,10];
sumOf(ar);