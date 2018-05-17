const dom = require('./dom');
const events = require('./events');

const exLoad = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        const exes = data.exes;
        resolve(exes);
      })
      .fail((error) => {
        reject('oops!', error);
      });
  });
};

const locationLoad = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        const locations = data.locations;
        resolve(locations);
      })
      .fail((error) => {
        reject('oops!', error);
      });
  });
};

const initializer = () => {
  events.addButtonEvents();
  events.getSearch();

  exLoad().then((exes) => {
    dom.exDom(exes);
    locationLoad().then((locations) => {
      dom.locationDom(locations, exes);
      events.mothaF(locations, exes);
    });

  });
};

module.exports = {
  initializer,
  exLoad,
};
