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

  $('.info-list__link').click((e) => {
    const $target = $(e.currentTarget);
    const $section = $target.closest('.section');
    const $popup = $section.find('.info-block');
    const inner = $popup[0].querySelector('.info-block__inner');
    $popup.fadeIn();
    const instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(() => {
      instance.update(true);
    }, 1000);
  });

  $('.info-block__close').click((e) => {
    const $target = $(e.currentTarget);
    const $popup = $target.closest('.info-block');
    $popup.fadeOut();
  });

  const $orderModal = $('.order-modal');
  const $orderForm = $('.order-modal__inner');
  const fieldsMap = {
    'name': 'Имя',
    'email': 'Почта',
    'event_type': 'Тип мероприятия',
    'budget': 'Бюджет',
    'day': 'День',
    'month': 'Месяц',
    'year': 'Год',
  };
  const $formLoader = $('.order-modal__loader');
  const $formMain = $('.order-modal__main');
  const $formSuccess = $('.order-modal__success-message');
  const orderForm = document.querySelector('.order-modal__inner');
  $orderForm.on('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const $form = $(e.currentTarget);
    const data = $form.serializeArray();
    const title = 'Раздел сайта - ' + $('title').text();
    const text = data.map(item => `${fieldsMap[item.name]} - ${item.value}`);
    const resultText = text.join(' | \n');
    const dataText = `${title}.| \n ${resultText}`;
    $formLoader.fadeIn();
    $.ajax({
      type: 'POST',
      url: '/mail.php',
      data: {dataText: dataText},
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

  $('.order-modal__close').click(() => {
    $orderModal.fadeOut();
  });

  $('.open-order').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    $('body').css('overflow', 'visible');
    $formMain.show();
    $formSuccess.hide();
    $orderModal.fadeIn();
  });


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

  window.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });
  window.lazyLoadInstance.update();
})();
