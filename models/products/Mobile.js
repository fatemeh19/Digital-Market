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
let MobileSchema = Product.product({
    General :{
        SimCardNumber : Number,
        ProductYear : Number
    },
    Processor :{
         Type : String,
        GraphicProcessor : String
    },
    Memory :{
        InternalMemory : String,
        Ram : String,
        ExternalMemSupporting :String
    },
    Camera :{
        Type : String,
        PicQuality : String,
         Panorama : String,
        VideoQuality : String,
        SelfieCamera : String
    },
    Screen :{
        Touch : String,
        Size : Number,
        ScreenDimensions : String,
        resolution : String ,
        ScreenProtector : String

    },
    Body :{
        Dimensions : String,
        Weight : String,
        Material : String,
        ExteraAbility : String
    },
    SoftwareAbility :{
        OperatingSystem : String,
        PersianSupporting : String,
        PersainMenu : String,
        PlayMusicFormats : String,
        PlayVideoFormats : String
    },
    Connections :{
        ConnectionNetWorks: String,
        ConnectionTechnology: String,
        Wifi : String,
        Bluetooth : String,
        Radio :String,
        GpsTechnology : String,
        ConnectionPort : String
    },
    Sound :{
        Speaker : String,
        SoundOutput : String,
        Jack : String

    },
    Battery :{
        Changable : String,
        Property : String,
        PlayMusiccharge: String
    }



}
    
);
module.exports.MobileSchema = MobileSchema

let MobileModel = mongoose.model('Mobile', MobileSchema)
module.exports.MobileModel=MobileModel

module.exports.createMobile = (obj)=>{
    let newMobile = new MobileModel(obj)
    // newMobile.Memory=
    //  newMobile=obj
    console.log(obj['Screen'])
    // console.log(newMobile)
    //  console.log(obj.name)
    


}



