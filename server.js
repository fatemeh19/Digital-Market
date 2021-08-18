const express = require('express')
const app =express()
const home = require('./routs/home')
const admin = require('./routs/admin')


/******************************************MiddleWares********************************************/
app.set('views','./views')
app.set('view engine','ejs')

app.use('/',home)
app.use("/admin",admin)
app.use("/static", express.static('./static/js'))
app.use("/static", express.static('./static/css'))
app.use("/static", express.static('./static/fonts'))
app.use("/static", express.static('./static/scss'))




app.listen(4000,'127.0.0.1',()=>{
    console.log("server is running on port 4000")
})

module.exports=app