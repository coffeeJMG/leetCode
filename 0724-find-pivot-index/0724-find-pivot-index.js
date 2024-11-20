/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, curr) => acc + curr, 0); // 배열의 전체 합
    let leftSum = 0; // 왼쪽 합 초기화

    for (let i = 0; i < nums.length; i++) {
        // 오른쪽 합 계산: totalSum - leftSum - nums[i]
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // 피벗 인덱스 반환
        }
        leftSum += nums[i]; // 왼쪽 합 업데이트
    }

    return -1; // 피벗 인덱스가 없는 경우
};