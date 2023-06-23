import express from 'express';

const app = express();

app.get("/", function (req, res) {

    res.sendFile(__dirname,"/index2.html")
    
})

app.listen(8000, function(){
    console.log("server is running on port 8000");
})