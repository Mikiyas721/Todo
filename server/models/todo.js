let {mongoose} = require('../db/mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,         //Removes empty space at the beginning or end of text
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};