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
let LaptopSchema = Product.product({
    General :{
        Type: String,
        ProductYear : Number
    },
    Body :{
        Dimensions : String,
        Weight : String,
        TouchPad : String
    },
    
    Processor :{
         Producter: String,
         Type : String,
         Series : String,
         Core : String
        
    },
    Memory :{
        InternalMemory : String,
        Ram : String,
        
    },
    SoftwareAbility :{
        PersianSupporting : String,
        
    },
    Screen :{
        Touch : String,
        Size : Number,
        ScreenDimensions : String,
        resolution : String ,

    },
    Sound :{
        Speaker : String,
        JackSound : String,
        JackMic : String

    },
    Connections :{
        Wifi : String,
        Bluetooth : String,
        Radio :String,
        ConnectionPort : String
    },
    Camera :{
        webcam : String,
        VideoQuality : String,
       
    },
   
    Battery :{
        Property : String,
       
    }



}
    
);


let LaptopModel = mongoose.model('Laptop', LaptopSchema)
module.exports.LaptopModel = LaptopModel