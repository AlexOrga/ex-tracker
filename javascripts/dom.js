const exesOutputDiv = $('#exInfo');
const locationsOutputDiv = $('#locations');

const locationDom = (locations, exes) => {
  let domString = '';
  domString +=  `<h3 class="location-heading">Where They Hide</h3>`;
  locations.forEach((location) => {
    domString += `<div class="location-card ${location.timeOfDay} col-lg-4">`;
    domString +=    `<h3>${location.name}</h3>`;
    domString +=    `<img src="${location.image}">`;
    domString +=    `<h4>${location.address}</h4>`;
    domString +=    `<p><strong>Time of Day:  ${location.timeOfDay}</strong></p>`;
    domString +=    `<p>Who visits this location:</p>`;
    exes.forEach((ex) => {
      ex.locationNums.forEach((num) => {
        if (num === location.locationId) {
          domString += `<p>${ex.name}</p>`;
        }
      });
    });
    domString +=  `</div>`;
  });
  printLocations(domString);
};

const singleLocationDom = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString +=  `<div class="col-lg-2">`;
    domString += `<div class="single-location-card ${location.timeOfDay} panel panel-info">`;
    domString +=    `<div class="panel-heading">`;
    domString +=      `<h4>${location.name}</h4>`;
    domString +=    `</div>`;
    domString +=    `<div class="panel-body">`;
    domString +=      `<img src="${location.image}">`;
    domString +=      `<h4>${location.address}</h4>`;
    domString +=      `<p><strong>Time of Day: <strong> ${location.timeOfDay}</p>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
  });
  printLocations(domString);
};

const exDom = (exInfo) => {
  let domString = '';
  domString +=  `<h3 class="location-heading">My Exes</h3>`;
  exInfo.forEach((ex) => {
    domString +=  `<div class="ex-card col-md-3">`;
    domString +=    `<h3>${ex.name}</h3>`;
    domString +=    `<img src="${ex.image}">`;
    domString +=    `<h4>${ex.age}</h4>`;
    domString +=    `<h5>Flaw:</h5>`;
    domString +=    `<p>${ex.flaws}</p>`;
    domString +=    `<button class="mfr btn" id="${ex.id}">See More About ${ex.name}</button>`;
    domString +=  `</div>`;
  });
  printExes(domString);
};

const singleExDom = (ex) => {
  let domString = '';
  domString +=  `<div id="back-button">`;
  domString +=    `<button class="btn btn-primary" id="back-btn"><span class="glyphicon glyphicon-chevron-left"></span>Back</button>`;
  domString +=  `</div>`;
  domString +=  `<div class="single-ex-card col-md-6">`;
  domString +=    `<img src="${ex.image}">`;
  domString +=    `<h3>${ex.name}</h3>`;
  domString +=    `<h4>${ex.age}</h4>`;
  domString +=    `<h4>Flaws:</h4>`;
  domString +=    `<p>${ex.flaws}</p>`;
  domString +=    `<button class="mfr btn" id="${ex.id}">See More About ${ex.name}</button>`;
  domString +=  `</div>`;
  printExes(domString);
};

const printExes = (exesString) => {
  exesOutputDiv.html(exesString);
};

const printLocations = (locations) => {
  locationsOutputDiv.html(locations);
};

module.exports = {
  locationDom,
  exDom,
  singleExDom,
  singleLocationDom,
};
