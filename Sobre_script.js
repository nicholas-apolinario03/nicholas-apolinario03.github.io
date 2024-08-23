let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides(n) {
    let i;
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    
    slides[slideIndex].style.display = 'block';  
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function autoSlide() {
    showSlides(slideIndex += 1);
}

showSlides(slideIndex);
setInterval(autoSlide, 10000); // Muda a imagem automaticamente a cada 3 segundos