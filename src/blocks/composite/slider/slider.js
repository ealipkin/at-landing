;(function () {
  const slider = $('.slider__inner');
  slider.on('afterChange', function (event, currentSlide) {
    const slides = document.querySelectorAll('.slider__text');
    slides.forEach(slide => {
      const instance = new OverlayScrollbars(slide, {});
      instance.sleep();
      setTimeout(() => {
        instance.update(true);
      }, 1000);
    });
  });
  slider.on('init', function (event) {
    // console.log(event);
  });
  slider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        }
      },
    ]
  });
  const slides = document.querySelectorAll('.slider__text');
  slides.forEach(slide => {
    new OverlayScrollbars(slide);
    const instance = new OverlayScrollbars(slide, {});
    instance.sleep();
    setTimeout(() => {
      instance.update(true);
    }, 1000);
  });
})();
