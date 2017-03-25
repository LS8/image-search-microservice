const config = require('../config.js');
const dbAddress = config.db.address;
const db = require('monk')(dbAddress);
const history = db.get('history');

module.exports = (req, res) => {
  history.find({}, { fields: { _id: 0 }, limit: 10, sort: { _id: -1}}).then(doc => {
    res.send(doc);
  });
};
