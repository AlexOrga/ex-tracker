const loadLocations = require('./locations');
const loadExInfo = require('./ex');

const whenLocationsLoad = (data) => {
  console.log('data: ', data);
};

const whenExInfoLoads = (data) => {
  console.log('data: ', data);
};

const loadFail = () => {
  console.error('Whoops! There was an error, try again!');
};

const initializer = () => {
  loadLocations(whenLocationsLoad, loadFail);
  loadExInfo(whenExInfoLoads, loadFail);
};

module.exports = initializer;
