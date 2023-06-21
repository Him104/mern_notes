let person = {
    name: "himanshu",
    age:27,
    doIwork :true,
    likes : ["travelling","exploring","working"]
}


console.log(person.age); 


function people(name,age,doIwork,likes) {

    this.name = name;
    this.age = age;
    this.doIwork = doIwork;
    this.likes = likes;
    this.xyz = function () {
        console.log("xyz ran");
        
    }
}


let people1 = new people ("neha",24,true,["reading","cycling","riding","swimming"])

console.log(people1);

people1.xyz();