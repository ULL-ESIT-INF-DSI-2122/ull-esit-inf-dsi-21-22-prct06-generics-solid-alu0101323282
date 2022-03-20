import {Fighter, UniverseType} from './Fighter';
/**
 * Class to represent pokemons.
 */
export abstract class StarWars extends Fighter {
  protected abstract readonly lightsaberColor: string;
  protected readonly universe: UniverseType = 'StarWars';
  constructor() {
    super();
  }
  getLightsaberColor() {
    return this.lightsaberColor;
  }
}