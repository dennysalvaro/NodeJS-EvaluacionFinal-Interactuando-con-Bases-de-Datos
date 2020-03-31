const mongoose = require('mongoose');
const esquema = mongoose.Schema;

//Modelo
var esquema_usuario = new esquema({
  nombre: {type: String},
  email: {type:String, unique: true, lowercase: true},
  clave: {type: String, unique: true, lowercase: true}
})

//Exportar el modulo
module.exports = mongoose.model('Usuario', esquema_usuario)
