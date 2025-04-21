const express = require('express');
const messagesController = require('../controllers/messages.controller');

const messagesRoute = express.Router();

messagesRoute.get('/', messagesController.getMessages);
messagesRoute.get('/file', messagesController.getFile);

module.exports = messagesRoute;