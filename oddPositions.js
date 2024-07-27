function printElementAtOddPosition(arr){
    for (let i = 0; i < arr.length; i=i+2) {
        console.log(arr[i]);
        
    }
}
let array = [1,6,3,9,4,2,6,3,9];
console.log("Elements at odd position:");
printElementAtOddPosition(array);

let arr = [1,2,3,4,5,6,7,8];
let evenP =[];
for (let index = 1; index < array.length; index=index+2) {
    evenP.push(arr[index]);
    
}
console.log(evenP);