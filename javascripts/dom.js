
const locationDom = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="location-card ${location.timeOfDay} col-lg-6">`;
    domString +=    `<img src="${location.image}">`;
    domString +=    `<h3>${location.name}</h3>`;
    domString +=    `<h4>${location.address}</h4>`;
    domString +=    `<p><strong>Time of Day: <strong> ${location.timeOfDay}</p>`;
    domString +=  `</div>`;
  });
  return domString;
};

const exDom = (exInfo) => {
  let domString = '';
  domString +=  `<div>`;
  domString +=    `<img src="${exInfo.image}">`;
  domString +=    `<h3>${exInfo.name}</h3>`;
  domString +=    `<h4>${exInfo.age}</h4>`;
  domString +=    `<h4>Flaws:</h4>`;
  exInfo.flaws.forEach((flaw) => {
    domString +=   `<p>${flaw}</p>`;
  });
  domString +=  `</div>`;
  return domString;
};

module.exports = {
  locationDom,
  exDom,
};
