/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

        
        let current = 99999999999;
        let result = 0; // i번째 날짜의 예상 판매수익 
        
        
        for(let i=0; i<prices.length-1; i++){
                
                
                
                let selledPrice = 0; // 매 날짜마다 가능한 매도 가격 리셋
                
            
                let buyPrice = prices[i]
                
                if(buyPrice < current){
                        current= buyPrice
                       for(let j=i+1; j<prices.length; j++){
                        
                        let sellPrice = prices[j]
                        
                        if(sellPrice > buyPrice && sellPrice-buyPrice > selledPrice ){
                            
                            selledPrice = sellPrice-buyPrice
                            
                             console.log(selledPrice,i,j, "판매 가능한 날짜 존재 ")
                        }
                    
                   
                        
                } 
                
                if(selledPrice >=result){
                    
                    
                    result = selledPrice
                    console.log(result, "초과 수익 생성")
                }
            
            }
        
                }
                
                
             
        
        return result
    
};



// 배열을 돌면서 나보다 크다 &&  sellPrice 보다 크면 sellPrice 에 저장
// 매 i 번째마다 sellPrice 가 result 보다 크면 result 갱신




