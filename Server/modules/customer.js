const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
    Name :{
        type: String,
        required: true

    },
    Email: {
        type: String,
        required: true

    },
    Password: {
        type: String,
        required: true

    },
    Num: {
        type: String,
        required: true

    }
});

const user = mongoose.model('user', User);
module.exports = user;