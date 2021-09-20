const mongoose = require('mongoose');
const { Schema } = mongoose;

//Coleccion de madres
const madres = mongoose.model('madres',
new Schema({
    Nombre_Madre: {type: String, required:true},
    Apellido_Madre: {type: String, required:true},
    Email_Madre : {type: String, required:true},
    Direccion_Madre : {type: String, required:true},
    Indentificacion_Madre : {type: String, required:true},
    NumDoc_Madre : {type: String, required:true},
    FechaNacimiento_Madre : {type: String, required:true},
    Cel_Madre : {type: String, required:true},
    LugDoc_Madre : {type: String, required:true},
    CityNa_Madre : {type: String, required:true},
    CityRE_Madre : {type: String, required:true},
    Tel_Madre : {type: String, required:true},
    Ocupacion_Madre : {type: String, required:true},
    TelOdiciona_Madre : {type: String, required:true},
    Cargo_Madre: {type: String, required:true}
  }));  
  module.exports = mongoose.model('madres', madres);