/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let smallerList = []
       
    let newNums = nums.slice().sort((a,b)=>a-b)
     
     
    for(let i=0; i<nums.length; i++){
    
        
       
        
        smallerList.push(newNums.indexOf(nums[i]))
    }   
        
   
        
  return smallerList
    
};


//   let smallerList = new Array(nums.length).fill(0)
        
//         let count =0;
        
//         for(let i=0; i<nums.length-1; i++){
//                 let cur = nums[i]
//                 console.log(cur)
                
//                 for(let j=i+1; j<nums.length; j++){
                    
//                      if(cur >  nums[j]){
//                         console.log(" 본인이 더 큰경우")       
//                          smallerList[i]+=1
//                      }
//                     if( cur< nums[j]){
//                         console.log( " 본인이 더 작은 경우 ")
//                         smallerList[j]+=1
//                     }
                        
//                 }
//             }
        
//   return smallerList