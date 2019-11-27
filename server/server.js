/**
 * Rest API contains basic CRUD operation
 * Https POST method is used to create a resource
 **/

/**
 * Any of the express methods like post and get take two parameters:
 * 1. Route
 * 2. Call Back function called with the request and response
 *  -- we can send a response using response.send()
 *  -- we can get the request using request.body()
 *  A best practice when send a response is to send it in an object as a field, this way we can send other things as well
 **/
let express = require('express');
let bodyParser = require('body-parser');
let {ObjectId} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    console.log(request.body);
    let todo = new Todo({
        text: request.body.text
    });
    todo.save().then((result) => {
        response.send(result);
    }, (error) => {
        response.status(400).send(error);
    });
});

app.get('/todos', (request, response) => {
    Todo.find().then((result) => {
        response.send({result})
    }, (error) => {
        response.status(404).send(error);
    });
});

app.get('/todos/:id', (request, response) => {
    let id = request.params.id;
    if (ObjectId.isValid(id)) {
        Todo.findById(id).then((result) => {
            response.send(result);
        }, (error) => {
            response.status(404).error(error);
        });
    } else {
        response.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});


/*
new Todo({text: 'Edit code and push'}).save().then((document) => {
    console.log(`Saved: ${document}`)
}, (error) => {
    console.log(`Error: ${error}`)
});

new User({email: 'Mikiyas721@gmail.com'}).save().then((document) => {
}, (error) => {
    console.log(`Error: ${error}`)
});
*/













