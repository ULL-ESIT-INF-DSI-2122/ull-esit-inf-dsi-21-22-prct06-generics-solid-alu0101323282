import {DragonBall} from '../DragonBall';

/**
 * Class to represent the dragon ball sayayin Son Goku.
 */
export class Goku extends DragonBall {
  protected readonly name: string = 'Son Goku';
  protected readonly height: number = 1.80;
  protected readonly weigth: number = 78;
  protected readonly attack: number = 72;
  protected readonly defense: number = 43;
  protected readonly speed: number = 65;
  protected readonly maxHp: number = 80;
  protected readonly phrase: string = 'Kame Hame Ha!!';
  protected readonly race: string = 'Sayayin';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}