function bin(arr,key) {

    let start = 0;
    let end = arr.length-1;

    while (start<=end) {

        let mid = (start+end)/2;

        if(key==arr[mid]) {
         return mid;            
        }
        else if(key<arr[mid])
        {
            end = mid-1;
        }
else{
    start = mid+1;
}
        
        
    }
    return null;
    
}

let arr = [1,2,3,4,5,6,7,8,9];

console.log(bin(arr,5));