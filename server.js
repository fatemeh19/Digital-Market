const express = require('express')
const app =express()
const path = require('path')

app.use("/static", express.static('./static/js'))
app.use("/static", express.static('./static/css'))
app.use("/static", express.static('./static/fonts'))
app.use("/static", express.static('./static/scss'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
   
})

app.listen(4000,'127.0.0.1',()=>{
    console.log("server is running on port 4000")
})