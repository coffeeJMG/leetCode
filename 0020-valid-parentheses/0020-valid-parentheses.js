var isValid = function(s) {
    let stack = [];
    let valids = {'(':')', '{':'}', '[':']'};

    for(let i = 0; i < s.length; i++){
        let item = s[i];

        if (valids[item]) {
            stack.push(item);
        } else { 
            if (stack.length === 0) {
                return false; // 스택이 비어있으면 짝이 맞지 않음
            }

            let last = stack.pop(); 
            if (valids[last] !== item) {
                return false; 
            }
        }
    }

    return stack.length === 0; // 스택이 비어있어야 모든 괄호가 짝이 맞음
};