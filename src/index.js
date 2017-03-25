const express = require('express');

const url = require('url');

const config = require('./config.js');

const imageQuery = require('./image-query.js');

const beautify = require('./beautify.js');

const dbAdress = `${config.db.host}:${config.db.port}/${config.db.name}`;
const app = express();

const db = require('monk')(dbAdress);

const history = db.get('history');

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
  // store search somewhere
  const date = new Date()
  history.insert({ searchTerm: search, when: date.toUTCString() });
});
// add '/history' route that shows recent searches
app.all('*', function(req, res) {
  res.redirect("localhost:3000/search");
});

app.listen(3000);
