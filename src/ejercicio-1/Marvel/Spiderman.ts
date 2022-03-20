import {Marvel} from '../Marvel';

export class Spiderman extends Marvel {
  protected readonly name: string = 'Spiderman';
  protected readonly height: number = 1.75;
  protected readonly weigth: number = 70;
  protected readonly attack: number = 65;
  protected readonly defense: number = 40;
  protected readonly speed: number = 80;
  protected readonly maxHp: number = 85;
  protected readonly phrase: string = 'My Spider-Sense is tingling!!';
  protected readonly power: string = 'Arachnid';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}