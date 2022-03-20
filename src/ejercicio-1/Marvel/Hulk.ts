import {Marvel} from '../Marvel';

export class Hulk extends Marvel {
  protected readonly name: string = 'Hulk';
  protected readonly height: number = 2.5;
  protected readonly weigth: number = 180;
  protected readonly attack: number = 120;
  protected readonly defense: number = 20;
  protected readonly speed: number = 15;
  protected readonly maxHp: number = 100;
  protected readonly phrase: string = 'Hulk...SMASH!!';
  protected readonly power: string = 'Super strength';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}