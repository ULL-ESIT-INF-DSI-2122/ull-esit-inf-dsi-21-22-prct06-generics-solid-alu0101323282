import {DC} from '../DC';

export class Batman extends DC {
  protected readonly name: string = 'Batman';
  protected readonly height: number = 1.90;
  protected readonly weigth: number = 88;
  protected readonly attack: number = 66;
  protected readonly defense: number = 47;
  protected readonly speed: number = 60;
  protected readonly maxHp: number = 73;
  protected readonly phrase: string = 'I am the dark knight!!';
  protected readonly realName: string = 'Bruce Wayne';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}