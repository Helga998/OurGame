const router = require('express').Router();

router.use('/dog', require('./api/dog.api.routes'));
router.use('/answer', require('./api/answer.api.routes'));


module.exports = router;
