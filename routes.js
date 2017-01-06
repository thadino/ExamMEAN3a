/**
 * Created by Dino on 1/6/2017.
 */
/**
 * Created by mrlef on 1/5/2017.
 */

var express = require("express");
var crud = require('./ExamQuestion3A')
var app = express();

var arr = ["her er array"];
var intCreate = 0;
var intUpdate = 0;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.post("/create", function(req, res) {
    crud.connect(function(conn){
        console.log(conn);
        crud.insert(function(data) {
            res.send(data);
        })
    });
});

app.delete("/delete", function(req, res) {
    crud.connect(function(conn){
        console.log(conn);
        crud.deleteLast(function(data) {
            res.send(data);
        })
    });
});

app.put("/update", function(req, res) {
    crud.connect(function(conn){
        console.log(conn);
        crud.update(function(data) {
            res.send(data);
        })
    });
});

app.get("/get", function(req, res) {

    crud.connect(function(conn){
        console.log(conn);
        crud.findAll(function(data) {
            res.send(data);
        })
    });

});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})