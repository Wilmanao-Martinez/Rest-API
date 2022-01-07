const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const routes = require('./routes/routes.js');

app.listen(3000);
app.use('/', routes);

