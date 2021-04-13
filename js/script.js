/*Textbox Events*/
$(document).on('focusin', 'nav input.search-textbox', function(){
  if($(this).val() <= 0){
      var parent = $(this).closest('div.search');
      parent.addClass('focused');
  }
});
$(document).on('focusout', 'nav input.search-textbox', function(){
  if($(this).val() <= 0){
      var parent = $(this).closest('div.search');
      parent.removeClass('focused');
  }
});
$(document).on('click', 'nav .search', function(){
  $(this).children('input.search-textbox').focus();
});

/*Text Key Events for Animating Icons i.e. .ico-btn*/
$(document).on('keyup', 'nav input.search-textbox', function(){
  var parent = $(this).closest('div.search');
  var phrase = $(this).val(),
      phrase_length = phrase.length;

  if(phrase_length >= 2){
      parent.addClass('multi-char');
      if(!parent.hasClass('not-null')){
          parent.addClass('not-null');
      }

  }
  else if(phrase_length == 1){
      parent.addClass('not-null');
      parent.removeClass('multi-char');
  }
  else if(phrase_length <= 0){
      parent.removeClass('not-null');
      parent.removeClass('multi-char');
  }
});

/*Tab Highlighter Functionality*/
$(document).on('click', 'nav .tabs ul.navbar-body li a', function(){
  var $this = $(this);
  TabHighlighter.set($this);
  $this.closest('li').siblings('.active').removeClass('active');
  $this.closest('li').addClass('active');
});
var TabHighlighter = {
  set: function($this){
      $('.tab-highlighter').css({
          'left':  $this.closest('li').offset().left,
          'width': $this.closest('li').outerWidth()
      });
  },
  refresh: function(){
      var $this = $('.tabs ul.navbar-body li.active a');
      $('.tab-highlighter').css({
          'left':  $this.closest('li').offset().left,
          'width': $this.closest('li').outerWidth()
      });
  }
};
$(window).resize(function(){
  TabHighlighter.refresh();
});
$(document).ready(function(){
TabHighlighter.refresh();
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
 