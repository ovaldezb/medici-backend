'use strict' 
const Medico = require('../model/medico');

var controller = {
  save:(req,res)=>{
    var params = req.body;
    var medico = new Medico();
    medico.nombre = params.nombre;
    medico.especialidad = params.especialidad;

    medico.save()
    .then(medicoSaved =>{
      return res.status(201).send({
        status:"success",
        medicoSaved
      });
    }).catch(err=>{
      return res.status(500).send({
        status:"error",
        message:"Error al guardar al médico"
      });
    })
  },
  getMedicoById:(req,res)=>{
    var medicoId = req.params.idMedico;
    var query = Medico.findById(medicoId);
    query.exec()
    .then(medico =>{
      return res.status(200).send({
        status:"success",
        medico
      });
    })
    .catch(err=>{
      return res.status(500).send({
        status:"error",
        message:"Error al recuperar el Medico por el id "+medicoId
      });
    });
  },
  getAllMedicos:(req,res)=>{
    var status = '';
    var query = Medico.find();
    query.exec()
    .then(listaMedicos =>{
      if(listaMedicos.length === 0){
        status = "No existen registros";
      }else{
        status = "success";
      }
      return res.status(200).send({
        status: status,
        medicos:listaMedicos
      });
    })
    .catch(err=>{
      return res.status(500).send({
        status:"error",
        message:"error al recuperar la lista de médicos"
      });
    });
  },
  updateMedico:(req,res)=>{
    var idMedico = req.params.idMedico
    var medico = {
      'nombre':req.body.nombre,
      'especialidad':req.body.especialidad
    }
    
    Medico.findOneAndUpdate({_id:idMedico},medico,{new:true})
    .then(updatedMedico=>{
      return res.status(200).send({
        status:'success',
        medicoUpdated:updatedMedico
      });
    })
    .catch(err =>{
      return res.status(400).send({
        status:'error',
        message:'Error al guardar '+err
      });
    });
    
    
  },
  deleteMedico:(req,res)=>{
    var idMedico = req.params.idMedico
    Medico.findOneAndDelete({'_id':idMedico})
    .then(deletedMedico=>{
      return res.status(200).send({
        status:'success',
        idMedico:idMedico
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'Error al borrar el medico '+err
      });
    });
  }
};

module.exports = controller;