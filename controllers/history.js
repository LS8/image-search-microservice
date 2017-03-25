const config = require('../config.js');
const dbAdress = `${config.db.host}:${config.db.port}/${config.db.name}`;
const db = require('monk')(dbAdress);
const history = db.get('history');

module.exports = (req, res) => {
  history.find({}, { fields: { _id: 0 }, limit: 10, sort: { _id: -1}}).then(doc => {
    res.send(doc);
  });
};
