/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    
    let answer = n
    let count = 0;
    return function() {
        
        if(count ===0 ){
            count++
            return answer 
        } else {
            return answer+=1    
        }
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */