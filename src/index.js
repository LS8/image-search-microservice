const express = require('express');

const url = require('url');

const app = express();

const imageQuery = require('./image-query.js');

const beautify = require('./beautify.js');

const serverUrl = '//localhost:3000';

app.get('/search', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const search = parsedUrl.query.q;
  const offset = parsedUrl.query.offset;
  imageQuery(search, offset)
    .then(function(value) {
      res.send(beautify(null, value));
    })
    .catch(function(err) {
      res.send(beautify(err, null));
    });
});
app.all('*', function(req, res) {
  res.redirect("localhost:3000/search");
});

app.listen(3000);
