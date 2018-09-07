const express = require("express");
const bodyParser = require('body-parser');

var app = express();

var processEnv = process.env.PORT | 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// console.log(__dirname + "/../dist/day4-formsv2");
// app.use(express.static(__dirname + "/../dist/day4-forms"))

app.post("/register", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
})

app.listen(processEnv,()=>{
    console.log("Listening at 3000");
})