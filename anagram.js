function isAnagram(string1,string2) {

    if (string1.length !== string2.length) {
        return ("length doesn't match, it can't be anagaram")
        
    }

    let letter1 = string1.split('').sort().join('');
    let letter2 = string2.split('').sort().join('');
    
    console.log(letter1);
    console.log(letter2);
    if (letter1=== letter2) {
        return "yes, It is an anagram";
        
    }
    else {
    return "No, It is not an anagram !!!"
    }

    
}

let string1 = "himanshu";
let string2 = "ihamnhsuu"

console.log(isAnagram(string1,string2));