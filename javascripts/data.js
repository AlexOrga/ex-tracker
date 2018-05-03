const loadLocations = require('./locations');
const loadExInfo = require('./ex');
const dom = require('./dom');

const whenLocationsLoad = (data) => {
  $('#locations').html(dom.locationDom(data.locations));
};

const whenExInfoLoads = (data) => {
  $('#exInfo').html(dom.exDom(data.ex));
};

const loadFail = () => {
  console.error('Whoops! There was an error, try again!');
};

const initializer = () => {
  loadLocations(whenLocationsLoad, loadFail);
  loadExInfo(whenExInfoLoads, loadFail);
};

module.exports = initializer;
