var express = require('express');
var router = express.Router();
var Model=require('./baza');

router.get('/redvoznjeDB', function(req, res, next) {
  res.render('redvoznjeDB', { title: 'Express' });
});
router.post('/redvoznjeDB', function(req, res, next) {
    brojVoza1=req.body.brojvoza;
    destinacija1=req.body.destinacija;
    datumPolzka1=req.body.datum
    vreme1=req.body.vreme
    brojSlobodnihMesta1=req.body.brojmesta
    link1='/karta/'+ req.body.brojvoza

    console.log(req.body.destinacija)

      var Voz = new Model.vozoviModel(
        { 
            brojVoza:brojVoza1,
            destinacija:destinacija1,
            datumPolazka:datumPolzka1,
            vreme:vreme1,
            brojSlobodnihMesta:brojSlobodnihMesta1,
            link:link1
        }
        ).save().then(res.send('Uspesno upisano'));
   
});

module.exports = router;