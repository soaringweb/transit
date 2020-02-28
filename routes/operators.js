const express = require('express');
const Operator = require('../models/Operator');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on operators');
});

router.post('/', (req, res) => {
    const operator = new Operator({
        Id: req.body.Id,
        ShortName: req.body.ShortName
    });

    operator.save().then( data => {
        res.json(data)
    }).catch( err => res.json({message: err}) );

});

module.exports = router;