const express = require('express')
const Router = express.Router()
const path = require('path')
var User = require('../models/User');

/* this module uses for delete,put,patch request handling */
var methodOverride = require('method-override')

/* bodyParser using for extracting the body of requests.but for extracting the file you should use 
the multiparty and will use it for extracting and saving in the database */
const bodyParser = require('body-parser')

/**************************************MiddleWares**************************************************/
Router.use(bodyParser.urlencoded({extended:false}))
Router.use(bodyParser.json())



Router.get('/',(req, res) => {
    

    res.sendFile(path.join(__dirname,'../views/home.html'))

})

     


Router.post('/register',(req, res) => {


        console.log("a post request")
        
        user = req.body
        
        User.RegisterCheck(user.username,user.password,user.email,user.confirm_password,(errors)=>{
          console.log(errors)
          res.json({
          empty_password : errors[0],
          empty_email : errors[1],
          empty_username : errors[2],
          empty_confirm:errors[3],
          available_username : errors[4],
          password_not_equal_confirm : errors[5],
          user_saved : errors[6],
          email_exists:errors[7]
         })





        })
        

        // 0 => empty password
        // 1 => empty email
        // 2 => empty username
        // 3 => empty confirm_password
        // 4 => username is available
        // 5 => password not equals confirm_password 
        // 6 => user saved
        // 7=> email  exists
         
        
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
  


