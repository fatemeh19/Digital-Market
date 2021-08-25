let globalVarMobile = false
let globalVarTablet = false
let globalVarLaptop = false
 
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
    // fileTag.hide();
}

function changeImage(input) {
    
var reader;

if (input.files && input.files[0]) {
reader = new FileReader();


reader.onload = function(e) {
  var preview = document.getElementById("preview")
  preview.setAttribute('src', e.target.result)
  preview.style.width = '412px'
  preview.style.height = '373px'
//   preview.style.maxWidth='507px'
 
}

reader.readAsDataURL(input.files[0]);
}
}

let addProduct = (productType)=>{

    
   
    
    switch (productType) {
        case "laptop":
           

            
            break;

        case "mobile" :
            

            
            let mobile={ 
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
                },
                
            
                
            }
            
            $.post('/admin/addMobile',{mobile:mobile},(data)=>{

                if(data.status){
                    clear()
                    setPopUp()
                    
                }

            })
                                    
           

            
            
            break;

        case "tablet" :
            console.log("tablet")
            let tablet={ 
                
                name:document.getElementById("productName").value,                            
                product_number: Math.floor(Math.random() * 10000000),
                brand:document.getElementById("productBrand").value,
                price:document.getElementById("productPrice").value,
                colors:document.getElementById("productColor").value,
                General :{
                    SimCardNumber :parseInt(document.getElementById("simCardNumber1").value) ,
                    ProductYear : parseInt(document.getElementById("productYear1").value)
                },
                Processor :{
                     Type : document.getElementById("processorType1").value,
                    GraphicProcessor : document.getElementById("graphicProcessor1").value
                },
                Memory :{
                    InternalMemory : document.getElementById("internalMemory1").value,
                    Ram : document.getElementById("ram").value,
                    ExternalMemSupporting :document.getElementById("externalMemSupporting1").value
                },
                Camera :{
                    Type : document.getElementById("cameraType1").value,
                    PicQuality : document.getElementById("cameraQuality1").value,
                     Panorama : document.getElementById("panorama1").value,
                    VideoQuality : document.getElementById("videoQuality1").value,
                    SelfieCamera : document.getElementById("selfieCamera1").value
                },
                Screen :{
                    Touch : document.getElementById("touchScreen1").value,
                    Size : parseInt(document.getElementById("screenSize1").value),
                    ScreenDimensions : document.getElementById("screenDimensions1").value,
                    resolution : document.getElementById("resolution1").value ,
                    ScreenProtector : document.getElementById("ScreenProtector1").value
            
                },
                Body :{
                    Dimensions : document.getElementById("dimensions1").value,
                    Weight : document.getElementById("weight1").value,
                    Material : document.getElementById("material1").value,
                    ExteraAbility : document.getElementById("exteraAbility1").value
                },
                SoftwareAbility :{
                    OperatingSystem : document.getElementById("operatingSystem1").value,
                    PersianSupporting : document.getElementById("persianSupporting1").value,
                    PersainMenu : document.getElementById("persianMenu1").value,
                    PlayMusicFormats : document.getElementById("playMusicFormats1").value,
                    PlayVideoFormats : document.getElementById("PlayVideoFormats1").value
                },
                Connections :{
                    ConnectionNetWorks: document.getElementById("connectionNetworks1").value,
                    ConnectionTechnology: document.getElementById("connectionTechnology1").value,
                    Wifi : document.getElementById("wifi1").value,
                    Bluetooth : document.getElementById("bluetooth1").value,
                    Radio :document.getElementById("radio1").value,
                    GpsTechnology : document.getElementById("gps1").value,
                    ConnectionPort : document.getElementById("connectionPort1").value
                },
                Sound :{
                    Speaker : document.getElementById("speaker1").value,
                    SoundOutput : document.getElementById("soundOutput1").value,
                    Jack : document.getElementById("jack1").value
            
                },
                Battery :{
                    Changable : document.getElementById("Changablebattery1").value,
                    Property : document.getElementById("batteryProperty1").value,
                    PlayMusiccharge: document.getElementById("playMusiccharge1").value
                },
                
               
            
                
            }
            $.post('/admin/addTablet',{mobile:tablet},(data)=>{

                if(data.status){

                    clear()
                    setPopUp()
                     
                }

            })
            
            break;    

    }
    
    


}

let setPopUp = ()=>{
    document.getElementById("popUp").classList.add("popUp-box")
    document.getElementById("p").style.display="block"
    document.getElementById("popUp").style.display="block"
    
    setTimeout(function(){
      document.getElementById("popUp").style.display="none" }
         , 3000);


}
let clear = ()=>{
    var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
          elements[ii].value = "";
        }
      }

}


