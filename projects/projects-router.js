const router = require('express').Router();
const Project = require('./projects-model.js');

router.post('/', (req, res) => {
    Project.addProject(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/', (req, res) => {
    Project.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    Project.getProjectById(id)
        .then(project => {
            Project.getActionsInProject(project.id)
                .then(actions => {
                    res.status(200).json({ 'id': project.id, "name": project.projectName, "description": project.projectDescription, "completed": project.projectCompleted, "actions": actions })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


module.exports = router;