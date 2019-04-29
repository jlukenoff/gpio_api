const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
  res.send(`<html>
  <head>
  <title>Raspberry Pi - Surveillance Camera</title>
  </head>
  <body>
  <center><h1>Raspberry Pi - Surveillance Camera</h1></center>
  <center><img src="/api/video/stream.mjpg" width="640" height="480"></center>
  </body>
  </html>`);
});

router.use('/stream.mjpg', (req, res) => {
  res.redirect('http://localhost:8000/stream.mjpg');
});

module.exports = router;
