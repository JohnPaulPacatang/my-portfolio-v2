function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link0 = document.getElementById("link0");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");


link0.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

link1.addEventListener("click", () => {
  scrollToElement(".services-container");
});

link2.addEventListener("click", () => {
  scrollToElement(".skills");
});

link3.addEventListener("click", () => {
  scrollToElement(".projects");
});

link4.addEventListener("click", () => {
  scrollToElement(".column");
});

//for loadersheesh
document.body.style.overflow = 'hidden';

window.addEventListener('load', function() {
  setTimeout(function() {
    var loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.classList.add('hidden');

    setTimeout(function() {
      document.body.style.overflow = 'auto';
  }, 2000);

    window.scrollTo({
      top: 0,
    });
  }, 2000);
});

//For Certificates 
$('.certificates-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTime:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      }
  }
})







