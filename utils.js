// Modal
const allCatButons = document.querySelectorAll(".awo-hero-cat-button");
const allModals = document.querySelectorAll('.awo-hero-modal');
const closeAwoModals = document.querySelectorAll('.close-modal')
let showModal
let activeModal;


allCatButons.forEach((button) => {
  button.addEventListener('click', (event) => {
      activeModal = event.target.dataset.modal;
      showModal = document.getElementById(activeModal);
      showModal.classList.add('show-modal');
  })
})


closeAwoModals.forEach((button) => {
      button.addEventListener('click', () => {
        allModals.forEach((modal) => {
          modal.classList.remove('show-modal')
        })
      })
})



// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.awo-hero-modal') && !event.target.classList.contains('close-modal') && showModal) {
//     showModal.classList.remove('show-modal');
//   }
// });





// Slider
const allSlides = document.querySelectorAll(".awo-review-slide");

let currentSlide = 0;
let maxValue = allSlides.length;

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");


if (currentSlide == 0){
  prev.style.display = "none";
}

next.addEventListener("click", () => {
  if (currentSlide < maxValue - 1) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide++;
    allSlides[currentSlide].classList.add('current');
    console.log(currentSlide);
    prev.style.display = "block";
  }
  if (currentSlide + 1 == maxValue){
    next.style.display = "none";
  }
});

prev.addEventListener("click", () => {
  if (currentSlide >= 0) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide--;
    console.log(currentSlide);
    allSlides[currentSlide].classList.add('current');
  }
  if (currentSlide == 0){
    prev.style.display = "none";
}

  if (currentSlide < maxValue){
    next.style.display = "block";
}
});


// Touch support

let startX;
let endX;

allSlides.forEach((slide) => {
  slide.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  slide.addEventListener("touchmove", (event) => {
    endX = event.touches[0].clientX;
  });

  slide.addEventListener("touchend", (event) => {
    const threshold = 50;
    const swipeDistance = endX - startX;

    if (swipeDistance > threshold) {
      prev.click();
    } else if (swipeDistance < -threshold) {
      next.click();
    }
  });
});

