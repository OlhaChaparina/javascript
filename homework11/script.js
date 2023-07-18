function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
      let result = '';
      let counter = 0;
  
      const generateCharacter = () => {
        const sign = Date.now().toString().slice(-5);
        result += String.fromCharCode(sign);
        counter++;
  
        if (counter === length) {
          resolve(result);
        } else {
          setTimeout(generateCharacter, 50);
        }
      };
  
      generateCharacter();
    });
  }
  
  getRandomChinese(4)
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error);
    });
  
  
  
  
  
  