var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/korisnici', {useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // povezani smo
  console.log('Povezani smo sa bazom')
});


var korisniciSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
        },
        sifra:{
            type:String,
            required:true
            }
  });

var korisnikModel = mongoose.model('korisnikModel', korisniciSchema);//model korisnika

var vozoviSchema = new mongoose.Schema({
  brojVoza:{type:String,required:true},
  destinacija:{type:String,required:true},
  datumPolazka:{type:String,required:true},
  vreme:{ type:String,required:true},
  brojSlobodnihMesta:{type:Number,required:true},
  link:{type:String,required:true},
        
  });

var vozoviModel=mongoose.model('vozoviModel',vozoviSchema)//model voza


module.exports={korisnikModel:korisnikModel,vozoviModel:vozoviModel};
