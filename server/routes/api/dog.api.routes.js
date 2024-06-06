const {Dog} = require('../../db/models')
const dogRoute = require('express').Router();


dogRoute.get('/', async (req, res) => {
    try {
        const dogs = await Dog.findAll();
        console.log(dogs, 'DDDDOOO');
        res.json({ dogs, message: 'OK' });
    } catch (error) {
        res.status(500).send({ error, message: 'error' });
    }
});


dogRoute.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await Dog.findOne({ where: { id } });
        res.json({ dog, message: 'OK' });
    } catch (error) {
        res.status(500).send({ error, message: 'error' });
    }
});



module.exports = dogRoute;
