import {StarWars} from '../StarWars';

/**
 * Class to represent the star wars villian Darth Vader.
 */
export class DarthVader extends StarWars {
  protected readonly name: string = 'Darth Vader';
  protected readonly height: number = 1.78;
  protected readonly weigth: number = 72;
  protected readonly attack: number = 62;
  protected readonly defense: number = 40;
  protected readonly speed: number = 31;
  protected readonly maxHp: number = 73;
  protected readonly phrase: string = 'I am your father!!';
  protected readonly lightsaberColor: string = 'red';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}