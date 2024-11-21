/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    nums1 = Array.from(new Set(nums1));
    nums2 = Array.from(new Set(nums2));

    
    const onlyInNums1 = nums1.filter(num => !nums2.includes(num));

    
    const onlyInNums2 = nums2.filter(num => !nums1.includes(num));

    
    return [onlyInNums1, onlyInNums2];
};