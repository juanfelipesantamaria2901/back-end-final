const mongoose = require('mongoose')
const URI = 'mongodb+srv://root:root@cluster0.m9zp4.mongodb.net/Matricula?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(_db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;