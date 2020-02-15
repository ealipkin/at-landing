(function () {
  $('.menu__link').click((e) => {
    const $target = $(e.currentTarget);
    $('.menu__link').removeClass('menu__link_active');
    $target.addClass('menu__link_active');
    
    if(window.outerWidth < 768) {
      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
    }
  });
  $('.menu__toggle').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    const $target = $(e.currentTarget);
    const $menu = $target.closest('.menu');
    if ($menu.hasClass('menu_opened')) {
      $menu.removeClass('menu_opened');
      $('body').removeClass('hidden');
    } else {
      $menu.addClass('menu_opened');
      $('body').addClass('hidden');
    }
  });
  
})();
