;(function () {

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

  $('body').click((e) => {
    const currentTarget = e.target;
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

  const $daySelect = $('.labeled-select__select_day');
  const $monthSelect = $('.labeled-select__select_month');
  const $yearSelect = $('.labeled-select__select_year');
  const now = new Date();
  const calculatedYear = now.getFullYear();
  const maxYear = calculatedYear + 10;

  $yearSelect.html('');
  for (let i = calculatedYear; i <= maxYear; i++) {
    $yearSelect.append(`<option>${i}</option>`);
  }
  updateDates();

  function zeroPad(num, size) {
    let s = String(num);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }

  $daySelect.val(now.getDate());
  $monthSelect.val(zeroPad(now.getMonth() + 1, 2));
  $yearSelect.val(now.getFullYear());
  $daySelect.change(() => {
    updateDates();
  });
  $monthSelect.change(() => {
    updateDates();
  });
  $yearSelect.change(() => {
    updateDates();
  });

  function updateDates() {
    const now = new Date();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    const selectedDate = Number($daySelect.val());
    const selectedMonth = Number($monthSelect.val());
    const selectedYear = Number($yearSelect.val());

    const selectedParsedDate = dayjs(`${selectedYear}-${selectedMonth}-${selectedDate}`);
    const currentParsedDate = dayjs(now);

    const selectedEqualCurrent = (selectedYear === currentYear) && (selectedMonth === currentMonth);

    const maxDay = selectedParsedDate.daysInMonth();
    // const dateDay = selectedEqualCurrent ? currentParsedDate.date() : 1;
    const dateDay = 1;

    $daySelect.html('');
    for (let i = dateDay; i <= maxDay; i++) {
      $daySelect.append(`<option>${i}</option>`);
    }
    $daySelect.val(selectedDate >= dateDay ? selectedDate : dateDay);

    // const calculatedMonth = selectedYear === currentYear ? currentMonth : 1;
    const calculatedMonth = 1;
    const maxMonth = 12;
    $monthSelect.html('');
    for (let i = calculatedMonth; i <= maxMonth; i++) {
      $monthSelect.append(`<option ${i === selectedMonth ? 'selected' : ''}>${zeroPad(i, 2)}</option>`);
    }
  }
})();
