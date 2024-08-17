document.addEventListener("DOMContentLoaded", function() {
  const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById('mainImage');

  function changeImage(index) {
      currentIndex = index;
      mainImage.style.backgroundImage = `url(${images[index]})`;
  }

  function autoChangeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      changeImage(currentIndex);
  }

  // Inicializa a primeira imagem
  changeImage(0);

  // Muda a imagem a cada 3 segundos
  setInterval(autoChangeImage, 3000);

  // Expor a função para o escopo global
  window.changeImage = changeImage;
});
