const express = require('express')
const app =express()
const home = require('./routs/home')
const admin = require('./routs/admin')
<<<<<<< HEAD
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true, parameterLimit:5000000}));
=======
const product = require('./routs/product')

>>>>>>> 1f6e0bd0a456800b83a8c80db8634dda85f18830
/******************************************MiddleWares********************************************/
app.set('views','./views')
app.set('view engine','ejs')

app.use('/',home)
app.use("/admin",admin)
app.use("/product",product)

app.use("/static", express.static('./static'))
app.use("/static", express.static('./static/js'))
app.use("/static", express.static('./static/css'))
app.use("/static", express.static('./static/fonts'))
app.use("/static", express.static('./static/scss'))
app.use("/static", express.static('./static/img'))




app.listen(4000,'127.0.0.1',()=>{
    console.log("server is running on port 4000")
})

module.exports=app