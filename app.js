const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.user(bodyParser.json());
app.user(bodyParser.urlencoded({ extended: false }));

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
