const config = require('./config.js');

const got = require('got');

function imageQuery(searchQuery) {
  const entryUrl = 'https://www.googleapis.com/customsearch/v1?q=soccer&searchType=image&cx=' + config.id + '&key=' + config.apiKey;
  return got(entryUrl)
    .then(response => {
      var images = JSON.parse(response.body).items;
      return images;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

module.exports = {
  imageQuery
}
