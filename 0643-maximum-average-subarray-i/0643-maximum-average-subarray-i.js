/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    // 슬라이딩 윈도우
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]; 
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k; 
};


//  최대 합의 평균
//  최초 평균 값을 구한 뒤 맨앞의값은 빼고 맨 뒤의값은 더하면서 배열 순회