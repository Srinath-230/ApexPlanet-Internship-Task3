const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-inner img');

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
    
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex === totalImages - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex--;
    }
    updateCarousel();
});