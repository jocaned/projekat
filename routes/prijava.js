var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Model=require('./baza');

//model korisnika
router.get('/prijava', function(req, res, next) {
  res.render('prijava', { title: 'Express' });
});

router.post('/prijava',(req,res,next)=>{
emailR=req.body.email;
sifraR=req.body.sifra;

Model.korisnikModel.findOne({email:emailR},(err,docs)=>{
console.log(docs);

if(docs!=null){
if(docs.sifra==sifraR)
    res.redirect('/redvoznje')
  else{
    res.redirect('/prijava')
  }
}else{
  res.redirect('/prijava')
}

})
console.log(req.body)

})
module.exports = router;