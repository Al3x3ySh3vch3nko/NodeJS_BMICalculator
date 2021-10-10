const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(_req, res)
{
res.sendFile(__dirname + "/index.html")
}); 

app.post("/", function(_req, res)
{
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;

res.send("The result of calculation is" + result);

});

app.get("/bmiCalculator", function(req, res)
{
res.sendFile(__dirname + "/bmiCalculator.html");
}); 

app.post("/bmiCalculator", function(req, res)
{
var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);
});

// Calculator Core
function bmiCalculator(weight, height)
{
var calc = weight / (height * 2);
return calc;
}

var bmi = bmiCalculator(100, 1.6);

app.get("/bmiCalculator", function(req, res){
res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", function(req, res)
{
    var weight = parseFloat(req.body.weight);
}
)

app.listen(3000, function() 
{
console.log('Server started on port 3000');
});
