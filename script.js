let currentSlide = 0;
const slideCount = document.querySelectorAll('.carousel li').length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateCarousel();
}

function updateCarousel() {
  const newPosition = -currentSlide * 100 + '%';
  document.getElementById('carousel-list').style.transform = 'translateX(' + newPosition + ')';
}
function mostrarProdutos(categoria) {
    const todasCategorias = document.querySelectorAll('.produtos');
    todasCategorias.forEach(cat => cat.classList.add('hidden'));
    document.getElementById(`produtos-${categoria}`).classList.remove('hidden');
  }
  