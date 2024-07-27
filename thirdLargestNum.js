function findThirdLargest(arr){
    if (arr.length<3) {
        return "Array doen't have enough element";
    }
    arr.sort(function(a,b){
        return b-a;
    });
    return arr[2];
}
let array = [5,4,6,8,3,9,1,4];
console.log("Third Largest number in the array:",findThirdLargest(array));