let mongoose = require('mongoose');
var Product = require('./product');
const Mobile = require('./Mobile');

/*************************************Connecting To MongoDB***************************************/

mongoose.connect("mongodb://localhost:27017/Digital_Market", {useNewUrlParser: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});



let TabletModel = mongoose.model('Tablet', Mobile.MobileSchema);
module.exports.TabletModel=TabletModel
