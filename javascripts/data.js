const loadLocations = require('./locations');
const loadExInfo = require('./ex');
const dom = require('./dom');
const events = require('./events');

const whenLocationsLoad = (data) => {
  const locations = data.locations;
  $('#locations').html(dom.locationDom(locations));
  events.addButtonEvents();
  events.getSearch();
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
