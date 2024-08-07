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

  return { renderPlayerValueButtons }
})()

//handles game logic such as turns, checks for winner or ties
const gameController = (() => {

  const { startButton } = gameboard.renderStartButton()

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];

  const addValueToCells = (cell, index, value) => {
    cell.innerHTML = value;
    console.log(`index: ${index} cell: ${cell.innerHTML}`);
  };

  //returns the array of cells with a functional eventListener
  const functionalCell = (value, cells) => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => addValueToCells(cell, index, value));
    });
  };

  const choosePlayerValueBtns = async (playerXBtn, playerOBtn) => {
    return new Promise((resolve) => {
      playerXBtn.addEventListener('click', () => {
        let player = 'X';
        let bot = 'O'
        resolve({ player, bot })
      })

      playerOBtn.addEventListener('click', () => {
        let player = 'O';
        let bot = 'X';
        resolve({ player, bot })
      })
    })
  }

  const handleStartOfGame = async () => {
    startButton.style.display = 'none';
    const { playerXBtn, playerOBtn } = await createPlayer.renderPlayerValueButtons()
    const { player, bot } = await choosePlayerValueBtns(playerXBtn, playerOBtn)
    await handleTurn(player, bot)
    playerXBtn.style.display = 'none';
    playerOBtn.style.display = 'none';
  }

  startButton.addEventListener('click', handleStartOfGame)

  const humanTurn = (turn) => {
    console.log(turn)
    if (turn >= 9) {
      return
    }
    console.log('turno del humano')
    turn++
    checkWinner(turn)
    botTurn(turn)
  }

  const botTurn = (turn) => {
    console.log(turn)
    if (turn >= 9) {
      return
    }
    console.log('turno del bot')
    turn++
    checkWinner(turn)
    humanTurn(turn)
  }
  const checkWinner = (turn) => {
    console.log('checando si gano alguien')
    if (turn === 9) {
      console.log('empate')
    }
  }

  const handleWhoTakesFirstTurn = (turn) => {
    if (turn == 0) {
      const random = Math.floor(Math.random() * 100);
      random > 50 ? humanTurn(turn) : botTurn(turn)
    }
  }


  const handleTurn = async (player, bot) => {
    let turnCount = 0
    const { cells } = gameboard.renderCells();
    handleWhoTakesFirstTurn(turnCount)

    const declareWinner = (winner) => {
      //declara si alguien gana o pierde
    }
    const newGame = () => {
      //renderea boton de new game
    }
    const winnerCount = (winner) => {
      //checa quien gano y suma un punto a ese jugador
    }
  }

  //falta funcion para que despues de que bot o humano jueguen, cheque si alguien gano
  //tener en loop esto hasta que o alguien gane o empate

})();








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


