let array =[1,2,2,3,3,3,4,4,4,4];
let frequency = {};
for (let i = 0; i < array.length; i++) {
    let elements = array[i];
    if (frequency[elements]) {
        frequency[elements]++;

    }else{
        frequency[elements] = 1;
    }
    
}
console.log(frequency);