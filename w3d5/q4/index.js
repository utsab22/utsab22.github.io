const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/css", express.static(path.join(__dirname, "css")));

app.post("/result", (req, res) => {
  let fullname = req.body.fullname;
  let age = req.body.age;
  if (!fullname) {
    fullname = "Person";
  }
  if (!age) {
    age = -1;
  }
  res.redirect(`/output?fullname=${fullname}&age=${age}`);
});

app.get("/output", (req, res) => {
  let fullname = req.query.fullname;
  let age = req.query.age;
  res.send(`Welcome ${fullname}. You are ${age} years old.`);
});

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const css = hour >= 6 && hour < 18 ? "day" : "night";
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link href="/css/${css}.css" rel="stylesheet" />
      <title>q3</title>
    </head>
    <body>
      <form action="/result" method="post" target="_self">
        <label>Name<input type="text" name="fullname" /></label>
        <label>Age<input type="text" name="age" /></label>
        <input type="submit" value="Submit Query" />
      </form>
    </body>
  </html>`);
});

app.listen(3000);
