// Binary search
// Recursion solution (easy cause stack overflow)
// Better with loop

// Edge situation
// 1. target <= smallest number in nums (add or return 0)
// 2. target > max number (add to max + 1)

// How it works
// compare the target with the numbers in positon
// if smaller, set the number position as max position
// if larger, set the number position as min position

// check the edge situation first!

var searchInsert = function (nums, target) {
  let length = nums.length;
  let maxPos = length - 1;
  let minPos = 0;
  let position = 0;

  var search = function (nums, target) {
    if (target <= nums[minPos]) {
      return minPos;
    }

    if (target > nums[maxPos]) {
      return maxPos + 1;
    }

    position = Math.floor((maxPos - minPos) / 2) + minPos;

    if (target > nums[position]) {
      if (maxPos - position == 1) {
        return maxPos;
      }
      minPos = position;
      return search(nums, target);
    }

    if (target < nums[position]) {
      if (position - minPos == 1) {
        return minPos + 1;
      }
      maxPos = position;
      return search(nums, target);
    }

    return position;
  };

  return search(nums, target);
};

// test
let nums = [1];
let target = 1;
console.log(searchInsert(nums, target));
