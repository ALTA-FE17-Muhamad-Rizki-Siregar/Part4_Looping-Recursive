function isPrime(num) {
    // Fungsi untuk memeriksa apakah suatu bilangan adalah bilangan prima
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function generatePrimes(start, count) {
    // Fungsi untuk menghasilkan sejumlah bilangan prima dimulai dari suatu angka
    const primes = [];
    let currentNumber = start;
    
    while (primes.length < count) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  }
  
  function primaSegiEmpat(wide, high, start) {
    if (wide <= 0 || high <= 0) {
      return "Wide dan high harus lebih besar dari 0";
    }
  
    let result = "";
  
    for (let i = 0; i < high; i++) {
      const primes = generatePrimes(start, wide);
      result += primes.join(" ") + "\n";
      start = primes[primes.length - 1] + 1;
    }
  
    const totalSum = generatePrimes(start, wide * high).reduce((sum, num) => sum + num, 0);
    result += totalSum;
  
    console.log(result);
  }
  
  // Contoh penggunaan
  primaSegiEmpat(2, 3, 13);
  /*
  17 19
  23 29
  31 37
  156
  */
  
  primaSegiEmpat(5, 2, 1);
  /*
  2  3  5  7 11
  13 17 19 23 29
  129
  */