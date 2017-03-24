const express = require('express');

const url = require('url');

const app = express();

const imageQuery = require('./image-query.js');

const serverUrl = '//localhost:3000';

app.get('/search', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const search = parsedUrl.query.q;
  const offset = parsedUrl.query.offset;
  imageQuery(search, offset)
    .then(function(value) {
      // create module for handling value
      // displaying only the required contents
      res.send(value);
    })
    .catch(function(err) {
      res.send(err);
    });
});
app.all('*', function(req, res) {
  res.redirect("localhost:3000/search");
});

app.listen(3000);
