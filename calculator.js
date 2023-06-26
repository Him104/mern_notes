import express from 'express';

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

    console.log(req.body);

num1 = Number(req.body.num1);
num2 = Number(req.body.num2);

var output = num1 + num2;

res.send("the result of the calculation " + output);
    
})

app.listen(8000, function(){
    console.log("server is running on port 8000");
})