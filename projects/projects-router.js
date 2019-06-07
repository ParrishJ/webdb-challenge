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



module.exports = router;