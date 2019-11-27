/**
 **/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) return console.log(`Error: ${error}`);
    console.log('Connected to DB');
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5ddd53a5ae48e800f23719cc")
    }, {
        $set: {
            completed: true,
        }
    }, {
        returnOriginal: false
    });
    db.close();
});




