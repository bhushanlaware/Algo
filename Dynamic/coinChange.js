var coinChange = function (coins, amount) {
  const res = {}
  function getCoin(amount) {
    if (amount === 0) return 0;
    if (res[amount]) return res[amount];

    let min = Infinity;
    for (const coin of coins) {
      if ((amount - coin) >= 0) {
        min = Math.min(1 + getCoin(amount - coin), min);
      }
    }
    res[amount] = min;
    return min;
  }
  const min = getCoin(amount, 0);
  return min === Infinity ? -1 : min;
};

const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount));