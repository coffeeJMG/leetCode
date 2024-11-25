/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let array = {}
   
    
    
    
   for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        
        if (!array[item]) {
            array[item] = 1; 
        } else {
            array[item]++; 
        }
    }
    
    const occurrences = Object.values(array);
    // 객체의 value 값으로 새로운 배열반환
    
    console.log(occurrences)
    
    const uniqueOccurrences = new Set(occurrences);
    // 배열의 중복 제거 하는 Set 생성 
    
    return occurrences.length===uniqueOccurrences.size
    
};