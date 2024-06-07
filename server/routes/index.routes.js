const router = require('express').Router();
const dogs = require('./api/dog.api.routes')

router.use('/dogs', dogs);
router.use('/answer', require('./api/answer.api.routes'));


module.exports = router;
