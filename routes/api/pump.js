const express = require('express');
const { Gpio } = require('onoff');

const router = express.Router();

router.post('/', (req, res) => {
  const { timeOn } = req.body;
  const relay = new Gpio(4, 'high');
  relay.writeSync(0);
  setTimeout(() => {
    relay.writeSync(1);
    relay.unexport();
  }, timeOn);
  res.json({ status: 'SUCCESS', message: `Pump will be on for ${timeOn}ms` });
});

module.exports = router;
