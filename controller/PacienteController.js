'use strict'

const Paciente = require('../model/paciente');

var controller = {
  savePaciente:(req,res)=>{
    var params = req.body;
    const paciente = new Paciente();
    paciente.nombre = params.nombre;
    paciente.apellido = params.apellido;
    paciente.telefono = params.telefono;
    paciente.fechaNacimiento = params.fechaNacimiento;
    paciente.estatura = params.estatura;
    paciente.save()
    .then(pacienteSaved=>{
      return res.status(201).send({
        status:'success',
        paciente:pacienteSaved
      })
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'No se pudo guardar el paciente '+err
      });
    })
  },
  findAllPacientes:(req,res)=>{
    Paciente.find()
    .then(listaPacientes=>{
      return res.status(200).send({
        status:'success',
        pacientes:listaPacientes
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'Error al leer los pacientes '+err
      });
    });
  },
  findPacienteById:(req,res)=>{

  },
  findPacienteByNombre:(req,res)=>{
    var lookUpNombre = req.params.nombre;
    Paciente.find({nombre:{$regex:'^'+lookUpNombre,$options: 'i' },})
    .then(listaPacienteMatch =>{
      return res.status(200).send({
        status:'success',
        pacientes:listaPacienteMatch
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'Error al leer los pacientes '+err
      });
    });
  },
  findPacienteByApellido:(req,res)=>{
    var lookUpApellido = req.params.apellido;
    Paciente.find({apellido:{$regex:'^'+lookUpApellido,$options: 'i' },})
    .then(listaPacienteMatch =>{
      return res.status(200).send({
        status:'success',
        pacientes:listaPacienteMatch
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'Error al leer los pacientes '+err
      });
    });
  },
  findPacienteByTelefono:(req,res)=>{
    var lookUpTelefono = req.params.telefono;
    Paciente.find({telefono:{$regex:'^'+lookUpTelefono,$options: 'i' },})
    .then(listaPacienteMatch =>{
      return res.status(200).send({
        status:'success',
        pacientes:listaPacienteMatch
      });
    })
    .catch(err=>{
      return res.status(400).send({
        status:'error',
        message:'Error al leer los pacientes '+err
      });
    });
  },
  updatePaciente:(req,res)=>{
    let idPaciente = req.params.idPaciente;
    Paciente.findOneAndUpdate({_id:idPaciente},req.body)
    .then(pacienteUpdated =>{
      return res.status(200).send({
        status:'success',
        paciente:pacienteUpdated
      });
    })
    .catch(err=>{
      console.log(err);
      return res.status(400).send({
        status:'error',
        message:'No se pudo actualizar el paciente '+err
      });
    });
  },deletePaciente:(req,res)=>{
    let idPaciente = req.params.idPaciente;
    Paciente.findOneAndDelete({_id:idPaciente})
    .then(pacienteDeleted =>{
      return res.status(200).send({
        status:'success',
      });
    })
    .catch(err=>{
      console.log(err);
      return res.status(400).send({
        status:'error',
        message:'No se pudo borrer el paciente '+err
      });
    })
  },
};

module.exports = controller;