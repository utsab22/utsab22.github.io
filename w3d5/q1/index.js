const express = require("express");
const app = express();
app.get("/", (req, res) => {
  let fullname = req.query.fullname;
  let age = req.query.age;
  if (!fullname) {
    fullname = "Person";
  }
  if (!age) {
    age = -1;
  }
  res.send(`Welcome ${fullname}. You are ${age} years old.`);
});
app.listen(3000);
