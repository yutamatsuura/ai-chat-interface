const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Claude AI APIとの通信を行う関数
async function getChatResponse(message) {
  try {
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-2',
      messages: [{role: 'user', content: message}],
      max_tokens_to_sample: 300
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.CLAUDE_API_KEY
      }
    });
    return response.data.messages[0].content;
  } catch (error) {
    console.error('Error calling Claude AI API:', error);
    throw new Error('Failed to get response from AI');
  }
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await getChatResponse(message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});