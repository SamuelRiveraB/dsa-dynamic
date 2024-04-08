function addTo80(n) {
  console.log("long time");
  return n + 80;
}

function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log("1", memoized(5));
console.log("2", memoized(6));
console.log("3", memoized(5));

function fibonacciDynamic() {
  // O(n) instead of O(2^n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciDynamic();

console.log(fasterFib(100));

function fibonacciNew(n) {
  let ans = [0, 1];
  for (let i = 2; i <= n; i++) {
    ans.push(ans[i - 2] + ans[i - 1]);
  }
  return ans.pop();
}

console.log(fibonacciNew(100));
