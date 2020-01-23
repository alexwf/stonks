const { Router } = require('express');
const FinanceController = require('./controllers/FinanceController');

const routes = Router();

//routes.get('/finance', FinanceController.index);
routes.get('/finance', FinanceController.store);

module.exports = routes;
