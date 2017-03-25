const url = require('url');
const config = require('../config.js');
const dbAddress = config.db.address;
const db = require('monk')(dbAddress);
const history = db.get('history');
const imageQuery = require('../helpers/image-query.js');
const beautify = require('../helpers/beautify.js');

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const search = parsedUrl.query.q;
  const offset = parsedUrl.query.offset;
  if (!search) {
    res.send('Please enter something to search for');
  }
  imageQuery(search, offset)
    .then(function(value) {
      res.send(beautify(null, value));
    })
    .catch(function(err) {
      res.send(beautify(err, null));
    });
  // store search
  const date = new Date()
  history.insert({ searchTerm: search, when: date.toUTCString() });
};
