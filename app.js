
const express = require('express');
const app = express(); //建立一個Express伺服器
var mysql = require('mysql');
var DB_NAME = 'demo_nodejs';
var engine = require('ejs-locals');
const bodyParser = require('body-parser');
crypto = require('crypto');
app.engine('ejs',engine);
//app.set('files','./files');
app.set('views', './views');
app.set('view engine','ejs');

app.use(bodyParser.json()); // 支援 json
app.use(bodyParser.urlencoded({ // 解析表單內容
  extended: false,
}));



//variables
var useremail;
var eventNo;
var eventName;



//variable setup
function User(user){
    this.username = user.username;
    this.userpass = user.userpass;
};


//heroku database connection setting
var conn = mysql.createPool({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bcdd175dab09d8',
    password: 'fd193bda',
    database:'heroku_b13fac9016a25e6',
    port: 3306
});


// check running enviroment
var port = process.env.PORT || 3000;

//database connection test
//conn.connect();
conn.query('SELECT 12 + 34 AS result', function(err, rows, fields) 
{
    if (err) throw err;
    console.log('The result is: ', rows[0].result);
}); 




var data = {};
conn.query('select * from tedxcuhk', function(err, rows, fields) {
  if (err) throw err;
  // set data to object
  data.user = rows[0];
  console.log(data.user);
});
//conn.end();

//server connection 
app.listen(port, function () {
  console.log('Example app is running on port 3000!');}
);


//website
app.get('/', function (req, res) {
  res.send('Express is excellent!2');
});

app.get('/about', function(req, res) {

  var title="Hello";
    res.render('about',{  
   title: title,  
   users: ['Kai', 'aYen', 'Kyousuke']  
  });  
});

app.get('/about/about-me', function(req, res) {
    res.send('Send about-me page!');
});



app.get('/input', function(req, res) {
  res.render('input');



});
app.post('/input',function(req, res) {
  console.log(req.body.txtUserName);
  var sql = {
        email: req.body.txtUserName
    };
    console.log(sql);
  //check email is on the list
  var cmd = "INSERT INTO account(email) VALUES(?)";
  conn.query(cmd, [req.body.txtUserName], function (err,result) {
            if (err) {
                return;
            }

            //callback(err,result);                     
        });       


  //conn.query(qur);
  res.redirect('/input');

      

});


app.get('/about/:name/:nickname', function(req, res) {
  res.send(req.params.name + ' is so ' + req.params.nickname);
});