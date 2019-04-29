const express = require('express');
const { Gpio } = require('onoff');

const router = express.Router();

router.get('/', (req, res) => {
  // initialize sensor input
  const sensor = new Gpio(14, 'in', 'both');

  // Send sensor reading
  res.json({ status: 'SUCCESS', isWet: sensor.readSync() === 0 });


  sensor.unexport();
});

module.exports = router;
