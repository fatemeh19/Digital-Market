 let listItem = document.getElementsByClassName("right-nav-box")
//  [1].style.backgroundColor="blue"

// let listItem = document.getElementsByClassName("right-nav-box")

// listItem[1].addEventListener('click',()=>{
//     this.style.backgroundColor="red"
// })

// addEventListener

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
    fileTag.hide();
}

function changeImage(input) {
    console.log(input.files)
var reader;

if (input.files && input.files[0]) {
reader = new FileReader();


reader.onload = function(e) {
  var preview = document.getElementById("preview")
  preview.setAttribute('src', e.target.result)
  preview.style.maxWidth='507px'
 
}

reader.readAsDataURL(input.files[0]);
}
}