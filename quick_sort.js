function quick(arr) {
    if (arr.length<2) {
        return arr;
        
    }

let pivot = arr[arr.length-1]

let left = [];
let right = [];

    for (let index = 0; index < arr.length-1; index++) {
        if (arr[index]<pivot) {
            left.push(arr[index])
            
        }
        else{
            right.push(arr[index])
        }
        
    }

    return [...quick(left),pivot,...quick(right)]
    
}

let arr = [23,45,21,56,12];

console.log(quick(arr));