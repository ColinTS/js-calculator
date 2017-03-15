/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function(){

  //PRIVATE
  var memory = 0;
  var total = 0;

  return {

    load: function(x){
      total = x;
      return x;
    },

    getTotal: function(){
      return total;
    },

    add: function(x){
      total += x;
    },

    subtract: function(x){
      total -= x;
    },

    multiply: function(x) {
      total *= x;
    },

    divide: function(x){
      total /= x;
    }

  };

}) ;

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

