
require('dotenv').config();
var mongoose = require('mongoose');
var app = require('./app');


var port = 3899;
//mongoose.set('useFindAndModify',false);
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
  console.log('Se estableció la conexión a la BD');
  app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:'+port);
  });
});