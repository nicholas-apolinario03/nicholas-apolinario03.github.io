const slides = document.querySelectorAll(".slide"); 
const proxSlide = document.querySelector(".btn-prox");
const voltSlide = document.querySelector(".btn-ant");

let contSlide = 0;
let maxSlide = slides.length - 1;

function mudarslide(){
  if (contSlide === maxSlide) {
    contSlide = 0;
  } else {
    contSlide++;
    
    }    

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${120 * (indx - contSlide)}%)`;
  });
}


slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 120}%)`;
});

proxSlide.addEventListener("click", function () {
    setInterval(mudarslide, 35000);

  if (contSlide === maxSlide) {
    contSlide = 0;

  } else {
    contSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${120 * (indx - contSlide)}%)`;
    });
});

voltSlide.addEventListener("click", function () {
    setInterval(mudarslide, 35000);
  if (contSlide === 0) {
    contSlide = maxSlide;
   
  } else {
    contSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${120 * (indx - contSlide)}%)`;
  });
});