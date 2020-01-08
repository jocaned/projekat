var express = require('express');
var router = express.Router();
var Model=require('./baza');



router.get('/registracija',(req,res,next)=>{
    res.render('registracija', { title: 'Express' });
})

router.post('/registracija',(req,res,next)=>{
    console.log(req.body);
    var sifra1=req.body.sifra;
    var sifra2=req.body.sifraPonovljena;

    if(sifra1===sifra2){
        //rad sa bazom podataka
        var korisnikM = new Model.korisnikModel(
            { email: req.body.email,
              sifra:sifra1  
            }
            );
    }
    korisnikM.save();

    res.redirect('/');
})
   


module.exports = router;