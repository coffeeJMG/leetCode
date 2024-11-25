/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    
    const array1 = [...set1].filter(x=> !set2.has(x))
    const array2 = [...set2].filter(x=> !set1.has(x))
    
    
    return [array1,array2]
    
};



// // 교집합
// const intersection = new Set([...setA].filter(x => setB.has(x)));
// console.log(intersection); // Set { 2, 3 }

// // 합집합
// const union = new Set([...setA, ...setB]);
// console.log(union); // Set { 1, 2, 3, 4 }

// // 차집합
// const difference = new Set([...setA].filter(x => !setB.has(x)));
// console.log(difference); // Set { 1 }