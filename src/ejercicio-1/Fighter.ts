/**
 * Personalized type for universes.
 */
export type Universe = 'Pokemon' | 'Marvel' | 'DC' | 'StarWars' | 'DragonBall';

/**
 * Abstract class to represent a fighter.
 */
export abstract class Fighter {
  /**
   * Health points.
   */
  protected abstract hp: number;
  /**
   * Name.
   */
  protected abstract readonly name: string;
  /**
   * Height.
   */
  protected abstract readonly height: number;
  /**
   * Weigth.
   */
  protected abstract readonly weigth: number;
  /**
   * Attack.
   */
  protected abstract readonly attack: number;
  /**
   * Defense.
   */
  protected abstract readonly defense: number;
  /**
   * Speed.
   */
  protected abstract readonly speed: number;
  /**
   * Max health points.
   */
  protected abstract readonly maxHp: number;
  /**
   * Catching phrase.
   */
  protected abstract readonly phrase: string;
  /**
   * Universe.
   */
  protected abstract readonly universe: Universe;
  /**
   * Getter for the attribute `name`.
   * @returns Returns the attribute `name`.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Getter for the attribute `weigth`.
   * @returns Returns the attribute `weigth`.
   */
  getWeigth(): number {
    return this.weigth;
  }
  /**
   * Getter for the attribute `height`.
   * @returns Returns the attribute `height`.
   */
  getHeight(): number {
    return this.height;
  }
  /**
   * Getter for the attribute `attack`.
   * @returns Returns the attribute `attack`.
   */
  getAttack(): number {
    return this.attack;
  }
  /**
   * Getter for the attribute `defense`.
   * @returns Returns the attribute `defense`.
   */
  getDefense(): number {
    return this.defense;
  }
  /**
   * Getter for the attribute `speed`.
   * @returns Returns the attribute `speed`.
   */
  getSpeed(): number {
    return this.speed;
  }
  /**
   * Getter for the attribute `maxHp`.
   * @returns Returns the attribute `maxHp`.
   */
  getMaxHP(): number {
    return this.maxHp;
  }
  /**
   * Getter for the attribute `universe`.
   * @returns Returns the attribute `universe`.
   */
  getUniverse(): Universe {
    return this.universe;
  }
  /**
   * Getter for the attribute `hp`.
   * @returns Returns the attribute `hp`.
   */
  getHP(): number {
    return this.hp;
  }
  /**
   * Setter for the attribute `hp`.
   * @param health New value for the attribute `hp`.
   */
  setHP(health: number): void {
    this.hp = health;
  }
  /**
   * Restores fighter health point.
   */
  restoreHP(): void {
    this.hp = this.maxHp;
  }
  /**
   * Getter for the attribute `phrase`.
   * @returns Returns the attribute `phrase`.
   */
  getPhrase(): string {
    return this.phrase;
  }
  /**
   * Says catching phrase.
   */
  sayPhrase(): void {
    console.log(`${this.name}: "${this.phrase}"`);
  }
}