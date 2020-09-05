const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/restaurant-dev';

mongoose
    .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology : true,
        useFindAndModify: false
    })
    .then(x => console.log(`Connected to Mongo! Database name : "${x.connections[0].name}"`))
    .catch(err => console.log('Error connecting to mongo', err));