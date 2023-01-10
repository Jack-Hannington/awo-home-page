// Modal
const allCatButons = document.querySelectorAll(".awo-hero-cat-button");
const allModals = document.querySelectorAll('.awo-hero-modal');
const closeAwoModals = document.querySelectorAll('.close-modal')
let showModal
let modalStatus;
let activeModal;

// document.addEventListener('click', (event) => {
//   console.log('clicked')
//     const target = event.target;
//     if (!showModal.contains(target)) {
//       showModal.style.display = 'none';
//     }
// })

allCatButons.forEach((button) => {
  button.addEventListener('click', (event) => {
      activeModal = event.target.dataset.modal;
      console.log(activeModal)
      showModal = document.getElementById(activeModal);
      console.log(showModal)
      showModal.classList.add('show-modal');
      modalStatus = "active";
  })
})



closeAwoModals.forEach((button) => {
      button.addEventListener('click', () => {
        console.log('buttn')
        allModals.forEach((modal) => {
          modal.classList.remove('show-modal')
        })
      })
})



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
  if (currentSlide > 0) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide--;
    console.log(currentSlide);
    allSlides[currentSlide].classList.add('current');
  }
  if (currentSlide == 0){
    // prev.style.display = "none";
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

