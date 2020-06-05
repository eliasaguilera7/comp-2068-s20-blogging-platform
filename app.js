const express = require('express');
const app = express();

const path = require('path');

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// This is going to serve to contact.js to load an image
app.use(express.static('../Lesson-03-06/views/pages/'));

// Our routes
const routes = require('./routes');
app.use('/', routes);

// Start our server
app.listen(process.env.PORT || 3000, port => console.log (`Listening on port ${port}`));