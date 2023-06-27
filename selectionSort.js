function selection(params) {
    if (arr.length===0) {
        return null;
        
    }

    for (let index = 0; index < arr.length; index++) {
        let low = index;
        for (let j = index+1; j < arr.length; j++) {
            console.log(index,j);

            if (arr[low]>arr[j]) {
               low = j 
            }
            
        }

        let temp = arr[index]
        arr[index] =  arr[low]
        arr[low] = temp;
        
    }
    return arr;
}

let arr = [8,9,4,3,6];

console.log(selection(arr));