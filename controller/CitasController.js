'use strict'

const Cita = require('../model/cita');

var controller = {
  saveCita:(req,res)=>{
    var params = req.body;
    var cita = new Cita();
    cita.paciente = params.paciente;
    cita.medico = params.medico;
    cita.fechaCita = params.fechaCita;
    cita.horaCita = params.horaCita;
    cita.duracion = params.duracion;
    cita.isSignosTomados = params.isSignosTomados;
    cita.save()
    .then(citaSaved =>{
      return res.status(200).send({
        status:'success',
        cita:citaSaved
      });
    })
    .catch(err=>{
      console.log(err);
      return res.status(400).send({
        status:'error',
        message:'No se pudo agendar la cita '+err
      });
    })
  },
  getCitaByFechaAndMedico:(req,res)=>{
    var fechaFiltro = req.params.fechaFiltro;
    var idMedico = req.params.idMedico;
    var query = Cita.find(
      {
        fechaCita:{'$gte':`${fechaFiltro}T00:00:00.000Z`,'$lt':`${fechaFiltro}T23:59:59.999Z`},
        medico:{_id:idMedico}
      })
    .sort({horaCita:1})
    .populate('medico')
    .populate('paciente')
    .populate('signos')
    .then(allCitas=>{
      return res.status(200).send({
        status:'success',
        citas:allCitas
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:"error",
        message:'No se pudieron obtener las citas '+err
      });
    });
  },
  getCitaByFecha:(req,res)=>{
    var fechaFiltro = req.params.fechaFiltro;
    Cita.find(
      {
        fechaCita:{'$gte':`${fechaFiltro}T00:00:00.000Z`,'$lt':`${fechaFiltro}T23:59:59.999Z`}
      })
    .sort({horaCita:1})
    .populate('medico')
    .populate('paciente')
    .populate('signos')
    .then(allCitas=>{
      return res.status(200).send({
        status:'success',
        citas:allCitas
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:"error",
        message:'No se pudieron obtener las citas '+err
      });
    });
  },
  updateCita:(req,res)=>{
    var idCita = req.params.idCita;
    Cita.findOneAndUpdate({_id:idCita},req.body,{new:true})
    .then(citaUpdate=>{
      return res.status(200).send({
        status:'success',
        cita:citaUpdate
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'No se pudo actualizar la cita '+err
      });
    });

  },
  deleteCita:(req,res)=>{

  }
}

module.exports = controller;