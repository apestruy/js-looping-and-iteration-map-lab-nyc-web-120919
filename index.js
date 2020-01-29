function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const names = driver.split(" ")
    return { firstName: names[0], lastName: names[1]};
  })
}