// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compainRoutes = require('./routes/compainRoutes');


const app = express();


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/compains', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB:', err));


app.use('/api', compainRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
require('./eureka-client');