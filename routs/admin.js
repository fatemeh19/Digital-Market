const express = require('express')
const Router = express.Router()
const path = require('path')
var User = require('../models/User');
var session=require("express-session");
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });


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


// Router.get('/',(req, res) =>  res.render('Admin/admin-page'))
Router.get('/',(req, res) => {
  res.render('Admin/admin-page')
})

Router.post('/addMobile',(req, res) => {
  console.log(req.body)

  Mobile.createMobile(req.body,(mobileModel)=>{
    mobileModel.save()
      res.json({status:"true"})

    })
    
  
})

Router.post('/addTablet',upload.single('file'),(req, res) => {
  console.log(req.body)
  
  Tablet.createTablet(req.body,(tabletModel)=>{
    tabletModel.save()

    res.json({status:"true"})

  })
  

})

module.exports = Router

