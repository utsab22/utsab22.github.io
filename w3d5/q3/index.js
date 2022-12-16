const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/result", (req, res) => {
  let fullname = req.body.fullname;
  let age = req.body.age;
  if (!fullname) {
    fullname = "Person";
  }
  if (!age) {
    age = -1;
  }
  res.send(`Welcome ${name}. You are ${age} years old.`);
});
app.get("/", (req, res) => {
  const date = new Date();
  // const hour = date.getHours();
  const hour = 17;
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
