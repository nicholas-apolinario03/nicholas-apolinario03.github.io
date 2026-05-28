const slides = document.querySelectorAll(".slide"); 
const proxSlide = document.querySelector(".btn-prox");
const voltSlide = document.querySelector(".btn-ant");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var det = document.getElementsByClassName("det");
const btcard1 = document.querySelector(".btn-produto1");
const btcard2 = document.querySelector(".btn-produto2");
const btcard3 = document.querySelector(".btn-produto3");

let contSlide = 0;
let maxSlide = slides.length - 1;

function mudarslide(){
  if (contSlide === maxSlide) {
    contSlide = 0;
  } else {
    contSlide++;
    
    }    

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - contSlide)}%)`;
  });
}


slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

proxSlide.addEventListener("click", function () {
    setInterval(mudarslide, 35000);

  if (contSlide === maxSlide) {
    contSlide = 0;

  } else {
    contSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - contSlide)}%)`;
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
    slide.style.transform = `translateX(${100 * (indx - contSlide)}%)`;
  });
});
btcard1.addEventListener("click", function () {
  card2.style.display = "none";
  card3.style.display = "none";
 card1.style.display = "block";
 det[0].style.background= "rgb(231 125 55)";
  if (window.matchMedia("(max-width:960px)").matches) {
         document.getElementById(objeto).src = caminhoNovaImagem;
      }
  
});
btcard2.addEventListener("click", function () {
  card1.style.display = "none";
  card3.style.display = "none";
 card2.style.display = "block";
 det[1].style.background=  "rgb(207 90 145)";
});
btcard3.addEventListener("click", function () {
  card1.style.display = "none";
 card2.style.display = "none";
 card3.style.display = "block";
 det[2].style.background= "#000";
});
 setInterval(mudarslide, 35000);
 