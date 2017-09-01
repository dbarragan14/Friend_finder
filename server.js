var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = 3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/public", express.static(__dirname + "/app/public"));
var q = require("./questions.js");
var questions = q.questions;
var user = require("./app/data/friends.js");
var friends = friends;
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));

});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));

});

app.get("/questions", function(req, res){
	res.json(questions);
});
app.get("/friends", function(req, res){
	res.json(friends);
});
app.post("/user/new", function(req, res) {
    var newUser = req.body;
    console.log(newUser);
    friends.push(newUser);
    res.json(newUser);
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
