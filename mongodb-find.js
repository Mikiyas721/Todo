/**
 * TO fetch data off a database use the find method on the collection object,can either pass in a argument or not
 * We can use different methods on the cursor returned by the collection method, like toArray method.
 **/

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Connected to Mongodb server`);

    db.collection('Todos').find(        {
        _id: new ObjectID('5ddd53a5ae48e800f23719cc')})
        .toArray().then((docs) => {
        console.log(JSON.stringify(docs));
    }, (error) => {
        console.log(`Error: ${error}`);
    });
    db.close();
});