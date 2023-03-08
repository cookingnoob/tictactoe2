
const Gameboard = (() => {
    const gameboard = [];
    //pushes the cells to the array
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => gameboard.push(cell));
    
    //una forma de definir columnas y renglones
    //renglones 
    //columnas 
    //diagonales 
    const winConditions = () => {
        const winningCombinations = [
            //rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //columns  
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            //diagonals
            [0, 4, 8], 
            [2, 4, 6],
        ];
        for (let i = 0; i < winningCombinations.length; i++){
            const [a, b, c] = winningCombinations[i];
        
        if (gameboard[a].textContent == gameboard[b].textContent && 
            gameboard[b].textContent == gameboard[c].textContent && 
            gameboard[a].textContent == gameboard[c].textContent && 
            gameboard[a].textContent != ''){
            console.log('ganaste');
            return;
        } 
        }
    }
  
   return {winConditions}
})();

// 


const displayController = (() => {
    //selects a cell in the gameboard to store a value into it
    const cells = document.querySelectorAll('.cell');
    const chooseCell = () => cells.forEach(cell => clickCell(cell));
    const clickCell = (cell) => { 
        cell.addEventListener('click', () => {addText(cell)})};
    const addText = (cell) => {
        if(cell.textContent !== ''){
          return;
        } else { 
          cell.textContent = playerValue; 
        }
        Gameboard.winConditions();
      };

      return {chooseCell}
})();
displayController.chooseCell()




const playerFactory = (name) => {
   
   const choosePlayer = document.createElement('div');
   choosePlayer.classList.add('playerBtn');
   choosePlayer.textContent = name;
   const playerSelection = document.querySelector('.playerSelection');
   playerSelection.appendChild(choosePlayer);


   const click = ()=> choosePlayer.addEventListener('click', value);
   const value = () => playerValue = name;
   
    return{click}
};
const playerX = playerFactory('X')
playerX.click()

const playerO = playerFactory('O')
playerO.click()

// 8 de marzo
    // falta hacer el bot que juega
    // que los botones de jugadores sean html
        //los valores html pasan como parametros a la fabrica de jugadores
    // las condiciones de ganar
    