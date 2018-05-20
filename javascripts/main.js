const initializer = require('./initialize');
const events = require('./events');

$(document).ready(() => {
  initializer();
  events.addButtonEvents();
  events.getSearch();
});
