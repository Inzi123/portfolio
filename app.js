
const navSlide = () => {
    const navbar = document.querySelector('.navbar')
    const burger = document.querySelector('.navbar__burger');
    const nav = document.querySelector('.navbar__links');
    const navLinks = document.querySelectorAll('.navbar__links li');
    const logo = document.querySelector('.navbar__logo');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar__active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navbarLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');

    });


};

navSlide();

const navbar = document.querySelector('.navbar')







$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".navbar").addClass("floatingnav");
    } else{
        $(".navbar").removeClass("floatingnav");
    }
});


var $window = $(window),
    $document = $(document),
    button = $('.sideRedes');

button.css({
    opacity: 1
});

$window.on('scroll', function () {
    if (($window.scrollTop() + $window.height()) == $document.height()) {
        button.stop(true).animate({
            opacity: 0
        }, 250);
    } else {
        button.stop(true).animate({
            opacity: 1
        }, 250);
    }
});




/* Scroll */
window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2 ;
    
    let frames = document.querySelectorAll('.about__container');
    frames.forEach( frame => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;
      
      if ( pageTop  >= frameTop - pageHeight &&
          pageTop  < frameTop + frameHeight/2 ){
        frame.classList.add('anim');
      }else{
        frame.classList.remove('anim');
      }
    });
  });

  window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2 ;
    
    let prueba = document.querySelectorAll('.work__container');
    prueba.forEach( frame => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;
      
      if ( pageTop  >= frameTop - pageHeight &&
          pageTop  < frameTop + frameHeight/2 ){
        frame.classList.add('anim');
      }else{
        frame.classList.remove('anim');
      }
    });
  });

  /* Parallax */

  var parallaxIt = function(e, target, parent, movement) {
    var relX = e.pageX - offset(parent).left
    var relY = e.pageY - offset(parent).top
    var x = (relX - parent.offsetWidth / 2) / parent.offsetWidth * movement
    var y = (relY - parent.offsetHeight / 2) / parent.offsetHeight * movement
    
    target.style.setProperty('--parallax-x', x+"px");
    target.style.setProperty('--parallax-y', y+"px");
  }

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

document.querySelector(".main__container").addEventListener("mousemove", function(e) {
    parallaxIt(e, this.querySelector("p"), this, 80)
    parallaxIt(e, this.querySelector("h1"), this, 70)
    parallaxIt(e, this.querySelector("h2"), this, 60)
})
