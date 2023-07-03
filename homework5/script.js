//1
function getRandomArray(length, min, max){
    const randomArr = [];
    for (let i = 0; i < length; i++) {
        const randomNum = (Math.floor(Math.random() * (max - min + 1)) + min);
        randomArr.push(randomNum);
    }
    return randomArr;
}

console.log('Рандомний масив : ' + getRandomArray(15, 1, 100));
//3
function getAverage(...numbers) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
      if (Number.isInteger(num)) {
        sum += num;
        count++;
      }
    }
    if (count === 0) {
      return 0; 
    }
    return sum / count;
  }
console.log('Середнє арифметичне: ' + getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//4
const getMedian = (...numbers) => {
    const sortedArr = numbers
      .filter((item) => Number.isInteger(item))
      .sort((a, b) => a - b);
    if (sortedArr.length % 2 === 0) {
      return (
        (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1]) /
        2
      );
    }
    return sortedArr[Math.floor(sortedArr.length / 2)];
  };
  
  console.log('Медіана : ' + getMedian(1, 2, 3, 4));
//5
function filterEvenNumbers(...numbers){
    return numbers.filter(number => number %2 !== 0 );
}
console.log('Парні числа: ' + filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

//6
function countPositiveNumbers(...numbers){
    return numbers.filter(number => number > 0).length;
}
console.log('Кількість числе більших за 0 : ' + countPositiveNumbers(1, -3, 2, 0, -2));
 
//9
function divideByThree(word) {
    const syllables = [];
    const lowercaseWord = word.toLowerCase().replace(/\s/g, '');
    
    for (let i = 0; i < lowercaseWord.length; i += 3) {
      const syllable = lowercaseWord.slice(i, i + 3);
      syllables.push(syllable);
    }
    
    return syllables;
  }
  
  const result1 = divideByThree("Commander");
  console.log(result1);
  
  const result2 = divideByThree("live");
  console.log(result2 );
  