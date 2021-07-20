const videoContainer = document.querySelector('.background-video');
const bgVideo = videoContainer && videoContainer.querySelector('video');

const mainMenu = document.querySelector('.main-menu');
const menu = document.querySelector('.menu');
const contactsLinks = document.querySelector('.contacts-links');
const promoVideo = document.querySelector('.promo-video');

const getVideoAspectRatio = () => {
  return window.innerWidth < 768 ? (3 / 4) : (16 / 9);
}

// 1280 x 720
// 2280 x 1050
// 1000 x 330
const VIDEO_GAP = 550;

const vid_w_orig = 1280;
const vid_h_orig = 720;
const min_w = 300;
const updateVideoSize = (video) => {
  if(window.outerWidth < 1024) {
    return;
  }
  const $section = $('.section-main');

  const $videoContainer = $('.background-video');
  const $video = $('video');
  $videoContainer.removeClass('_hidden');

  $videoContainer.width($section.width());
  $videoContainer.height($section.height());

  const scale_h = $section.width() / vid_w_orig;
  const scale_v = $section.height() / vid_h_orig;
  let scale = scale_h > scale_v ? scale_h : scale_v;

  if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;}

  $video.width(scale * vid_w_orig);
  $video.height(scale * vid_h_orig);

  $videoContainer.scrollLeft(($video.width() - $section.width()) / 2);
  $videoContainer.scrollTop(($video.height() - $section.height()) / 2);
}

const handleBackgroundVideo = () => {
  if (bgVideo) {

    updateVideoSize(bgVideo);
  }
}


const toggleIsBlack = (isBlack) => {
  if (!isBlack) {
    menu.classList.add('menu_black');
    if (contactsLinks) {
      contactsLinks.classList.add('contacts-links_black');
    }
    if (promoVideo) {
      promoVideo.classList.add('promo-video_black');
    }
  } else {
    menu.classList.remove('menu_black');
    if (contactsLinks) {
      contactsLinks.classList.remove('contacts-links_black');
    }
    if (promoVideo) {
      promoVideo.classList.remove('promo-video_black');
    }
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
      responsiveHeight: 760,
      fitToSection: false,
      onLeave: function (origin, destination, direction) {
        const item = destination.item;
        const isBlack = item.classList.contains('section-black');
        toggleIsBlack(isBlack);
        $('.offer-info').fadeOut();
        closeMenu();

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
        promoVideo.classList.add('_hidden');
      },
      afterLoad: function (origin, destination, direction) {
        const item = destination.item;
        const isBlack = item.classList.contains('section-black');
        const anchor = item.dataset.anchor;

        if (destination.isFirst) {
          if (promoVideo) {
            promoVideo.classList.remove('_hidden');
          }
          $(mainMenu).removeClass('_hidden');
        } else {
          if (promoVideo) {
            promoVideo.classList.add('_hidden');
          }
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

const closeMenu = () => {
  $('.menu').removeClass('menu_opened');
  $('body').removeClass('hidden');
}

(function () {
  $(document).ready(function () {
    initFullPage();

    window.addEventListener('resize', () => {
      const $videoContainer = $('.background-video');
      $videoContainer.addClass('_hidden');
      setTimeout(() => {
        updateVideoSize(bgVideo);
      }, 500)
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
      closeMenu();
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
      closeMenu();
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
