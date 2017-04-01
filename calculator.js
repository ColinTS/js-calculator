console.log('asdad')
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
module.exports = (function() {

  //PRIVATE
  var memory = 0;
  var total = 0;

  //PUBLIC
  return {

    load: function(x){
      total = x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
      return x;
    },

    getTotal: function(){
      return total;
    },

    add: function(x){
      total += x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
      return total;
    },

    subtract: function(x){
      total -= x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
      return total;
    },

    multiply: function(x) {
      total *= x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
      return total;
    },

    divide: function(x){
      total /= x;
      if(typeof x !== 'number' || x === 0) {
      throw new Error('That wont work!');
      }
      return total;
    },

    recallMemory: function(){
      return memory;
    },

    saveMemory: function(num){
      memory = num;
    },

    clearMemory: function(){
      memory = 0;
    }

  };

});