const express = require('express');
const UserController = require('../controllers/UserController');
const api = express.Router();
const ReservasController= require('../controllers/ReservasController')

/**
 * POST: para insertar datos y enviar datos sensibles
 * GET: Obtener los datos de X usuarios
 * PUT: para modificar la información 
 * DELETE: para eliminar información
 * 
 */

api.get('/saludar', (req, res) => {
    console.log('llegó a la ruta saludar .....');

});

api.post('/', UserController.create);
api.put('/:idUser', UserController.update);
api.delete('/:idUser', UserController.remove);
api.get('/allUser/:rol', UserController.getAllUsers);

api.get("/reservas", ReservasController.all);
api.get("/reservas/create", ReservasController.create);
api.get("/reservas/:username", ReservasController.find);
api.get('/reservas/:username/cliente',ReservasController.getAllReservas);


module.exports = api;