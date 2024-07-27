function findSecondLargest(arr){
    if (arr.length<2) {
        return "Array doesn't have enogh elements";
    }
    arr.sort(function(a,b){
        return b-a;
    })
    return arr[1];
}
let array = [5,7,1,8,4,9,3,2];
console.log("Second largest number in the array",findSecondLargest(array));