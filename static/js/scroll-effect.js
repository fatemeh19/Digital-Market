





// windows scroll effect
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
      // downscroll code
      document.getElementById("bottom_navbar").classList.add('not-show-buttom_navbar')
    } else {
      // upscroll code
      document.getElementById("bottom_navbar").classList.remove('not-show-buttom_navbar')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);