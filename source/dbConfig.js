const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/demo-cats';
const initDb = () => mongoose.connect(connectionString);

module.exports = initDb;