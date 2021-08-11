const express = require('express')
const Router = express.Router()
const path = require('path')
var mongoose = require('mongoose')
var User = require('../models/User');

/* this module uses for delete,put,patch request handling */
var methodOverride = require('method-override')

/* bodyParser using for extracting the body of requests.but for extracting the file you should use 
the multiparty and will use it for extracting and saving in the database */
const bodyParser = require('body-parser')

Router.use(bodyParser.urlencoded({extended:false}))
Router.use(bodyParser.json())



Router.get('/',(req, res) => {
    var newUser = new User({
        name:"fatemeh",
        username:"veysi",
        password:"1234",
        email:"fatemehveysi1378@gmail.com"
    });

        // Create User
        User.createUser(newUser, function(err, user){
            if(err)throw err;
            console.log(user);
        });

    res.sendFile(path.join(__dirname,'../views/index.html'))
    
  })


  module.exports = Router







































































//   Router.use(methodOverride(function (req, res) {
//     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//       // look in urlencoded POST bodies and delete it
//       var method = req.body._method
//       delete req.body._method
//       return method
//     }
//   }))
  
  
  
// Router.get('/firstpage/:id/:name',(req, res)=>{
//     console.log(req.params)
  
//     res.end("its dynamic url")
//   })
  
// Router.post('/post_a_thing',(req, res)=>{
   
//     res.send('this is post request')
  
//   })
  
// Router.delete('/',(req,res)=>{
//     res.send('this is delete request')
//   })
  


