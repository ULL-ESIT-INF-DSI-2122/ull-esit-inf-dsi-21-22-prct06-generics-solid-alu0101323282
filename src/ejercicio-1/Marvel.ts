import {Fighter, UniverseType} from './Fighter';

/**
 * Class to represent pokemons.
 */
export abstract class Marvel extends Fighter {
  protected abstract readonly power: string;
  protected readonly universe: UniverseType = 'Marvel';
  constructor() {
    super();
  }
  getPower() {
    return this.power;
  }
}