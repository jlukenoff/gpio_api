const express = require('express');

const router = express.Router();

router.use('/pump', require('./pump'));
router.use('/sensor', require('./sensor'));
router.use('/video', require('./video'));

module.exports = router;
