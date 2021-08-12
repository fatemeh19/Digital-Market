
let LoginBtn = document.getElementById('login-page-btn');
let SignBtn = document.getElementById('signup-page-btn');
let LoginForm = document.getElementById('login-form');
let SignForm = document.getElementById('signup-form');

/************************************Due to Translation Login Sign up Forms***************************************************/


function login() {
    LoginForm.style.right = '-3px'
    SignForm.style.left = '503px'
    LoginForm.style.transition = 'right 0.25s ease-in-out'
}
function register() {
    LoginForm.style.right = "503px";
    SignForm.style.left = "3px";
    SignForm.style.transition = 'left 0.25s ease-in-out'
}

let signPage = document.getElementById('sign-page');
function showSignPage() {
    signPage.classList.add('active');
}
function clode_signPage() {
    signPage.classList.remove('active');
    login();
}
let invalid = document.getElementById('invalid').style.display= 'block';
let invalid2 = document.getElementById('invalid2').style.display = 'block';
let invalid3 = document.getElementById('invalid3').style.display = 'block';
let invalid4 = document.getElementById('invalid4').style.display = 'block';

let signin = document.getElementById('signIn');

if (true) {
    console.log("true")
    signin.style.height = '29rem';
}

/*************************************************************************************************/
 

SignForm.addEventListener('submit',(event)=>{
     event.preventDefault()

     $.post('/register',
     {
       username: document.getElementById("username").value,
       password: document.getElementById("password-signup").value,
       email:    document.getElementById("email").value,
       confirm_password:    document.getElementById("password-confrim").value
     },(data)=>{
        console.log(data)

       
        



     })

    })   
   
 
   
 




    


