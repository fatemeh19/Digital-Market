let mongoose = require('mongoose');
let util = require('util');

/*************************************Connecting To MongoDB***************************************/

mongoose.connect("mongodb://localhost:27017/Digital_Market", {useNewUrlParser: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

function UserSchema (add) {
    var schema = new Schema({
      someField: String
    });
  
    if(add) {
      schema.add(add);
    }
  
    return schema;
  }

module.exports.product = (add)=> {   
    let schema =new mongoose.Schema({
        type:String,  
        name:String,                            
        // product_number: Math.floor(Math.random() * 10000),
        brand:String,
        price:String

    })
    if(add) {
        schema.add(add);
      }
      return schema;
    //call super        
    //mongoose.Schema.apply(this, arguments);     
    //add                                     
    this.add({
        type:String,  
        name:String,                            
        product_number: Math.floor(Math.random() * 10000),
        brand:String,
        price:String
    });                                     
};

//util.inherits(module.exports.product, mongoose.Schema);