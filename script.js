
const Gameboard = (() => {
    const gameboard = [];
    //pushes the cells to the array
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => gameboard.push(cell));
    
    //una forma de definir columnas y renglones
    // renglones [0, 1, 2]  [3, 4, 5] [6, 7, 8] 
    //columnas [0, 3, 6] [1, 4, 7] [2, 5, 8]
    //diagonales [0, 4, 8] [2, 4, 6]
    const winConditions = () => {
        if (gameboard[0].textContent == gameboard[1].textContent && gameboard[1].textContent == gameboard[2].textContent && gameboard[0].textContent == gameboard[2].textContent && gameboard[0].textContent != ''){
            console.log('ganaste');
            return
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
        Gameboard.winConditions()
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



//Gameboard:
 // definir un array vacio
   // tener una forma de crear un objeto celda y empujarlo al dom
   // crear multiples celdas
   // tener una forma de hacer el render en el DOM de esa celdas
   // event listener para seleccionar cada celda
   // retorna los valores de las celdas
   // retorna el event listener

//displayController:
    // tiene acceso al valor del jugador
    // accede a gameboard a traves del event listener click
    // pone el valor del jugador en turno en la celda
    // checa si alguien gano
    // se repite hasta que alguien gane o sea un empate
    // crea en el DOM un letrero del resultado de la partida


//playerFacotry:
    // crea en el DOM un boton con el valor asignado
    // exporta ese valor a displayController
    // el valor que no se eligio se va al bot (si tomas X, el bot es O)
        //el jugador bot escoge una celda de forma aleatorea