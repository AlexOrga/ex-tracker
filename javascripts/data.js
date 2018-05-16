// const loadLocations = require('./locations');
// const loadExInfo = require('./ex');
const dom = require('./dom');
// const events = require('./events');

// const whenLocationsLoad = (data) => {
//   const locations = data.locations;
//   $('#locations').html(dom.locationDom(locations));
//   events.addButtonEvents();
//   events.getSearch();
// };

// const whenExInfoLoads = (data) => {
//   $('#exInfo').html(dom.exDom(data.ex));
// };

// const loadFail = () => {
//   console.error('Whoops! There was an error, try again!');
// };

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
  exLoad().then((exes) => {
    dom.exDom(exes);
    locationLoad().then((locations) => {
      dom.locationDom(locations, exes);
    });
  });
  // locationLoad().then((locations) => {
  //   dom.locationDom(locations);
  // });
};

module.exports = {
  initializer,
};
