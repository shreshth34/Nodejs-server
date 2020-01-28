const express = require('express');
const crap = express();
var fs = require('fs')

crap.get('/listUsers',(req, res, next)=>{

    fs.readFile( './users.json', function (err, data) {
        if(err) throw err;
        const dataBuffer = data;
        const dataJSON = dataBuffer.toString()
        res.end(dataJSON); // send the json to browser use res.end
        console.log('data sent to browser')
    })
});

crap.post('/addUser', (req, res, next) => {
    const user = {
        "user4" : {
           "name" : "mohit",
           "password" : "password4",
           "profession" : "teacher",
           "id": 4
        }
     }

    fs.readFile('./users.json',(err, data) => {
        if(err) throw err;
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(data);
        console.log('working till here')
    });
});

crap.listen(3001);