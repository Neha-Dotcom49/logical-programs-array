function removeDuplicate(arr){
    let uniqueArray=[];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i])===-1) {
            //If uniqueArray.indexOf(arr[i]) is -1, it means arr[i] is not found in uniqueArray.
            uniqueArray.push(arr[i]);
        }
        
    }
    return uniqueArray
}
let array = [4,6,7,3,4,9,5,3,8,2,6];
console.log("Originl array:",array);
let uniqueArray = removeDuplicate(array);
console.log("Array after removing duplicates:",uniqueArray);


//-------------------------------------------------------------------
let arr =[1,2,3,4,33,3,3,4,4];
let newArr = [...new Set(arr)];
console.log(newArr);




