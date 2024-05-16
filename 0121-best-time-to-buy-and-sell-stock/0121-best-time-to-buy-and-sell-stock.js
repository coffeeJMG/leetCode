/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

        max =0;
        min = 9999999999999999;
        maxdata = 0;
    
      for(let i=0; i<prices.length; i++){
          
          let price= prices[i]
          
          if(price <min){
              min = price
          }else if(price-min > max && price>maxdata){
              
              max = price-min
              maxdata-price
          }
      }
    
    return max
    
};



// 배열을 돌면서 나보다 크다 &&  sellPrice 보다 크면 sellPrice 에 저장
// 매 i 번째마다 sellPrice 가 result 보다 크면 result 갱신

// var maxProfit = function(prices) {
//     let minPrice = Infinity; // 초기 최소 가격을 무한대로 설정
//     let maxProfit = 0; // 초기 최대 이익을 0으로 설정

//     for (let i = 0; i < prices.length; i++) {
//         // 현재 가격이 현재까지의 최소 가격보다 작은 경우 최소 가격 갱신
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         }
//         // 현재 가격에서 최소 가격을 뺀 값이 현재까지의 최대 이익보다 큰 경우 최대 이익 갱신
//         else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice;
//         }
//         // 이 외의 경우는 특별히 할 것이 없음 (단순히 다음 반복으로 넘어감)
//     }

//     return maxProfit; // 최대 이익 반환
// };

//gpt 답 


