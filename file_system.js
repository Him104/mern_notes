const fs = require("fs");
fs.writeFile("message.txt", "hello from himanshu !!!", (err)=>{
if (err) throw err;
console.log("the file has been saved !!!");
})

fs.readFile("./linear_search.js", "utf-8", (err,data) => {
    if (err) throw err;

    console.log(data);

})