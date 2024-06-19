/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let substring = 0;
    let countL = 0;
    let countR = 0;
    let answer = 0;
    
    for(let i=0; i<s.length; i++){
        
        let item = s[i];
        
        
        
        if(item ==="L"){
            countL ++
        }else if(item ==="R"){
            countR ++
        }
        
        
        if(countL === countR){
            
            
            answer ++
        }
        
        
    }
        
    return answer
    
    
};


