import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to homepage !!! </h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>About us </h1>");
})

app.post("/", function(req,res){
    res.send("welcome to the online calculator");
});

app.get("/freq",(req,res)=>{
    res.send("squared_frequency ical as squared");
})

app.get("/contact",(req,res)=>{
    res.send("<h1> contact me @ himanshu.chauhan@codepanda.in</h1>");
})

app.get("/gallery",(req,res)=>{
    res.send("<h1> find gallery images here !!! </h1>");
})


app.use((req,res)=>{
    res.status(404).send("<h1> page not found </h1>")
})


app.listen(8000, function(){

   
    console.log("server is up and running on port 8000");


})