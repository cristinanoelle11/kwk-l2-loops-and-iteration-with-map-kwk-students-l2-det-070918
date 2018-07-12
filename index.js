// Code your solution in this file.
function lowerCaseStudentsNames (names) {
 return names.map(function (driver) {
  return driver.toLowerCase();
 });
}

function nameToAttributes(names){
  return names.map(function(driver) {
    const firstName = driver.split('')[0]
    const lastName = driver.split('')[1]
    return {firstName: firstName, lastName: lastName
  });
}