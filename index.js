const express = require('express');
const config = require('./config.js');
const path = require('path');
const app = express();
const search = require('./routes/search');
const history = require('./routes/history');

// set up static
app.use(express.static(path.join(__dirname, 'static')));


// set up routes
app.use('/search', search);
app.use('/history', history);
app.all('*', function(req, res) {
  res.redirect('/');
});

app.listen(config.port);
