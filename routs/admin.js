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

// Router.use(express.bodyParser({limit: '50mb'}));

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

  Mobile.createMobile(req.body,(mobileModel)=>{
    mobileModel.save()
      res.json({status:"true"})

    })
    
  
})

Router.post('/addTablet',(req, res) => {
  console.log(req.body)
  
  Tablet.createTablet(req.body,(tabletModel)=>{
    tabletModel.save()

    res.json({status:"true"})

  })
  

})
Router.post('/getAllMobiles',(req,res)=>{
  // console.log("heeeeey")
  Mobile.getMobiles((mobiles)=>{
    res.json({mobiles:mobiles})

  })

})

Router.post('/getAllTablets',(req,res)=>{
  // console.log("heeeeey")
  Tablet.getTablets((tablets)=>{
    res.json({tablets:tablets})

  })

})

Router.post('/removeMobile',(req,res)=>{

   Mobile.removeMobile(req.body['removeList[]'],req.body.length)
   res.json({status:"true"})
  

})
Router.post('/removeTablet',(req,res)=>{
  
  Tablet.removeTablet(req.body['removeList[]'],req.body.length)
  res.json({status:"true"})
 

})

Router.post('/getSpecialProduct',(req,res)=>{
  
  
  Mobile.getMobile(req.body['product_number'],(result1)=>{
    
    Tablet.getTablet(req.body['product_number'],(result2)=>{
      mainRes = result1 || result2
      res.json({mainRes})
      


    })

})

Router.post('/updateMobile',(req, res)=>{
  
  Mobile.updateMobile(req.body,(MobileProduct)=>{
    MobileProduct.save()
    res.json({status:"true"})
  })

})

  



})


module.exports = Router

