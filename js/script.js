let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});
/**carousel script
 * ============================================================================================
 */
 const delay = 3000; //ms

 const slides = document.querySelector(".slides");
 const slidesCount = slides.childElementCount;
 const maxLeft = (slidesCount - 1) * 100 * -1;
 
 let current = 0;
 
 function changeSlide(next = true) {
   if (next) {
     current += current > maxLeft ? -100 : current * -1;
   } else {
     current = current < 0 ? current + 100 : maxLeft;
   }
 
   slides.style.left = current + "%";
 }
 
 let autoChange = setInterval(changeSlide, delay);
 const restart = function() {
   clearInterval(autoChange);
   autoChange = setInterval(changeSlide, delay);
 };
 
 // Controls
 document.querySelector(".next-slide").addEventListener("click", function() {
   changeSlide();
   restart();
 });
 
 document.querySelector(".prev-slide").addEventListener("click", function() {
   changeSlide(false);
   restart();
 });
 