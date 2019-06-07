const router = require('express').Router();
const Action = require('./actions-model.js');

router.post('/', (req, res) => {
    Action.addAction(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/', (req, res) => {
    Action.getActions()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});



module.exports = router;