let config = {
  port: process.env.PORT || 8080,
  id: process.env.GOOGLE_ID,
  apiKey: process.env.GOOGLE_API_KEY,
  db: {
    host: 'localhost',
    port: 27017,
    name: 'search_history',
    // adress: process.env.MONGOLAB_URI
  }
};
config.db.address = `${config.db.host}:${config.db.port}/${config.db.name}`;
module.exports = config;
