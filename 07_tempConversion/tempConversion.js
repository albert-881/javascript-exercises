const convertToCelsius = function(fahrenheit) {
  
  let cel = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  return cel;
  
  
};

const convertToFahrenheit = function(celsius) {
  
  let fah = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
  return fah;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
