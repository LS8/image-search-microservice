const express = require('express');

const got = require('got');

const id = '012708087707299883548:rfasmotcxlc';
const apiKey = 'AIzaSyBS-dhgFCdnZ-0srZhaFBiiV2xi9LySfWs';

const app = express();

app.get('*', (req, res) => {
  const entryUrl = 'https://www.googleapis.com/customsearch/v1?q=soccer&searchType=image&cx=' + id + '&key=' + apiKey;
  got(entryUrl)
    .then(response => {
      console.log(response.body);
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.end();
    });

});

app.listen(3000);
