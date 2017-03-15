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
    },

    recallMemory: function(){
      return memory;
    },

    saveMemory: function(){
      memory = total;
    }


  };

}) ;

  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

