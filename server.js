const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Technology Evangelism Project!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});