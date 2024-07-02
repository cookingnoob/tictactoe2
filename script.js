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

  const playerBtnsContainerCreator = () => {
    const body = document.querySelector("body");
    const playerBtnsContainer = document.createElement('div')
    playerBtnsContainer.classList.add('playerSelection')
    body.appendChild(playerBtnsContainer)
    return { playerBtnsContainer }
  }
  const createPlayerBtn = (value) => {
    const btnName = document.createElement('button');
    btnName.classList.add('playerBtn')
    btnName.innerText = value;
    return btnName
  }
  const renderPlayerValueButtons = () => {
    const { playerBtnsContainer } = playerBtnsContainerCreator()
    const playerXBtn = createPlayerBtn('X')
    const playerYBtn = createPlayerBtn('O')
    playerBtnsContainer.append(playerXBtn, playerYBtn)
    return { playerXBtn, playerYBtn }
  }

  const handlePlayerValue = (value) => {
    const player = value
    console.log('player value:', player)
    botValue(player)
    return player
  }

  const botValue = (player) => {
    let bot;
    player === 'X' ? bot = 'O' : bot = 'X'
    console.log('bot value ', bot)
  }

  const choosePlayerValueBtns = () => {
    const { playerXBtn, playerYBtn } = renderPlayerValueButtons()
    const functionalPlayerXBtn = () => playerXBtn.addEventListener('click', () => handlePlayerValue(playerXBtn.innerHTML))
    const functionalPlayerYBtn = () => playerYBtn.addEventListener('click', () => handlePlayerValue(playerYBtn.innerHTML))
    return { functionalPlayerXBtn, functionalPlayerYBtn }
  }

  return { choosePlayerValueBtns }
})()

//handles game logic such as turns, checks for winner or ties
const gameController = (() => {

  const { startButton } = gameboard.renderStartButton()

  const { functionalPlayerXBtn, functionalPlayerYBtn } = createPlayer.choosePlayerValueBtns()

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

  const functionalStartButton = () => {
    startButton.addEventListener('click', () => console.log('start button'))
  }




  //ganar
  //si alguien gana sale un letrero de quien fue
  //sale un boton de reiniciar partida

  const startGame = () => {
    //inicia el juego
    //se inicia haciendo render de los botones de jugador
    //cuando el jugador escoge un valor ocurre
    //desaparece el boton de start
    //se agrega un valor al jugador
    //se agrega un valor al bot
    //se define un turno de forma aleatoria

    functionalStartButton()
    functionalPlayerXBtn()
    functionalPlayerYBtn()
  }

  const turn = () => {
    //inicia el primer turno
    //si es el bot elige de forma aleatoria una casilla
    //el jugador no puede elegir mientras el bot lo hace
    //si es el jugador elige
    //se checa si gano
    //si no se gano se pasa al siguiente jugador
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
