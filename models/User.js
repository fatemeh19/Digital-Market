let mongoose = require('mongoose');

/*************************************Connecting To MongoDB***************************************/

mongoose.connect("mongodb://localhost:27017/Digital_Market", {useNewUrlParser: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

/**********************************************User Model***************************************/

let User_Schema=new mongoose.Schema({
    name: String,
    username : String,
    password :String,
    email : String
});
let User_Model =  module.exports = mongoose.model("User",User_Schema);



module.exports.createUser = function(newUser,callback){
    newUser.save(callback);
};
/***************************************Functions**********************************************/
// module.exports.createUser = (newUser,callback)=>{
    
//         if(err) throw err;

//         // Set Hashed password
//         newUser.password = hash;

//         // Create User
//         newUser.save(callback);
    
// }