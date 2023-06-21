// Write a program a function will be called sumZero which accepts a sorted array of integers and sum will be equivalent to zero.


function sumZero(arr) {

    for (let index = 0; index < arr.length; index++) {
        for (let j = index+1; j < arr.length; j++) {

            if (arr[index]+arr[j]===0) {

                return [arr[index],arr[j]];
                
            }
            
            
        }
        
    }
    
}

let arr = [-6,-4,-3,-2,0,1,2,4,6];

console.log(sumZero(arr))