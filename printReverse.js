console.log(`-------------------------------------------`);
function printArrayElementsReverseWhile(arr){
    let i = arr.length-1;

    while (i >=0) {
        console.log(arr[i]);
        i--;
    }
}
let array1 = [1,2,3,4,5];
console.log("Using While Loop");
printArrayElementsReverseWhile(array1)


console.log(`----------------------------------------`);
function printArrayElementsReverseDoWhile(arr){
    let i = arr.length-1;
    if (i<0) return;
    do{
        console.log(arr[i]);
        i--; 
    }while(i>=0);
    }
    let array2 = [1,2,3,4,5];
    console.log("Using do ...While Loop:");
    printArrayElementsReverseDoWhile(array2);


console.log(`--------------------------`);
function printArrayElementsReverseFor(arr){
    for (let i = arr.length-1; i >=0; i--) {
        console.log(arr[i]);
        
    }
}
let array = [1,2,3,4,5];
console.log(`Using For Loop`);
printArrayElementsReverseFor(array);


console.log(`----------------------`);
function printArrayElementsReverseForEach(arr){
    arr.slice().reverse().forEach(function(element){
        console.log(element);
    });
}
let array3 = [1,2,3,4,5];
console.log("Using Foreach Loop:");
printArrayElementsReverseForEach(array3)













