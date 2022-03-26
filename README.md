# __Práctica 6 - Clases e interfaces genéricas. Principios SOLID__ 
  ### Marc Carbonell González de Chaves 
  ## __Tareas previas__
   1. Acepté la [asignación de Github Classroom](https://classroom.github.com/a/yJcZROry).
   3. Durante el desarrollo de la práctica utilicé [Instanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/).
  
  ## __Ejercicios__
    
   [![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101323282/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101323282?branch=main)
   
  ### __Ejercicio 1 - El combate definitivo__
   
   Para este ejercicio creé la siguiente jerarquía de clases:
   - Combat
   - Fighter
     - Pokemon
       - Pikachu
       - Charmander
     - Marvel
       - Spiderman
       - Hulk
     - StarWars
       - DarthVader
       - Skywalker
     - DC
       - Superman
       - Batman
     - DragonBall
       - Goku
       - Krilin

   #### __Clase `Combat`__: 
   El constructor de esta clase recibe como parámetros dos objetos de tipo `Fighter` correpondientes a las propiedades `fighter1` y `fighter2`, ambas de sólo lectura. La clase consta de los getters de cada propiedad, del método `start()` que simula un combate, del método `attackDamage()` que calcula el daño causado por el ataque de un luchador al otro, y del método `printHPs()`que muestra por pantalla los puntos de vida de cada uno.
   
   - start(): Este método utiliza un bucle `while` para ir comprobando durante cada turno si la vida de alguno de los dos luchadores es mayor que cero. En cada turno se modifican los puntos de salud de un luchador según el daño recibido por el ataque de su contrincante (`attackDamage()`). Al salir del bucle se comprueba mediante un `if-else` qué luchador no ha sido debilitado y se muestra un mensaje de victoria por pantalla.
   - attackDamage(): Calcula el daño causado por un ataque del primer luchador pasado como parámetro al segundo luchador pasado como parámetro. Mediante un `switch` se calcula la efectividad del ataque según los el universo de los contrincantes y finalmente se devuelve el resultado de la fórmula: 50 * (attacker.getAttack() / defender.getDefense()) * efectivity.
   - printHPs(): Imprime los puntos de vida de cada luchador. Si el valor es menor que cero se imprime un `0` en lugar del valor real, esto se comprueba con un `if-else`.
   
   ``` typescript
   export class Combat {
     constructor(private readonly fighter1: Fighter,
         private readonly fighter2: Fighter) {
     }
     getFighter1(): Fighter {
       return this.fighter1;
     }
     getFighter2(): Fighter {
       return this.fighter2;
     }
     start(): void {
       console.log(`${this.fighter1.getName()} VS ${this.fighter2.getName()}`);
       console.log('====================');
       this.printHPs();
       let turn = 1;
       while ((this.fighter1.getHP() > 0) && (this.fighter2.getHP() > 0)) {
         this.fighter2.setHP(this.fighter2.getHP() - this.attackDamage(this.fighter1, this.fighter2));
         console.log(`TURN ${turn}: ${this.fighter1.getName()} > ${this.fighter2.getName()}`);
         this.fighter1.sayPhrase();
         this.printHPs();
         turn ++;
         if (this.fighter2.getHP() > 0) {
           this.fighter1.setHP(this.fighter1.getHP() - this.attackDamage(this.fighter2, this.fighter1));
           console.log(`TURN ${turn}: ${this.fighter2.getName()} > ${this.fighter1.getName()}`);
           this.fighter2.sayPhrase();
           this.printHPs();
           turn ++;
         }
       }
       if (this.fighter1.getHP() > 0) {
         console.log(`${this.fighter1.getName()} WINS`);
       } else {
         console.log(`${this.fighter2.getName()} WINS`);
       }
     }
     attackDamage(attacker: Fighter, defender: Fighter): number {
       let efectivity: number = 0;
       switch (attacker.getUniverse() + '-' + defender.getUniverse()) {
         case ('Pokemon-Marvel'):
         case ('Marvel-DC'):
         case ('DC-StarWars'):
         case ('StarWars-DragonBall'):
         case ('DragonBall-Pokemon'):
           efectivity = 2;
           break;
         case ('Pokemon-DC'):
         case ('Pokemon-StarWars'):
         case ('Marvel-StarWars'):
         case ('Marvel-DragonBall'):
         case ('DC-DragonBall'):
         case ('DC-Pokemon'):
         case ('StarWars-Pokemon'):
         case ('StarWars-Marvel'):
         case ('DragonBall-Marvel'):
         case ('DragonBall-DC'):
           efectivity = 1;
           break;
         default:
           efectivity = 0.5;
       }
       return 50 * (attacker.getAttack() / defender.getDefense()) * efectivity;
     }
     printHPs(): void {
       if (this.fighter1.getHP() < 0) {
         console.log(`${this.fighter1.getName()}: 0 HP`);
       } else {
         console.log(`${this.fighter1.getName()}: ${(this.fighter1.getHP()).toFixed(0)} HP`);
       }
       if (this.fighter2.getHP() < 0) {
         console.log(`${this.fighter2.getName()}: 0 HP\n`);
       } else {
         console.log(`${this.fighter2.getName()}: ${(this.fighter2.getHP()).toFixed(0)} HP\n`);
       }
     }
   }
   ```
      
   #### __Clase `Pokemon`__ :
   El constructor de esta clase recibe como parámetros las propiedades correspondientes al nombre `name`, peso `weigth`, altura `height`, tipo `type`, ataque `attack`, defensa `defense`, velocidad `speed` y daño máximo `maxHp` como propiedades de sólo lectura, pues no queremos que sean modificadas. La única propiedad que permite su modificación es el HP o puntos de vida `hp`, pues necesitaremos cambiar su valor durante el transcurso de los combates. Para poder leer y modificar dichas propiedades, se consta de los correspondientes getters y setters. Por último el método `restoreHP()` restaura el valor del atributo `hp` al daño máximo `maxHp`.
   
   
   ``` typescript
   export class Pokemon {
     private hp: number;
     constructor(private readonly name: string, private readonly weigth: number,
         private readonly height: number, private readonly type: PokemonType,
         private readonly attack: number, private readonly defense: number,
         private readonly speed: number, private readonly maxHp: number) {
           this.hp = maxHp;
     }
     getName() {
       return this.name;
     }
     getType() {
       return this.type;
     }
     getAttack() {
       return this.attack;
     }
     getDefense() {
       return this.defense;
     }
     getHP() {
       return this.hp;
     }
     setHP(health: number) {
       this.hp = health;
     }
     restoreHP() {
       this.hp = this.maxHp;
     }
   }
   ```
   Para el tipo pokemon `type` creé un tipo personalizado:
   ```typescript
   export type PokemonType = 'fire' | 'grass' | 'water' | 'electric';
   ```
   
   #### __Clase `Pokedex`__: 
   El constructor de esta clase recibe como parámetros un array de objetos de la clase `Pokemon` correspondiente a la propiedad `pokemons`. La clase consta de los getter y setter para dicha propiedad, de un método `addPokemon` para añadir pokemons al array `pokemons`, y un método `searchByName` que devuelve un array con los pokemons cuya propiedad `name` coincida con el `string` pasado como parámetro.
   
   
   ``` typescript
   export class Pokedex {
     constructor(private pokemons: Pokemon[]) {
     }
     getPokemons() {
       return this.pokemons;
     }
     setPokemons(p: Pokemon[]) {
       this.pokemons = p;
     }
     addPokemon(pokemon: Pokemon) {
       this.pokemons.push(pokemon);
     }
     searchByName(name: string): Pokemon[] {
       return this.pokemons.filter((pokemon: Pokemon) => pokemon.getName() === name);
     }
   }
   ```
   
   
  
  
   ### __Ejercicio 2 - DSIflix__
   
   Para este ejercicio creé tres clases: `Board` para representar el tablero y `Connect4` para simular una partida.
   
   #### __Clase `Board`__
   El constructor de esta clase recibe como parámetro un  objeto tipo `Cell[][]` que corresponde con la propiedad `board` que será el tablero del juego. `Cell` es un tipo para representar los valores posibles de una celda.
   
   ``` typescript
   export type Cell = '-'|'x'|'o';
   ```
    
   La clase cuenta con los getter y setter de la propiedad `board` y con otros getter y setter para cada celda de forma individual. El método `setCell()` solo permite seleccionar la columna en la que queremos introducir la ficha, es decir, funciona igual que en el juego Connecta 4. Además, la clase consta de una serie de métodos para comprobar su estado:
   - isFull(): comprueba si `board` está lleno. (no tiene celdas con valor `-`).
   - columnIsFull(): comprueba si una columna de `board` está llena (no tiene celdas con valor `-`).
   - win(): devuelve `true` si existe alguna línea de cuatro celdas con el mismo valor distinto de `-`.
     - rowWin(): devuelve `true` si existe alguna línea horizontal de cuatro celdas con el mismo valor distinto de `-`.
     - colWin(): devuelve `true` si existe alguna línea vertical de cuatro celdas con el mismo valor distinto de `-`.
     - rigthDiagonalWin(): devuelve `true` si existe alguna línea diagonal hacia la derecha de cuatro celdas con el mismo valor distinto de `-`. 
       - rigthDiagonalWhile(): método con el bucle while necesario para el método `rigthDiagonalWin()` (se separa en un método a parte para evitar repetirlo dos veces)
     - leftDiagonalWin(): devuelve `true` si existe alguna línea diagonal hacia la izquierda de cuatro celdas con el mismo valor distinto de `-`.
       - leftDiagonalWhile(): método con el bucle while necesario para el método `leftDiagonalWin()` (se separa en un método a parte para evitar repetirlo dos veces)
   
 Todos los métodos para la búsqueda de un posible estado de victoria funcionan de la misma manera, utilizan un bucle `for` para ir recorriendo cada fila, columna o diagonal y dentro del bucle van comprobando todas las posibles líneas de 4 que puede haber mediante un `while` y un `if` anidado. Si encuentran alguna línea de cuatro devuelven `true`, si no siguen buscando. Para las diagonales este procedimiento se reliza dos veces, una para las diagonales cuya primera celda varía en la fila[1], y otra para las que varía en la columna[2].
 
 ```
 [1]     0 1 2 3 4 5 6
       0|x|-|-|-|-|-|-|
       1|x|x|-|-|-|-|-|
       2|x|x|x|-|-|-|-|
       3|-|x|x|x|-|-|-|
       4|-|-|x|x|x|-|-|
       5|-|-|-|x|x|x|-|
       
 [2]     0 1 2 3 4 5 6
       0|-|x|x|x|-|-|-|
       1|-|-|x|x|x|-|-|
       2|-|-|-|x|x|x|-|
       3|-|-|-|-|x|x|x|
       4|-|-|-|-|-|x|x|
       5|-|-|-|-|-|-|x|
 ```
  
  Además de los mencionados anterior mente, la clase `Board` posee un método `print()` que imprime el tablero formateado por pantalla y un método `reset()` que resetea 
  el tablero, es decir, pone todas las celdas de `board` a `-`.
   
   ```typescript
   export class Board {
     private board: Cell[][];
     constructor() {
       this.board = [
         ['-', '-', '-', '-', '-', '-', '-'],
         ['-', '-', '-', '-', '-', '-', '-'],
         ['-', '-', '-', '-', '-', '-', '-'],
         ['-', '-', '-', '-', '-', '-', '-'],
         ['-', '-', '-', '-', '-', '-', '-'],
         ['-', '-', '-', '-', '-', '-', '-']];
     }
     getBoard() {
       return this.board;
     }
     setBoard(newBoard: Cell[][]) {
       if (newBoard.length !== 6) {
         return false;
       }
       for (let i: number = 0; i < 5; i++) {
         if (newBoard[i].length !== 7) {
           return false;
         }
       }
       this.board = newBoard;
       return true;
     }
     getCell(i: Row, j: Column) {
       return this.board[i][j];
     }
     setCell(j: Column, p: Cell) {
       for (let i = 5; i >= 0; i--) {
         if (this.board[i][j] == '-') {
           this.board[i][j] = p;
           return;
         }
       }
     }
     isFull() {
       for (let i: number = 0; i < 6; i++) {
         for (let j: number = 0; j < 7; j++) {
           if (this.board[i][j] === '-' ) {
             return false;
           }
         }
       }
       return true;
     }
     columnIsFull(col: Column) {
       for (let i:number = 0; i < 6; i++) {
         if (this.board[i][col] === '-') {
           return false;
         }
       }
       return true;
     }
     win() {
       if (this.rowWin() === true || this.colWin() === true || this.rigthDiagonalWin() === true ||
           this.leftDiagonalWin() === true) {
         return true;
       } else {
         return false;
       }
     }
     rowWin() {
       for (let i: number = 0; i < 6; i++) {
         let j: number = 0;
         while (j+3 <= 6) {
           if (this.board[i][j] !== '-' &&
               this.board[i][j] === this.board[i][j+1] &&
               this.board[i][j+1] === this.board[i][j+2] &&
               this.board[i][j+2] === this.board[i][j+3]) {
             return true;
           }
           j++;
         }
       }
       return false;
     }
     colWin() {
       for (let j: number = 0; j < 7; j++) {
         let i: number = 0;
         while (i+3 <= 5) {
           if (this.board[i][j] !== '-' &&
               this.board[i][j] === this.board[i+1][j] &&
               this.board[i+1][j] === this.board[i+2][j] &&
               this.board[i+2][j] === this.board[i+3][j]) {
             return true;
           }
           i++;
         }
       }
       return false;
     }
     rigthDiagonalWin() {
       for (let x: number = 2; x >= 0; x--) {
         if (this.rigthDiagonalWhile(x, 0)) return true;
       }
       for (let y: number = 1; y <= 3; y++) {
         if (this.rigthDiagonalWhile(0, y)) return true;
       }
       return false;
     }
     leftDiagonalWin() {
       for (let x: number = 2; x >= 0; x--) {
         if (this.leftDiagonalWhile(x, 6)) return true;
       }
       for (let y: number = 5; y >= 3; y--) {
         if (this.leftDiagonalWhile(0, y)) return true;
       }
       return false;
     }
     rigthDiagonalWhile(i: number, j: number) {
       while (i+3 <= 5 && j+3 <= 6) {
         if (this.board[i][j] !== '-' &&
             this.board[i][j] === this.board[i+1][j+1] &&
             this.board[i+1][j+1] === this.board[i+2][j+2] &&
             this.board[i+2][j+2] === this.board[i+3][j+3]) {
           return true;
         }
         i++;
         j++;
       }
       return false;
     }
     leftDiagonalWhile(i: number, j: number) {
       while (i+3 <= 5 && j-3 >= 0) {
         if (this.board[i][j] !== '-' &&
             this.board[i][j] === this.board[i+1][j-1] &&
             this.board[i+1][j-1] === this.board[i+2][j-2] &&
             this.board[i+2][j-2] === this.board[i+3][j-3]) {
           return true;
         }
         i++;
         j--;
       }
       return false;
     }
     print() {
       process.stdout.write('\n  0 1 2 3 4 5 6');
       this.board.forEach((row, i) => {
         process.stdout.write(`\n${i}|`);
         row.forEach((col) => {
           process.stdout.write(col + '|');
         });
       });
       console.log('\n');
     }
     reset() {
       for (let i: number = 0; i < 6; i++) {
         for (let j: number = 0; j < 7; j++) {
           this.board[i][j] = '-';
         }
       }
     }
   }
   ```
   
  Tipos personalizados para los valores de las filas y las columnas del tablero:
   
   ```typescript
   export type Row = 0|1|2|3|4|5;
   ```
   
   ```typescript
   export type Column = 0|1|2|3|4|5|6;
   ```
   

   #### __Clase `Connect4`__
   El constructor de esta clase recibe como parámetro un objeto tipo `Board` que corresponde a la propiedad `board`, e inicializa las propiedades `player1` y `player2` a `x` y `o` respectivamente, estas propiedades serán de sólo lectura, y la propiedad `turn` a `[2, 'o']`. Para esta última propiedad creé un tipo personalizado `Turn` que solo perimte los dos turnos posibles `[1, 'x']` y `[2, 'o']`:
    
     
   ```typescript
   export type Turn = [1, 'x'] | [2, 'o'];
   ```
   
 En cuanto a los métodos, la clase cuenta con los getters y setters correpondientes a cada propiedad, y en el caso de `turn` también un método `passTurn()` para pasar turno y un método `resetTurn()` para resetear el turno al valor inicial (el valor incial es `[2, 'o']` porque que al inicio de cada turno se llamará a `passTurn()`). Por último, tenemos el método `askForColumn()` que pide por consola una columna y el método `start()` que comienza una partida:
   - askForColumn(): pide por consola una columna (`prompt-sync`) comprobando mediante un while que la entrada es correcta, es decir, que se trata de un número entre 0 y 6 y que la columna elegida no está llena.
   - start(): imprime el tablero y en cada turno:
     1. Llama al método `passTurn()`.
     2. Llama al método `askForColumn()`.
     3. Modifica la celda correspondiente.
     4. Imprime nuevamente el tablero. 

     Mediante un bucle `while` va comprobando en cada turno que el tablero no esté lleno y que ningún jugador halla ganado. Al salir del `while` imprime por pantalla el ganador de la partida o un mensaje de empate dependiendo del resultado, y resetea el turno.
    
   ```typescript
   export class Connect4 {
     private readonly player1: string;
     private readonly player2: string;
     private turn: Turn;
     constructor(private readonly board: Board) {
       this.player1 = 'x';
       this.player2 = 'o';
       this.turn = [2, 'o'];
     }
     getPlayer1() {
       return this.player1;
     }
     getPlayer2() {
       return this.player2;
     }
     getBoard() {
       return this.board;
     }
     getTurn() {
       return this.turn;
     }
     setTurn(newTurn: Turn) {
       this.turn = newTurn;
     }
     passTurn() {
       if (JSON.stringify(this.turn) === JSON.stringify([1, 'x'])) {
         this.turn = [2, 'o'];
       } else {
         this.turn = [1, 'x'];
       }
     }
     resetTurn() {
       this.turn = [2, 'o'];
     }
     start() {
       console.log('CONECTA 4\n==============');
       this.board.print();
       while (!this.board.isFull() && !this.board.win()) {
         this.passTurn();
         console.log(`Turno del jugador ${this.turn[0]}: `);
         let column: Column = this.askForColumn();
         this.board.setCell(column, this.turn[1]);
         this.board.print();
       }
       if (this.board.win()) {
         console.log(`Player ${this.board.win()} WINS`);
       } else {
         console.log('DRAW');
       }
       this.resetTurn();
     }
     askForColumn() {
       const prompt = require('prompt-sync')({sigint: true});
       let column: Column;
       column = prompt('Introduce una columna: ');
       while (column < 0 || column > 6 || this.board.columnIsFull(column)) {
         this.board.print();
         console.log('Error: columna llena o no válida');
         column = prompt('Introduce una columna: ');
       }
       return column;
     }
   }
   ```
   
    ### __Ejercicio 3 - El cifrado indescifrable__
   
   Para este ejercicio creé tres clases: `Board` para representar el tablero y `Connect4` para simular una partida.
  
