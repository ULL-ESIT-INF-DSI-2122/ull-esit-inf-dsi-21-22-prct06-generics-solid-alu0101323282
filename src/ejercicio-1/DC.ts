import {Fighter, Universe} from './Fighter';

/**
 * Class to represent DC universe.
 */
export abstract class DC extends Fighter {
  /**
   * Fighter real name.
   */
  protected abstract readonly realName: string;
  /**
   * Universe.
   */
  protected readonly universe: Universe = 'DC';
  /**
   * Constructor for the class `DC`.
   */
  constructor() {
    super();
  }
  /**
   * Getter for the attribute `realName`.
   * @returns Returns the attribute `realName`.
   */
  getRealName() {
    return this.realName;
  }
}