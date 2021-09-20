const {jovenes, padres, madres, acudientes} = require ("../models/task.js")
const { request } = require('http');
const { response } = require('express');

exports.readJovens = (req, res) =>
    jovenes.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


    exports.readPadres = (req, res) =>
    padres.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


    exports.readMadres = (req, res) =>
    madres.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });   


    exports.readAcudientes = (req, res) =>
    acudientes.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


    //Servidor guardar jovenes
    exports.createJovenes = (req, res) =>
    new jovenes({ Nombre: req.body.Nombre, Apellido: req.body.Apellido,  Sangre: req.body.Sangre,   RH: req.body.RH,   Sexo: req.body.Sexo,
         Hermanos:req.body.Hermanos, Asma:req.body.Asma, Identificacion:req.body.Identificacion, Email:req.body.Email, Direccion:req.body.Direccion,
         NumDoc:req.body.NumDoc, FechaNacimiento:req.body.FechaNacimiento,Cel:req.body.Cel,LugDoc:req.body.LugDoc,CityNa:req.body.CityNa, 
        CityRE:req.body.CityRE,Tel:req.body.Tel,Altura:req.body.Altura,Eps:req.body.Eps,Alergias:req.body.Alergias,Lesiones:req.body.Lesiones,
        Responsable_contrato:req.body.Responsable_contrato,Peso:req.body.Peso,Prepagada:req.body.Prepagada,Medicamentos:req.body.Medicamentos,
        Enfermedades:req.body.Enfermedades,Talla:req.body.Talla ,Intervensiones_quirurgicas:req.body.Intervensiones_quirurgicas, 
        Medicamentos_quirujicos:req.body.Medicamentos_quirujicos, Recomendaciones:req.body.Recomendaciones })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json({status: 'Informacion Guardada'});
    });

    //Servidor guardar padres
    exports.createPadres = (req, res) =>
    new padres({ Nombre_Padre: req.body.Nombre_Padre, Apellido_Padre:req.body.Apellido_Padre, Email_Padre:req.body.Email_Padre, Direccion_Padre:req.body.Direccion_Padre,
         Indentificacion_Padre:req.body.Indentificacion_Padre ,  NumDoc_Padre:req.body.NumDoc,   FechaNacimiento_Padre:req.body.FechaNacimiento_Padre,
        Cel_Padre:req.body.Cel_Padre ,  LugDoc_Padre:req.body.LugDoc_Padre, CityNa_Padre:req.body.CityNa_Padre , CityRE_Padre:req.body.CityRE_Padre , 
        Tel_Padre:req.body.Tel_Padre ,  Ocupacion:req.body.Ocupacion, Tel_Oficina:req.body.Tel_Oficina ,  Cargo:req.body.Cargo })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else      res.json({status: 'Informacion Guardada'});
    });

//Servidor guardar madres
    exports.createMadres = (req, res) =>
    new madres({ Nombre_Madre:req.body.Nombre_Madre, Apellido_Madre:req.body.Apellido_Madre,   Email_Madre:req.body.Email_Madre,   
        Direccion_Madre:req.body.Direccion_Madre , Indentificacion_Madre:req.body.Indentificacion_Madre ,   NumDoc_Madre:req.body.NumDoc_Madre ,  
        FechaNacimiento_Madre:req.body.FechaNacimiento_Madre ,Cel_Madre:req.body.Cel_Madre , LugDoc_Madre:req.body.LugDoc_Madre , 
        CityNa_Madre:req.body.CityNa_Madre , CityRE_Madre:req.body.CityRE_Madre,  Tel_Madre:req.body.Tel_Madre, Ocupacion_Madre:req.body.Ocupacion_Madre , 
         TelOdiciona_Madre:req.body.TelOdiciona_Madre ,   Cargo_Madre:req.body.Cargo_Madre})
    .save((err, data) => {
        if (err) res.json({ error: err });
        else      res.json({status: 'Informacion Guardada'});
     });
  
   //Servidor guardar acudientes 
    exports.createAcudientes = (request, res) =>
    new acudientes({ Nombre_Acudiente:request.body.Nombre_Padre ,
        Apellido_Acudiente:request.body.Apellido_Padre ,
        Email_Acudiente:request.body.Email_Padre,
         Direccion_Acudiente:request.body.Direccion_Padre,
          Indentificacion_Acudiente:request.body.Indentificacion_Padre , 
         NumDoc_Acudiente:request.body.NumDoc_Padre, 
          FechaNacimiento_Acudiente:request.body.FechaNacimiento_Padre ,
         Cel_Acudiente:request.body.Cel_Padre,  
          LugDoc_Acudiente:request.body.LugDoc_Padre , 
           CityNa_Acudiente:request.body.CityNa_Padre , 
         CityRE_Acudiente:request.body.CityRE_Padre , 
          Tel_Acudiente:request.body.Tel_Padre ,  
          Ocupacion:request.body.Ocupacion, 
          Tel_Oficina:request.body.Tel_Oficina ,
         Cargo:request.body.Cargo })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else      res.json({status: 'Informacion Guardada'});
    });

