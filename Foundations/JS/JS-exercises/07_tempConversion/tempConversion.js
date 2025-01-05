const convertToCelsius = function(DFah) {
  return Math.round( ((DFah - 32) * (5/9)) * 10)/10;
};

const convertToFahrenheit = function(DCel) {
  return Math.round( (DCel * (9/5) +32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
