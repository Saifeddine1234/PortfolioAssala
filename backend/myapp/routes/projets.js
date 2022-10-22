var express = require('express');
var app = module.exports = express.Router();
var bodyParser = require('body-parser');
var Projet = require('../models/projet');
var Contact = require('../models/contact');
var Login = require('../models/login');
const secretKey ="sdqf5ds5dd#ddfdf@fdfvgdçàdçàsddsdds"
const jwt = require("jsonwebtoken");
const verifyToken = require("../verifyToken")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

//delete project

app.delete('/delete/:id', async (req, res) => {
  console.log(req.params.id)
  await Projet.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('erreueeerrrrr') }
  });
});

//delete contact

app.delete('/delete_contact/:id', async (req, res) => {
  console.log(req.params.id)
  await Contact.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('erreueeerrrrr') }
  });
});

// ajouter produit
app.post('/add_projet', function (req, res) {
  var projet = new Projet({
    nomProjet : req.body.nomProjet,
    imageProjet : req.body.imageProjet,
    descriptionProjet : req.body.descriptionProjet ,
  });
  projet.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": projet });
  });
});


// ajouter contact
app.post('/add_contact', function (req, res) {
  var contact = new Contact({
    nomContact : req.body.nomContact,
    emailContact : req.body.emailContact,
    subjectContact : req.body.subjectContact ,
    messageContact : req.body.messageContact ,
  });
  contact.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": contact });
  });
});

app.get('/adminP',verifyToken , function(req , res){
console.log(req.decodedToken)
if(req && req.decodedToken){
  res.json({status : 'ok' , data :'ok' })

}else{
  res.json({status : 'no' , data :'no' })
}
})

app.post('/login', async(req,res) => {
  const username = req.body?.username
  const password = req.body?.password
  console.log('details', username, password);
   Login.findOne({username: 'asala'}).then(existUser => {
existUser = {_id : '100', username : 'asala' , password : 'asala'}
console.log(  existUser )
      if(existUser.username === username) {
        console.log('details', username, password);
              if(password === existUser?.password) {
                 const auth = jwt.sign(
                     { user_id: existUser._id, username },
                     'secretKey', {expiresIn : '1h'}
                   );
                   console.log(auth);
                 res.json({status: 'ok',loginUser : true, data: auth});
              } else {
                 res.json({status: 'no', loginUser : false, data: 'Please enter valid password'});
              }  
      } else {
          res.json({status: 'no2', loginUser : false, data: 'Please enter valid username'});

      }
      }, (error) => {
          res.json({status: 'error' , data : error})
      })
});


// read projet
app.get('/get_projet', function (req, res) {
  Projet.find((err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})



// read contact
app.get('/get_contact', function (req, res) {
  Contact.find((err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})



module.exports = app;