function showMobileTable() {
    if(!globalVarMobile){
        globalVarMobile = true
        var table = document.getElementById("mobileTable")
    $.post('/admin/getAllMobiles',{status:"true"},(mobiles)=>{
        console.log(mobiles.mobiles[0])

        for (let index = 0; index < mobiles.mobiles.length; index++) {
            let Divv = document.createElement('div')
            Divv.classList.add("center")
            let Input = document.createElement('input')
            Input.type = "checkbox"
            Divv.appendChild(Input)
            

            var row = table.insertRow(-1);
            var cell0 = row.insertCell(0)
            cell0.classList.add("tcheckbox")
            // cell0.classList.add("active-table-cell")
            cell0.appendChild(Divv)
           
            var cell1 = row.insertCell(1)
            var cell2 = row.insertCell(2)
            var cell3 = row.insertCell(3)
            var cell4 = row.insertCell(4)
            var cell5 = row.insertCell(5)
            var cell6 = row.insertCell(4)
            var cell7 = row.insertCell(7)
            var cell8 = row.insertCell(8)
            var cell9 = row.insertCell(9)
            cell1.innerHTML = "pic"
            cell2.innerHTML = mobiles.mobiles[index].product_number
            cell3.innerHTML = mobiles.mobiles[index].name
            cell4.innerHTML = mobiles.mobiles[index].brand
            cell5.innerHTML = mobiles.mobiles[index].price
            cell6.innerHTML = mobiles.mobiles[index].Memory.InternalMemory
            cell7.innerHTML = mobiles.mobiles[index].Processor.Type
            cell8.innerHTML = mobiles.mobiles[index].Camera.SelfieCamera

            var btn = document.createElement('button')
            btn.classList.add("Pedit")
            btn.classList.add("button")
            btn.innerHTML = "ویرایش"
            cell9.appendChild(btn)

            
        }

    })

    }
    
    
   


    

    document.getElementById("PMtableM").classList.toggle("active");

    document.getElementById("PMtableT").classList.remove("active");
    document.getElementById("PMtableL").classList.remove("active");
}
function showTabletTable() {
    if(!globalVarTablet){
        globalVarTablet = true
        var table = document.getElementById("tabletTable")
    $.post('/admin/getAllTablets',{status:"true"},(tablets)=>{
        console.log(tablets.tablets[0])
        

        for (let index = 0; index < tablets.tablets.length; index++) {
            let Divv = document.createElement('div')
            Divv.classList.add("center")
            let Input = document.createElement('input')
            Input.type = "checkbox"
            Divv.appendChild(Input)
            

            var row = table.insertRow(-1);
            var cell0 = row.insertCell(0)
            cell0.classList.add("tcheckbox")
            // cell0.classList.add("active-table-cell")
            cell0.appendChild(Divv)
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var cell6 = row.insertCell(6);
            var cell7 = row.insertCell(7);
            var cell8 = row.insertCell(8);
            var cell9 = row.insertCell(9);
            cell1.innerHTML = "pic"
            cell2.innerHTML = tablets.tablets[index].product_number
            cell3.innerHTML = tablets.tablets[index].name
            cell4.innerHTML = tablets.tablets[index].brand
            cell5.innerHTML = tablets.tablets[index].price
            cell6.innerHTML = tablets.tablets[index].Memory.InternalMemory
            cell7.innerHTML = tablets.tablets[index].Processor.Type
            cell8.innerHTML = tablets.tablets[index].Camera.SelfieCamera

            var btn = document.createElement('button')
            btn.classList.add("Pedit")
            btn.classList.add("button")
            btn.innerHTML = "ویرایش"
            cell9.appendChild(btn)

            
        }

    })

    }


    
    document.getElementById("PMtableT").classList.toggle("active");
    document.getElementById("PMtableL").classList.remove("active");
    document.getElementById("PMtableM").classList.remove("active");

}
function showlabtopTable() {
    document.getElementById("PMtableM").classList.remove("active");
    document.getElementById("PMtableT").classList.remove("active");
    document.getElementById("PMtableL").classList.toggle("active");
}

function remove(obj){
    switch (obj.id) {
        case "selectBtnM":
            var table = document.getElementById("mobileTable")
            console.log(table.rows)
            for (let index = 0; index < (table.rows.length)-1; index++) {
                table.rows[index].cells[0].classList.add("active-table-cell")
                
            }

            
            break;
    
        default:
            break;
    }
   
}

function checkall(checkType){
    switch (checkType.id) {
        case "checkMobile":
            var table = document.getElementById("mobileTable")
            
            for (let index = 0; index < (table.rows.length); index++) {
           console.log(table.rows[index].cells[0].firstChild.firstChild.checked)  
                
            }
            
            break;
    
        default:
            break;
    }

   
}