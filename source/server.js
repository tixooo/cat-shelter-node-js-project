const express = require('express');
const path = require('path')
const app = express();
const port = 5000;
app.use(express.static(__dirname + '/Public'));

const addCat = require('./exports/addCatExport');
app.use('/addCat', addCat);

const addBreed = require('./exports/addBreedExport.js');
app.use('/addBreed', addBreed)

const CatShelter = require('./exports/catShelterExport');
app.use('/', CatShelter);

app.listen(port, console.log(`Server runing on port ${port}...`));