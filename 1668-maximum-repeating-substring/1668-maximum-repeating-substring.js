/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    
    let answer =0;
    
    
    for(let i=0; i<sequence.length; i++){
        
        let count =0;
        
        for(j=i; j<sequence.length; j+=word.length){
            
                if(sequence.substr(j,word.length) !==word){
                    
                    break;
                }
            
                count++
            
        }
        
        if(count>answer){
            
            answer = count;
        }
    }
    
    return answer
    
};