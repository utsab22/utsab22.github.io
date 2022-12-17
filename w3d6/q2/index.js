const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
const bodyParser = require("body-parser");

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render('form');
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
  res.render('result',{
    fullname:fullname,
    age:age
  });
});
app.listen(3000);
