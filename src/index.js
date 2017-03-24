const express = require('express');

const app = express();

const imageQuery = require('./image-query.js').imageQuery;

app.get('*', (req, res) => {
  imageQuery('test')
    .then(function(value) {
      console.log(value);
      res.send(value);
    });
});

app.listen(3000);
