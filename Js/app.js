document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        document.getElementById('navbar-top').classList.add('fixed-top');
         
        // // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
        
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


function dropdownColor() {
  document.getElementById('navbar-top').classList.toggle('bg-custom');
}




// var mq = window.matchMedia( "(max-width: 770px)" );
// if (mq.matches) {
//     document.getElementById('hero-text-h2').classList.remove('display-1');
//     document.getElementById('hero-text-h2').classList.add('display-3');
// }
// else {
    
//     document.getElementById('hero-text-h2').classList.add('display-1');
//     document.getElementById('hero-text-h2').classList.remove('display-4');
// }

// var mq = window.matchMedia( "(max-width: 470px)" );
// if (mq.matches) {
//     document.getElementById('hero-text-h2').classList.remove('display-1');
//     document.getElementById('hero-text-h2').classList.add('display-4');
// }

