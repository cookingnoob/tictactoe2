//render methods to get board and buttons into the DOM
const gameboard = (() => {
  const renderBoard = () => {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.classList.add("board");
    body.appendChild(board);
    return { board };
  };

  const renderCells = () => {
    const { board } = renderBoard();
    const cells = [];
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
      cells.push(cell);
    }

    return { cells };
  };

  const renderStartButton = () => {
    const body = document.querySelector("body");
    const startButton = document.createElement('button')
    startButton.innerText = 'Start Game'
    body.appendChild(startButton)
    return startButton
  }

  const renderPlayerValueButtons = () => {
    const body = document.querySelector("body");
    const playerXBtn = document.createElement('button')
    const playerYBtn = document.createElement('button')
    playerXBtn.innerText = 'X'
    playerYBtn.innerText = 'Y'
    body.append(playerXBtn, playerYBtn)
    return {playerXBtn, playerYBtn}
  }
  return { renderCells , renderStartButton, renderPlayerValueButtons};
})();
gameboard.renderPlayerValueButtons()

const gameController = (() => {
  const { cells } = gameboard.renderCells();

  const handleStartGame = () => {
    console.log('funciona')
  }

  const startGame = () => {
    const startButton = gameboard.renderStartButton()
    startButton.addEventListener('click', handleStartGame)
  }

  const winningCombinations = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],
  ];

  const addValueToCells = (cell, index, value) => {
    cell.innerHTML = value;
    console.log(`index: ${index} cell: ${cell.innerHTML}`);
  };

  const handleClickTurn = (cell, index, value) => {
    addValueToCells(cell, index, value);
    //checkWinner
  };

  //returns the array of cells with a functional eventListener
  const functionalCell = (value) => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleClickTurn(cell, index, value));
    });
  };

  return { functionalCell, startGame };
})();

gameController.functionalCell('Prueba');
gameController.startGame()



// const Gameboard = (() => {

//     const winConditions = (playerValue) => {

//         for (let i = 0; i < winningCombinations.length; i++){

//             const [a, b, c] = winningCombinations[i];

//             if (gameboard[a].textContent == gameboard[b].textContent &&
//                 gameboard[b].textContent == gameboard[c].textContent &&
//                 gameboard[a].textContent == gameboard[c].textContent &&
//                 gameboard[a].textContent != ''){
//                 console.log(`${playerValue} wins`);
//                 return;
//             }
//         }
//     }

//     const botTurn = () => {
//         let randomCell = Math.floor(Math.random() * gameboard.length);
//         while (cells[randomCell].textContent != '') {
//             randomCell = Math.floor(Math.random() * gameboard.length);
//         };
//         cells[randomCell].textContent = botValue;
//         winConditions(botValue)
//         }
//    return {winConditions, botTurn}
// })();

// //

// const displayController = (() => {
//     const clickCell = (cell) => {cell.addEventListener('click', () => {addText(cell)})};
//     const addText = (cell) => {
//         if(cell.textContent !== ''){
//           return;
//         } else {
//           cell.textContent = playerValue;
//           Gameboard.botTurn()
//         }
//         Gameboard.winConditions(playerValue);
//       };

//       return {chooseCell};
// })();
// displayController.chooseCell()



// const playerFactory = (name) => {
//    const choosePlayer = document.createElement('div');
//    choosePlayer.classList.add('playerBtn');
//    choosePlayer.textContent = name;
//    const playerSelection = document.querySelector('.playerSelection');
//    playerSelection.appendChild(choosePlayer);

//    const click = ()=> choosePlayer.addEventListener('click', value);
//    const value = () =>{
//             playerValue = name;
//             if (playerValue === 'X'){
//                 botValue = 'O'
//             } else if (playerValue === 'O'){
//                 botValue = 'X'
//             }
//         }
//     return{click}
// };

// const playerX = playerFactory('X')
// playerX.click()

// const playerO = playerFactory('O')
// playerO.click()
