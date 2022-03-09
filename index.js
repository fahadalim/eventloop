const express = require("express")

const app = express()

app.get("",function(req,res){
    res.send("hello")
});

app.get("/books",function(req,res){
    res.send({
        book:"HP1",
        book1:"HP2",
        book2:"HP3",
        book3:"HP4"
    })
});

app.listen(5001,()=>{
    console.log("hello")
})
