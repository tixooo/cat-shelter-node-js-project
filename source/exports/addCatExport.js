const express = require('express');
const app = express();
const path = require('path')
const absolutePath = path.join(__dirname + '../../');

app.get('/', (req, res) => {
    let addCat = path.resolve(absolutePath + '/Views/addCat.html');
    res.sendFile(addCat);
});

module.exports = app;