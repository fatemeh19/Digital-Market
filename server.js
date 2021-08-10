const express = require('express')
const app =express()
const path = require('path')

const bodyParser = require('body-parser')
const home = require('./routs/home')

/******************************************MiddleWares********************************************/

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',home)

app.use("/static", express.static('./static/js'))
app.use("/static", express.static('./static/css'))
app.use("/static", express.static('./static/fonts'))
app.use("/static", express.static('./static/scss'))




app.listen(4000,'127.0.0.1',()=>{
    console.log("server is running on port 4000")
})