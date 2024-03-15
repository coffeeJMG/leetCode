/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    
    s= s.split("")
    let zeroCount = 0;
    let oneCount = 0;
    let answer = []
    
    
    for(let i=0; i<s.length; i++){
        
            let item = s[i]
            
            if(item === "1"){
                oneCount ++
            }
            
            if(item ==="0"){
                zeroCount ++
            }
    }

   
    if(oneCount ===1){
        for(let i=0; i<zeroCount; i++){
            answer.push("0")
        }
        
        answer.push("1")
    }else {
        
        for(let i=0; i<oneCount-1; i++){
            answer.push("1")
        }
        for(let i=0; i<zeroCount; i++){
            answer.push("0")
        }
        
        answer.push("1")
    }
    
    

    return answer.join("")
};
    
    
    // 1이 1개면 가장 뒤로 배치
    // 2개 이상이면 1개를 제외한 나머지 1은 앞에서부터 배치