const express = require('express');
const path = require('path')
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/Public'))

app.get('/', (req, res) => {

    let catShelter = path.resolve(__dirname + '/Views/catShelter.html');
    let addBreed = path.resolve(__dirname + '/Views/addCat.html')
    res.sendFile(catShelter);
    // res.sendFile(addBreed);
});

app.listen(port, console.log(`Server runing on port ${port}...`));