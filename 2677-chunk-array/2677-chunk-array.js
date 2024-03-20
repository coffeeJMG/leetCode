/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    let answer = [];
    let result = [];
    
     if(arr.length ===0) {
            
            return answer
        }
    
    while(arr.length !==0){
        
        for(let i=0; i<size; i++){
        
            if(arr.length ===0){
                 break;
            }    
            
              answer.push(arr[0])
              arr.shift(arr[0])
           }
        
        result.push(answer)
        answer =[];
    }
     
    
    return result
    
};



// arr 의 길이가 0 이면 answer 반환
// arr을 for 문을 돌면서 size 만큼 answer에 추가 
// 추가한 size만큼 arr에서 삭제
// 계속 삭제하다가 0이되면 1번 조건에 의해 answer 반환

// 재귀함수 이용 