const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre: String,
    apellido: String,
    celular: Number,
    correo: String,
    contrasena: String
});

module.exports = mongoose.model('clientes', UserSchema);