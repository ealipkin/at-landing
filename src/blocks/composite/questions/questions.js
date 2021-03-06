;(function () {
  $('.open-questions').click((e) => {
    const $popup = $(`.questions`);
    const inner = $popup[0].querySelector('.questions__content');
    $('.menu').addClass('hidden');
    $('body').addClass('hidden');
    $popup.fadeIn();
    const instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(() => {
      instance.update(true);
    }, 1000);
  });

  $('.questions__close').click((e) => {
    const $target = $(e.currentTarget);
    const $section = $target.closest('.questions');
    $('.menu').removeClass('hidden');
    $section.fadeOut();
    $('body').removeClass('hidden');
  });

})();
