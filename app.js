
const express = require('express');
const app = express(); //建立一個Express伺服器

// check running enviroment
var port = process.env.PORT || 3000;


app.listen(port, function () {
  console.log('Example app is running on port 3000!');}
);

app.get('/', function (req, res) {
  res.send('Express is excellent!2')
});

app.get('/about', function(req, res) {
    res.send('Send about page!')
});
app.get('/about/about-me', function(req, res) {
    res.send('Send about-me page!')
});

app.get('/about/:name/:nickname', function(req, res) {
  res.send(req.params.name + ' is so ' + req.params.nickname);
});