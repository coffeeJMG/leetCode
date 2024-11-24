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


// 빈 문자열을 for문 안에서 처리하는 gpt 로직
// var isSubsequence = function(s, t) {
//     let index = 0;

//     for (let i = 0; i < t.length; i++) {
//         if (s[index] === t[i]) {
//             index++;
//         }
//         // s의 모든 문자를 확인했으면 true를 반환
//         if (index === s.length) {
//             return true;
//         }
//     }

//     // 반복문을 다 돈 후에도 index가 s 길이에 도달하지 않으면 false
//     return index === s.length;
// };