document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
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




var mq = window.matchMedia( "(max-width: 770px)" );
if (mq.matches) {
    document.getElementById('hero-text-1').classList.remove('display-2');
    document.getElementById('hero-text-1').classList.add('display-3');
}

var mq = window.matchMedia( "(max-width: 500px)" );
if (mq.matches) {
    document.getElementById('hero-text-1').classList.remove('display-2');
    document.getElementById('hero-text-1').classList.remove('display-3');
    document.getElementById('hero-text-1').classList.add('display-5');
    document.getElementById('hero-text-2').classList.remove('h2');
    document.getElementById('hero-text-2').classList.add('h5');
}