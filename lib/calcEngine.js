function addTwoNumbers(num1, num2) {
  return num1 + num2
}
  function subtractTwoNumbers(num1, num2) {
   return num1 - num2
 }
 function divideTwoNumbers(num1, num2) {
  return num1 / num2
}
function multiplyTwoNumbers(num1, num2) {
 return num1 * num2
}
function power(num1, num2){
  return Math.pow(num1, num2)

}
function squareRoot(num1){
  return Math.sqrt(num1)

}
function calBmiMetric(height, weight){

  var height2 = (height/100)
  return(weight/(height2 * height2))
}
function calBmiImperial(height, weight){
   return bmi = Math.round(weight / Math.pow(height, 2) * 703);
}

function trip(distance,fuel,costPerGallon,speed){
//   var distance = parseFloat(prompt("Enter the distance"));
//     // fuel is for miles per gallon
//     var fuel = parseFloat(prompt("Enter fuel efficiency (mpg)"));
//     var costPerGallon = parseFloat(prompt("Enter price per gallon"));
//     var speed = parseFloat(prompt("Enter speed"));
//     var time = distance/speed;
// var price;x
if (speed > 60 ) {
  // if the speed is over 60 reduce mpg by 2
  var mpg = (speed % 60 * 2);
  var reduced_mpg = fuel -  mpg;
  return (distance/reduced_mpg)*costPerGallon;
  //
}else {
  return (distance/fuel)*costPerGallon;
  }

}


module.exports = {
  addTwoNumbers: addTwoNumbers,
  subtractTwoNumbers: subtractTwoNumbers,
  divideTwoNumbers: divideTwoNumbers,
  multiplyTwoNumbers: multiplyTwoNumbers,
  power: power,
  squareRoot: squareRoot,
  calBmiMetric: calBmiMetric,
  calBmiImperial: calBmiImperial,
  trip: trip

}
