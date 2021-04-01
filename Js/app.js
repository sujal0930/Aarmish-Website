document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        document.getElementById('navbar-top').classList.add('fixed-top');
         document.getElementById('navbar-top').classList.add('bg-dark');
        // // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
        document.getElementById('navbar-top').classList.remove('bg-dark');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


function dropdownColor() {
  document.getElementById('navbar-top').classList.toggle('bg-custom');
}



