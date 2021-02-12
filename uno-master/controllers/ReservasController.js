let reservas = require("../models/reservas")

let ReservasController = {
    find: async (req, res) => {
        let found = await reservas.find({ nombre: req.params.username });
        res.json(found);
    },

all: async (req,res) => {
  let allReservas = await reservas.find()
  res.json(allReservas);
},

create: async(req, res) =>{
  let newReserva= new reservas(req.body);
  let savedReserva= await newReserva.save();
  res.json(savedReserva);

},

getAllReservas: async (req,res) => {

    let foundReservas = await reservas.find({nombre: req.params.username}).populate("User");
    res.json(foundReservas);
}

}

module.exports = ReservasController;
