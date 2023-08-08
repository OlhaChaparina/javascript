function* createIdGenerator() {
    let num = 1;
    while (true) {
      yield num++;
    }
  }
  
  const generator = createIdGenerator();
  
  console.log(generator.next().value); 
  console.log(generator.next().value); 
  console.log(generator.next().value); 

  function* fontGenerator(initialSize) {
    let size = initialSize;
  
    while (true) {
      const direction = yield size;
  
      if (direction === "up") {
        size += 2;
      } else if (direction === "down") {
        size -= 2;
      }
    }
  }
  
  const fontGen = fontGenerator(14);
  
  console.log(fontGen.next("up").value);   
  console.log(fontGen.next("up").value);   
  console.log(fontGen.next("up").value);   
  console.log(fontGen.next().value);       
  console.log(fontGen.next("down").value); 
  console.log(fontGen.next("down").value); 
  console.log(fontGen.next("down").value); 
  console.log(fontGen.next().value);       