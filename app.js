const express = require('express');           // use express package in index.js

const app = express();

app.use(express.static("public"));

app.get("/", (request,response)=>{
    response.sendFile(__dirname + "/views/Home.html")
})

app.listen(3001)

app.get("/Marquez", (request,response)=>{
    response.sendFile(__dirname + "/views/About.html")
})

app.get("/Works", (request,response)=>{
    response.sendFile(__dirname + "/views/Works.html")
})