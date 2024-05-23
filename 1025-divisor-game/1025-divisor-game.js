// var divisorGame = function(n) {
    
    
//        let count =0 ; // count % 2 ===1 이면 Alice Turn
    
    
//     while( n > 1 ){
        
        
//         for(let i=n-1; i>=0; i--){
           
//             if( n % i ===0){
                
//                 count ++ // 자기 턴 종료하면서 +1 
//                 n = n-i       
             
//                 break;
//             }
           
//        }
        
    
//     }
        
  
//     if(count % 2 ===1 ){
        
//         return true
//     }else return false
    
// };


var divisorGame = function(n) {
    let count = 0; // Alice의 턴을 추적 (짝수일 때 Alice의 차례)
    
    while (n > 1) {
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                n -= i;
                count++;
                break;
            }
        }
    }
    
    return count % 2 === 1;
};