import {Fighter, Universe} from './Fighter';
/**
 * Class to represent dragon ball universe.
 */
export abstract class DragonBall extends Fighter {
  /**
   * Fighter race.
   */
  protected abstract readonly race: string;
  /**
   * Universe.
   */
  protected readonly universe: Universe = 'StarWars';
  /**
   * Constructor for the class `DragonBall`.
   */
  constructor() {
    super();
  }
  /**
   * Getter for the attribute `race`.
   * @returns Returns the attribute `race`.
   */
  getRace() {
    return this.race;
  }
}