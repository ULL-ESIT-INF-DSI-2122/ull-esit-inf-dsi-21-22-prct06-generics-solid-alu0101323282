# __Práctica 6 - Clases e interfaces genéricas. Principios SOLID__ 
  ### Marc Carbonell González de Chaves 
  ## __Tareas previas__
   1. Acepté la [asignación de Github Classroom](https://classroom.github.com/a/yJcZROry).
   3. Durante el desarrollo de la práctica utilicé [Instanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/).
  
  ## __Ejercicios__
    
   [![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101323282/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101323282?branch=main)
   
  ### __Ejercicio 1 - El combate definitivo__
   
   Para este ejercicio creé la siguiente jerarquía de clases:
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
   - Pokedex
   - Combat

   #### __Clase `Fighter`__:
   
   Esta es una clase abstracta con las propiedades que deben tener todos los luchadores, es decir, que deben implementar todas las clases que extendian de ella. Además esta implementa los getters y setters corrspondientes de cada una y los métodos `restoreHealth()`, que devuelve `hp` a su valor máximo, y `sayPhrase()`, que muestra por pantalla la catching phrase del luchador.
   
   ``` typescript
   export abstract class Fighter {
     protected abstract hp: number;
     protected abstract readonly name: string;
     protected abstract readonly height: number;
     protected abstract readonly weigth: number;
     protected abstract readonly attack: number;
     protected abstract readonly defense: number;
     protected abstract readonly speed: number;
     protected abstract readonly maxHp: number;
     protected abstract readonly phrase: string;
     protected abstract readonly universe: Universe;
     getName(): string {
       return this.name;
     }
     getWeigth(): number {
       return this.weigth;
     }
     getHeight(): number {
       return this.height;
     }
     getAttack(): number {
       return this.attack;
     }
     getDefense(): number {
       return this.defense;
     }
     getSpeed(): number {
       return this.speed;
     }
     getMaxHP(): number {
       return this.maxHp;
     }
     getUniverse(): Universe {
       return this.universe;
     }
     getHP(): number {
       return this.hp;
     }
     setHP(health: number): void {
       this.hp = health;
     }
     restoreHP(): void {
       this.hp = this.maxHp;
     }
     getPhrase(): string {
       return this.phrase;
     }
     sayPhrase(): void {
       console.log(`${this.name}: "${this.phrase}"`);
     }
   }
   ```
   
   #### __Clases de cada Universo__
   La clase abstracta de cada universo (Pokemon, Marvel, DC, ...) inicializa la propiedad `universe` heredada de `Fighter` e implementa una propiedad nueva con su correspondiente getter. Por ejemplo, en la clase `Pokemon` el valor de de la propiedad `universo` es 'Pokemon', se añade una nueva propiedad `type` que almacena el tipo pokémon del luchador y se implementa su correspondiente getter:
   
   ```typescript
   export abstract class Pokemon extends Fighter {
     protected abstract readonly type: PokemonType;
     protected readonly universe: Universe = 'Pokemon';
     constructor() {
       super();
     }
     getType() {
       return this.type;
     }
   }
   ```
   #### __Clases de cada luchador__
   La clase de cada luchador, deja de ser una clase abstracta, hereda todos los métodos y propiedades de sus clases padre e inicializa el valor de dichas propiedades. Ejemplo de la clase `Pikachu`:
   
   ```typescript
   export class Pikachu extends Pokemon {
     protected readonly name: string = 'Pikachu';
     protected readonly height: number = 0.8;
     protected readonly weigth: number = 5;
     protected readonly attack: number = 47;
     protected readonly defense: number = 32;
     protected readonly speed: number = 72;
     protected readonly maxHp: number = 80;
     protected readonly phrase: string = 'Pika Pika!!';
     protected readonly type: PokemonType = 'electric';
     protected hp: number = this.maxHp;
     constructor() {
       super();
     }
   }
   ```

   #### __Clase `Pokedex`__: 
   El constructor de esta clase recibe como parámetros un array de objetos de la clase `Fighter` correspondiente a la propiedad `fighters`. La clase consta del getter para dicha propiedad, de un método `addFighter()` para añadir luchadores al array `fighters`, otro para eliminarlos de este `removeFighter()`, y un método `searchByName` que devuelve un array con los luchadores cuya propiedad `name` coincida con el `string` pasado como parámetro.
   
   
   ``` typescript
   export class Pokedex {
     constructor(private fighters: Fighter[]) {
     }
     getFighters(): Fighter[] {
       return this.fighters;
     }
     addFighter(f: Fighter): void {
       this.fighters.push(f);
     }
     removeFighters(i: number): void {
       this.fighters.splice(i, 1);
     }
     searchByName(name: string): Fighter[] {
       return this.fighters.filter((f: Fighter) => f.getName() === name);
     }  
   }
   ```

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
  
