const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const operatorsRoute = require('./routes/operators');
app.use('/operators', operatorsRoute);

mongoose
    .connect(process.env.DB_CONNECTION,
        { useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000
        }, () => console.log('connected to DB'))

app.listen(8080);