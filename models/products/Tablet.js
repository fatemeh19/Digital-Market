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

module.exports.createTablet = (obj,callback)=>{
     
    if(obj.mobile.General.SimCardNumber == 'NaN'){
        obj.mobile.General.SimCardNumber = 0
    }
    if(obj.mobile.General.ProductYear=='NaN'){
        obj.mobile.General.ProductYear = 0
        
    }
    if(obj.mobile.Screen.Size=='NaN'){
        obj.mobile.Screen.Size = 0
    }
    let newTablet = new TabletModel({
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
    callback(newTablet)

    
  
    


}

module.exports.getTablets=(callback)=>{
    TabletModel.find({},(err, tablets)=> {
        callback(tablets)
        // console.log(mobiles)



    })
        
    
}

module.exports.removeTablet = (removeList,length)=>{
    if(length==1){
        TabletModel.find({ product_number:parseInt(removeList) }).remove().exec()

    }
    else{

    for (let index = 0; index < length; index++) {
        TabletModel.find({ product_number:parseInt(removeList[index]) }).remove().exec()
       
    }

    }
   
   
    

}

module.exports.getTablet = (product_number,callback)=>{
   
    TabletModel.findOne({ product_number:product_number},(err,product)=>{
        callback(product)
    })
 
 }
