var express = require('express');
var router = express.Router();
var vozovi=require('./redvoznje');
var Model=require('./baza');


router.get('/karta/:broj', function(req, res, next) {
 console.log(req.params.broj);
 var BSM;
    console.log(typeof(req.params.broj))
    Model.vozoviModel.findOne({brojVoza:req.params.broj},function(err,data){
        
        BSM=data.brojSlobodnihMesta-1;
        
        if(BSM>1){
        Model.vozoviModel.updateOne({brojVoza:req.params.broj},
            {$set:{brojSlobodnihMesta:BSM}},function(err){}).then(res.render('kupljenaKarta',{voz:data}));
        }
        else{
            res.send('Nema dovoljno karata');
        }
    })
      
})
    
router.post('karta',(req,res,next)=>{
//Zavrsi bazu
})
module.exports = router;