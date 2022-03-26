import {Pokemon, PokemonType} from '../Pokemon';

/**
 * Class to represent the pokemon Charmander.
 */
export class Charmander extends Pokemon {
  protected readonly name: string = 'Charmander';
  protected readonly height: number = 1;
  protected readonly weigth: number = 7;
  protected readonly attack: number = 55;
  protected readonly defense: number = 30;
  protected readonly speed: number = 64;
  protected readonly maxHp: number = 88;
  protected readonly phrase: string = 'Char Char!!';
  protected readonly type: PokemonType = 'fire';
  protected hp: number = this.maxHp;
  constructor() {
    super();
  }
}