// Функція No1
function getMaxDigit(number) {
    number = Math.abs(number);
    let maxDigit = 0;
  
    while (number > 0) {
      maxDigit = Math.max(maxDigit, number % 10);
      number = Math.floor(number / 10);
    }
  
    return maxDigit;
  }
 
  // Функція No2
  function calculatePower(base, exponent) {
    let result = 1;
  
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
  
    return result;
  }
  
 
  // Функція No3
  function formatName(name) {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return formattedName;
  }
  let name = "вЛаД";
  const formattedName = formatName(name);
 
 
  // Функція No4
  function calculateNetSalary(grossIncome) {
    const tax = 0.195; 
  
    const taxAmount = grossIncome * tax; 
    const netIncome = grossIncome - taxAmount; 
  
    return netIncome;
  }
 
 
 
  // Функція No5
  function getRandomNumber(N, M) {
    return Math.floor(Math.random() * (M - N + 1)) + N;;
  }
 
 
  // Функція No6
  function countLetter(word, letter) {
    const lowercasedWord = word.toLowerCase();
    const lowercasedLetter = letter.toLowerCase();
  
    let count = 0;
    for (let i = 0; i < lowercasedWord.length; i++) {
      if (lowercasedWord.charAt(i) === lowercasedLetter) {
        count++;
      }
    }
  
    return count;
  }
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  console.log(`
  Функція No1: функцію getMaxDigit(number) – яка отримує будь-яке
  число та виводить найбільшу цифру в цьому числі "1090" ${getMaxDigit(1090)}\n
  Функція No2: функцію, яка визначає ступінь числа. Не
  використовуючи Math.pow та **. Використовуйте цикл ${calculatePower(2,2)}\n
  Функція No3: функцію, яка форматує ім'я, роблячи першу букву
  великою. ${formatName(name)}\n
  Функція No4: функцію, яка вираховує суму, що залишається після
  оплати податку від зарабітньої плати. ${calculateNetSalary(2000)}\n
  Функція No5: функцію, яка повертає випадкове ціле число в
  діапазоні від N до M. ${getRandomNumber(1,100)}\n
  Функція No6: функцію, яка рахує скільки разів певна буква
  повторюється в слові. ${countLetter("Ананас","а")}\n
  `);
 