const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('home',{
        src:"css/homeStyle.css",
    });
});

app.listen(3000);