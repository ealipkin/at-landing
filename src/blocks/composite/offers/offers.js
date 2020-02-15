;(function () {
  $('.offers__item').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    const $target = $(e.currentTarget);
    const id = $target.find('.offers__button').data('id');
    const $popup = $(`.offer-info[data-id="${id}"]`);
    const inner = $popup[0].querySelector('.offer-info__text');
    $('.offer-info').fadeOut();
    $popup
      .css('display', 'flex')
      .hide()
      .fadeIn();
    const instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(() => {
      instance.update(true);
    }, 1000);
    $('body').css('overflow', 'hidden');
  });

  $('.offer-info__back .close-btn').click((e) => {
    const $target = $(e.currentTarget);
    const $popup = $target.closest('.offer-info');
    $popup.fadeOut();
    $('body').css('overflow', 'visible');
  });

  $('.offer-info__button').click((e) => {
    $(e.currentTarget).closest('.offer-info').fadeOut()
  });
})();
