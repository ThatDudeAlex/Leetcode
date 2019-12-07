// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author : Jose Nunez
// Date   : 2019-06-08

/**
* Say you have an array for which the ith element is the price of a given stock on day i.
* 
* If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
* design an algorithm to find the maximum profit.
*
* Note that you cannot sell a stock before you buy one.
*
* Example 1:
*
* Input: [7,1,5,3,6,4]
* Output: 5
* Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*              Not 7-1 = 6, as selling price needs to be larger than buying price.
* Example 2:

* Input: [7,6,4,3,1]
* Output: 0
* Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// *****************************************************************************************************

/*
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {

    let lowest = 9999;
    let highest = 0;
    let profit = 0;
    let finalProfit = 0;
    const arrayLength = prices.length;

    if (arrayLength === 1 || arrayLength === 0 || arrayLength === null)
        return 0;

    for (let i = 0; i < arrayLength; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i];
            highest = prices[i];
        }
        else if (prices[i] > highest) {
            highest = prices[i];
            profit = highest - lowest;

            if (profit > finalProfit)
                finalProfit = profit;
        }
    }

    return finalProfit;
};