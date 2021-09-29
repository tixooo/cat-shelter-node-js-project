const express = require('express');
const app = express();
const path = require('path')
const absolutePath = path.join(__dirname + '../../');

app.get('/', (req, res) => {
    let home = path.resolve(absolutePath + '/Views/home/index.html');
    res.sendFile(home);
});

module.exports = app;