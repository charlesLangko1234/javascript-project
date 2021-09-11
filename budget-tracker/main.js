const express = require('express');
const app = express();

const {loadMoney, addMoney, balance, income, outcome} = require('./utils/function');

var link = 'layouts/expenses';

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    const dataUang = loadMoney();
    const balanceMoney = balance();
    const incomeMoney = income();
    const outcomeMoney = outcome();
    res.render('home',{
        src:"css/homeStyle.css",
        link,
        dataUang,
        balanceMoney,
        incomeMoney,
        outcomeMoney,
    });
});


app.get('/expenses',(req,res)=>{
    link='layouts/expenses';
    res.redirect('/');
});

app.post('/expenses', (req,res)=>{
    addMoney(req.body);
    res.redirect('/');
});

app.get('/income',(req,res)=>{
    link='layouts/income';
    res.redirect('/');
});

app.post('/income', (req,res)=>{
    addMoney(req.body);
    res.redirect('/');
});

app.get('/all',(req,res)=>{
    link='layouts/all';
    res.redirect('/');
});

app.listen(3000);