const mongoose = require('mongoose');

const OperatorSchema = mongoose.Schema({
    Id: {
        type: String,
        required: true
    },
    ShortName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Operator', OperatorSchema);