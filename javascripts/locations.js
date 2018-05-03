const loadLocations = (loadFunction, errorFunction) => {
  $.get('../db/locations.json')
    .done(loadFunction)
    .fail(errorFunction);
};

module.exports = loadLocations;
