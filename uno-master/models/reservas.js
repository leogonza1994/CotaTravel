const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var User= mongoose.model('clientes');

var ReservaSchema = new Schema({

    fecha: Date,
    hora: Number,
    numeroPersonas: Number,
    cliente: {type: Schema.ObjectId, ref: "clientes"}
   
});

module.exports = mongoose.model('reservas', ReservaSchema);