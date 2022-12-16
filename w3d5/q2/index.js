const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<form action="/result" method="post" target="_self">
    <label>Name<input type="text" name="fullname" /></label>
    <label>Age<input type="text" name="age" /></label>
    <input type="submit" value="Submit Query" />
  </form>`);
});

app.post("/result", (req, res) => {
  let fullname = req.body.fullname;
  let age = req.body.age;
  if (!fullname) {
    fullname = "Person";
  }
  if (!age) {
    age = -1;
  }
  res.send(`Welcome ${fullname}. You are ${age} years old.`);
});
app.listen(3000);
