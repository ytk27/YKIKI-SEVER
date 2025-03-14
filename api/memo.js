const express = require('express');
const memo = express.Router()

let data =[];

memo.get('/', function (req, res) {
    res.send(data)
})

memo.post('/insert', function (req, res) {
    data.push()
    res.send()
})


module.exports = memo;