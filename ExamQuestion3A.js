/**
 * Created by Dino on 1/6/2017.
 */




// Question 1 ----- Explain generally, what is meant by a NoSQL database.

// NoSQL er god til skalere op til at understøtte et stort klientel
// Der er ikke relation mellem tabellerne og de er gemt som dokumenter.
// Har altid en høj consistent performance.
// Simpelt design
// Bedre kontrol over tilgængeligheden.


//  Question 2 -----    Explain Pros & Cons in using a NoSQL database like MongoDB as your data store,
//     compared to a traditional Relational SQL Database like MySQL.

/*
NoSQL:
Pros:
Bruger JSON objekter i quereries
God til at skalere
God Performance
Bruger ikke skemaer
Bygget i nyere tid.
Kører godt med clusters.
Open Source


Cons:
Har ikke været rundt i lang tid.

Den garantere ikke ACID (Atomicity, Consistency, Isolation, Durability)
Atomicity
 Everything in a transaction must happen successfully or none of the changes are committed.

Consistency
 The data will only be committed if it passes all the rules in place in the database

Isolation
 Transactions won't affect other transactions by changing data that another operation is counting

Durability
 Once data is committed, it is durably stored and safe against errors
 Instead it offers Eventual Consistency

*/


//  Question 3 -----    Explain how databases like MongoDB and redis would be classified in the NoSQL world

/*
Hvad er Redis?
Redis er en Key-Value Store type (Database)
Den er kendt for at være ekstremt hurtigt.



Hvad er MongoDB?
MongoDB er et Document Store Type (Database)

*/

// Question 4 -----  Explain reasons to add a layer like Mongoose, on top on of a schema-less database
// like MongoDB

/*
Det inkludere Skemaer
Type casting er indbygget
Validering (includeret  i MongoDB fra v. 3.2)
Der findes middleware
Man kan lave Quereries.

 */




// Question 5 ----- Pick one of the two options below:


//      Explain, and demonstrate, using relevant examples, the strategy for querying
//     MongoDB (all CRUD operations)


//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/ex3a';

var userss = "";
var dben = "";

exports.connect =  function (cb)
{
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    var users = db.collection('users');
     dben = db
    userss = users;
    if (err) {
        cb('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        cb('Connection established to', url);



        // RUN HERE

        // update();
        // findAll();
        // deleteLast();
        // insert();

    }
})
}

exports.insert =  function (cb)
{
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
    var user2 = {name: 'modulus user', age: 22, roles: ['user']};
    var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};
userss.insertMany([user1, user2, user3], function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:',
            result.length, result);
        cb(result);
    }

});
    dben.close();
}


exports.findAll =  function (cb)
{
userss.find().toArray(function (err, result) {
    console.log("her er alle menneskerne i byen - ");

    result.forEach(function (user)
        {
            console.log("name: " + user.name + ", age: " +  user.age )
        }

    )
    cb(result)
    dben.close();

});

}

exports.deleteLast =  function (callback)
{
userss.find().toArray(function (err, result) {
console.log(result[result.length-1].age)
    userss.remove( { _id: result[result.length-1]._id }, function (x){
        console.log("her er x" + x)
        callback("sletningen er gennemført")
        dben.close();
    } )
});
}

exports.update =  function (cb)
{
    userss.find().toArray(function (err, result) {

        userss.updateOne(
            { age : result[0].age },
            {
                $set: { age: 5}
            },
            function(y)
            {

                cb("updateringen er gennemført")

            }
        )

    })
}




// Question 6 ----- Explain, using a relevant example, a full MEAN application (the A, can be an ionic
// application)

// kør routes.js for at starte serveren og derefter højre klik og tryk kør på index.html
// api pathsne er /create, /get, /delete, /update, og står under routes.js

