$('.feedback__slider').slick({
  centerMode: true,
  slidesToShow: 3,
  infinite: true,
  speed: 500,
  prevArrow: $('.feedback__control--prev'),
  nextArrow: $('.feedback__control--next'),
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});