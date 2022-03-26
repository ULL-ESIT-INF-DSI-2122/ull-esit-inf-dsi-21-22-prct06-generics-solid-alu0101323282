import {Fighter, Universe} from './Fighter';

/**
 * PErsonalized type for pokemon types
 */
export type PokemonType = 'fire' | 'grass' | 'water' | 'electric';

/**
 * Class to represent pokemon universe.
 */
export abstract class Pokemon extends Fighter {
  /**
   * Pokemon type.
   */
  protected abstract readonly type: PokemonType;
  /**
   * Universe.
   */
  protected readonly universe: Universe = 'Pokemon';
  /**
   * Constructor for the class `Pokemon`.
   */
  constructor() {
    super();
  }
  /**
   * Getter for the attribute `power`.
   * @returns Returns the attribute `power`.
   */
  getType() {
    return this.type;
  }
}