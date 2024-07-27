console.log(`Using For Loop`);
function printArrayElements(arr){
    for (let i = 0; i < array.length; i++) {
        console.log(arr[i]);     
    }
}
let array = [1,2,3,4,5];
printArrayElements(array);


console.log(`-------------------------------------------`);
function printArrayElementsWhile(arr){
    let i = 0;
    while (i<arr.length) {
        console.log(arr[i]);
        i++;
    }
}
let array2 = [1,2,3,4,5];
console.log("Using While Loop");
printArrayElementsWhile(array2)

console.log(`----------------------------------------------`);
function printArrayElementsDoWhile(arr){
let i = 0;
do{
    console.log(arr[i]);
    i++;

}while(i<arr.length);
}
let array3 = [1,2,3,4,5];
console.log("Using do ...While Loop:");
printArrayElementsDoWhile(array3);


console.log(`---------------------------`);
function printArrayElementsForEach(arr){
    arr.forEach(function (element){
        console.log(element);
    });
}
let array4= [1,2,3,4,5];
console.log("Using ForEach Loop:");
printArrayElementsForEach(array4);




//----------------------------------------------------
let array33 = [1, 2, 3, 4, 5];

for (let i = 0; i < array33.length; i++) {
    console.log(array33[i]);
}


console.log(`using `);
let ar = [3,3,4,5,5];
let i = 0;
    do{
        console.log(ar[i]);
        i++;
    }while(i<ar.length);



   