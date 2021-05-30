;(function () {
  const openOfferPopup = (id) => {
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
    $('body').addClass('hidden');
  };

  $('.offers__button').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.currentTarget;
    const isInsideOffers = target.closest('.offers__item');
    if (!isInsideOffers) {
      const id = target.dataset.id;
      openOfferPopup(id);
    }
  });

  $('.offers__item').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    const $target = $(e.currentTarget);
    const id = $target.find('.offers__button').data('id');
    openOfferPopup(id);
  });

  $('.offer-info__back .close-btn').click((e) => {
    const $target = $(e.currentTarget);
    const $popup = $target.closest('.offer-info');
    $popup.fadeOut();
    $('body').addClass('hidden')
  });

  $('.offer-info__button').click((e) => {
    $(e.currentTarget).closest('.offer-info').fadeOut()
  });
})();
