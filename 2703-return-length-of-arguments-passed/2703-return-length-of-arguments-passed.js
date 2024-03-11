/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    
   
        
  let answer = []
  for (const arg of args) {
    answer.push(arg)
  }
    
   
  return answer.length
        
        
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */