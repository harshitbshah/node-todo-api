// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connent to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5946a21060f609bd11468562")
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal : false 
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5945761d85ad5b162089766f")
    }, {
        $set : {
            name: 'Harshit'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});