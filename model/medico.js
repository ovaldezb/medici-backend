var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MedicoSchema = new Schema({
  nombre: String,
  especialidad: String
});

module.exports = mongoose.model('Medico',MedicoSchema);