/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {

        let count =0;

        for(let i=0; i<nums.length-1; i++){
                let item = nums[i]
               
            for(let j=i+1; j<nums.length; j++){
                  
                if(item ===nums[j]){
                    count ++
                }
            }
        }

        return count
};