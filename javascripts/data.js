let exesData = [];
let locationsData = [];

const exJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.exes);
      })
      .fail((error) => {
        reject('oops!', error);
      });
  });
};

const locationJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((error) => {
        reject('oops!', error);
      });
  });
};

const getAllData = () => {
  return Promise.all([exJSON(), locationJSON(),])
    .then((results) => {
      exesData = results[0];
      locationsData = results[1];
    })
    .catch((err) => {
      console.error('Oops there was an error', err);
    });
};

const getExes = () => {
  return exesData;
};

const getLocations = () => {
  return locationsData;
};

module.exports = {
  getAllData,
  getExes,
  getLocations,
};
