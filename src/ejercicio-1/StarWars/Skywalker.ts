import {StarWars} from '../StarWars';

/**
 * Class to represent the star wars jedi Luke Skywalker.
 */
export class Skywalker extends StarWars {
  protected readonly name: string = 'Luke Skywalker';
  protected readonly height: number = 1.70;
  protected readonly weigth: number = 65;
  protected readonly attack: number = 60;
  protected readonly defense: number = 45;
  protected readonly speed: number = 33;
  protected readonly maxHp: number = 70;
  protected readonly phrase: string = 'Use the force!!';
  protected readonly lightsaberColor: string = 'green';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}