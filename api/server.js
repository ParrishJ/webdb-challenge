const express = require('express');

const actionsRouter = require('../actions/actions-router.js');
const projectsRouter = require('../projects/projects-router.js');

const server = express();
server.use(express.json());

server.use('/api/projects', projectsRouter);

//may wand to add actions router!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = server;