const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 5000;

//handlebars view engine set up
app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

//Mongoose
// const initDb = require('./dbConfig');
// const Cat = require('./Models/cats');
// initDb().then(()=> {
//     Cat.create({
//         name: "Beba"
//     }).then( Cat => {
//         console.log(Cat);
//     })
// });

// mongodb database
const mongodb = require('mongodb');
const client = new mongodb.MongoClient('mongodb://localhost:27017');
client.connect().then(() => {
    console.log('Connected');
    const db = client.db('demo-cats');
    const catsDB = db.collection('cats');
    return catsDB.find({}).toArray();
}).then(data=> {console.log(data)});

//css, picture and the home page are static
app.use(express.static(__dirname + '/Public'));
// app.use(express.static(__dirname + '/Views/home'));
app.get('/', (req,res)=>{
    res.render('home', { layout: false });
})

//import from exported differend pages
const addCat = require('./exports/addCatExport');
app.use('/addCat', addCat);

const addBreed = require('./exports/addBreedExport.js');
app.use('/addBreed', addBreed);

// app.all('/addBreed', (req,res)=>{
//     console.log(req.param)
// })

app.listen(port, console.log(`Server runing on port ${port}...`));