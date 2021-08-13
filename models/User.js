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
    username : String,
    password :String,
    email : String
});
let User_Model =  module.exports = mongoose.model("User",User_Schema);



/***************************************Functions**********************************************/

// module.exports.createUser = (newUser)=>{
//     newUser.save(callback);
// };

module.exports.RegisterCheck = (username,password,email,confirm_password,callback)=>{
    let errors=[false,false,false,false,false,false,false,false]
    console.log("Entered to function")
   
    // 0 => empty password
    // 1 => empty email
    // 2 => empty username
    // 3 => empty confirm_password
    // 4 => username is available
    // 5 => password not equals confirm_password 
    // 6 => user saved
    
    
    if(password=='' || username=='' || email=='' || confirm_password==''){

        console.log("empty is available")
        

        if(password=='')
        {
         errors[0]=true
   
        }
        if(email=='')
        {
         errors[1]=true  
        }
        
        if(username=='')
        {
         errors[2]=true 
        }
        
        if(confirm_password=='')
        {
         errors[3]=true 
        }
        
        callback(errors)
       
    }else{
        console.log("search for user avaiable")
        User_Model.findOne({username:username},function(err, user){
            
            
            if(user){
                console.log("user is avaiable")
                errors[4]=true
                console.log(errors)
                callback(errors)
                
            }
           
            else{
                
                    User_Model.findOne({email:email},function(err, user){
                
                
                        if(user){
                            console.log("email is avaiable")
                            errors[7]=true
                            console.log(errors)
                            callback(errors)
                            
                        }
                        else if(password!=confirm_password){
                            errors[5]=true
                            callback(errors)
                        }
                        else{
        
                            let NewUser=new User_Model({
                               
                                username : username,
                                password :password,
                                email : email
                            
                            })
                            NewUser.save()
                             errors[6]=true
                            callback(errors)
                        }
                    })
                    
               

                
            }

        })  

    }
    

     
    
    // if(password!=confirm_password)
    //  {
    //   errors[errors.length()]="password confirm is incorrect"  
    //  }
     
    
    
    
    
    
    
    
}




// user_student_model.findOne({username:req.session.auth.username},function(err,student){
//     if(student!=undefined){
//         var new_cm=new cm_model({
//             sender:req.session.auth.username,
//             content:req.body.cm
//         })
//         student.comments.push(new_cm)
//         res.json({status: true,cm:new_cm})
//         student.save()
//     }
//     else{
//         // res.json({status: false})
//     }



// })