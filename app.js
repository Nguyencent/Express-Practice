var express = require("express");

var app = express();


app.get("/", function(req, res){
  console.log("got it");
  res.render("index.ejs");
});

app.set("view engine", "ejs")
app.set("views", "./views")

app.listen(3000, function(){
  console.log("anything you want")
});


