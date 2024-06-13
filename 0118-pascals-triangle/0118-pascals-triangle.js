/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = [];

    for(let i=0; i<=numRows-1; i++){
        
         let array = [];
        
         if(i===0){
             answer.push([1])
         }else if(i===1){
                             
             answer.push([1,1])
         }else {
             
             let lastArray = answer[i-1]
             array.push(1)
             
             
             for(let j=1; j<=lastArray.length-1; j++){
                 
                 array.push(lastArray[j-1]+lastArray[j])
             }
             
             array.push(1)
             
             answer.push(array)
             
         }
        
        
        
    }

    return answer;
};




