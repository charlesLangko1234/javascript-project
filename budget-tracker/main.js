const express = require('express');
const app = express();

const {loadMoney, addMoney} = require('./utils/function');

var link = 'layouts/expenses';

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render('home',{
        src:"css/homeStyle.css",
        link,
    });
});


app.get('/expenses',(req,res)=>{
    link='layouts/expenses';
    res.redirect('/');
});

app.post('/expenses', (req,res)=>{
    console.log(req.body);
    addMoney(req.body);
    res.redirect('/');
});

app.get('/income',(req,res)=>{
    link='layouts/income';
    res.redirect('/');
});

app.get('/all',(req,res)=>{
    link='layouts/all';
    res.redirect('/');
});

app.listen(3000);