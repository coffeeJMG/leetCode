var isValid = function(s) {
    let stack = [];
    let valids = {'(':')', '{':'}', '[':']'};

    if(s.length % 2 === 1){
        return false; // 홀수 길이는 바로 false 반환
    }
    
    for(let i = 0; i < s.length; i++){
        let item = s[i];

        if (valids[item]) {
            stack.push(item);
        } else {
            if (stack.length === 0) {
                return false; // 스택이 비어있으면 닫는 괄호가 먼저 나온 것
            }
            let last = stack.pop(); 
            if (valids[last] !== item) {
                return false; // 짝이 맞지 않음
            }
        }
    }

    return stack.length === 0; // 스택이 비어 있어야 모든 괄호가 짝이 맞음
};