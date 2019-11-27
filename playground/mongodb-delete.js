/**Three method for deleting documents
 * 1.deleteMany
 * 2.deleteOne
 * 3.findOneAndDelete
 * */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) return console.log(`Error: ${error}`);
    console.log('Connected to DB');
    db.collection('Todos').deleteMany({text: 'Go to the gym'}).then((result)=>{console.log(`${result.result}`)});
});




