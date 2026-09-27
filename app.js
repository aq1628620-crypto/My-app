 const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Live');
});

app.get('/process', async (req, res) => {
    const youtubeUrl = req.query.url;
    
    if (!youtubeUrl) {
        return res.status(400).send('Error');
    }

    try {
        const result = `URL: ${youtubeUrl}`;
        res.send(result);
    } catch (error) {
        res.status(500).send('Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
