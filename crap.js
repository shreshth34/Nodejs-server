const express = require('express');
const crap = express();
var fs = require('fs')

crap.get('/listUsers',(req, res, next)=>{

    fs.readFile( './users.json', function (err, data) {
        if(err) throw err;
        const dataBuffer = data;
        const dataJSON = dataBuffer.toString()
        res.send(dataJSON);
    })
});

crap.listen(3000);