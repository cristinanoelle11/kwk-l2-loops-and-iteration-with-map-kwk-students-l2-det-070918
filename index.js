// Code your solution in this file.
function lowerCaseStudentNames (list) {
 return list.map(function (driver) {
  return driver.toLowerCase();
 });
}
lowerCaseStudentNames(['Cristina', 'Tara'])

function nameToAttributes(list){
  return list.map(function(driver) {
    const fName = driver.split('')[0];
    const lName = driver.split('')[1];
    return {firstName: fName, lastName: lName};
  });
}