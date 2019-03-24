const express = require('express');
const { Gpio } = require('onoff');

const router = express.Router();

router.get('/', (req, res) => {
  const sensor = new Gpio(14, 'in', 'both');
  res.json({ status: 'SUCCESS', isWet: sensor.readSync() === 0 });
  sensor.unexport();
});

module.exports = router;
