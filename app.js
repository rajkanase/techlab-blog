const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var routes = require('./routes/index');
mongoose.Promise = global.Promise;

const app = express();
const port = 3000;
const databaseURL = 'mongodb://localhost:27017/blog-app';

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/api', routes);

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true }, function () { }).then(() => {
    console.log("Successfully connected to database");
}).catch(err => {
    console.error('Error connecting database', err.stack);
    process.exit(1);
});


app.listen(port, () => {
    console.log('Server is running on port ' + port);
})



