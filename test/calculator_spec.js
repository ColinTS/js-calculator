// import dependencies e.g. chai and the calculator module
/*jshint esversion: 6*/
const chai = require('chai');
const calculatorModule = require('../calculator.js');

// define two variables: `expect` and `should
const expect = chai.expect;
const should = chai.should();

// define a `describe` block. what are we testing? what should be name this suite? This is the "container" describe block.
  /**
   * each method should have it's own `describe` block
   */
describe("calculatorModule", function() {

  it('should be a function', function () {
    expect(calculatorModule).to.exist;
    expect(calculatorModule).to.be.an('function');
  });

  it  ('should return an object', function (){
    expect(calculatorModule()).to.be.an('object');
  });

});
  // define a `describe` block to test the `load` method and all these tests go INSIDE of this describe

describe("Load", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.load).to.be.an('function');
  });

  it('should return a number', function(){
    expect(calc.load(3)).to.equal(3);
  });

  it('should throw an error if a number is not inputted', function(){
    expect(calc.load.bind(null, 'asd')).to.throw('That aint no numba!');
  });

});

  // define a `describe` block to test the `getTotal` method and all these tests go INSIDE of this describe

describe("Get Total", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.getTotal).to.be.an('function');
  });

  it('should return a number', function(){
    calc.load(3);
    expect(calc.getTotal()).to.equal(3);
  });

});
  // define a `describe` block to test the `add` method and all these tests go INSIDE of this describe

describe("Add", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.add).to.be.an('function');
  });

  it('should add a number to the total', function(){
    calc.load(4);
    expect(calc.add(5)).to.equal(9);
    expect(calc.add(-3)).to.equal(6);
  });

  it('should throw an error if a number is not inputted', function(){
    expect(calc.add.bind(null, 'asd')).to.throw('That aint no numba!');
  });

});
  // define a `describe` block to test the `subtract` method and all these tests go INSIDE of this describe

describe("Subtract", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.subtract).to.be.an('function');
  });

  it('should subtract a number from the total', function(){
    calc.load(4);
    expect(calc.subtract(5)).to.equal(-1);
    expect(calc.subtract(-3)).to.equal(2);
  });

  it('should throw an error if a number is not inputted', function(){
    expect(calc.subtract.bind(null, 'asd')).to.throw('That aint no numba!');
  });

});
  // define a `describe` block to test the `multiply` method and all these tests go INSIDE of this describe

describe("Multiply", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.multiply).to.be.an('function');
  });

  it('should multiply numbers', function(){
    calc.load(4);
    expect(calc.multiply(5)).to.equal(20);
    expect(calc.multiply(-3)).to.equal(-60);
  });

  it('should throw an error if a number is not inputted', function(){
    expect(calc.multiply.bind(null, 'asd')).to.throw('That aint no numba!');
  });

});
  // define a `describe` block to test the `divide` method and all these tests go INSIDE of this describe

describe("Divide", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.divide).to.be.an('function');
  });

  it('should divide numbers', function(){
    calc.load(12);
    expect(calc.divide(2)).to.equal(6);
    expect(calc.divide(-3)).to.equal(-2);
  });

  it('should throw an error if a number is not inputted', function(){
    expect(calc.divide.bind(null, 'asd')).to.throw('That wont work!');
  });

  it('should not allow you to divide by 0', function(){
    expect(calc.divide.bind(null, 0)).to.throw('That wont work!');
  });

});
  // define a `describe` block to test the `recallMemory` method and all these tests go INSIDE of this describe

describe("Memory", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.recallMemory).to.be.an('function');
  });

  it('should return the number stored in memory', function(){
    expect(calc.recallMemory()).to.equal(0);
  });

});
  // define a `describe` block to test the `saveMemory` method and all these tests go INSIDE of this describe

describe("Save Memory", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.saveMemory).to.be.an('function');
  });

  it('should return the number stored in total', function(){
    calc.saveMemory(5);
    expect(calc.recallMemory()).to.equal(5);
  });

});
  // define a `describe` block to test the `clearMemory` method and all these tests go INSIDE of this describe

describe("Clear Memory", function() {
  var calc;
  beforeEach(function(){
   calc = calculatorModule();
  });

  it('should be a function', function() {
    expect(calc.clearMemory).to.be.an('function');
  });

  it('should return the number stored in total', function(){
    calc.clearMemory();
    expect(calc.recallMemory()).to.equal(0);
  });

});
  /**
   * FINAL BOSS
   */

  // define a `describe` block to test the `validation` features of your methods and all these tests go INSIDE of this describe
