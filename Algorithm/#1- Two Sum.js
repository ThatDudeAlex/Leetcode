/*
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* 
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* 
* Example:
* 
* Given nums = [2, 7, 11, 15], target = 9,
* 
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
*/

// this solution uses hashtables for quick look up time
var twoSum = function (nums, target) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        hashTable[`${nums[i]}`] = { value: nums[i], index: i }
    }

    for (let i = 0; i < nums.length; i++) {
        const secondNum = target - hashTable[`${nums[i]}`].value

        if (hashTable.hasOwnProperty(secondNum))
            if (hashTable[secondNum].index !== i)
                return [i, hashTable[secondNum].index]
    }
};

// this solution trades speed for space complexity  
var twoSum = function (nums, target) {
    let secondNum = null;

    for (let i = 0; i < nums.length; i++) {
        secondNum = target - nums[i]

        if (nums.includes(secondNum))
            if (nums.indexOf(secondNum) !== i)
                return [i, nums.indexOf(secondNum)]
    }
};