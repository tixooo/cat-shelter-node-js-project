const express = require('express');
const app = express();
const path = require('path')
const absolutePath = path.join(__dirname + '../../');

app.get('/', (req, res) => {
    let addBreed = path.resolve(absolutePath + '/Views/addBreed.html');
    res.sendFile(addBreed);
});

module.exports = app;