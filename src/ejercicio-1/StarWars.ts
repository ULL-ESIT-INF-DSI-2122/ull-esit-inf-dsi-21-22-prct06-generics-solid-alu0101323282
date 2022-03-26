import {Fighter, Universe} from './Fighter';
/**
 * Class to represent star wars universe.
 */
export abstract class StarWars extends Fighter {
  /**
   * Ligthsaber color.
   */
  protected abstract readonly lightsaberColor: string;
  /**
   * Universe.
   */
  protected readonly universe: Universe = 'StarWars';
  /**
   * Constructor for the class `StarWars`.
   */
  constructor() {
    super();
  }
  /**
   * Getter for the attribute `lightsaberColor`.
   * @returns Returns the attribute `lightsaberColor`.
   */
  getLightsaberColor() {
    return this.lightsaberColor;
  }
}