
 
 let listItem = document.getElementsByClassName("right-nav-box")

function aa(a){
    document.getElementById("productManageDiv").classList.remove('active')
    document.getElementById("addProductDiv").classList.remove('active')
   
    switch (a) {
        case 'خانه' :
            
            break;
        case 'مدیریت محصولات' :
            document.getElementById("productManageDiv").classList.add('active')
            break 
        case 'مدیریت سفارشات' :
                break   
        case 'اضافه کردن محصول' :
            document.getElementById("addProductDiv").classList.add('active')
                break                     
    
        default:
            break;
    }

    
    
    for (let index = 1; index < 5; index++) {
        if(listItem[index].innerText!=a){
            
            listItem[index].style.backgroundColor="#1e1e62"
         }
         else{
            listItem[index].style.backgroundColor="#4d4d91"

         }
        
        
    }
    
    
    
}
function bb(sel){
 let selected = sel.options[sel.selectedIndex].text
 document.getElementById("addMobile").classList.remove("active")
 document.getElementById("addTablet").classList.remove("active")
 document.getElementById("addLaptop").classList.remove("active")
 switch (selected) {
     case 'موبایل':
        document.getElementById("addMobile").classList.add("active")
         
         break

     case 'تبلت':
        document.getElementById("addTablet").classList.add("active")

         
         
         break
    case 'لپ تاپ':
        document.getElementById("addLaptop").classList.add("active")
         
         break        
 
 }
 
    
}

var fileTag = document.getElementById("filetag")

function cc(){
    
    changeImage(document.getElementById("filetag"));

}

function changeImage(input) {
    console.log(input.files)
var reader;

if (input.files && input.files[0]) {
reader = new FileReader();

reader.onload = function(e) {
  var preview = document.getElementById("preview")
  preview.setAttribute('src', e.target.result)
  preview.style.width='313px'
 
}

reader.readAsDataURL(input.files[0]);
}
}

let addProduct = (productType)=>{

    
   
    console.log(productType)
    switch (productType) {
        case "laptop":
            let laptop = new Laptop.LaptopModel({

            })

            
            break;
        case "mobile" :
            let mobile={
                type:"mobile",  
                name:document.getElementById("productName").value,                            
                product_number: Math.floor(Math.random() * 10000000),
                brand:document.getElementById("productBrand").value,
                price:document.getElementById("productPrice").value,
                colors:document.getElementById("productColor").value,
                General :{
                    SimCardNumber :parseInt(document.getElementById("simCardNumber").value) ,
                    ProductYear : parseInt(document.getElementById("productYear").value)
                },
                Processor :{
                     Type : document.getElementById("processorType").value,
                    GraphicProcessor : document.getElementById("graphicProcessor").value
                },
                Memory :{
                    InternalMemory : document.getElementById("internalMemory").value,
                    Ram : document.getElementById("ram").value,
                    ExternalMemSupporting :document.getElementById("externalMemSupporting").value
                },
                Camera :{
                    Type : document.getElementById("cameraType").value,
                    PicQuality : document.getElementById("cameraQuality").value,
                     Panorama : document.getElementById("panorama").value,
                    VideoQuality : document.getElementById("videoQuality").value,
                    SelfieCamera : document.getElementById("selfieCamera").value
                },
                Screen :{
                    Touch : document.getElementById("touchScreen").value,
                    Size : parseInt(document.getElementById("screenSize").value),
                    ScreenDimensions : document.getElementById("screenDimensions").value,
                    resolution : document.getElementById("resolution").value ,
                    ScreenProtector : document.getElementById("ScreenProtector").value
            
                },
                Body :{
                    Dimensions : document.getElementById("dimensions").value,
                    Weight : document.getElementById("weight").value,
                    Material : document.getElementById("material").value,
                    ExteraAbility : document.getElementById("exteraAbility").value
                },
                SoftwareAbility :{
                    OperatingSystem : document.getElementById("operatingSystem").value,
                    PersianSupporting : document.getElementById("persianSupporting").value,
                    PersainMenu : document.getElementById("persianMenu").value,
                    PlayMusicFormats : document.getElementById("playMusicFormats").value,
                    PlayVideoFormats : document.getElementById("PlayVideoFormats").value
                },
                Connections :{
                    ConnectionNetWorks: document.getElementById("connectionNetworks").value,
                    ConnectionTechnology: document.getElementById("connectionTechnology").value,
                    Wifi : document.getElementById("wifi").value,
                    Bluetooth : document.getElementById("bluetooth").value,
                    Radio :document.getElementById("radio").value,
                    GpsTechnology : document.getElementById("gps").value,
                    ConnectionPort : document.getElementById("connectionPort").value
                },
                Sound :{
                    Speaker : document.getElementById("speaker").value,
                    SoundOutput : document.getElementById("soundOutput").value,
                    Jack : document.getElementById("jack").value
            
                },
                Battery :{
                    Changable : document.getElementById("Changablebattery").value,
                    Property : document.getElementById("batteryProperty").value,
                    PlayMusiccharge: document.getElementById("playMusiccharge").value
                }
            
                
            }
            
            $.post('/admin/addMobile',{mobile:mobile},(data)=>{
                console.log(data)

            })
                                    
           

            
            
            break;

        case "tablet" :
            let tablet = new Tablet.TabletModel({

            })
            
            break;    

    }
    
    


}