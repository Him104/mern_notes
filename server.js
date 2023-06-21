import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to homepage !!! </h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>About us </h1>");
})

app.use((req,res)=>{
    res.status(503).send("<h1> page not found </h1>")
})


app.listen(8000, function(){

    console.log('====================================');
    console.log("server is up and running on port 8000");
    console.log('====================================');

    console.warn("server is running")
});