var buildArray = function(nums) {
    let newArray = [];
    let newIndex = 0;
    let newElement = 0;
    for (let i = 0; i < nums.length; i++){
        newIndex = nums[i];
        newElement = nums[newIndex];
        newArray.push(newElement);  // DONT SPELL IT WRONG!!!!!!
    }
    return newArray;
};