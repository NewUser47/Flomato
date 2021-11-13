const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FlomatoDB", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.listen(port, function() {
    console.log(`The server has started successfully on port ${port}`)
})