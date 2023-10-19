// All the images for the slides in order
const SLIDES = [
    "images/gallery/1.png",
    "images/gallery/2.png",
    "images/gallery/3.png",
    "images/gallery/4.png",
    "images/gallery/5.png",
    "images/gallery/6.png",
    "images/gallery/7.png",
    "images/gallery/8.png"
]

// Elements
let slideDiv = document.getElementsByClassName("slide")[0];
let slideImg = slideDiv.getElementsByTagName("img")[0];

// Variables
let currentSlide = 0;

// Functions
function changeSlide(amount) {
    currentSlide += amount;

    // Make sure the currentSlide is within range
    if (currentSlide >= SLIDES.length) {
        currentSlide = SLIDES.length - 1;
    }
    else if (currentSlide < 0) {
        currentSlide = 0;
    }

    updateSlide();
}

function updateSlide() {
    slideImg.src = SLIDES[currentSlide];
}