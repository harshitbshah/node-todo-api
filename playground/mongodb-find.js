// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connent to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('594574e620cdff1044ae0031')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // },(err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({name: 'Harshit'}).toArray().then((res) => {
        console.log('Users');
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users');
    });

    // db.close();
});