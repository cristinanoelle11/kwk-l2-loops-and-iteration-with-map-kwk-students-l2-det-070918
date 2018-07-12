// Code your solution in this file.
function lowerCaseStudentsNames (list) {
 return list.map(function (driver) {
  return driver.toLowerCase();
 });
}
lowerCaseStudentsNames(['Cristina', 'Tara'])

function nameToAttributes(list){
  return list.map(function(driver) {
    const fName = driver.split('')[0];
    const lName = driver.split('')[1];
    return {firstName: fName, lastName: lName};
  });
}