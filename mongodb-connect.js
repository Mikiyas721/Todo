/**
 * Analogy of nonSql with sql database
 *    Sql                             nonSql
 * database                           database
 * table                              collection
 * row                                document
 * column                             field
 * */

/**We can get the MongoClient from the mongodb package
 *  - use the MongoCLient object to create a db using connect() method, passing in the url, 'mongodb://localhost:27017/TodoApp',
 *  and a call back function. Here TodoApp is the Database name.
 *  - use the db object passed into the call back function in the connect method to create collections and adding documents
 *    here use collection method of the db object and insertOne and other methods of collection() method to manipulate documents
 **/

/**ES6 Destructuring example
 * const {name} = {name:'Mikiyas',age:21}
 * */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) return console.log(`Unable to connect to server:${error}`);
    console.log('Connected to MongoDB Server');

    /* db.collection('Todos').insertOne({
         text: 'Complete section 7 of the Node Course',
         completed: false
     }, (error, result) => {
         if (error) return console.log(`Unable to insert data ${error}`);
         console.log(JSON.stringify(result.ops));
     });*/
    db.collection('Users').insertOne({
        name: 'Mikiyas Tesfaye',
        age: 21,
        location: 'Addis Ababa'
    }, (error, result) => {
        if (error) return console.log(`Error: ${error}`);
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
    db.close();
});





