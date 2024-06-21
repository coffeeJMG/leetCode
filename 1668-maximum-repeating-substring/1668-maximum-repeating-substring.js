/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    
    let answer =0;
    let repeatWord ="";
    
    while(true){
        
        repeatWord +=word
        
        if(sequence.includes(repeatWord)){
            
            answer ++
        }else {
            
            break;
        }
        
        
        
    }
    
    return answer
    
};