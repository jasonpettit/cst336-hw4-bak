const express = require("express");
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');
var word1 = faker.hacker.adjective();

//routes
app.get ("/", function (req, res) {
    res.render("index.ejs", {fakeword1:word1});
})

app.get("/companies", function(req, res){
    res.render("companies.ejs", {fakeword1:word1});
});

app.get("/future", function(req, res){
    res.render("future.ejs", {fakeword1:word1});
});

app.get("/how", function(req, res){
    res.render("how.ejs", {fakeword1:word1});
});

/*
//CLOUD 9 CONFIG
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});
*/

//HEROKU CONFIG
//listner
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});

