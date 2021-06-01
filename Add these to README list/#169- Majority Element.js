/*
* Given an array of size n, find the majority element. The majority element is the element 
* that appears more than ⌊ n/2 ⌋ times.
* 
* You may assume that the array is non-empty and the majority element always exist in the array.

* Example 1:

* Input: [3,2,3]
* Output: 3
* Example 2:
* 
* Input: [2,2,1,1,1,2,2]
* Output: 2
*/

var majorityElement = function(nums) {
    const hashTable = {};
    const majorityElement = {element: 0, count: 0};
    
    for(let i = 0; i < nums.length; i++){
        if(!hashTable.hasOwnProperty(nums[i])){
            hashTable[nums[i]] = {count: 1}
        }
        else if(hashTable.hasOwnProperty(nums[i]))
            hashTable[nums[i]].count += 1
        
        if(hashTable[nums[i]].count > majorityElement.count){
            majorityElement.element = nums[i]
            majorityElement.count = hashTable[nums[i]].count
        }
    }

    return majorityElement.element
};