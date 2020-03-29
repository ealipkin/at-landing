(function () {
  $(document).ready(function () {

    $('.page-container')
      .fullpage({
        //options here
        licenseKey: '3B638E30-7BAE4068-BFE661C6-783CCD7A',
        anchors: ['main', 'meet', 'provide', 'media', 'programs', 'reviews', 'contacts'],
        autoScrolling: true,
        scrollHorizontally: true,
        loopBottom: true,
        normalScrollElements: '.scrollable-content',
        responsiveWidth: 1024,
        responsiveHeight: 550,
        onLeave: function (origin, destination, direction) {
          const item = destination.item;
          const isBlack = item.classList.contains('section-black');
          const menu = document.querySelector('.menu');
          $('.offer-info').fadeOut();
          $('body').removeClass('hidden');
          if (!isBlack) {
            menu.classList.add('menu_black');
          } else {
            menu.classList.remove('menu_black');
          }

          window.lazyLoadInstance.update();
        },
        afterLoad: function (origin, destination, direction) {
          const item = destination.item;
          const isBlack = item.classList.contains('section-black');
          const menu = document.querySelector('.menu');
          const anchor = item.dataset.anchor;
          $('.questions').fadeOut();
          $('.offer-info').fadeOut();
          $('body').removeClass('hidden');
          $('.menu').removeClass('hidden');
          $('.menu__link_active').removeClass('menu__link_active');
          $(`.menu__link[href="#${anchor}"]`).addClass('menu__link_active');
          if (!isBlack) {
            menu.classList.add('menu_black');
          } else {
            menu.classList.remove('menu_black');
          }

          window.lazyLoadInstance.update();
        },
      });
  });

  $('.move-to-link').click((e) => {
    const moveTo = e.currentTarget.dataset.moveTo;
    fullpage_api.moveTo(moveTo);
  });

  $('.info-list__link')
    .click((e) => {
      const $target = $(e.currentTarget);
      const $section = $target.closest('.section');
      const $popup = $section.find('.info-block');
      const container = $section.find('.info-list');
      const inner = $popup[0].querySelector('.info-block__inner');
      $popup.fadeIn();
      container.addClass('info-list_opened');
      const instance = new OverlayScrollbars(inner, {});
      instance.sleep();
      setTimeout(() => {
        instance.update(true);
      }, 1000);
    });

  $('.info-block__close')
    .click((e) => {
      const $target = $(e.currentTarget);
      const $popup = $target.closest('.info-block');
      $popup.fadeOut();
      $('.info-list_opened').removeClass('info-list_opened');
    });


  const $orderModal = $('.order-modal');
  document.addEventListener('click', (e) => {
    const target = e.target;
    const isPopupClick = target.classList.contains('offer-info');
    const isInsidePopup = target.closest('.offer-info');
    if (!isPopupClick && !isInsidePopup) {
      $('.offer-info').fadeOut();
    }
    const isOrderModal = target.classList.contains('order-modal');
    const isInsideModal = target.closest('.order-modal');

    if (!isOrderModal && !isInsideModal) {
      $orderModal.fadeOut();
    }
    const isMenu = target.classList.contains('menu');
    const isInsideMenu = target.closest('.menu');

    if (!isMenu && !isInsideMenu) {

      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      $('.offer-info').fadeOut();
      $orderModal.fadeOut();
      $('.info-block').fadeOut();
      $('.info-list_opened').removeClass('info-list_opened');
      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
    }
  });

  window.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });
  window.lazyLoadInstance.update();

  const $videoCard = $('.video-card');
  if($videoCard) {
    $videoCard.lightGallery({
      selector: 'a',
      thumbnail: false,
      appendCounterTo: '.lg',
      addClass: 'no-pages',
    });
  }
})();
