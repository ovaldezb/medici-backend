'use strict'

const express = require('express');

var MedicoController = require('../controller/MedicoController');
var CitaController = require('../controller/CitasController');
var PacienteController = require('../controller/PacienteController')
var SignosController = require('../controller/SignosController');
var router = express.Router();

router.post('/medico', MedicoController.save);
router.get('/medico', MedicoController.getAllMedicos)
router.get('/medico/:idMedico', MedicoController.getMedicoById);
router.put('/medico/:idMedico', MedicoController.updateMedico);
router.delete('/medico/:idMedico', MedicoController.deleteMedico);

router.post('/cita', CitaController.saveCita);
router.get('/cita/:fechaFiltro/:idMedico',CitaController.getCitaByFechaAndMedico);
router.get('/cita/:fechaFiltro',CitaController.getCitaByFecha);
router.put('/cita/:idCita',CitaController.updateCita);

router.post('/paciente',PacienteController.savePaciente);
router.get('/paciente/nombre/:nombre',PacienteController.findPacienteByNombre);
router.get('/paciente/apellido/:apellido',PacienteController.findPacienteByApellido);
router.get('/paciente/telefono/:telefono',PacienteController.findPacienteByTelefono);
router.put('/paciente/:idPaciente', PacienteController.updatePaciente);
router.delete('/paciente/:idPaciente', PacienteController.deletePaciente);

router.post('/signos',SignosController.saveSignos);
router.put('/signos/:idSignos',SignosController.updateSignos);

module.exports = router;