const express = require('express');
const OpenAI = require('openai');
const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get('/process', async (req, res) => {
  const userUrl = req.query.url;
  console.log('Received YouTube URL:', userUrl);

  try {
    res.send('Processing started successfully for: ' + userUrl);
  } catch (error) {
    console.error('Error:', error);
    res.send('Error processing the video.');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
