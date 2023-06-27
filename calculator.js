const express = require ('express') ;
const bodyParser = require ('body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "index3.html");
});

app.post("/", (req,res)=>{

   let  num1 = Number(req.body.n1);
   let num2 = Number(req.body.n2);
let result = num1 + num2;

console.log(result);

res.send("the result of the calculation "+ result);

});

app.listen(4000, function(){
    console.log("server is running on port 4000");
}); 