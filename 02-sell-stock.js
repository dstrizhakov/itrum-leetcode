var maxProfit = function(prices) {

  let result = 0;
  for(let i = 0; i < prices.length; i++) {
      let minPrice = prices[i];
      let maxPrice = Math.max(...prices.slice(i));
      result = Math.max(result, maxPrice - minPrice);
      console.log(maxPrice, minPrice, result)
     
  }
  return result;
};


maxProfit([2,1,4]);