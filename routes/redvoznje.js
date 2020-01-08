var express = require('express');
var router = express.Router();
var Model=require('./baza');

router.get('/redvoznje', function(req, res, next) {
      Model.vozoviModel.find({},function(err,data){
        res.render('redvoznje', { vozovi:data })
    })
});

module.exports = {router};