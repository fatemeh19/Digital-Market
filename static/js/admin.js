let globalVarMobile = false
let globalVarTablet = false
let globalVarLaptop = false
let productNumberofNowEdit
 
 let listItem = document.getElementsByClassName("right-nav-box")

function aa(a,btn){
    
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
            document.querySelector('.Pcategory').classList.add('active')
                break  
        case 'ویرایش' :
            
            $.post("/admin/getSpecialProduct",{product_number: btn.id},
                 (data)=> {
                     let product = data.mainResult
                     productNumberofNowEdit = product.product_number
                     editProduct(data.type,product)
                     

                    
                });
            document.getElementById("addProductDiv").classList.add('active')
            document.querySelector('.Pcategory').classList.remove('active')
            
            
    
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

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
  }

let addProduct = (productType)=>{
  

    
    switch (productType) {
        case "laptop":
           

            
            break;

        case "mobile" :
           

            addOrUpdate(document.getElementById("addMobileButton").innerHTML,"mobile",(mobile)=>{

                if((document.getElementById("addMobileButton").innerHTML)=='اضافه کردن')
                {
                    $.post('/admin/addMobile',{mobile:mobile},(data)=>{

                        if(data.status){
                           showMobileTable()
                            clear()
                            setPopUp()
                            
                        }
        
                    })

                }
                else{
                    $.post('/admin/updateMobile',{mobile:mobile},(data)=>{
                        if(data.status){
                            document.getElementById("addProductDiv").classList.remove('active')
                            document.getElementById("productManageDiv").classList.add('active')

                            
                            showMobileTable()
                            document.getElementById("PMtableM").classList.remove("active");
                            document.getElementById("PMtableT").classList.remove("active");
                            document.getElementById("PMtableL").classList.remove("active");

                            clear()
                            
                        }

                        
        
                    })



                }

               

            })

            
            
            
            
                                    
           

            
            
            break;

        case "tablet" :
            addOrUpdate(document.getElementById("addTabletButton").innerHTML,"tablet",(tablet)=>{

                if((document.getElementById("addTabletButton").innerHTML)=='اضافه کردن')
                {
                    $.post('/admin/addTablet',{mobile:tablet},(data)=>{

                        if(data.status){
                            showTabletTable()
        
                            clear()
                            setPopUp()
                             
                        }
        
                    })


                }
                else{
                    $.post('/admin/updateTablet',{tablet:tablet},(data)=>{
                        if(data.status){
                            document.getElementById("addProductDiv").classList.remove('active')
                            document.getElementById("productManageDiv").classList.add('active')

                            
                            showTabletTable()
                            document.getElementById("PMtableM").classList.remove("active");
                            document.getElementById("PMtableT").classList.remove("active");
                            document.getElementById("PMtableL").classList.remove("active");

                            clear()
                            
                        }

                        
        
                    })



                }

               

            })
            console.log("tablet")
            let tablet={ 
                
                name:document.getElementById("productName").value,                            
                product_number: Math.floor(Math.random() * 10000000),
                brand:document.getElementById("productBrand").value,
                price:document.getElementById("productPrice").value,
                colors:document.getElementById("productColor").value,
                img:getBase64Image(document.getElementById("preview")),
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
    var table = document.getElementById("mobileTable")
    document.getElementById("sartitr").classList.remove("active-table-cell")
    
   
        

    $("#mobileTable").find("tr:gt(0)").remove();
   
        
       
    $.post('/admin/getAllMobiles',{status:"true"},(mobiles)=>{
        console.log(mobiles.mobiles[0])

        for (let index = 0; index < mobiles.mobiles.length; index++) {
            let Divv = document.createElement('div')
            Divv.classList.add("center")
            let Input = document.createElement('input')
            Input.type = "checkbox"
            Divv.appendChild(Input)

            let picDiv = document.createElement('div')
            picDiv.classList.add("Pimage")
            let imgP = document.createElement('img')
            imgP.src='data:image/jpeg;base64,' + mobiles.mobiles[index].img
            imgP.style.width='50px'
            imgP.style.height='50px'
            

            picDiv.appendChild(imgP)
            

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
            cell1.appendChild(picDiv)
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
            btn.id=mobiles.mobiles[index].product_number
            btn.setAttribute('onclick', "aa('ویرایش',this)")
            cell9.appendChild(btn)

            console.log("mobile table")
        }
        
       

    })

    
    
    
   

    

    document.getElementById("PMtableM").classList.toggle("active");

}
function showTabletTable() {
    document.getElementById("sartitr1").classList.remove("active-table-cell")
    

    $("#tabletTable").find("tr:gt(0)").remove();

        var table = document.getElementById("tabletTable")

    $.post('/admin/getAllTablets',{status:"true"},(tablets)=>{
        console.log(tablets.tablets[0])


        

        for (let index = 0; index < tablets.tablets.length; index++) {
            let Divv = document.createElement('div')
            Divv.classList.add("center")
            let Input = document.createElement('input')
            Input.type = "checkbox"
            Divv.appendChild(Input)

           

            let picDiv = document.createElement('div')
            picDiv.classList.add("Pimage")
            let imgP = document.createElement('img')
            imgP.src='data:image/jpeg;base64,' + tablets.tablets[index].img
            imgP.style.width='50px'
            imgP.style.height='50px'
            

            picDiv.appendChild(imgP)
            

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
            cell1.appendChild(picDiv)
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
            btn.id=tablets.tablets[index].product_number
            btn.setAttribute('onclick', "aa('ویرایش',this)")
            cell9.appendChild(btn)

        }

    })

    


    
    document.getElementById("PMtableT").classList.toggle("active");
    // document.getElementById("PMtableL").classList.remove("active");
    // document.getElementById("PMtableM").classList.remove("active");

}
function showlabtopTable() {
    // document.getElementById("PMtableM").classList.remove("active");
    // document.getElementById("PMtableT").classList.remove("active");
    document.getElementById("PMtableL").classList.toggle("active");
}

function mark(tableid){
    
        
            var table = document.getElementById(tableid)
            
            for (let index = 0; index < (table.rows.length); index++) {
                
                table.rows[index].cells[0].classList.toggle("active-table-cell")
                
            }

         
   
}

function checkall(checkType,table){
   
        
                var table = document.getElementById(table)
           
                for (let index = 1; index < (table.rows.length); index++) {
                    if(document.getElementById(checkType.id).checked){
                        table.rows[index].cells[0].firstChild.firstChild.checked = true 
                    }
                    else{
                        table.rows[index].cells[0].firstChild.firstChild.checked = false

                    }
                     
                        
                    }
  
   
}

function remove(tableid){
    removeList = []
    var table = document.getElementById(tableid)
    
    for (let index = 1; index < (table.rows.length); index++) {
        if(table.rows[index].cells[0].firstChild.firstChild.checked == true){
            removeList.push(table.rows[index].cells[2].innerHTML)
            
        }
    }
  
   
    switch (tableid) {
        case "mobileTable":
            $.post('/admin/removeMobile',{removeList:removeList,length:removeList.length},(data)=>{
                if(data.status)
                {
                    showMobileTable()
                    document.getElementById("PMtableM").classList.toggle("active");
                    document.getElementById("PMtableT").classList.remove("active");
                    document.getElementById("PMtableL").classList.remove("active");
                    
                }
                

            })
            
            break;
        case "tabletTable" :
            
            $.post('/admin/removeTablet',{removeList:removeList,length:removeList.length},(data)=>{
                if(data.status)
                {
                    showTabletTable()
                    document.getElementById("PMtableM").classList.remove("active");
                    document.getElementById("PMtableT").classList.toggle("active");
                    document.getElementById("PMtableL").classList.remove("active");
                    
                }

            })
            break;   
    
       
    }


}

let addOrUpdate = (addOrUp,prodeuctType,callback)=>{
    
    let product_number
    if(addOrUp=='اضافه کردن'){
        product_number = Math.floor(Math.random() * 10000000)
        

    }
    else{
        product_number = productNumberofNowEdit

    }
    
    let product
    switch (prodeuctType) {
        case "mobile":

    product={ 
        name:document.getElementById("productName").value,                            
        product_number: product_number,
        brand:document.getElementById("productBrand").value,
        price:document.getElementById("productPrice").value,
        colors:document.getElementById("productColor").value,
        img:getBase64Image(document.getElementById("preview")),
        
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
            
            break;
        case "tablet":
            product={ 
                name:document.getElementById("productName").value,                            
                product_number: product_number,
                brand:document.getElementById("productBrand").value,
                price:document.getElementById("productPrice").value,
                colors:document.getElementById("productColor").value,
                img:getBase64Image(document.getElementById("preview")),
                
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
                    Ram : document.getElementById("ram1").value,
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
                }
                
            
                
            }
            
            break;
        case "laptop":
            
            break;
        
    }
    


    callback(product)

}
// table = document.getElementById("mobileTable")
// let lastRow = table.rows[(table.rows.length)-1]
// let lastCell = lastRow.cells[(lastRow.cells.length)-1]
// document.getElementById("myBtn").addEventListener("click", ()=>{

// });
let editProduct = (productType,product)=>{
    switch (productType) {
        case "mobile":
            document.getElementById("preview").src='data:image/jpeg;base64,' + product.img
            document.getElementById("productName").value = product.name                           
            document.getElementById("productBrand").value = product.brand
            document.getElementById("productPrice").value = product.price
            document.getElementById("productColor").value = product.colors
            document.getElementById("simCardNumber").value = product.General.SimCardNumber
            document.getElementById("productYear").value = product.General.ProductYear
            document.getElementById("processorType").value = product.Processor.Type
            document.getElementById("graphicProcessor").value = product.Processor.GraphicProcessor
            document.getElementById("internalMemory").value = product.Memory.InternalMemory
            document.getElementById("ram").value = product.Memory.Ram
            document.getElementById("externalMemSupporting").value = product.Memory.ExternalMemSupporting
            document.getElementById("cameraType").value = product.Camera.Type
            document.getElementById("cameraQuality").value = product.Camera.PicQuality
            document.getElementById("panorama").value = product.Camera.Panorama
            document.getElementById("videoQuality").value = product.Camera.VideoQuality
            document.getElementById("selfieCamera").value = product.Camera.SelfieCamera
            document.getElementById("touchScreen").value = product.Screen.Touch
            document.getElementById("screenSize").value = product.Screen.Size
            document.getElementById("screenDimensions").value = product.Screen.ScreenDimensions
            document.getElementById("resolution").value = product.Screen.resolution
            document.getElementById("ScreenProtector").value = product.Screen.ScreenProtector
            document.getElementById("dimensions").value = product.Body.Dimensions
            document.getElementById("weight").value = product.Body.Weight
            document.getElementById("material").value = product.Body.Material
            document.getElementById("exteraAbility").value = product.Body.ExteraAbility
            document.getElementById("operatingSystem").value = product.SoftwareAbility.OperatingSystem
            document.getElementById("persianSupporting").value = product.SoftwareAbility.PersianSupporting
            document.getElementById("persianMenu").value = product.SoftwareAbility.PersainMenu
            document.getElementById("playMusicFormats").value = product.SoftwareAbility.PlayMusicFormats
            document.getElementById("PlayVideoFormats").value = product.SoftwareAbility.PlayVideoFormats
            document.getElementById("connectionNetworks").value = product.Connections.ConnectionNetWorks
            document.getElementById("connectionTechnology").value = product.Connections.ConnectionTechnology
            document.getElementById("wifi").value = product.Connections.Wifi
            document.getElementById("bluetooth").value = product.Connections.Bluetooth
            document.getElementById("radio").value = product.Connections.Radio
            document.getElementById("gps").value = product.Connections.GpsTechnology
            document.getElementById("connectionPort").value = product.Connections.ConnectionPort
            document.getElementById("speaker").value = product.Sound.Speaker
            document.getElementById("soundOutput").value = product.Sound.SoundOutput
            document.getElementById("jack").value = product.Sound.Jack
            document.getElementById("Changablebattery").value = product.Battery.Changable
            document.getElementById("batteryProperty").value = product.Battery.Property
            document.getElementById("playMusiccharge").value = product.Battery.PlayMusiccharge
            document.querySelector('#addMobileButton').textContent = "ذخیره تغییرات"
            document.getElementById("addMobile").classList.add('active')
            document.getElementById("addTablet").classList.remove('active')
            document.getElementById("addLaptop").classList.remove('active')


            
            break;
        case "tablet":
            document.getElementById("preview").src ='data:image/jpeg;base64,' + product.img
            document.getElementById("productName").value = product.name                           
            document.getElementById("productBrand").value = product.brand
            document.getElementById("productPrice").value = product.price
            document.getElementById("productColor").value = product.colors
            document.getElementById("simCardNumber1").value = product.General.SimCardNumber
            document.getElementById("productYear1").value = product.General.ProductYear
            document.getElementById("processorType1").value = product.Processor.Type
            document.getElementById("graphicProcessor1").value = product.Processor.GraphicProcessor
            document.getElementById("internalMemory1").value = product.Memory.InternalMemory
            document.getElementById("ram1").value = product.Memory.Ram
            document.getElementById("externalMemSupporting1").value = product.Memory.ExternalMemSupporting
            document.getElementById("cameraType1").value = product.Camera.Type
            document.getElementById("cameraQuality1").value = product.Camera.PicQuality
            document.getElementById("panorama1").value = product.Camera.Panorama
            document.getElementById("videoQuality1").value = product.Camera.VideoQuality
            document.getElementById("selfieCamera1").value = product.Camera.SelfieCamera
            document.getElementById("touchScreen1").value = product.Screen.Touch
            document.getElementById("screenSize1").value = product.Screen.Size
            document.getElementById("screenDimensions1").value = product.Screen.ScreenDimensions
            document.getElementById("resolution1").value = product.Screen.resolution
            document.getElementById("ScreenProtector1").value = product.Screen.ScreenProtector
            document.getElementById("dimensions1").value = product.Body.Dimensions
            document.getElementById("weight1").value = product.Body.Weight
            document.getElementById("material1").value = product.Body.Material
            document.getElementById("exteraAbility1").value = product.Body.ExteraAbility
            document.getElementById("operatingSystem1").value = product.SoftwareAbility.OperatingSystem
            document.getElementById("persianSupporting1").value = product.SoftwareAbility.PersianSupporting
            document.getElementById("persianMenu1").value = product.SoftwareAbility.PersainMenu
            document.getElementById("playMusicFormats1").value = product.SoftwareAbility.PlayMusicFormats
            document.getElementById("PlayVideoFormats1").value = product.SoftwareAbility.PlayVideoFormats
            document.getElementById("connectionNetworks1").value = product.Connections.ConnectionNetWorks
            document.getElementById("connectionTechnology1").value = product.Connections.ConnectionTechnology
            document.getElementById("wifi1").value = product.Connections.Wifi
            document.getElementById("bluetooth1").value = product.Connections.Bluetooth
            document.getElementById("radio1").value = product.Connections.Radio
            document.getElementById("gps1").value = product.Connections.GpsTechnology
            document.getElementById("connectionPort1").value = product.Connections.ConnectionPort
            document.getElementById("speaker1").value = product.Sound.Speaker
            document.getElementById("soundOutput1").value = product.Sound.SoundOutput
            document.getElementById("jack1").value = product.Sound.Jack
            document.getElementById("Changablebattery1").value = product.Battery.Changable
            document.getElementById("batteryProperty1").value = product.Battery.Property
            document.getElementById("playMusiccharge1").value = product.Battery.PlayMusiccharge
            document.querySelector('#addTabletButton').textContent = "ذخیره تغییرات"
            document.getElementById("addMobile").classList.remove('active')
            document.getElementById("addTablet").classList.add('active')
            document.getElementById("addLaptop").classList.remove('active')

            
            break;
        case "laptop":
            
            break;    
    
        default:
            break;
    }

}