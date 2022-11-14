// got through the whole list
// when the element is one, add one to size
// when the element is not one, set size to zero
// compare size and max, set max if size is bigger

var findMaxConsecutiveOnes = function(nums) {
  let size = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1){
          size += 1;
      }else{
          size = 0;
      }
      if (size > max){
          max = size;
      }
  }
  return max;
};


// test
let array = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1];
console.log(findMaxConsecutiveOnes(array));