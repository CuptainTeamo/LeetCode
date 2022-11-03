// Find the minimun price
// Then find the max profit

var maxProfit = function(prices) {
    // edge case, the length is 0;
    if (prices.length == 0) {
        return 0;
    }
    let profit = 0;
    let minBuy = prices[0];
    for (let i = 0; i < prices.length; i++) {

        // set the minimun price
        if (prices[i] < minBuy) {
            minBuy = prices[i];
        }

        // then compare to find the max profit
        if (prices[i] - minBuy > profit) {
            profit = prices[i] - minBuy;
        }
    }
    return profit;
};

// test
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));