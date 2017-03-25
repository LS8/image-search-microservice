const config = {
  port: 3000,
  id: process.env.GOOGLE_ID,
  apiKey: process.env.GOOGLE_API_KEY,
  db: {
    host: 'localhost',
    port: 27017,
    name: 'search_history'
  }
};
module.exports = config;
