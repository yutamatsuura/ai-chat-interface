const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('AI Chat Interface API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});