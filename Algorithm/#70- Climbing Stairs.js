/*
* You are climbing a stair case. It takes n steps to reach to the top.
* 
* Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
* 
* Note: Given n will be a positive integer.
* 
* Example 1:
* 
* Input: 2
* Output: 2
* Explanation: There are two ways to climb to the top.
* 1. 1 step + 1 step
* 2. 2 steps
* Example 2:
* 
* Input: 3
* Output: 3
* Explanation: There are three ways to climb to the top.
* 1. 1 step + 1 step + 1 step
* 2. 1 step + 2 steps
* 3. 2 steps + 1 step
*/

var climbStairs = function(n) {
    const memo = new Array(n+1)

    const numberOfWays = calcDistinctWays(n, memo)
    return numberOfWays;
};

// calculates the number of ways using memoisation 
const calcDistinctWays = (n, memo) => {
    let result = 0;
    if(memo[n] != undefined)
        return memo[n]
    if(n <= 0)
        return 0;
    if(n === 2)
        result = 2;
    else if(n === 1)
        result = 1;
    else
        result = calcDistinctWays((n-1), memo) + calcDistinctWays((n-2), memo);
    
    memo[n] = result;
    return result;
}