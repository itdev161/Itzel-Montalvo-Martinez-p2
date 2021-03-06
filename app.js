const express = require("express");
let app = new express();

// GET, POST, ...
app.get("/", function(req, res){
    res.send("Hello, from Itzel-MM.")
});

app.get("/about", function(req, res){
    res.send("About this web app.");
});

app.get("/contact", function(req, res){
    res.send("@sunrisemar1");
});

app.get("*", function(req, res){
    res.send("Bud, you're lost!");
});

app.all("*", function(req, res) {
    res.send("What are you trying to do?");
});

let port = 12345;
app.listen(12345, function(){
    console.log("Server started listening at localhost:" + port);
});