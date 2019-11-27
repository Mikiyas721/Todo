let {mongoose} = require('../db/mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }
});

module.exports = {User};