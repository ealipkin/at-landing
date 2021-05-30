const videoContainer = document.querySelector('.background-video');
const bgVideo = videoContainer && videoContainer.querySelector('video');

const mainMenu = document.querySelector('.main-menu');
const menu = document.querySelector('.menu');
const contactsLinks = document.querySelector('.contacts-links');
const promoVideo = document.querySelector('.promo-video');

const getVideoAspectRatio = () => {
  return window.innerWidth < 768 ? (3 / 4) : (16 / 9);
}
const VIDEO_GAP = 550;
const updateVideoSize = (video) => {
  let newWidth;
  let newHeight;
  const $el = $(video);
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  if (windowWidth > 1500) {
    newWidth = '100%';
    newHeight = 'auto';
  } else {
    newWidth = windowHeight > (windowWidth - VIDEO_GAP) ? 'auto' : '100%';
    newHeight = windowHeight > (windowWidth - VIDEO_GAP) ? '100%' : 'auto';
  }
  $el
    .width(newWidth)
    .height(newHeight);
}

const handleBackgroundVideo = () => {
  if (bgVideo) {
    updateVideoSize(bgVideo);
  }
}


const toggleIsBlack = (isBlack) => {
  if (!isBlack) {
    menu.classList.add('menu_black');
    contactsLinks.classList.add('contacts-links_black');
    promoVideo.classList.add('promo-video_black');
  } else {
    menu.classList.remove('menu_black');
    contactsLinks.classList.remove('contacts-links_black');
    promoVideo.classList.remove('promo-video_black');
  }
}

const getAnchors = () => {
  return ['main', 'meet', 'provide', 'media', 'programs', 'reviews', 'contacts'];
}

const initFullPage = () => {
  $('.page-container')
    .fullpage({
      //options here
      licenseKey: '3B638E30-7BAE4068-BFE661C6-783CCD7A',
      anchors: getAnchors(),
      autoScrolling: true,
      scrollHorizontally: true,
      loopBottom: true,
      normalScrollElements: '.scrollable-content',
      responsiveWidth: 1024,
      responsiveHeight: 550,
      onLeave: function (origin, destination, direction) {
        const item = destination.item;
        const isBlack = item.classList.contains('section-black');
        toggleIsBlack(isBlack);
        $('.offer-info').fadeOut();
        $('body').removeClass('hidden');

        window.lazyLoadInstance.update();
        const isDestinationVisible = $(destination.item).is(':visible');
        if (!isDestinationVisible) {
          if (direction === 'down') {
            setTimeout(() => {
              $('[href="#media"]')[0].click();
            }, 10);
          } else {
            setTimeout(() => {
              $('[href="#meet"]')[0].click();
            }, 10);
          }
        }
        $(mainMenu).addClass('_hidden');
      },
      afterLoad: function (origin, destination, direction) {
        const item = destination.item;
        const isBlack = item.classList.contains('section-black');
        const anchor = item.dataset.anchor;

        if (destination.isFirst) {
          $(mainMenu).removeClass('_hidden');
        }
        $('.questions').fadeOut();
        $('.offer-info').fadeOut();
        $('body').removeClass('hidden');
        $('.menu').removeClass('hidden');
        $('.menu__link_active').removeClass('menu__link_active');
        $(`.menu__link[href="#${anchor}"]`).addClass('menu__link_active');
        toggleIsBlack(isBlack);

        window.lazyLoadInstance.update();
      },
    });
}

(function () {
  $(document).ready(function () {
    initFullPage();

    window.addEventListener('resize', () => {
      updateVideoSize(bgVideo);
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

    const isInfoBlock = target.classList.contains('info-block');
    const isInsideInfoBlock = target.closest('.info-block');
    const isOpenedLink = target.classList.contains('info-list__link');

    if (!isInfoBlock && !isInsideInfoBlock && !isOpenedLink) {
      closeInfoBlock();
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      $('.offer-info').fadeOut();
      $orderModal.fadeOut();
      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
      closeInfoBlock();
    }
  });

  function closeInfoBlock() {
    $('.info-block').fadeOut();
    $('.info-list_opened').removeClass('info-list_opened');
  }


  window.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });
  window.lazyLoadInstance.update();

  const $videoCard = $('.video-card');
  if ($videoCard) {
    $videoCard.lightGallery({
      selector: 'a',
      thumbnail: false,
      appendCounterTo: '.lg',
      addClass: 'no-pages',
    });
  }


  $('.promo-video').lightGallery({
    selector: '.promo-video__button',
    thumbnail: false,
    counter: false,
    appendCounterTo: '.lg',
  });

  // handleBackgroundVideo();
})();
