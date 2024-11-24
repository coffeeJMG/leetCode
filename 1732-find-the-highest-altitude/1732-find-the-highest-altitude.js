/**
 * @param {number[]} gain
 * @return {number}
 */


var largestAltitude = function(gain) {
    let maxAltitude = 0; // 가장 높은 고도
    let currentAltitude = 0; // 현재 고도

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]; // 고도를 업데이트
        maxAltitude = Math.max(maxAltitude, currentAltitude); // 가장 높은 고도 갱신
    }

    return maxAltitude;
};