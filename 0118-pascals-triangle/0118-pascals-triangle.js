/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = [];

    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            answer.push([1]);
        } else {
           
             let leftArray = answer[i - 1].slice(); 
             let rightArray = answer[i - 1].slice();
             rightArray.push(0);
             leftArray.unshift(0);

             let currentArray = [];
             for (let j = 0; j < leftArray.length; j++) {
                 currentArray.push(leftArray[j] + rightArray[j]);
             }
            answer.push(currentArray);
            
        }
    }

    return answer;
};




