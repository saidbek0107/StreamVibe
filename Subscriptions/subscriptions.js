const links = document.querySelectorAll('.nav__link');
const light = document.querySelector('.nav__light');

function moveLight({offsetLeft, offsetWidth}){
  light.style.left = `${offsetLeft - offsetWidth/4}px`;
}

function activeLink(linkActive){
  links.forEach(link => {
    link.classList.remove('active');
    linkActive.classList.add('active');
  })
}


links.forEach((link) => {
  link.addEventListener('click', (event) => {
    moveLight(event.target);
    activeLink(link);
  })
})


// ======================= scroll down ===========================

let mybutton = document.getElementById("scroll__btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}