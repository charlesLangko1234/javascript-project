const express = require('express')
const app = express();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/data')
    },
    filename: function (req, file, cb) {
        fileExtension = file.originalname.split('.')[1];
      cb(null, Date.now()+'--'+file.fieldname+'.'+fileExtension);
    }
});
const upload = multer({storage:storage})

const {loadContact,Addcontact} = require('./utils/function');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

app.get('/',(req,res)=>{
    const datas = loadContact();
    res.render('home',{
        datas,
    });
});

app.get('/add',(req,res)=>{
    res.render('add');
});

app.post('/add', upload.single('image'),(req,res)=>{
    const dataContact = Object.assign(req.body,req.file);
    Addcontact(dataContact);
    res.redirect('/');
});

app.listen(3000);