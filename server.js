const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1/transactions', routes.transactions);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
