const mongoose = require('mongoose');
const { Schema } = mongoose;

//Coleccion de acudientes
const acudientes  =  mongoose.model('acudientes ',
new Schema({
    Nombre_Acudiente : {type: String, required:true},
    Apellido_Acudiente : {type: String, required:true},
    Email_Acudiente: {type: String, required:true},
    Direccion_Acudiente : {type: String, required:true},
    Indentificacion_Acudiente : {type: String, required:true},
    NumDoc_Acudiente: {type: String, required:true},
    FechaNacimiento_Acudiente : {type: String, required:true},
    Cel_Acudiente: {type: String, required:true},
    LugDoc_Acudiente : {type: String, required:true},
    CityNa_Acudiente :{type: String, required:true},
    CityRE_Acudiente : {type: String, required:true},
    Tel_Acudiente :{type: String, required:true},
    Ocupacion: {type: String, required:true},
    Tel_Oficina : {type: String, required:true},
    Cargo : {type: String, required:true}
  })); 
  module.exports = mongoose.model('acudientes ', acudientes );