var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SignosSchema = new Schema({
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "Paciente"
  },
  peso: Number,
  estatura: Number,
  presionCis: Number,
  presionDias: Number,
  temperatura: Number,
  fechaToma: Date
});

module.exports = mongoose.model('Signos', SignosSchema);