const express = require('express');
const Operator = require('../models/Operator');

const router = express.Router();

router.get('/', async (req, res) => {
    Operator.find()
        .then( data => res.json(data) )
        .catch(err => res.json({ message: err }));
});

router.get('/:id', (req, res) => {
    Operator.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json({ message: err }));
});

router.post('/', (req, res) => {
    const operator = new Operator({
        Id: req.body.Id,
        ShortName: req.body.ShortName
    });

    operator.save()
    .then( data => res.json(data))
    .catch( err => res.json({message: err}) );

});

router.patch('/:id', (req, res) => {
    Operator.updateOne({_id: req.params.id}, { $set: { ShortName: req.body.ShortName } })
        .then(data => res.json(data))
        .catch(err => res.json({ message: err }));
});

router.delete('/:id', (req, res) => {
    Operator.remove({ _id: req.params.id })
        .then( data => res.json(data))
        .catch( err => res.json({message: err}));
});

module.exports = router;