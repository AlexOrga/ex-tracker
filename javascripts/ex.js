const loadExInfo = (loadFunction, errorFunction) => {
  $.get('../db/ex.json')
    .done(loadFunction)
    .fail(errorFunction);
};

module.exports = loadExInfo;
