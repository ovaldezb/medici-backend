var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PacienteSchema = new Schema({
  nombre: String,
  apellido: String,
  fechaNacimiento: Date,
  estatura: Number,
  telefono: String
});

module.exports = mongoose.model('Paciente', PacienteSchema);