import {Charmander} from './Pokemon/Charmander';
import {Fighter} from './Fighter';
import {Pikachu} from './Pokemon/Pikachu';
import {Pokemon} from './Pokemon';
import {Spiderman} from './Marvel/Spiderman';
import {Hulk} from './Marvel/Hulk';
import {Superman} from './DC/Superman';
import {Batman} from './DC/Batman';

/**
 * Class to represent a combat.
 */
export class Combat {
  /**
   * Constructor for the class `Combat`.
   * @param fighter1 First opponent.
   * @param fighter2 Second opponent.
   */
  constructor(private readonly fighter1: Fighter,
      private readonly fighter2: Fighter) {
  }
  /**
   * Getter for the attribute `fighter1`.
   * @returns Returns the attribute `fighter1`.
   */
  getFighter1() {
    return this.fighter1;
  }
  /**
   * Getter for the attribute `fighter2`.
   * @returns Returns the attribute `fighter2`.
   */
  getFighter2() {
    return this.fighter2;
  }
  /**
   * Starts a combat.
   */
  start() {
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
    this.fighter1.restoreHP();
    this.fighter2.restoreHP();
  }

  /**
   * Calculates the damage of a attack.
   * @param attacker Attacking fighter.
   * @param defender Defender fighter.
   * @returns Returns damage caused to `defender` by `attacker`.
   */
  attackDamage(attacker: Fighter, defender: Fighter): number {
    let efectivity: number = 0;
    if (attacker instanceof Pokemon && defender instanceof Pokemon) {
      switch (attacker.getType() + '-' + defender.getType()) {
        case ('fire-grass'):
        case ('water-fire'):
        case ('grass-water'):
        case ('electric-water'):
          efectivity = 2;
          break;
        case ('fire-electric'):
        case ('grass-electric'):
        case ('electric-fire'):
        case ('electric-grass'):
          efectivity = 1;
          break;
        default:
          efectivity = 0.5;
      }
    } else {
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
    }
    return 50 * (attacker.getAttack() / defender.getDefense()) * efectivity;
  }

  /**
   * Prints pokemon opponents health points.
   */
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

let pikachu: Pikachu = new Pikachu;
let charmander: Charmander = new Charmander;
let combate: Combat = new Combat(pikachu, charmander);
combate.start();

let spiderman: Spiderman = new Spiderman;
let hulk: Hulk = new Hulk;
let combate2: Combat = new Combat(spiderman, hulk);
combate2.start();

let superman: Superman = new Superman;
let batman: Batman = new Batman;
let combate3: Combat = new Combat(superman, batman);
combate3.start();

let combate4: Combat = new Combat(spiderman, pikachu);
combate4.start();

let combate5: Combat = new Combat(charmander, batman);
combate5.start();