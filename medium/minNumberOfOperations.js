//Problem No. - 1769
//Solution
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let output = [];
    let boxesL = boxes.length;
    for(let i=0;i<boxesL;i++){
      let opCount = 0;
      for(let j=0;j<boxesL;j++){
        if(boxes[j]=="1")
        opCount += Math.abs(i-j);
      }
      output.push(opCount);
    }
    return output;
};