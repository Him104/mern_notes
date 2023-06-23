function sq_or_not(array1,array2) {

    if (array1.length !== array2.length) {

        return "array1 length is not equal to array2";
        
    }
    for (let index = 0; index < array1.length; index++) {
        const correctIndex = array2.indexOf(array1[index]**2)

        if (correctIndex ===-1) {

            return false;
            
        }
        
    }
    return true;
}

let array1 = [1,2,3,4];
let array2 = [1,4,9];

console.log(sq_or_not(array1,array2));


// let counter = "my name is captain jack sparrow";

// let output = counter.indexOf("captain");