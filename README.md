# Integer Pair Finder

This JavaScript application finds pairs of integers from an input array that sum to a given target value. The implementation has a time complexity of O(n) and a space complexity of O(n).

## How to Run

This application can be run in the Node.js terminal or in the browser console.

Running the script in Node.js 

### Node.js Terminal

You need to have Node.js installed on your computer to run the script in the terminal. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/en/download/).

1. Copy the `findPairs` function code below:

```javascript
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
```

2. Open the Node.js terminal using the `node` command and paste the function code.

3. Define the input array and target value:

```javascript
const arr = [1, 9, 5, 0, 20, -4, 12, 16, 7];
const target = 12;
```

4. Call the `findPairs` function with the input array and target value as arguments:

```javascript
findPairs(arr, target);
```

### Browser Console

1. Copy the findPairs function code provided in the Node.js Terminal section.
2. Open your web browser and open the Developer Tools (usually by pressing F12).
3. Go to the Console tab.
4. Paste the function code into the console.
5. Define the input array and target value, and call the findPairs function as described in the Node.js Terminal section.

## How to Update the Sample

To use your own numbers, simply update the arr and target variables in the terminal or console:
  
```javascript
// Replace the array with your own numbers
const arr = [1, 9, 5, 0, 20, -4, 12, 16, 7];

// Replace the target value with your desired sum
const target = 12;
```

Call the findPairs function and display the results as shown in the "How to Run" section.

## Technical Explanation

The script contains a function named findPairs which takes two arguments: an array of integers (arr) and a target integer value (target).

The function works as follows:

1. Create an empty array pairs to store the pairs of numbers that sum to the target.
2. Create a Set called numSet to store the numbers we've seen so far.
3. Loop through the input array. For each number num, calculate its complement (target - num).
4. If the complement is in numSet, it means we've found a pair. Add the pair to the pairs array.
5. If the complement is not in numSet, add the current number to numSet.
6. After the loop, return the pairs array.