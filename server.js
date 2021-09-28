const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT;

app.use(cors({
    origin: 'https://budgettracker42.herokuapp.com/',
    methods: 'GET, POST, PUT, DELETE',
    optionsSuccessStatus: 200
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1/transactions', routes.transactions);
app.use('/api/v1/deposits', routes.deposits);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
