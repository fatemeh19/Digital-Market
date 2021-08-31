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

module.exports.createMobile = (obj,callback)=>{
    
    if(obj.mobile.General.SimCardNumber == 'NaN'){
        obj.mobile.General.SimCardNumber = 0
    }
    if(obj.mobile.General.ProductYear=='NaN'){
        obj.mobile.General.ProductYear = 0
        
    }
    if(obj.mobile.Screen.Size=='NaN'){
        obj.mobile.Screen.Size = 0
    }
    let newMobile = new MobileModel({
        name:obj.mobile.name,                            
        product_number:obj.mobile.product_number,
        brand:obj.mobile.brand,
        price:obj.mobile.price,
        colors:obj.mobile.colors,
        img:obj.mobile.img,
           
        General :{
            SimCardNumber :obj.mobile.General.SimCardNumber ,
            ProductYear :obj.mobile.General.ProductYear 
        },
        Processor :{
             Type : obj.mobile.Processor.Type,
            GraphicProcessor : obj.mobile.Processor.GraphicProcessor
        },
        Memory :{
            InternalMemory : obj.mobile.Memory.InternalMemory,
            Ram : obj.mobile.Memory.Ram,
            ExternalMemSupporting :obj.mobile.Memory.ExternalMemSupporting
        },
        Camera :{
            Type : obj.mobile.Camera.Type,
            PicQuality : obj.mobile.Camera.PicQuality,
             Panorama : obj.mobile.Camera.Panorama,
            VideoQuality : obj.mobile.Camera.VideoQuality,
            SelfieCamera : obj.mobile.Camera.SelfieCamera
        },
        Screen :{
            Touch : obj.mobile.Screen.Touch,
            Size :obj.mobile.Screen.Size ,
            ScreenDimensions : obj.mobile.Screen.ScreenDimensions,
            resolution : obj.mobile.Screen.resolution ,
            ScreenProtector : obj.mobile.Screen.ScreenProtector
    
        },
        Body :{
            Dimensions : obj.mobile.Body.Dimensions,
            Weight : obj.mobile.Body.Weight,
            Material : obj.mobile.Body.Material,
            ExteraAbility : obj.mobile.Body.ExteraAbility
        },
        SoftwareAbility :{
            OperatingSystem : obj.mobile.SoftwareAbility.OperatingSystem,
            PersianSupporting : obj.mobile.SoftwareAbility.PersianSupporting,
            PersainMenu : obj.mobile.SoftwareAbility.PersainMenu,
            PlayMusicFormats : obj.mobile.SoftwareAbility.PlayMusicFormats,
            PlayVideoFormats : obj.mobile.SoftwareAbility.PlayVideoFormats
        },
        Connections :{
            ConnectionNetWorks: obj.mobile.Connections.ConnectionNetWorks,
            ConnectionTechnology: obj.mobile.Connections.ConnectionTechnology,
            Wifi : obj.mobile.Connections.Wifi,
            Bluetooth : obj.mobile.Connections.Bluetooth,
            Radio :obj.mobile.Connections.Radio,
            GpsTechnology : obj.mobile.Connections.GpsTechnology,
            ConnectionPort : obj.mobile.Connections.ConnectionPort
        },
        Sound :{
            Speaker : obj.mobile.Sound.Speaker,
            SoundOutput : obj.mobile.Sound.SoundOutput,
            Jack : obj.mobile.Sound.Jack
    
        },
        Battery :{
            Changable : obj.mobile.Battery.Changable,
            Property : obj.mobile.Battery.Property,
            PlayMusiccharge: obj.mobile.Battery.PlayMusiccharge
        }
    


    })
    
    callback(newMobile)

    
  
    


}

module.exports.getMobiles=(callback)=>{
    MobileModel.find({},(err, mobiles)=> {
        callback(mobiles)
         




    })
        
    
}
module.exports.removeMobile = (removeList,length)=>{
    if(length==1){
        MobileModel.find({ product_number:parseInt(removeList) }).remove().exec()


    }
   
    for (let index = 0; index < length; index++) {
        MobileModel.find({ product_number:parseInt(removeList[index]) }).remove().exec()
       
    }
    

}

