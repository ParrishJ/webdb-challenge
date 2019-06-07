const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getProjectById,
    getActionsInProject,
    addProject
}

function getProjects() {
    return db('projects');
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function getActionsInProject(id) {
    return db('actions')
        .join('projects', 'projects.id', 'actions.project_id')
        .select('actions.id', 'actions.actionDescription', 'actions.actionNotes', 'actions.actionCompleted')
        .where('actions.project_id', id)
}

function getProjectById(id) {
    return db('projects')
        .first()
        .where('projects.id', id)
}