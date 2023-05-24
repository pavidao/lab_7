// Функція для перевірки числа
function checkNumber() {
    let numberInput = document.getElementById('numberInput');
    let numberResultElement = document.getElementById('numberResult');
    let number = parseInt(numberInput.value);
    
    if (isNaN(number)) {
      numberResultElement.textContent = 'Введено некоректне значення';
      return;
    }
    
    numberResultElement.textContent = number % 2 === 0 ? 'Парне число' : 'Непарне число';
  }
  
  // Функція для обчислення суми перших п'яти простих чисел
  function calculateSumOfPrimes() {
    let sumResultElement = document.getElementById('sumResult');
    let primes = [];
    let number = 2;
  
    while (primes.length < 5) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
  
    let sum = primes.reduce((sum, prime) => sum + prime, 0);
    sumResultElement.textContent = sum;
  }
  
  // Функція для перевірки, чи є число простим
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Функція для обчислення суми ряду чисел
  function calculateSeriesSum() {
    let seriesInput = document.getElementById('seriesInput');
    let seriesResultElement = document.getElementById('seriesResult');
    let n = parseInt(seriesInput.value);
  
    if (isNaN(n) || n < 1) {
      seriesResultElement.textContent = 'Введено некоректне значення';
      return;
    }
  
    let sum = 0;
    let currentNumber = 1;
  
    for (let i = 0; i < n; i++) {
      sum += currentNumber;
      currentNumber = currentNumber * 10 + 1;
    }
  
    seriesResultElement.textContent = sum;
  }
  