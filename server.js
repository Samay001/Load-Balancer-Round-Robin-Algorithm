const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const INSTANCE_ID = process.env.HOSTNAME || 'unknown-instance';

function logWithTimestamp(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

app.get('/hello', (req, res) => {
  res.send(`Hi from ${INSTANCE_ID}`);
  logWithTimestamp(`Request handled by Server (instance): ${INSTANCE_ID}`);
});

app.get('/stop', (req, res) => {
    res.send(`Server ${INSTANCE_ID} is shutting down...`);
    logWithTimestamp(`Server ${INSTANCE_ID} is shutting down...`);
    process.exit(0);
});

const server = app.listen(PORT, () => {
  logWithTimestamp(`Server instance ${INSTANCE_ID} running on port ${PORT}`);
});
