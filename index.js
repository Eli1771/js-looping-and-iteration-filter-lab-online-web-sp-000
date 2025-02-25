// Code your solution in this file

console.log(drivers);

function findMatching(drivers, name) {
  return drivers.filter(function(driver) {return driver.toUpperCase() === name.toUpperCase()});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {return driver.slice(0, string.length) === string});
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {return driver.name === name});
}