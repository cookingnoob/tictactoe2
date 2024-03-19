const gameboard = (() => {
    //render methods to get board into the DOM
    const renderBoard = () => {
        const body = document.querySelector('body')
        const board = document.createElement('div')
        board.classList.add('board')
        body.appendChild(board)
        return {board}
    }

    const renderCells = () => {
        const {board} = renderBoard()

        const cells = []
            for(let i = 0; i < 9; i++){
                const cell = document.createElement('div')
                cell.classList.add('cell')
                board.appendChild(cell)
                cells.push(cell)
            }
        
        return {cells}
    }

    const cellsEventListeners = (index) => {
        console.log(index)
    }

    const functionalCell = () => {
        const {cells} = renderCells()
        cells.forEach((cell, index) => {
            cell.addEventListener('click',() => cellsEventListeners(index))
        })
    }

    return {functionalCell}
})()
gameboard.functionalCell()


// const Gameboard = (() => {
//     const gameboard = [];
//     //pushes the cells to the array
//     const cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => gameboard.push(cell));
    
    

//     const winConditions = (playerValue) => {
//         const winningCombinations = [
//             //rows
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             //columns  
//             [0, 3, 6], 
//             [1, 4, 7], 
//             [2, 5, 8],
//             //diagonals
//             [0, 4, 8], 
//             [2, 4, 6],
//         ];
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
   
//     const cells = document.querySelectorAll('.cell');
//     const chooseCell = () => cells.forEach(cell => clickCell(cell));
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


// const domElementsFactory = () => {

// }

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



    