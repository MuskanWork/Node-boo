'use strict';

const express = require('express');
const app = express();

const { initSeed } = require('./models/seed');
const port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// routes
const Router = require('./routes');
app.use(express.json());
app.use('/', Router);

// start server
app.listen(port);

// seed database
initSeed();

console.log('Express started. Listening on %s', port);
