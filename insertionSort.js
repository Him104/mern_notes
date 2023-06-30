function insertion(arr) {
    for (let index =1; index < arr.length; index++) {
        for (let j = index; j>=0; j--) {
            if (arr[j]<arr[j-1]) {

                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;

                console.log(temp,arr[j],arr[j-1]);
                
            }
        
        }
        
    }

    return arr;
    
}

let arr = [2,4,6,73,2,1,3,5,67,7];

console.log(insertion(arr));