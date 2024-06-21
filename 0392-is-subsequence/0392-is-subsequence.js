/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
            let answer =true;
            let result =""
            let newS = s
            
            for(let i=0; i<t.length; i++){
                
                let item =t[i]
                
                if(s.includes(t[i]) && t[i] === newS[0]){
                    
                    result +=t[i]
                    newS = newS.slice(1)
                }    
                
            }
    
    console.log(result)
    
    
    if(result !== s){
        
        return false
    }
    
    return answer
    
    
};