var twoSum = function (nums, target) {
    // create an object for using hash table to search
  const map = {};

  // for each element in array, test if the (target-element) is in the object
  for (let i = 0; i < nums.length; i++) {
    let tarNum = target - nums[i];

    // if the (target-element) is in the object, return that index and the current index
    if (map[tarNum] >= 0) {
      return [map[tarNum], i];
    }

    // if not in the object, creat an new property {element: index}
    map[nums[i]] = i;
  }
};

// Test
// let nums = [2, 7, 11, 15]
// console.log(twoSum(nums, 9));
