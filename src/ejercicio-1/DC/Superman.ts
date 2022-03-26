import {DC} from '../DC';

/**
 * Class to represent the dc superhero Superman.
 */
export class Superman extends DC {
  protected readonly name: string = 'Superman';
  protected readonly height: number = 1.85;
  protected readonly weigth: number = 82;
  protected readonly attack: number = 70;
  protected readonly defense: number = 45;
  protected readonly speed: number = 70;
  protected readonly maxHp: number = 76;
  protected readonly phrase: string = 'I am the man of steel!!';
  protected readonly realName: string = 'Clark Kent';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}