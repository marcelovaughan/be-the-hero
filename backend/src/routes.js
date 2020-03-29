const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs/create', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents/create', IncidentController.create);
routes.delete('/incidents/delete/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions/create', SessionController.create);

module.exports = routes;