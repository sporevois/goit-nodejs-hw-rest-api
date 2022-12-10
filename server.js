const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const { DB_HOST, PORT } = process.env;

const connection = mongoose.connect(DB_HOST);

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful')
    })
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1)
  })
