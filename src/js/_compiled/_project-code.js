"use strict";

var videoContainer = document.querySelector('.background-video');
var bgVideo = videoContainer && videoContainer.querySelector('video');
var mainMenu = document.querySelector('.main-menu');
var menu = document.querySelector('.menu');
var contactsLinks = document.querySelector('.contacts-links');
var promoVideo = document.querySelector('.promo-video');

var getVideoAspectRatio = function getVideoAspectRatio() {
  return window.innerWidth < 768 ? 3 / 4 : 16 / 9;
};

var VIDEO_GAP = 550;

var updateVideoSize = function updateVideoSize(video) {
  var newWidth;
  var newHeight;
  var $el = $(video);
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  if (windowWidth > 1500) {
    newWidth = '100%';
    newHeight = 'auto';
  } else {
    newWidth = windowHeight > windowWidth - VIDEO_GAP ? 'auto' : '100%';
    newHeight = windowHeight > windowWidth - VIDEO_GAP ? '100%' : 'auto';
  }

  $el.width(newWidth).height(newHeight);
};

var handleBackgroundVideo = function handleBackgroundVideo() {
  if (bgVideo) {
    updateVideoSize(bgVideo);
  }
};

var toggleIsBlack = function toggleIsBlack(isBlack) {
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
};

var getAnchors = function getAnchors() {
  return ['main', 'meet', 'provide', 'media', 'programs', 'reviews', 'contacts'];
};

var initFullPage = function initFullPage() {
  $('.page-container').fullpage({
    //options here
    licenseKey: '3B638E30-7BAE4068-BFE661C6-783CCD7A',
    anchors: getAnchors(),
    autoScrolling: true,
    scrollHorizontally: true,
    loopBottom: true,
    normalScrollElements: '.scrollable-content',
    responsiveWidth: 1024,
    responsiveHeight: 550,
    onLeave: function onLeave(origin, destination, direction) {
      var item = destination.item;
      var isBlack = item.classList.contains('section-black');
      toggleIsBlack(isBlack);
      $('.offer-info').fadeOut();
      closeMenu();
      window.lazyLoadInstance.update();
      var isDestinationVisible = $(destination.item).is(':visible');

      if (!isDestinationVisible) {
        if (direction === 'down') {
          setTimeout(function () {
            $('[href="#media"]')[0].click();
          }, 10);
        } else {
          setTimeout(function () {
            $('[href="#meet"]')[0].click();
          }, 10);
        }
      }

      $(mainMenu).addClass('_hidden');
      promoVideo.classList.add('_hidden');
    },
    afterLoad: function afterLoad(origin, destination, direction) {
      var item = destination.item;
      var isBlack = item.classList.contains('section-black');
      var anchor = item.dataset.anchor;

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
      $(".menu__link[href=\"#".concat(anchor, "\"]")).addClass('menu__link_active');
      toggleIsBlack(isBlack);
      window.lazyLoadInstance.update();
    }
  });
};

var closeMenu = function closeMenu() {
  $('.menu').removeClass('menu_opened');
  $('body').removeClass('hidden');
};

(function () {
  $(document).ready(function () {
    initFullPage();
    window.addEventListener('resize', function () {
      updateVideoSize(bgVideo);
    });
  });
  $('.move-to-link').click(function (e) {
    var moveTo = e.currentTarget.dataset.moveTo;
    fullpage_api.moveTo(moveTo);
  });
  $('.info-list__link').click(function (e) {
    var $target = $(e.currentTarget);
    var $section = $target.closest('.section');
    var $popup = $section.find('.info-block');
    var container = $section.find('.info-list');
    var inner = $popup[0].querySelector('.info-block__inner');
    $popup.fadeIn();
    container.addClass('info-list_opened');
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
  });
  $('.info-block__close').click(function (e) {
    var $target = $(e.currentTarget);
    var $popup = $target.closest('.info-block');
    $popup.fadeOut();
    $('.info-list_opened').removeClass('info-list_opened');
  });
  var $orderModal = $('.order-modal');
  document.addEventListener('click', function (e) {
    var target = e.target;
    var isPopupClick = target.classList.contains('offer-info');
    var isInsidePopup = target.closest('.offer-info');

    if (!isPopupClick && !isInsidePopup) {
      $('.offer-info').fadeOut();
    }

    var isOrderModal = target.classList.contains('order-modal');
    var isInsideModal = target.closest('.order-modal');

    if (!isOrderModal && !isInsideModal) {
      $orderModal.fadeOut();
    }

    var isMenu = target.classList.contains('menu');
    var isInsideMenu = target.closest('.menu');

    if (!isMenu && !isInsideMenu) {
      closeMenu();
    }

    var isInfoBlock = target.classList.contains('info-block');
    var isInsideInfoBlock = target.closest('.info-block');
    var isOpenedLink = target.classList.contains('info-list__link');

    if (!isInfoBlock && !isInsideInfoBlock && !isOpenedLink) {
      closeInfoBlock();
    }
  });
  document.addEventListener('keydown', function (e) {
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
    elements_selector: '.lazy'
  });
  window.lazyLoadInstance.update();
  var $videoCard = $('.video-card');

  if ($videoCard) {
    $videoCard.lightGallery({
      selector: 'a',
      thumbnail: false,
      appendCounterTo: '.lg',
      addClass: 'no-pages'
    });
  }

  $('.promo-video').lightGallery({
    selector: '.promo-video__button',
    thumbnail: false,
    counter: false,
    appendCounterTo: '.lg'
  }); // handleBackgroundVideo();
})();
"use strict";

