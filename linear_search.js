function linear(arr, key) {

    for (let index = 0; index < arr.length; index++) {
        if (arr[index]===key) {

            return index;
            
        }
        
    }
    return null;
    
}

let arr = [5,4,6,8,9,1,2,0,7];

console.log(linear(arr,3));