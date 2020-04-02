'use strict';

(function () {
  $(document).ready(function () {

    $('.page-container').fullpage({
      //options here
      licenseKey: '3B638E30-7BAE4068-BFE661C6-783CCD7A',
      anchors: ['main', 'meet', 'provide', 'media', 'programs', 'reviews', 'contacts'],
      autoScrolling: true,
      scrollHorizontally: true,
      loopBottom: true,
      normalScrollElements: '.scrollable-content',
      responsiveWidth: 1024,
      responsiveHeight: 550,
      onLeave: function onLeave(origin, destination, direction) {
        var item = destination.item;
        var isBlack = item.classList.contains('section-black');
        var menu = document.querySelector('.menu');
        $('.offer-info').fadeOut();
        $('body').removeClass('hidden');
        if (!isBlack) {
          menu.classList.add('menu_black');
        } else {
          menu.classList.remove('menu_black');
        }

        window.lazyLoadInstance.update();
      },
      afterLoad: function afterLoad(origin, destination, direction) {
        var item = destination.item;
        var isBlack = item.classList.contains('section-black');
        var menu = document.querySelector('.menu');
        var anchor = item.dataset.anchor;
        $('.questions').fadeOut();
        $('.offer-info').fadeOut();
        $('body').removeClass('hidden');
        $('.menu').removeClass('hidden');
        $('.menu__link_active').removeClass('menu__link_active');
        $('.menu__link[href="#' + anchor + '"]').addClass('menu__link_active');
        if (!isBlack) {
          menu.classList.add('menu_black');
        } else {
          menu.classList.remove('menu_black');
        }

        window.lazyLoadInstance.update();
      }
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
      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
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
})();
'use strict';

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
'use strict';

;(function () {
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
'use strict';

;(function () {
  $('.offers__item').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $target = $(e.currentTarget);
    var id = $target.find('.offers__button').data('id');
    var $popup = $('.offer-info[data-id="' + id + '"]');
    var inner = $popup[0].querySelector('.offer-info__text');
    $('.offer-info').fadeOut();
    $popup.css('display', 'flex').hide().fadeIn();
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
    $('body').addClass('hidden');
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
'use strict';

;(function () {

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
      return fieldsMap[item.name] + ' - ' + item.value;
    });
    var resultText = text.join(' | \n');
    var dataText = title + '.| \n ' + resultText;
    $formLoader.fadeIn();
    $.ajax({
      type: 'POST',
      url: '/mail.php',
      data: { dataText: dataText },
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

  $('.open-order').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('body').css('overflow', 'visible');
    $formMain.show();
    $formSuccess.hide();
    $orderModal.fadeIn();
  });

  var $daySelect = $('.labeled-select__select_day');
  var $monthSelect = $('.labeled-select__select_month');
  var $yearSelect = $('.labeled-select__select_year');
  var now = new Date();
  var calculatedYear = now.getFullYear();
  var maxYear = calculatedYear + 10;

  $yearSelect.html('');
  for (var i = calculatedYear; i <= maxYear; i++) {
    $yearSelect.append('<option>' + i + '</option>');
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

    var selectedParsedDate = dayjs(selectedYear + '-' + selectedMonth + '-' + selectedDate);
    var currentParsedDate = dayjs(now);

    var selectedEqualCurrent = selectedYear === currentYear && selectedMonth === currentMonth;

    var maxDay = selectedParsedDate.daysInMonth();
    var dateDay = selectedEqualCurrent ? currentParsedDate.date() : 1;

    $daySelect.html('');
    for (var _i = dateDay; _i <= maxDay; _i++) {
      $daySelect.append('<option>' + _i + '</option>');
    }
    $daySelect.val(selectedDate >= dateDay ? selectedDate : dateDay);

    var calculatedMonth = selectedYear === currentYear ? currentMonth : 1;
    var maxMonth = 12;
    $monthSelect.html('');
    for (var _i2 = calculatedMonth; _i2 <= maxMonth; _i2++) {
      $monthSelect.append('<option ' + (_i2 === selectedMonth ? 'selected' : '') + '>' + zeroPad(_i2, 2) + '</option>');
    }
  }
})();
'use strict';

;(function () {
  $('.open-questions').click(function (e) {
    var $popup = $('.questions');
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
'use strict';

;(function () {
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