/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  
     
    let totalSum = 0;
    let leftSum =0;
    
    for(let i=0; i<nums.length; i++){
        
        totalSum +=nums[i]
    }
    
    for(let i=0; i<nums.length; i++){
        
        
        totalSum -= nums[i]
        
        if(leftSum === totalSum ){
            
            return i;
        }
        
        leftSum+=nums[i]
        
    }
       
    return -1
};



// 총 배열의 합을 계산
// 우측의합은 총배열의 합 - num[i] 누적
// leftSum = 우측의합인 위 계산과 일치하면 Index 반환