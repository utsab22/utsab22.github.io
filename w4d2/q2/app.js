const express = require('express' );
const path = require('path');
const app =  express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,'view'));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname,'view','js')));

app.get('/',(req,res)=>{
    res.render('form');
});

app.get('/8ball',()=>{


});

app.listen(3000);
