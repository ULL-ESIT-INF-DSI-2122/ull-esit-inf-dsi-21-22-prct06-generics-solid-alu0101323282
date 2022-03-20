import {Fighter, UniverseType} from './Fighter';
/**
 * Class to represent pokemons.
 */
export abstract class DragonBall extends Fighter {
  protected abstract readonly race: string;
  protected readonly universe: UniverseType = 'StarWars';
  constructor() {
    super();
  }
  getRace() {
    return this.race;
  }
}