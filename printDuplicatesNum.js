console.log(`method 1`);
function findDuplicates(array){
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if (array[i]===array[j]&& !duplicates.includes(array[i])) {
           duplicates.push(array[i]) ;
        }
        
    }
        
    }
    return duplicates;
}
const numbers = [2,4,8,5,6,3,2,4,6,6];
const duplicatesNumbers = findDuplicates(numbers);
console.log("Duplicate numbers:",duplicatesNumbers);


console.log(`method 2`);
function findDuplicatesOptimized(array){
    const duplicates = [];
    const frequencyMap = {};
    for (let i = 0; i < array.length; i++) {
        const elements = array[i];
        if (frequencyMap[elements]) {
            if (!duplicates.includes(elements)) {
                duplicates.push(elements);
                
            }
            
        }else{
            frequencyMap[elements] = true;
        }
    }
    return duplicates
}
const number =[2,4,8,5,6,3,2,4,6,6];
const duplicatesNumbers1 = findDuplicatesOptimized(numbers);
console.log("Duplicate Number:",duplicatesNumbers1);

console.log(`-------------------------------`);
console.log(`method 3`);
function printDuplicates(arr){
    let elementCount = {};
    let duplicates=[];
    for (let i = 0; i < array.length; i++) {
        let element = arr[i];
        if (elementCount[element]) {
            elementCount[element]++;
        }  else{
            elementCount[element]= 1;
        }      
    }
    for (let element in elementCount) {
    if (elementCount[element]>1) {
        duplicates.push(element);
    }
        
    }
    if (duplicates.length>0) {
        console.log("Duplicates elements:",duplicates);
    }else{
        console.log("No Duplicate element found");
    }
}
let array = [2,4,8,5,6,3,2,4,6,6];
printDuplicates(array);