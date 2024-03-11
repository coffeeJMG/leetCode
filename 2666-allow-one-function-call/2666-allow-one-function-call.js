/**
 * @param {Function} fn
 * @return {Function}
 */

    
 //  console.log(fn(1,2,3)) => output 6
 //  closure 활용 => 내부함수에서 called 값이 변해도 closure에 의해서 추적    
    
    var once = function(fn) {
    let called = false;
    
    return function(...args){
        if(called) {
            return undefined;
        } else {
            called = true;
            return fn(...args);
        }
    }
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
