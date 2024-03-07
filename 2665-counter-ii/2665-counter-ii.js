/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */


var createCounter = function(init) {
   
    return {
        init: init, 

        increment: function() {
            return ++this.init; 
        },

        decrement: function() {
            return --this.init; 
        },

        reset: function() {
            this.init = init; 
            return this.init; 
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */