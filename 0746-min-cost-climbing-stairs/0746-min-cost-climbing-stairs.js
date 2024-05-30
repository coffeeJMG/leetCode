/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
        
    
        let answer =0
        let costArray = new Array(cost.length).fill(0)        
        costArray[0] = cost[0]
        costArray[1] = cost[1]
        
    
        for(let i=2; i<cost.length; i++){
            
            costArray[i] = cost[i] + Math.min(costArray[i-1],costArray[i-2])
            
        }
        
        return Math.min(costArray[costArray.length-1],costArray[costArray.length-2])
        
            
};