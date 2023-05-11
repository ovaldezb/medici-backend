'use strict'

const Signos = require('../model/signos');

var controller = {
  saveSignos:(req,res)=>{
    var params = req.body;
    var signos = new Signos();
    signos.peso = params.peso;
    //signos.estatura = params.estatura;
    signos.presionCis = params.presionCis;
    signos.presionDias = params.presionDias;
    signos.temperatura = params.temperatura;
    signos.fechaToma = params.fechaToma;
    signos.paciente = params.paciente;
    signos.save()
    .then(signosSaved =>{
      return res.status(200).send({
        status:'success',
        signos:signosSaved
      });
    })
    .catch(err =>{
      return res.status(400).send({
        status:'error',
        message:'No se pudo guardar los signos '+err
      });
    });
  },
  updateSignos:(req,res)=>{
    let idSignos = req.params.idSignos;
    Signos.findOneAndUpdate({_id:idSignos},req.body,{new:true})
    .then(signosUpdated =>{
      return res.status(200).send({
        status:'success',
        signos:signosUpdated
      });
    })
    .catch(err=>{
      console.log(err);
      return res.status(400).send({
        status:'error',
        message:'No se pudo actualizar los signos '+err
      });
    })
  }

};

module.exports = controller;