const express = require('express');
const path = require('path')
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/Public'))

app.get('/', (req, res) => {
    let catShelter = path.resolve(__dirname + '/Views/home/index.html');
    res.sendFile(catShelter);
});
app.get('/addCat', (req, res) => {
    let addCat = path.resolve(__dirname + '/Views/addCat.html')
    res.sendFile(addCat);
});
app.get('/addBreed', (req, res) => {
    let addBreed = path.resolve(__dirname + '/Views/addBreed.html')
    res.sendFile(addBreed);
});
app.listen(port, console.log(`Server runing on port ${port}...`));