const express = require("express");
const bodyParser = require('body-parser');

var app = express();

var processEnv = process.env.PORT | 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", (req, res)=>{
    console.log(req.body);
    res.status(200);
    res.json({
        'status': 'SUCCESS'});
});

app.listen(processEnv,()=>{
    console.log("Listening at 3000");
});