(function () {
  $('.menu__link').click(function (e) {
    var $target = $(e.currentTarget);
    $('.menu__link').removeClass('menu__link_active');
    $target.addClass('menu__link_active');

    if (window.outerWidth < 768) {
      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
    }
  });
  $('.menu__toggle').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $target = $(e.currentTarget);
    var $menu = $target.closest('.menu');

    if ($menu.hasClass('menu_opened')) {
      $menu.removeClass('menu_opened');
      $('body').removeClass('hidden');
    } else {
      $menu.addClass('menu_opened');
      $('body').addClass('hidden');
    }
  });
})();
"use strict";

;

(function () {
  var $slider = $('.mosaic__inner');
  $('.mosaic').lightGallery({
    selector: '.mosaic__row a',
    thumbnail: false,
    appendCounterTo: '.lg'
  });
  $slider.slick({
    dots: true,
    arrows: true,
    // fade: true,
    speed: 1000,
    lazyLoad: 'ondemand',
    infinite: true,
    edgeFriction: '2',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    appendArrows: '.mosaic__controls',
    appendDots: '.mosaic__controls',
    centerPadding: '15%'
  });
})();
"use strict";

;

(function () {
  var openOfferPopup = function openOfferPopup(id) {
    var $popup = $(".offer-info[data-id=\"".concat(id, "\"]"));
    var inner = $popup[0].querySelector('.offer-info__text');
    $('.offer-info').fadeOut();
    $popup.css('display', 'flex').hide().fadeIn();
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
    $('body').addClass('hidden');
  };

  $('.offers__button').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = e.currentTarget; // const isInsideOffers = target.closest('.offers__item');
    // if (!isInsideOffers) {

    var id = target.dataset.id;
    openOfferPopup(id); // }
  });
  $('.offers__item').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $target = $(e.currentTarget);
    var id = $target.find('.offers__button').data('id');
    openOfferPopup(id);
  });
  $('.offer-info__back .close-btn').click(function (e) {
    var $target = $(e.currentTarget);
    var $popup = $target.closest('.offer-info');
    $popup.fadeOut();
    $('body').addClass('hidden');
  });
  $('.offer-info__button').click(function (e) {
    $(e.currentTarget).closest('.offer-info').fadeOut();
  });
})();
"use strict";

;

