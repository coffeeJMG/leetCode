/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let dictionary = {};
    let answer = true
    
    
    for (let i = 0; i < arr.length; i++) {
        
        if (!dictionary[arr[i]]) {
            dictionary[arr[i]] = 1; 
        } else {
            dictionary[arr[i]] += 1; 
        }
    }
    
    
   
    const occurrences = Object.values(dictionary);

    
    const uniqueOccurrences = new Set(occurrences);

    
    return uniqueOccurrences.size === occurrences.length;
    
    
    
};


// 객체에 index 값 : 횟수로 저장
// 객체 내의 value 가 중복이 있는 지 검사 
