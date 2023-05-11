var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CitaSchema = new Schema({
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "Paciente"
  },
  medico : {
    type: Schema.Types.ObjectId,
    ref: "Medico"
  },
  signos:{
    type: Schema.Types.ObjectId,
    ref: 'Signos'
  },
  fechaCita: Date,
  horaCita: String,
  horaCitaFin: String,
  duracion: Number,
  isSignosTomados:Boolean
});

module.exports = mongoose.model('Cita',CitaSchema);