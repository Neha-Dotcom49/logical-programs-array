function printEvenOddNumbers(arr){
    let oddNumbers=[];
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===0) {
        evenNumbers.push(arr[i]);  
    }
    else{
    oddNumbers.push(arr[i])
}
    }
    console.log("Even Numbers:",evenNumbers);
    console.log("Odd Numbers:",oddNumbers);
}
let array =[4,6,2,5,8,1,9,3,7]
console.log("Original array:",array);
console.log("Even and Odd numbers of an array:");
printEvenOddNumbers(array);