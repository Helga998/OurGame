const { Answer } = require('../../db/models');
const answerRoute = require('express').Router();

answerRoute.get('/', async (req, res) => {
    try {
        const dogs = await Answer.findAll();
        res.json({ cards, message: 'OK' });
    } catch (error) {
        res.status(500).send({ error, message: 'error' });
    }
});

answerRoute.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await Answer.findOne({ where: { id } });
        res.json({ card, message: 'OK' });
    } catch (error) {
        res.status(500).send({ error, message: 'error' });
    }
});


module.exports = answerRoute;
