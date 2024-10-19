/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cheapest = prices[0];
    return prices.reduce((max, price) => {
        if (price < cheapest) {
            cheapest = price;
        }
        return Math.max(max, price - cheapest);
    }, 0);
};
