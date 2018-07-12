// Code your solution in this file.
function lowerCaseStudentsNames (list) {
 return list.map(function (driver) {
  return driver.toLowerCase();
 });
}

function nameToAttributes(list){
  return list.map(function(driver) {
    const firstName = driver.split('')[0];
    const lastName = driver.split('')[1];
    return {firstName: firstName, lastName: lastName};
  });
}