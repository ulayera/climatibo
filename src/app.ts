// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});