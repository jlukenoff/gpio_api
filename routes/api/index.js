const express = require('express');

const router = express.Router();

router.use('/pump', require('./pump'));
router.use('/sensor', require('./sensor'));

module.exports = router;
