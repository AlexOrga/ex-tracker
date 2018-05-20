const data = require('./data');
const dom = require('./dom');
const events = require('./events');

const initializer = () => {
  data.getAllData().then(() => {
    const exData = data.getExes();
    const locationData = data.getLocations();
    dom.exDom(exData);
    dom.locationDom(locationData, exData);
    events.mothaF();
  });
};

module.exports = initializer;
