const express = require('express');
const app = express();

app.get('/process', (req, res) => {
    const userUrl = req.query.url;
    console.log("Received URL: ", userUrl);
    
    res.send("Received successfully: " + userUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
