function maxSubarraySum(arr,n) {

    if (n>arr.length) {
return null;        
    }

    let max = 0;

    for (let index = 0; index < arr.length; index++) {
        let temp = 0;
        for (let j = index; j < index+n; j++) {
        temp += arr[j];
            
        }
        if (temp>max) {
            max = temp;
            
        }
        
    }

    return max;


    
}

let arr = [1,4,5,2,3,8,1,7,6];

let n =3;

console.log(maxSubarraySum(arr,n))