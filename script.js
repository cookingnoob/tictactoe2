
const Gameboard = (() => {
    const gameboard = [];

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => gameboard.push(cell));
    console.log(gameboard[0].textContent);

  
   return {}
})();



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
          cell.textContent = 'playerValue'; 
        }
      };

      return {chooseCell}
})();
displayController.chooseCell()

const playerFactory = () => {
    

    return{}
};




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