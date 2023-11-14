function fibonacci(n) {
    if (n <= 0) {
      return "Nomor Fibonacci harus lebih besar dari 0";
    } else if (n === 1) {
      return 0;
    } else if (n === 2) {
      return 1;
    } else {
      let prev1 = 0;
      let prev2 = 1;
      let current;
  
      for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
      }
  
      return current;
    }
  }
  
  // Contoh penggunaan
  console.log(fibonacci(1));   // 0
  console.log(fibonacci(5));   // 3
  console.log(fibonacci(10));  // 34
  console.log(fibonacci(15));  // 377
  console.log(fibonacci(20));  // 4181