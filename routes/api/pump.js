const express = require('express');
const { Gpio } = require('onoff');

const router = express.Router();

router.post('/', (req, res) => {
  // parse request body
  const { timeOn } = req.body;
  // initialize relay
  const relay = new Gpio(4, 'high');

  // turn on relay
  relay.writeSync(0);

  // setTimeout for when to turn off
  setTimeout(() => {
    // turn off relay
    relay.writeSync(1);

    // clean up relay
    relay.unexport();
  }, timeOn);

  // respond to request
  res.json({ status: 'SUCCESS', message: `Pump will be on for ${timeOn}ms` });
});

module.exports = router;
