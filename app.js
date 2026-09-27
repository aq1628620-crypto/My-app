const express = require('express');
const app = express();

app.get('/process', async (req, res) => {
    const userUrl = req.query.url;
    console.log('Received YouTube URL: ', userUrl);

    try {
        res.send('Processing started for: ' + userUrl);
    } catch (error) {
        console.error('Error: ', error);
        res.send('Error processing the video.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
