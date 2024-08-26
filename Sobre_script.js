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
setInterval(autoSlide, 10000);


let porcentagem1 = "80%";
let porcentagem2 = "78%";
let porcentagem4 = "60%";
let porcentagem3 = "56%";
const tooltips = document.querySelectorAll('.tooltip');
linha1 = document.getElementById("porc1");
linha2 = document.getElementById("porc2");
linha3 = document.getElementById("porc3");
linha4 = document.getElementById("porc4");

linha1.style.width = porcentagem1
linha2.style.width = porcentagem2
linha3.style.width = porcentagem3
linha4.style.width = porcentagem4

function posicionarTooltip(div, tooltip) {
    const rect = div.getBoundingClientRect();
    tooltip.style.top = rect.top + window.scrollY - 35 + 'px'; // Acima da div
    tooltip.style.left = rect.right - 30 + 'px'; // Ajuste horizontal
}

posicionarTooltip(linha1, tooltips[0]);
tooltips[0].innerHTML = porcentagem1;

posicionarTooltip(linha2, tooltips[1]);
tooltips[1].innerHTML = porcentagem2;

posicionarTooltip(linha3, tooltips[2]);
tooltips[2].innerHTML = porcentagem3;

posicionarTooltip(linha4, tooltips[3]);
tooltips[3].innerHTML = porcentagem4;
