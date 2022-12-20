const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'abcd',
}))

app.use(express.urlencoded({ extended: false }));
app.use("/css", express.static(path.join(__dirname, "css")));

app.post("/result", (req, res) => {
  let fullname = req.body.fullname;
  let age = req.body.age;
  console.log(fullname + age);
  if (!fullname) {
    fullname = "Person";
  }
  if (!age) {
    age = -1;
  }
  req.session.fullname = fullname;
  req.session.age = age;
  console.log(req.session);
  res.redirect(`/output`);
});

app.get("/output", (req, res) => {
  console.log(req.session);
  let fullname = req.session.fullname;
  let age = req.session.age;
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
