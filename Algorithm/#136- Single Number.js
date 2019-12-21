/*
* Given a non-empty array of integers, every element appears twice except
* for one. Find that single one.
*
* The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
* 
* Note: 
* Your algorithm should have a linear runtime complexity. 
* Could you implement it without using extra memory?
* 
* Example 1:
* 
* Input: [2,2,1]
* Output: 1
* 
* Example 1:
* 
* Input: [4,1,2,1,2]
* Output: 4
*/

// uses an object literal to simultate a hash table
var singleNumber = function(nums) {
    const hashTable = {};
    let singleNumber = null;
    
    for(let i = 0; i < nums.length; i++){
        // if the object containts the property, remove it
        if(hashTable.hasOwnProperty(`${nums[i]}`))
            delete hashTable[`${nums[i]}`]
        // else add the property into the object
        else
            hashTable[`${nums[i]}`] = nums[i];     
    }

    // get the value of the last remaining object property & return it
    singleNumber = Object.values(hashTable)
    return singleNumber[0]
};