

$(document).ready(function(){

  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  });


});
const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold:.2 
}
/**
 * 
 * @param {IntersectionObserverEntry} entries 
 * @param {IntersectionObserver} observer 
 */

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })


  const spies = document.querySelectorAll(`.data-spy`)

  const observer2 = new IntersectionObserver(callback,options2)
  spies.forEach(function (spy){
    observer2.observe(spy)

  })



})
/**
 * 
 * @param {HTMLElement} elem 
 * 
 */
const activate = function(elem){
const id =  elem.getAttribute('id');
   const anchor = document.querySelector(`a[href="#${id}"]`)
   const links = document.querySelectorAll(`.bar a`)
links.forEach((elt)=> elt.classList.remove('active'))
   anchor.classList.add('active')
  
   
}


   /**
    * 
    * @param {IntersectionObserverEntry{}} entries 
    * @param {IntersectionObserver} observer2 
    */
const callback = function( entries,observer2){
  entries.forEach((entry)=>{
    if (entry.intersectionRatio > .2){
      console.log(entry.intersectionRatio)
      activate(entry.target)
    }
  })
}

let theme_toggler = document.querySelector('.toggler');

theme_toggler.addEventListener('click',function(){
  document.body.classList.toggle('white_mod');
  

});



document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          "#loader").style.visibility = "visible";

          console.log( document.querySelector(
            "#loader").style.visibility)
  } else {
      document.querySelector(
          "#loader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
};
   
   


document.querySelector(".toggler").addEventListener("click",(e)=>{
  document.querySelector(".ball").classList.toggle('ballMove')
})




/*
let sec = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.links');

function activeMenu(){
  let len=sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){
    navlinks.forEach(ltx => ltx.classList.remove('active'));
    navlinks[len].classList.add('active');
  }
  activeMenu();
  window.addEventListener('scroll',activeMenu)
}




/*

window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 140;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height){
      navlinks.forEach(links =>{
        console.log(document.querySelector('a[href*=' + id + ']'))
      
        links.classList.remove('active');
        document.querySelector('a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};










/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))*/
