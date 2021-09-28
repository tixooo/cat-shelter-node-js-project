const express = require('express');
const app = express();
const path = require('path')
const absolutePath = path.join(__dirname + '../../');

app.get('/', (req, res) => {
    let catShelter = path.resolve(absolutePath + '/Views/home/index.html');
    res.sendFile(catShelter);
});

module.exports = app;