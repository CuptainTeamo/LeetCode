// Comment! Set will store distinct numbers, so can use new Set to create a set, and compare the size of set with length of array

// originally using hashtable to go through each element in the array, if the number exist in the hash table, return true;

// var containsDuplicate = function(nums) {
//     let obj = {};
//     for (let i in nums) {
//         if(obj[nums[i]]) {
//             return true;
//         }
//         obj[nums[i]] = 1;
//     }
//     return false;
// };

var containsDuplicate = function (nums) {
  let newSet = new Set(nums);
  if (newSet.size !== nums.length) {
    return true;
  }
  return false;
};

// test
let array = [1, 2, 3, 4];
console.log(containsDuplicate(array));
