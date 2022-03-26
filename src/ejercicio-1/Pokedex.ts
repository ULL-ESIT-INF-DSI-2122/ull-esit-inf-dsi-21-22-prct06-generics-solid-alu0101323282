import {Fighter} from './Fighter';

/**
 * Class to represent a pokedex.
 */
export class Pokedex {
  /**
   * Constructor for the class `Pokedex`.
   * @param fighters Fighter array.
   */
  constructor(private fighters: Fighter[]) {
  }
  /**
   * Getter for the attribute `fighters`.
   * @return Returns the attribute `fighters`.
   */
  getFighters(): Fighter[] {
    return this.fighters;
  }

  /**
   * Setter for the attribute `fighters`.
   */
  removeFighters(i: number): void {
    this.fighters.splice(i, 1);
  }
  /**
   * Adds a fighter to the array `fighters`.
   * @param f Fighter to add.
   */
  addFighter(f: Fighter): void {
    this.fighters.push(f);
  }

  /**
   * Search for a fighter by name.
   * @param name Fighter name.
   * @return Returns an array of the fighters with the name `name`.
   */
  searchByName(name: string): Fighter[] {
    return this.fighters.filter((f: Fighter) => f.getName() === name);
  }
}
