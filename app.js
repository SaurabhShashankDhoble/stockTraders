const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.get("/",function(req, res){
  res.render("index");
});

app.get("/freeContent",function(req, res){
  res.render("free");
});
app.get("/premiumContent",function(req, res){
  res.render("premium");
});

app.listen(process.env.PORT || 3000,function(req,res){
  console.log("server is running...");
});
