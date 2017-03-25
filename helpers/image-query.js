const config = require('../config.js');
const got = require('got');

module.exports = function imageQuery(searchQuery, offset = 1) {
  const entryUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&searchType=image&start=${offset}&cx=${config.id}&key=${config.apiKey}`;
  return got(entryUrl)
    .then(response => {
      var images = JSON.parse(response.body).items;
      return images;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
