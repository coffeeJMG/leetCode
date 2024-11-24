/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    
        let index = 0;
        let string = ""
    
        if(s==="") return true
        
        for(let i=0; i<t.length; i++){
            
            if(t[i] === s[index]){
                
                string +=t[i]
                index ++
            }
            
            if(string.length === s.length ){
                
                return true;
            }
            
        }
        
        return false
    
};