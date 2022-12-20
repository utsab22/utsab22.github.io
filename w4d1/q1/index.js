const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/stylesheet', express.static(path.join(__dirname,"css")));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"view"));


app.get('/',(req,res)=>{
  res.render("form",{cookies:req.cookies});
});


app.post('/submit',(req, res)=>{
  let key = req.body.key;
  let value = req.body.val;
  if(key && value){
    res.cookie(key,value);
    console.log("Cookie Added for Key: "+ key +" and Value: "+ value);
  }
  res.redirect('/');
});

app.listen(3000);
