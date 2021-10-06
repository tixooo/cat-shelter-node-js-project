const mongoose = require('mongoose');


const catsSchema = new mongoose.Schema({
    name: String
});

const Cat = mongoose.model('Cat', catsSchema);

module.exporsts = Cat;