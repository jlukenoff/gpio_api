const express = require('express');
const jsonParser = require('body-parser').json();

const app = express();

app.use(jsonParser);
app.use(require('./routes'));

app.get('/', (req, res) => {
  console.log('request received');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
