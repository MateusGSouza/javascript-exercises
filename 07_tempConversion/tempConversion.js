const convertToCelsius = function(temperature) {
  const celsiusTemp = ( temperature - 32 ) / 1.8
  const celsiusTempRounded = Math.round(celsiusTemp * 10) / 10
  return celsiusTempRounded
};

const convertToFahrenheit = function(temperature) {
  const fahrenheitTemp = ( temperature * 1.8 + 32 )
  const fahrenheitTempRounded = Math.round(fahrenheitTemp * 10) / 10
  return fahrenheitTempRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
