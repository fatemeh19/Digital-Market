const express = require('express')
const Router = express.Router()
const path = require('path')
var User = require('../models/User');
var session=require("express-session");


/* this module uses for delete,put,patch request handling */
var methodOverride = require('method-override')

/* bodyParser using for extracting the body of requests.but for extracting the file you should use 
the multiparty and will use it for extracting and saving in the database */
const bodyParser = require('body-parser');
 const Mobile = require('../models/products/Mobile');
const Tablet = require('../models/products/Tablet');
const Laptop = require('../models/products/Laptop');

/**************************************MiddleWares**************************************************/
Router.use(bodyParser.urlencoded({extended:false}))
Router.use(bodyParser.json())

Router.use(express.static(__dirname));
Router.use(session({
    secret:"secret"

}))


Router.get('/',(req, res) => {
  res.render('home')

//   var tablet = new Tablet.TabletModel({
        
//         General:{
//           SimCardNumber : 1000,
//           ProductYear : 1111
//         }
   
//   })

//    tablet.save()

//    var mobile = new Mobile.MobileModel({
        
//     General:{
//       SimCardNumber : 1000,
//       ProductYear : 1111
//     }

// })

// mobile.save()

// var laptop = new Laptop.LaptopModel({
        
//   Battery :{
//     Property : "String,"
   
// }

// })
// laptop.save()

// mobile.save()



} )
    

   




     


Router.post('/register',(req, res) => {


        
        
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
    
Router.post('/Login',(req, res)=>{
  
  let user = req.body
  console.log(user)
  User.LoginCheck(user.username_email,user.password,user.rememberMe,(status,problem)=>{
  
    if(status==true){
      

      req.session.auth={username:user.username_email,password:user.password}
      req.session.checkbox=user.rememberMe
      console.log(req.session)

    }
    res.json({
      status:status,
      problem: problem
    })
    


  })

})
  
Router.post('/rememberMe',(req,res)=>{
  res.json(req.session)
    // variable is undefined
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
  


