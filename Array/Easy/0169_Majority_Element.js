// use object to add each number in the object
// check which value is larger than length/2

var majorityElement = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]){
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    
    for (let element in obj) {
        if(obj[element] > (nums.length/2)){
           return element;
           }
    }
};


// test
let array = [3, 2, 3];
console.log(majorityElement(array));