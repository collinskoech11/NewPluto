/**REsponsive Nav scripts
 * ===============================================================================================================================================================
 */

$(function() {
  'use strict';
  
  function toggle(e) {
    if (e) e.preventDefault();
    
    var $this = $(this),
        $navbar = $this.parents('.navbar'),
        $item = $this.parent();
    
    $('.nav-item.active', $navbar).removeClass('active');
    $item.addClass('active');
    
    if ($navbar.hasClass('main-nav')) {
      $('.active', $navbar.siblings('.sub-nav')).removeClass('active');
      $($item.data('target')).addClass('active');
    }
  }
  
  function leave(e) {
    var $this = $(this),
        $navbar = $this.siblings('.main-nav'),
        $subnav = $('.navbar-nav.active', $this);
    
    $('[data-target="#' + $subnav.attr('id') + '"]', $navbar).removeClass('hover');
    $subnav.removeClass('active');
  };
  
  function enter(e) {
    var $this = $(this),
        $navbar = $this.parents('.navbar');
    
    $('.nav-item.hover', $navbar).removeClass('hover');
    $this.addClass('hover');
    
    if ($navbar.hasClass('main-nav')) {
      $('.active', $navbar.siblings('.sub-nav')).removeClass('active');
      $($this.data('target')).addClass('active');
    }
  }
  
  $('.main-nav .nav-link, .sub-nav .nav-link').click(toggle);
  $('.main-nav .nav-item').mouseenter(enter);
  $('.sub-nav').mouseleave(leave);
});
/**carousel script
 * ==============================================================================================================
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
 