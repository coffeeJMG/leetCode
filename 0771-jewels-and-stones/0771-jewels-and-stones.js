/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    
     let isJewls = {}
     let count =0;
     
     for(value of jewels){
         
         isJewls[value] = 0;
     }
    
     for(value of stones){
         
         
         if(isJewls[value] ===0){
             
             count ++
         }
     } 
    
    
    console.log(count)
    
    return count 
};