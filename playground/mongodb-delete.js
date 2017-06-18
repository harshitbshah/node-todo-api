// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connent to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }); 

    //deleteMany (Users)
    // db.collection('Users').deleteMany({name: 'Harshit'}).then((result) => {
    //     console.log(result);
    // }); 

    //findOneAndDelete (Users)
    db.collection('Users').findOneAndDelete({_id: new ObjectID("59459e5934f97125ac5d6e50")}).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    });

    // db.close();
});