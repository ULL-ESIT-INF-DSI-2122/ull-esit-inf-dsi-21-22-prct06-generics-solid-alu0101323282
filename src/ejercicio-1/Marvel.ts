import {Fighter, Universe} from './Fighter';

/**
 * Abstract class to represent marvel universe.
 */
export abstract class Marvel extends Fighter {
  /**
   * Fighter power.
   */
  protected abstract readonly power: string;
  /**
   * Universe.
   */
  protected readonly universe: Universe = 'Marvel';
  /**
   * Constructor for the class `Marvel`.
   */
  constructor() {
    super();
  }
  /**
   * Getter for the attribute `power`.
   * @returns Returns the attribute `power`.
   */
  getPower() {
    return this.power;
  }
}