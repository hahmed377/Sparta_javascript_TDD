describe("Intro to doing TDD in javascript", function(){


  var calculator = require("../lib/calcEngine");


  it("should add two numbers together", function(){
    expect(calculator.addTwoNumbers(3,2)).toEqual(5);
  })
  it("should subtract two numbers together", function(){
    expect(calculator.subtractTwoNumbers(6,2)).toEqual(4);
  })
  it("should divide two numbers together", function(){
    expect(calculator.divideTwoNumbers(10,2)).toEqual(5);
  })
  it("should multiply two numbers together", function(){
    expect(calculator.multiplyTwoNumbers(5,2)).toEqual(10);
  })
  it("should find the power of two numbers", function(){
    expect(calculator.power(2,2)).toEqual(4);
  })
  it("should find the square root of a number", function(){
    expect(calculator.squareRoot(49)).toEqual(7);
  })
  it("should find the BM1 metric", function(){
    expect(calculator.calBmiMetric(170,100)).toEqual(34.602076124567475);
  })
  it("should find the BM1 imperial", function(){
    expect(calculator.calBmiImperial(100,200)).toEqual(14);
  })
  it("should calculate trip", function(){
    expect(calculator.trip(60,60,1,60)).toEqual(1);
  })
})
