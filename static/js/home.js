
let LoginBtn = document.getElementById('login-page-btn');
let SignBtn = document.getElementById('signup-page-btn');
let LoginForm = document.getElementById('login-form');
let SignForm = document.getElementById('signup-form');

/************************************Due to Translation Login Sign up Forms***************************************************/


function login() {
    LoginForm.style.right = '-3px'
    SignForm.style.left = '503px'
    LoginForm.style.transition = 'right 0.25s ease-in-out'
    LoginBtn.classList.add('active-login')
    SignBtn.classList.remove('active-signup')
}
function register() {
    LoginForm.style.right = "503px";
    SignForm.style.left = "3px";
    SignForm.style.transition = 'left 0.25s ease-in-out'
    SignBtn.classList.add('active-signup')
    LoginBtn.classList.remove('active-login')
}

let signPage = document.getElementById('sign-page');
function showSignPage() {
    signPage.classList.add('active');
}
function clode_signPage() {
    signPage.classList.remove('active');
    login();
}
// 
// let invalid2 = document.getElementById('invalid2').style.display = 'block';
// let invalid3 = document.getElementById('invalid3').style.display = 'block';
// let invalid4 = document.getElementById('invalid4').style.display = 'block';

let signin = document.getElementById('signIn');

let invelidPass = document.getElementById('password-login').classList.add('input-error');


// if (true) {
//     console.log("true")
//     signin.style.height = '29rem';
// }

/*************************************************************************************************/
 

SignForm.addEventListener('submit',(event)=>{
     event.preventDefault()

     $.post('/register',
     {
       username: document.getElementById("username").value,
       password: document.getElementById("password-signup").value,
       email:    document.getElementById("email").value,
       confirm_password:    document.getElementById("password-confrim").value
     },(errors)=>{
        console.log(errors)

        if(errors.empty_password==true){
           document.getElementById('invalid_password_sign').style.display= 'block'
           document.getElementById('invalid_password_sign').firstChild.nextSibling.textContent="لطفا رمز خود را وارد کنید"
           document.getElementById('password-signup').classList.add('input-error');

        }else{
            document.getElementById('invalid_password_sign').style.display= 'none'
            document.getElementById('password-signup').classList.remove('input-error');

        }


        if(errors.empty_email==true){
            document.getElementById('invalid_email_sign').style.display= 'block'
            document.getElementById('invalid_email_sign').firstChild.nextSibling.textContent="لطفاایمیل معتبری وارد کنید"
           
            document.getElementById('email').classList.add('input-error');
 
         }else{
             document.getElementById('invalid_email_sign').style.display= 'none'

             document.getElementById('email').classList.remove('input-error');
 
         }

         if(errors.empty_username==true){
            
            document.getElementById('invalid_username_sign').style.display= 'block'
            document.getElementById('invalid_username_sign').firstChild.nextSibling.textContent="لطفا نام کاربری خود را وارد کنید"

            document.getElementById('username').classList.add('input-error');
 
         }else{
             document.getElementById('invalid_username_sign').style.display= 'none'

             document.getElementById('username').classList.remove('input-error');
 
         }

         if(errors.empty_confirm==true){
             console.log("invalid_confirm")
            document.getElementById('invalid_confirm').style.display= 'block'
            document.getElementById('invalid_confirm').firstChild.nextSibling.textContent="لطفا رمز خود را تایید کنید"
               
            document.getElementById('password-confrim').classList.add('input-error');
 
         }else{
             document.getElementById('invalid_confirm').style.display= 'none'

             document.getElementById('password-confrim').classList.remove('input-error');

 
         }
         if(errors.available_username==true){
            document.getElementById('invalid_username_sign').style.display= 'block'
            document.getElementById('invalid_password_sign').firstChild.nextSibling.textContent="نام کاربری موجود است"

            document.getElementById('username').classList.add('input-error');
 
         }else{
             if(errors.empty_username==false)
             {
                document.getElementById('invalid_username_sign').style.display= 'none'

                document.getElementById('username').classList.remove('input-error');
             }
            

 
         }

         if(errors.password_not_equal_confirm==true){
            document.getElementById('invalid_confirm').style.display= 'block'
            document.getElementById('invalid_confirm').firstChild.nextSibling.textContent="لطفارمز خود رابه درستی تاییدکنید"
 
            document.getElementById('password-confrim').classList.add('input-error');
 
 
         }else{
             if(errors.empty_confirm==false)
             {
                document.getElementById('invalid_confirm').style.display= 'none'

                document.getElementById('password-confrim').classList.remove('input-error');
             }
            

 
         }
         if(errors.user_saved==true){
             
            window.location.href = "/";
 
         }



     })

    })   
   
 
   
 




    