module.exports.getMobile = (product_number,callback)=>{
   
   MobileModel.findOne({ product_number:product_number},(err , product)=>{
       
       callback(product)
   })

}

module.exports.updateMobile = (obj,callback)=>{
    
    MobileModel.findOne({ product_number:obj.product_number},(err , MobileProduct)=>{

        MobileProduct.name = obj.name                         
        MobileProduct.product_number=obj.product_number 
        MobileProduct.brand= obj.brand,
        MobileProduct.price= obj.price,
        MobileProduct.colors=obj.colors,
        MobileProduct.img=obj.img
        MobileProduct.General.SimCardNumber =parseInt(obj.General.SimCardNumber)
        MobileProduct.General.ProductYear =parseInt(obj.General.ProductYear),
             
        
         
        MobileProduct.Processor.Type = obj.Processor.Type,
        MobileProduct.Processor.GraphicProcessor = obj.Processor.GraphicProcessor
        
        
        MobileProduct.Memory.InternalMemory = obj.Memory.InternalMemory,
        MobileProduct.Memory.Ram =obj.Memory.Ram ,
        MobileProduct.Memory.ExternalMemSupporting =obj.Memory.ExternalMemSupporting
    
        
        MobileProduct.Camera.Type = obj.Camera.Type,
        MobileProduct.Camera.PicQuality = obj.Camera.PicQuality,
        MobileProduct.Camera.Panorama = obj.Camera.Panorama,
        MobileProduct.Camera.VideoQuality = obj.Camera.VideoQuality ,
        MobileProduct.Camera.SelfieCamera = obj.Camera.SelfieCamera 
        
        
        MobileProduct.Screen.Touch = obj.Screen.Touch,
        MobileProduct.Screen.Size =parseInt(obj.Screen.Size ) ,
        MobileProduct.Screen.ScreenDimensions = obj.Screen.ScreenDimensions ,
        MobileProduct.Screen.resolution = obj.Screen.resolution ,
        MobileProduct.Screen.ScreenProtector = obj.Screen.ScreenProtector

        
        
        MobileProduct.Body.Dimensions = obj.Body.Dimensions,
        MobileProduct.Body.Weight = obj.Body.Weight,
        MobileProduct.Body.Material = obj.Body.Material,
        MobileProduct.Body.ExteraAbility = obj.Body.ExteraAbility
        
       
        MobileProduct.SoftwareAbility.OperatingSystem = obj.SoftwareAbility.OperatingSystem,
        MobileProduct.SoftwareAbility.PersianSupporting = obj.SoftwareAbility.PersianSupporting,
        MobileProduct.SoftwareAbility.PersainMenu = obj.SoftwareAbility.PersainMenu ,
        MobileProduct.SoftwareAbility.PlayMusicFormats = obj.SoftwareAbility.PlayMusicFormats,
        MobileProduct.SoftwareAbility.PlayVideoFormats = obj.SoftwareAbility.PlayVideoFormats
    
        
        MobileProduct.Connections.ConnectionNetWorks= obj.Connections.ConnectionNetWorks,
        MobileProduct.Connections.ConnectionTechnology= obj.Connections.ConnectionTechnology,
        MobileProduct.Connections.Wifi = obj.Connections.Wifi ,
        MobileProduct.Connections.Bluetooth = obj.Connections.Bluetooth ,
        MobileProduct.Connections.Radio =obj.Connections.Radio,
        MobileProduct.Connections.GpsTechnology = obj.Connections.GpsTechnology,
        MobileProduct.Connections.ConnectionPort = obj.Connections.ConnectionPort
       
       
        MobileProduct.Sound.Speaker = obj.Sound.Speaker,
        MobileProduct.Sound.SoundOutput = obj.Sound.SoundOutput,
        MobileProduct.Sound.Jack = obj.Sound.Jack 

    
         
        MobileProduct.Battery.Changable = obj.Battery.Changable,
        MobileProduct.Battery.Property = obj.Battery.Property,
        MobileProduct.Battery.PlayMusiccharge = obj.Battery.PlayMusiccharge 

        callback(MobileProduct)
    

        
    })
    
    
   
  
 
 }


