
const express = require('express');
const app = express(); //建立一個Express伺服器

app.listen(3000, function () {
  console.log('Example app is running on port 3000!');}
);

app.get('/', function (req, res) {
  res.send('Express is excellent!')
});