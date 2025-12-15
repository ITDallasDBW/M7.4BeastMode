/** Stock Trading
 *
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

console.log("Stock Trading");
//Use POINTERS when asked to find max, min
//Use WHILE for pointers
//L=Buy, R=Sell

//set l=0, r=1
//Set maxProfit=0
//Loop over every single price
//Calculate profit of the trade
//If profit >0
//Store in maxProfit (IFF profit>maxProfit)
//Else move left pointer to right pointer
//Increment r by 1
//return maxProfit

// stocks([8, 3, 6, 1, 6, 4, 7]) -> 6

const stocks = (prices) => {
  let l = 0;
  let r=1
  let maxProfit = 0;

//   for (let r = 1; r < prices.length; ++r) {
    while(r<prices.length) {
    const profit = prices[r] - prices[l];
    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
    ++r;
  }
  return maxProfit;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
