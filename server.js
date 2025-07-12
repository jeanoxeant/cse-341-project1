const express = require('express');

const mongodb = require('./data/database');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
        console.log(`Database is listening and node Runing on port ${port}`);
        });
    }
});


/*
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Connection error:', err));

*/

