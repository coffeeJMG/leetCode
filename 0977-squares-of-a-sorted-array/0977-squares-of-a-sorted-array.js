/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let answer =[]
    
    for(let i =0; i<nums.length; i++){
        
        let item = nums[i]
        
        answer.push(item**2)
    }
    
   
    
    return answer.sort((a,b)=> a-b)
};