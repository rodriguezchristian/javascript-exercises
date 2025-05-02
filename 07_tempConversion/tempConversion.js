const convertToCelsius = function(temp) {
  let res = 0;
  res = (5 / 9) * ((temp) - 32);
  return parseFloat(res.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let res = 0;
  res = ((9 / 5) * temp) + 32;
  return parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
