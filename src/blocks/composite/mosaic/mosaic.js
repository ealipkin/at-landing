;(function () {
  const $slider = $('.mosaic__inner');

  $('.mosaic').lightGallery({
    selector: '.mosaic__row a',
    thumbnail: false,
    appendCounterTo: '.lg',
  });
  $slider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    appendArrows: '.mosaic__controls',
    appendDots: '.mosaic__controls',
    centerPadding: '15%',
  });
})();
