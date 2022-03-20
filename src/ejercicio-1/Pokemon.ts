import {Fighter} from './Fighter';

/**
 * Definition of the posible pokemon types
 */
export type PokemonType = 'fire' | 'grass' | 'water' | 'electric';

/**
 * Class to represent pokemons.
 */
export abstract class Pokemon extends Fighter {
  protected abstract readonly type: PokemonType;
  constructor() {
    super();
  }
  getType() {
    return this.type;
  }
}