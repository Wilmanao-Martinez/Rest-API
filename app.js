const mongoose = require('./MongoDB/mongoConnect.js');
const controller = require('./controllers/controllers.js');

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/routes.js');



app.listen(3000);
app.use('/', routes);

