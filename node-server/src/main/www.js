const app = require('../../app');
const syncDb = require('./sync-db');

syncDb().then(() => {
  console.log('Sync database');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