(function () {
  var $orderModal = $('.order-modal');
  var $orderForm = $('.order-modal__inner');
  var fieldsMap = {
    'name': 'Имя',
    'email': 'Почта',
    'event_type': 'Тип мероприятия',
    'budget': 'Бюджет',
    'day': 'День',
    'month': 'Месяц',
    'year': 'Год'
  };
  var $formLoader = $('.order-modal__loader');
  var $formMain = $('.order-modal__main');
  var $formSuccess = $('.order-modal__success-message');
  var orderForm = document.querySelector('.order-modal__inner');
  $orderForm.on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $form = $(e.currentTarget);
    var data = $form.serializeArray();
    var title = 'Раздел сайта - ' + $('title').text();
    var text = data.map(function (item) {
      return "".concat(fieldsMap[item.name], " - ").concat(item.value);
    });
    var resultText = text.join(' | \n');
    var dataText = "".concat(title, ".| \n ").concat(resultText);
    $formLoader.fadeIn();
    $.ajax({
      type: 'POST',
      url: '/mail.php',
      data: {
        dataText: dataText
      },
      success: function success(response) {
        $formMain.hide();
        $formSuccess.show();
        $formLoader.fadeOut();
        orderForm.reset();
      },
      error: function error(data) {
        orderForm.reset();
        $formLoader.fadeOut();
      }
    });
  });
  $('.order-modal__close').click(function () {
    $orderModal.fadeOut();
  });
  $('body').click(function (e) {
    var currentTarget = e.target;

    if (currentTarget.classList.contains('open-order')) {
      $('.lg-close').click();
      e.preventDefault();
      e.stopPropagation();
      $('body').css('overflow', 'visible');
      $formMain.show();
      $formSuccess.hide();
      $orderModal.fadeIn();
    }
  });
  var $daySelect = $('.labeled-select__select_day');
  var $monthSelect = $('.labeled-select__select_month');
  var $yearSelect = $('.labeled-select__select_year');
  var now = new Date();
  var calculatedYear = now.getFullYear();
  var maxYear = calculatedYear + 10;
  $yearSelect.html('');

  for (var i = calculatedYear; i <= maxYear; i++) {
    $yearSelect.append("<option>".concat(i, "</option>"));
  }

  updateDates();

  function zeroPad(num, size) {
    var s = String(num);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }

    return s;
  }

  $daySelect.val(now.getDate());
  $monthSelect.val(zeroPad(now.getMonth() + 1, 2));
  $yearSelect.val(now.getFullYear());
  $daySelect.change(function () {
    updateDates();
  });
  $monthSelect.change(function () {
    updateDates();
  });
  $yearSelect.change(function () {
    updateDates();
  });

  function updateDates() {
    var now = new Date();
    var currentDate = now.getDate();
    var currentMonth = now.getMonth() + 1;
    var currentYear = now.getFullYear();
    var selectedDate = Number($daySelect.val());
    var selectedMonth = Number($monthSelect.val());
    var selectedYear = Number($yearSelect.val());
    var selectedParsedDate = dayjs("".concat(selectedYear, "-").concat(selectedMonth, "-").concat(selectedDate));
    var currentParsedDate = dayjs(now);
    var selectedEqualCurrent = selectedYear === currentYear && selectedMonth === currentMonth;
    var maxDay = selectedParsedDate.daysInMonth();
    var dateDay = selectedEqualCurrent ? currentParsedDate.date() : 1;
    $daySelect.html('');

    for (var _i = dateDay; _i <= maxDay; _i++) {
      $daySelect.append("<option>".concat(_i, "</option>"));
    }

    $daySelect.val(selectedDate >= dateDay ? selectedDate : dateDay);
    var calculatedMonth = selectedYear === currentYear ? currentMonth : 1;
    var maxMonth = 12;
    $monthSelect.html('');

    for (var _i2 = calculatedMonth; _i2 <= maxMonth; _i2++) {
      $monthSelect.append("<option ".concat(_i2 === selectedMonth ? 'selected' : '', ">").concat(zeroPad(_i2, 2), "</option>"));
    }
  }
})();
"use strict";

;

(function () {
  $('.open-questions').click(function (e) {
    var $popup = $(".questions");
    var inner = $popup[0].querySelector('.questions__content');
    $('.menu').addClass('hidden');
    $('body').addClass('hidden');
    $popup.fadeIn();
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
  });
  $('.questions__close').click(function (e) {
    var $target = $(e.currentTarget);
    var $section = $target.closest('.questions');
    $('.menu').removeClass('hidden');
    $section.fadeOut();
    $('body').removeClass('hidden');
  });
})();
"use strict";

;

(function () {
  var slider = $('.slider__inner');
  slider.on('afterChange', function (event, currentSlide) {
    var slides = document.querySelectorAll('.slider__text');
    slides.forEach(function (slide) {
      var instance = new OverlayScrollbars(slide, {});
      instance.sleep();
      setTimeout(function () {
        instance.update(true);
      }, 1000);
    });
  });
  slider.on('init', function (event) {// console.log(event);
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
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false
      }
    }]
  });
  var slides = document.querySelectorAll('.slider__text');
  slides.forEach(function (slide) {
    new OverlayScrollbars(slide);
    var instance = new OverlayScrollbars(slide, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
  });
})();