
    let arr = [0,0,1,1,2,2,3,5,6,7,9,9,87];
    let output = [];


    let count = 0;

    let start_value = false;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < output.length; j++) {
        if (arr[i]==output[j]) {

            start_value = true;
            
        }
    }
        count++

        if (count == 1 && start_value == false) {
            output.push(arr[i]);
            
        }
        start_value = false;
        count =0;
        
    }

console.log(output);




