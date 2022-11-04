// Go through each numbers
// if they are the same with previous, continue
// if they are not same, put that number in nums[index], index+1, pre equals number
// cut off the extra numbers in the array

var removeDuplicates = function(nums) {
  let index = 1;
  let pre = nums[0]
  for (let i = 1; i < nums.length; i++){
      if (nums[i] == pre){
          continue;
      }
      nums[index] = nums[i];
      pre = nums[i];
      index += 1;
  }

  // cut extra numbers
  let popNum = nums.length - index;
  for (let i = 0; i < popNum; i++){
      nums.pop();
  }
};

// test
let array = [1, 1, 2];
removeDuplicates(array);
console.log(array);