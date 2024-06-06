const { Answer } = require('../../db/models');
const answerRoute = require('express').Router();
const {Dog} = require('../../db/models')

answerRoute.get('/', async (req, res) => {
    try {
        const answers = await Answer.findAll();
        // const dogs = await Dog.findAll();
        // console.log({Dog}, '1111111');
        res.json({ answers, message: 'OK' });
    } catch (error) {
        res.status(500).send({ error, message: 'error' });
    }
});

answerRoute.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const answer = await Answer.findOne({ where: { id } });
        res.json({ answer, message: 'OK' });
    } catch (error) {
        res.status(500).send({ error, message: 'error' });
    }
});


module.exports = answerRoute;
