let config = {
  port: process.env.PORT || 8080,
  id: process.env.GOOGLE_ID,
  apiKey: process.env.GOOGLE_API_KEY,
  db: {
    host: 'localhost',
    port: 27017,
    name: 'search_history',
    address: process.env.MONGOLAB_URI
  }
};
if (!config.db.address) {
  config.db.address = `${config.db.host}:${config.db.port}/${config.db.name}`;
}
module.exports = config;
