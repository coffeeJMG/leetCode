/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
             let answer = [];

    for (let i = 0; i <= rowIndex; i++) {
        let array = new Array(i + 1).fill(1); // 초기값을 모두 1로 설정

        for (let j = 1; j < i; j++) {
            array[j] = answer[i - 1][j - 1] + answer[i - 1][j];
        }

        answer.push(array);
    }

    return answer[rowIndex];
};