/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    
    if(typeof obj == "object"){
        
        if(Object.keys(obj).length ==0){
            
            return true;
        }
        
        return false;
    }
    
    if(typeof obj =="array"){
        
        if(obj.length ===0){
            
            return true;
        }
        
        return false;
    }
};