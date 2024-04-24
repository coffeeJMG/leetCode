var isValid = function(s) {
    let stack = [];
    let valids = {'(':')', '{':'}', '[':']'};

    if(s.length % 2 === 1){
        return false; 
    }
    
    for(let i = 0; i < s.length; i++){
        let item = s[i];

        if (valids[item]) {
            stack.push(item);
        } else {
            if (stack.length === 0) {
                return false; 
            }
            let last = stack.pop(); 
            if (valids[last] !== item) {
                return false; 
            }
        }
    }

    return stack.length === 0; 
};