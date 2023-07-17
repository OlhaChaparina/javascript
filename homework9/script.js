function generateBlocks() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < 25; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = getRandomColor();
      container.appendChild(square);
      if ((i + 1) % 5 === 0) {
        container.appendChild(document.createElement("br"));
      }
    }
  }

  function generateBlocksInterval() {
    generateBlocks();

    setInterval(() => {
      const squares = document.getElementsByClassName("square");
      for (let square of squares) {
        square.style.backgroundColor = getRandomColor();
      }
    }, 1000);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateBlocksInterval();