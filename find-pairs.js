function findPairs(arr, target) {
  const pairs = [];
  const numSet = new Set();

  for (const num of arr) {
    const complement = target - num;

    if (numSet.has(complement)) {
      console.log(`Pair found with: %c${complement} + %c${num} = %c${target}`, 'color: green', 'color: green', 'color: green');
      pairs.push([complement, num]);
    } else {
      numSet.add(num);
    }
  }

  return pairs;
}