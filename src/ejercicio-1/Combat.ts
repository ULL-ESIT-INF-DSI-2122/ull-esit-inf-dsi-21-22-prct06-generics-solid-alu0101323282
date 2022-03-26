import {Fighter} from './Fighter';

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
  getFighter1(): Fighter {
    return this.fighter1;
  }
  /**
   * Getter for the attribute `fighter2`.
   * @returns Returns the attribute `fighter2`.
   */
  getFighter2(): Fighter {
    return this.fighter2;
  }
  /**
   * Starts a combat.
   */
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

  /**
   * Calculates the damage of a attack.
   * @param attacker Attacking fighter.
   * @param defender Defender fighter.
   * @returns Returns damage caused to `defender` by `attacker`.
   */
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

  /**
   * Prints fighters health points.
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

