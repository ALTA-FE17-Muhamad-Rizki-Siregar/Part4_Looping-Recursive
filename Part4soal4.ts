function maxSequence(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let currentSum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
  
    for (let num of arr) {
      currentSum = Math.max(num, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
  console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6]));    // 7