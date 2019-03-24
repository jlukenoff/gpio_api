const express = require('express');
const path = require('path');

const app = express();

app.use(require('./routes'));

app.get('/', (req, res) => {
  console.log('request received');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
