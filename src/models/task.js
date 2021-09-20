const mongoose = require('mongoose');
const { Schema } = mongoose;

//Coleccion de jovenes
const jovenes =  mongoose.model ('jovenes', 
new mongoose.Schema({
  Nombre: Object,
  Apellido: Object,
  Sangre:Object,
  RH:Object,
  Sexo:Object,
  Hermanos:Object,
  Asma:Object, 
  Identificacion:Object,
  Email:Object,
  Direccion:Object,
  NumDoc:Object,
  FechaNacimiento: Object,
  Cel: Object,
  LugDoc: Object,
  CityNa: Object,
  CityRE: Object,
  Tel: Object,
  Altura:Object,
  Eps: Object,
  Alergias: Object,
  Lesiones: Object,
  Responsable_contrato: Object,
  Peso: Object,
  Prepagada: Object,
  Medicamentos: Object,
  Enfermedades: Object,
  Talla: Object,
  Intervensiones_quirurgicas: Object,
  Medicamentos_quirujicos: Object,
  Recomendaciones: Object
}));

//Coleccion de padres
const padres = mongoose.model('padres',
new Schema({
    Nombre_Padre :Object,
    Apellido_Padre : Object,
    Email_Padre: Object,
    Direccion_Padre : Object,
    Indentificacion_Padre :Object,
    NumDoc_Padre: Object,
    FechaNacimiento_Padre : Object,
    Cel_Padre : Object,
    LugDoc_Padre : Object,
    CityNa_Padre :Object,
    CityRE_Padre : Object,
    Tel_Padre :Object,
    Ocupacion: Object,
    Tel_Oficina : Object,
    Cargo : Object
    }));

//Coleccion de madres
const madres = mongoose.model('madres',
new Schema({
    Nombre_Madre:Object,
    Apellido_Madre: Object,
    Email_Madre :Object,
    Direccion_Madre : Object,
    Indentificacion_Madre : Object,
    NumDoc_Madre : Object,
    FechaNacimiento_Madre : Object,
    Cel_Madre : Object,
    LugDoc_Madre : Object,
    CityNa_Madre : Object,
    CityRE_Madre :Object,
    Tel_Madre : Object,
    Ocupacion_Madre : Object,
    TelOdiciona_Madre : Object,
    Cargo_Madre: Object
  }));      

//Coleccion de acudientes
const acudientes  =  mongoose.model('acudientes',
new Schema({
    Nombre_Acudiente :  Object,
    Apellido_Acudiente :   Object,
    Email_Acudiente:  Object,
    Direccion_Acudiente :  Object,
    Indentificacion_Acudiente :  Object,
    NumDoc_Acudiente:   Object,
    FechaNacimiento_Acudiente :  Object,
    Cel_Acudiente:  Object,
    LugDoc_Acudiente :  Object,
    CityNa_Acudiente :  Object, 
    CityRE_Acudiente :Object, 
    Tel_Acudiente : Object,
    Ocupacion:  Object, 
    Tel_Oficina : Object, 
    Cargo :  Object
  })); 

module.exports = {
  jovenes: jovenes,
  padres: padres,
  madres: madres,
  acudientes : acudientes
}
