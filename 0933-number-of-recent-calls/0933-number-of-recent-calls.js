

var RecentCounter = function() {
    this.requests = []; // 요청 저장 큐 초기화
};

/** 
 * @param {number} t
 * @return {number}
 */


RecentCounter.prototype.ping = function(t) {
    this.requests.push(t); // 요청 추가
    while (this.requests[0] < t - 3000) { // 범위를 벗어난 요청 제거
        this.requests.shift();
    }
    return this.requests.length; // 남은 요청 수 반환
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */