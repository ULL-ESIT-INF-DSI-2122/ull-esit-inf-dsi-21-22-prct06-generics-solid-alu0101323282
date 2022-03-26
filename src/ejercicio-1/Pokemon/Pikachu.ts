import {Pokemon, PokemonType} from '../Pokemon';

/**
 * Class to represent the pokemon Pikachu.
 */
export class Pikachu extends Pokemon {
  protected readonly name: string = 'Pikachu';
  protected readonly height: number = 0.8;
  protected readonly weigth: number = 5;
  protected readonly attack: number = 47;
  protected readonly defense: number = 32;
  protected readonly speed: number = 72;
  protected readonly maxHp: number = 80;
  protected readonly phrase: string = 'Pika Pika!!';
  protected readonly type: PokemonType = 'electric';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}