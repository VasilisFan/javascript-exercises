const convertToCelsius = function(x) {
  let temp = (x - 32) * 5/9;
  if (!Number.isInteger(temp)){
    temp = Number.parseFloat(temp).toFixed(1);
  }
  return Number(temp);
};

const convertToFahrenheit = function(x) {
  let temp = (x * 9/5) + 32;
  if (!Number.isInteger(temp)){
    temp = Number.parseFloat(temp).toFixed(1);
  }
  return Number(temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
