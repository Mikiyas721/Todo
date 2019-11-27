/**
 * Different Mongoose Queries:
 * 1.find()
 * 2.findOne()
 * The above two methods take an object with the _id prop set
 * 3.findById()
 * Takes the id directly. In all the methods we don't need to pass an ObjectId like the Mongo native library.
 * If Id isn't found the above methods don't fire an error rather return an empty array
 * An error if fired if the id is invalid.The ObjectId in the mongodb library validates id
 **/

let mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};