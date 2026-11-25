const slides = document.querySelectorAll(".hero-slide");
const previousButton = document.querySelector(".hero-arrow--previous");
const nextButton = document.querySelector(".hero-arrow--next");
const slideStatus = document.querySelector(".slide-status");
const dots = document.querySelectorAll(".hero-dot");

let currentSlide = 0;

function showSlide(index){
    slides[currentSlide].hidden = true;

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].hidden = false;
    slideStatus.textContent = `${currentSlide + 1} / ${slides.Length}`;
    dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === currentSlide;

        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
    })

}

previousButton.addEventListener("click", () => {showSlide(currentSlide - 1);});

nextButton.addEventListener("click", () => {showSlide(currentSlide + 1);});

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.slide));
    })
})