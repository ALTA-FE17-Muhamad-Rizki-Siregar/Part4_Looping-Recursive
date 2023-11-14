function isPrime(num) {
    // Fungsi untuk memeriksa apakah suatu bilangan adalah bilangan prima
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function primeX(x) {
    // Fungsi untuk mendapatkan bilangan prima sesuai dengan deret urutannya
    if (x < 1) return "Input harus lebih besar dari 0";
    
    let primeCount = 0;
    let currentNumber = 2;
  
    while (primeCount < x) {
      if (isPrime(currentNumber)) {
        primeCount++;
      }
      currentNumber++;
    }
  
    return currentNumber - 1;
  }
  
  console.log(primeX(1));   // 2
  console.log(primeX(5));   // 11