// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connent to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false    
    // }, (err , result) => {
    //     if(err)
    //         return console.log('Unable to insert todo', err);
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Harshit',
    //     age: 27,
    //     location: 'Gainesville'
    // }, (err, result) => {
    //     if(err)
    //         console.log('Unable to insert users', err);

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});