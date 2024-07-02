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
    return { startButton }
  }

  return { renderCells, renderStartButton };
})();

//gives player and bot a value to play
const createPlayer = (() => {
  //handles DOM element for player buttons containers
  const playerBtnsContainerCreator = () => {
    const body = document.querySelector("body");
    const playerBtnsContainer = document.createElement('div')
    playerBtnsContainer.classList.add('playerSelection')
    body.appendChild(playerBtnsContainer)
    return { playerBtnsContainer }
  }
  //factory for player button
  const createPlayerBtn = (value) => {
    const btnName = document.createElement('button');
    btnName.classList.add('playerBtn')
    btnName.innerText = value;
    return btnName
  }
  //creates two buttons 
  const renderPlayerValueButtons = () => {
    const { playerBtnsContainer } = playerBtnsContainerCreator()
    const playerXBtn = createPlayerBtn('X')
    const playerOBtn = createPlayerBtn('O')
    playerBtnsContainer.append(playerXBtn, playerOBtn)
    return { playerXBtn, playerOBtn }
  }
  //sets player value and calls bot value
  const handlePlayerValue = (value) => {
    let player = value
    const bot = botValue(player)
    return { player, bot }
  }

  //bot value is defined by what the player didnt choose
  const botValue = (player) => {
    let bot;
    player === 'X' ? bot = 'O' : bot = 'X'
    return bot
  }
  //returns player button that on click the player and bot values are defined 
  const choosePlayerValueBtns = () => {
    const { playerXBtn, playerOBtn } = renderPlayerValueButtons()

    const functionalPlayerXBtn = () => playerXBtn.addEventListener('click', () => {
      const { player, bot } = handlePlayerValue(playerXBtn.innerHTML);
      console.log(player, bot)
      return { player, bot }
    })
    const functionalPlayerOBtn = () => playerOBtn.addEventListener('click', () => {
      const { player, bot } = handlePlayerValue(playerOBtn.innerHTML);
      console.log(player, bot)
      return { player, bot }

    })
    return { functionalPlayerXBtn, functionalPlayerOBtn, }
  }

  return { choosePlayerValueBtns, handlePlayerValue, botValue }
})()

//handles game logic such as turns, checks for winner or ties
const gameController = (() => {

  const { startButton } = gameboard.renderStartButton()
  // const { playerValue } = createPlayer.handlePlayerValue()
  // const { botValue } = createPlayer.botValue()

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
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
    const { cells } = gameboard.renderCells();
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleClickTurn(cell, index, value));
    });
  };

  const handleStartOfGame = (isStarted) => {
    startButton.addEventListener('click', () => {
      isStarted.start = true
      startButton.style.display = 'none';
      const { functionalPlayerXBtn, functionalPlayerOBtn } = createPlayer.choosePlayerValueBtns()
      functionalPlayerXBtn();
      functionalPlayerOBtn();
    })
  }

  const startGame = () => {
    let isStarted = { start: false }
    handleStartOfGame(isStarted)
  }

  const turn = () => {
  }

  return { startGame, };
})();

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


