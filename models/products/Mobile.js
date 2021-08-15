let mongoose = require('mongoose');
var Product = require('./product');

/*************************************Connecting To MongoDB***************************************/

mongoose.connect("mongodb://localhost:27017/Digital_Market", {useNewUrlParser: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

/**********************************************User Model***************************************/
var MobileSchema = Product.product({
    text: String,
    author: String
}
    
);
// MobileSchema.add({
    
// });

// var userSchema = UserSchema();
// var adminSchema = UserSchema({
//   anotherField: String
// });

let MobileModel = mongoose.model('Mobile', MobileSchema);
module.exports.MobileModel=MobileModel



