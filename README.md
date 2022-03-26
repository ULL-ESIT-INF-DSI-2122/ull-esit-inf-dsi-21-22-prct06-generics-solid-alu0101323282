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
   
   Para este ejercicio creé una interfaz genérica `Streamable`, una clase abstracta genérica `BasicStreamableCollection` que implementa dicha interfaz y que restringe la forma de tipos genérica a `Series | Film | Documentary`, y otras tres clases que fijan el parámetro de tipo ha cada una de las tres clases posibles: `SeriesStreamableCollection`, `FilmStreamableCollection` y `DocumentaryStreamableCollection`. Además, obviamente, tuve que implementar las clases `Series`, `Film`, `Documentary`.
   
   #### __Interfaz `Streamable`__
   Esta interfaz genérica obliga a toda clase que la implemente o a sus clases hijas ha definir propiedades para almacenar los elementos de la colección `collection` y el tipo de colección del que se trata `collectonType` (con sus correspondiente getters), además de una serie de métodos de búsqueda a partir del nombre `searchByName()`, año de estreno `searchByYear()` o director `searchByDirector()` y otros métodos para añadir `addElement()` y eliminar `deleteElement()` elementos.
   
   ``` typescript
   export interface Streamable<T> {
     collection: T[];
     collectionType: CollectionType;
     getCollection(): T[];
     getCollectionType(): CollectionType;
     searchByName(name: string): T[]|undefined;
     searchByYear(year: number): T[]|undefined;
     searchByDirector(director: string): T[]|undefined;
     addElement(element: T): void;
     deleteElement(index: number): void;
   }
   ```
   
   #### __Clase `BasicStreamableCollection`__
   Esta clase abstracta genérica implementa todos los métodos y propiedades de la inerfaz `Streamable` excepto la propiedad `collectionType`. Además restringe la forma de tipos genérica a la unión de las clases `Series`, `Film` y `Documentary`.
   
   ``` typescript
   export abstract class BasicStreamableCollection<T extends Series | Film | Documentary> implements Streamable<T> {
     abstract collectionType: CollectionType;
     constructor(public readonly collection: T[]) {
     }
     getCollectionType(): CollectionType {
       return this.collectionType;
     }
     searchByName(name: string): T[] {
       return this.collection.filter((f: T) => f.getName() === name);
     }
     searchByYear(year: number): T[] {
       return this.collection.filter((f: T) => f.getYear() === year);
     }
     searchByDirector(director: string): T[] {
       return this.collection.filter((f: T) => f.getDirector() === director);
     }
     addElement(element: T): void {
       this.collection.push(element);
     }
     deleteElement(index: number): void {
       this.collection.splice(index, 1);
     }
   }
   ```
   
   #### __Clases `Series`, `Film` y `Documentary`__
   Estas tres clases son muy parecidas, todas comparten las propiedades `name`, `year` y `director`, y añaden otras propias, como pueden ser `numberOfEpisodes` y `genre` en el caso de `Film`, con sus correspondientes getters:
   
   ``` typescript
   export class Film {
     constructor(private readonly name: string, private readonly year: number,
                 private readonly director: string, private readonly genre: string,
                 private readonly duration: number) {
     }
     getName() {
       return this.name;
     }
     getYear() {
       return this.year;
     }
     getDirector() {
       return this.director;
     }
     getGenre() {
       return this.genre;
     }
     getDuration() {
       return this.duration;
     }
   }
   ```
   
   #### __Clases `SeriesStreamableCollection`, `FilmStreamableCollection` y `DocumentaryStreamableCollection`__
   Por último, estas tres clases extienden de la clase `BasicStreamableCollection` fijando la forma de tipo del parámetro genérico y  unicamente definen la propiedad `collectiontype` a su valor correspondiente (Series, Film o Documentary). Ejemplo de la clase `SeriesStreamableCollection`:
   
   ``` typescript
   export class FilmStreamableCollection extends BasicStreamableCollection<Film> {
     public readonly collectionType: CollectionType;
     constructor(filmCollection: Film[]) {
       super(filmCollection);
       this.collectionType = 'Film';
     }
   }
   ```
   
   ### __Ejercicio 3 - El cifrado indescifrable__
   
   Para este ejercicio creé tres clases: `Board` para representar el tablero y `Connect4` para simular una partida.
  
