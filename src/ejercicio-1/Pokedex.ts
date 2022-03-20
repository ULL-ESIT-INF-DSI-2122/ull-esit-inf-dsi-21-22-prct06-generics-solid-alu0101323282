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
  getFighters() {
    return this.fighters;
  }

  /**
   * Setter for the attribute `fighters`.
   */
  setFighters(f: Fighter[]) {
    this.fighters = f;
  }
  /**
   * Adds a pokemon to the array `fighters`.
   * @param fighters Fighter to add.
   */
  addFighter(f: Fighter) {
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
