const express = require("express");
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');
var word1 = faker.hacker.adjective();
var word2 = faker.hacker.noun();
var word3 = faker.hacker.noun();
var word4 = faker.hacker.verb();
var word5 = faker.hacker.ingverb();
var word6 = faker.hacker.noun();
var word7 = faker.hacker.verb();

//routes
app.get ("/", function (req, res) {
    res.render("index.ejs", {fakeword1:word1}, {fakeword2:word2}, 
    {fakeword3:word3}, {fakeword4:word4}, {fakeword5:word5}, 
    {fakeword6:word6}, {fakeword7:word7});
})

app.get("/companies", function(req, res){
    res.render("companies.html");
});

app.get("/future", function(req, res){
    res.render("future.html");
});

app.get("/how", function(req, res){
    res.render("how.html");
});

//CLOUD 9 CONFIG
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});

/*
//HEROKU CONFIG
//listner
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});
*/
