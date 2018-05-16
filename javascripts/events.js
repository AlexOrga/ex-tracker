jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const addButtonEvents = () => {
  $('.btn').on('click', () => {
    $('#locations .location-card').show();
    const buttonClicked = $(event.target).html();
    if (buttonClicked === 'Morning') {
      $('#locations .location-card').not('.Morning').toggle();
    } else if (buttonClicked === 'Afternoon') {
      $('#locations .location-card').not('.Afternoon').toggle();
    } else if (buttonClicked === 'Evening') {
      $('#locations .location-card').not('.Evening').toggle();
    } else if (buttonClicked === 'Dark') {
      $('#locations .location-card').not('.Dark').toggle();
    }
  });
};

const getSearch = () => {
  $('#search-bar').keypress((event) => {
    if (event.which === 13) {
      const searched = $('#search-bar').val();
      $(`#locations .location-card:not(:icontains(${searched}))`).hide();
    }
  });
};

const mothaF = () => {
  $('.mfr').on('click', (e) => {
    alert('Hey i work!');
  });
};

module.exports = {
  addButtonEvents,
  getSearch,
  mothaF,
};
