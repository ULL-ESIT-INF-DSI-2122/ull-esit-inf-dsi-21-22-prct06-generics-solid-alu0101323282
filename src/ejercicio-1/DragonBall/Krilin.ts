import {DragonBall} from '../DragonBall';

/**
 * Class to represent the dragon ball human Krilin.
 */
export class Krilin extends DragonBall {
  protected readonly name: string = 'Krilin';
  protected readonly height: number = 1.50;
  protected readonly weigth: number = 45;
  protected readonly attack: number = 59;
  protected readonly defense: number = 38;
  protected readonly speed: number = 61;
  protected readonly maxHp: number = 55;
  protected readonly phrase: string = 'Hi-yah!!';
  protected readonly race: string = 'Human';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}