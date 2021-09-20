const mongoose = require('mongoose');
const { Schema } = mongoose;

//Coleccion de padres
const padres = mongoose.model('padres',
new Schema({
    Nombre_Padre :{type: String, required:true},
    Apellido_Padre : {type: String, required:true},
    Email_Padre: {type: String, required:true},
    Direccion_Padre : {type: String, required:true},
    Indentificacion_Padre : {type: String, required:true},
    NumDoc_Padre: {type: String, required:true},
    FechaNacimiento_Padre : {type: String, required:true},
    Cel_Padre : {type: String, required:true},
    LugDoc_Padre : {type: String, required:true},
    CityNa_Padre :{type: String, required:true},
    CityRE_Padre : {type: String, required:true},
    Tel_Padre :{type: String, required:true},
    Ocupacion: {type: String, required:true},
    Tel_Oficina : {type: String, required:true},
    Cargo : {type: String, required:true}
    }));
    module.exports = mongoose.model('padres', padres);