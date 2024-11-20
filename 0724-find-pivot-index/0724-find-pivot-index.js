/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, curr) => acc + curr, 0); // 배열 전체 합
    let leftSum = 0; // 현재 인덱스 기준 누적 합 (왼쪽 합)

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i]; // 우측 합 계산
        if (leftSum === rightSum) {
            return i; // 피벗 인덱스 반환
        }
        leftSum += nums[i]; // 왼쪽 합 갱신
    }

    return -1; // 피벗 인덱스가 없으면 -1 반환
};