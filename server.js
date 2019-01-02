const express = require('express');
const app = express();
var bodyParser = require('body-parser')
// const sslRedirect = require('heroku-ssl-redirect');
// app.use(sslRedirect());

app.set('view engine', 'ejs');
app.set("views","./views"); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(process.env.PORT || 3000);