let mongoose = require('mongoose');

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
        name:String,                            
        product_number: Number,
        brand:String,
        price:String,
        colors:String,
        img: String


    })
    if(add) {
        schema.add(add);
      }
      return schema;
    
                                     
};
