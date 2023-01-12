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



// Slider
// const allSlides = document.querySelectorAll(".awo-review-slide");

// let currentSlide = 0;
// let maxValue = allSlides.length;

// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");


// if (currentSlide == 0){
//   prev.style.display = "none";
// }

// next.addEventListener("click", () => {
//   if (currentSlide < maxValue - 1) {
//     allSlides[currentSlide].classList.remove("current");
//     currentSlide++;
//     allSlides[currentSlide].classList.add('current');
//     console.log(currentSlide);
//     prev.style.display = "block";
//   }
//   if (currentSlide + 1 == maxValue){
//     next.style.display = "none";
//   }
// });

// prev.addEventListener("click", () => {
//   if (currentSlide >= 0) {
//     allSlides[currentSlide].classList.remove("current");
//     currentSlide--;
//     console.log(currentSlide);
//     allSlides[currentSlide].classList.add('current');
//   }
//   if (currentSlide == 0){
//     prev.style.display = "none";
// }

//   if (currentSlide < maxValue){
//     next.style.display = "block";
// }
// });


// // Touch support

// let startX;
// let endX;

// allSlides.forEach((slide) => {
//   slide.addEventListener("touchstart", (event) => {
//     startX = event.touches[0].clientX;
//   });

//   slide.addEventListener("touchmove", (event) => {
//     endX = event.touches[0].clientX;
//   });

//   slide.addEventListener("touchend", (event) => {
//     const threshold = 50;
//     const swipeDistance = endX - startX;

//     if (swipeDistance > threshold) {
//       prev.click();
//     } else if (swipeDistance < -threshold) {
//       next.click();
//     }
//   });
// });



 // Check if we deliver from home page form
 const form = document.querySelector("#delivery-check-form");
 form.addEventListener("submit", async (event) => {
   event.preventDefault();
   const postcode = document.querySelector("#awo-postcode-input").value;
   const deliveryStatus = document.querySelector('.delivery-check');
   if (postcode.length < 3){
       deliveryStatus.style.display = "block";
       deliveryStatus.textContent = "Please enter at your full post code without spaces."
   } else {
   const response = await fetch(
     `https://delivery-app-production.up.railway.app/deliverycheck?q=${postcode}`
   );
   const data = await response.json();
   console.log(data)
 

   
   if(data.length > 0){
    const nextDeliveryDate = data[0];
    const countOfDeliveries = data.length;
     deliveryStatus.classList.add('delivery-success')
     deliveryStatus.textContent = `Great news! Our next available delivery date is ${nextDeliveryDate}. Continue with you order to confirm a delivery date. We deliver to your area ${countOfDeliveries} times per week.`;
     deliveryStatus.classList.remove('delivery-failure')
   } else {
    deliveryStatus.classList.add('delivery-failure')
     deliveryStatus.textContent = "Looks like we don't deliver to that area. Is your postcode correct? Please open the delivery map below to see where we deliver to.";
 
   }
  }
  document.querySelector('#awo-delivery-map').style.display = "block";
   form.appendChild(deliveryStatus);
 });

