const data = require('./data');
const dom = require('./dom');

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
    const exData = data.getExes();
    const locationData = data.getLocations();
    const currentId = (e.target.id * 1);
    exData.forEach((ex) => {
      if (ex.id === currentId) {
        dom.singleExDom(ex);

        const locationsForEx = [];
        ex.locationNums.forEach((num) => {
          locationData.forEach((location) => {
            if (num === location.locationId) {
              locationsForEx.push(location);
              dom.singleLocationDom(locationsForEx);
              backButton();
              addButtonEvents();
              getSearch();
            }
          });
        });
      };
    });
  });
};

const backButton = () => {
  $('#back-btn').on('click', () => {
    data.getAllData().then(() => {
      const exData = data.getExes();
      const locationData = data.getLocations();
      dom.exDom(exData);
      dom.locationDom(locationData, exData);
      mothaF();
    });
  });
};

module.exports = {
  addButtonEvents,
  getSearch,
  mothaF,
};
