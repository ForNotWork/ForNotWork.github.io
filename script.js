  $(document).ready(function() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var slides = $(".poster-item");
    slides.hide();
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides.eq(slideIndex - 1).fadeIn(1000);
    setTimeout(showSlides, 5000); // Change slide every 3 seconds
  }
});
